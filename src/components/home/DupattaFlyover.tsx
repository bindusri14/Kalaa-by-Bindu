import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
}

const DURATION = 4400;
const SEGMENTS = 64;
const RIBBON_LENGTH_FRACTION = 0.4; // of canvas width
const MAX_WIDTH_FRACTION = 0.048; // of canvas width

// Flight path waypoints as fractions of canvas size. The hero's headline
// block sits roughly in the x:[0.2,0.8] y:[0.25,0.75] region, so once the
// path needs to cross that horizontal band it stays hugging the very top
// (y small/negative, partly behind the header) rather than diving through
// the text. Extra points beyond [0,1] give the spline room to curve in/out
// smoothly off-canvas.
const WAYPOINTS: Point[] = [
  { x: -0.4, y: 1.2 },
  { x: -0.18, y: 0.72 },
  { x: -0.04, y: 0.3 },
  { x: 0.14, y: 0.08 },
  { x: 0.42, y: -0.02 },
  { x: 0.7, y: 0.05 },
  { x: 0.92, y: -0.08 },
  { x: 1.15, y: -0.3 },
  { x: 1.4, y: -0.55 },
];

function catmullRom(p0: Point, p1: Point, p2: Point, p3: Point, t: number): Point {
  const t2 = t * t;
  const t3 = t2 * t;
  return {
    x:
      0.5 *
      (2 * p1.x +
        (-p0.x + p2.x) * t +
        (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 +
        (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3),
    y:
      0.5 *
      (2 * p1.y +
        (-p0.y + p2.y) * t +
        (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 +
        (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3),
  };
}

function pointOnPath(p: number): Point {
  const n = WAYPOINTS.length - 1;
  const scaled = Math.min(Math.max(p, 0), 1) * n;
  const i = Math.min(Math.floor(scaled), n - 1);
  const localT = scaled - i;
  const p0 = WAYPOINTS[Math.max(i - 1, 0)];
  const p1 = WAYPOINTS[i];
  const p2 = WAYPOINTS[Math.min(i + 1, n)];
  const p3 = WAYPOINTS[Math.min(i + 2, n)];
  return catmullRom(p0, p1, p2, p3, localT);
}

function easeInOutSine(t: number) {
  return -(Math.cos(Math.PI * t) - 1) / 2;
}

export function DupattaFlyover() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const context2d = canvas.getContext("2d");
    if (!context2d) return;
    const ctx: CanvasRenderingContext2D = context2d;

    const parent = canvas.parentElement;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = parent?.clientWidth ?? window.innerWidth;
    const height = parent?.clientHeight ?? window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    const ribbonLength = width * RIBBON_LENGTH_FRACTION;
    const maxWidth = width * MAX_WIDTH_FRACTION;
    const waveSeed = Math.random() * Math.PI * 2;

    let rafId = 0;
    let startTime = 0;

    function widthAt(u: number, t: number) {
      const taper = Math.sin(Math.PI * u);
      const pulse = 0.86 + 0.14 * Math.sin(u * 9 + t * 0.0021);
      return maxWidth * taper * pulse;
    }

    function frame(now: number) {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const p = Math.min(elapsed / DURATION, 1);
      const eased = easeInOutSine(p);
      const t = elapsed;

      ctx.clearRect(0, 0, width, height);

      let alpha: number;
      if (p < 0.14) alpha = p / 0.14;
      else if (p > 0.82) alpha = (1 - p) / 0.18;
      else alpha = 1;
      alpha = Math.max(0, Math.min(1, alpha)) * 0.94;

      const center = pointOnPath(eased);
      const ahead = pointOnPath(Math.min(eased + 0.015, 1));
      const heading = Math.atan2(
        (ahead.y - center.y) * height,
        (ahead.x - center.x) * width,
      );
      const cx = center.x * width;
      const cy = center.y * height;
      const cos = Math.cos(heading);
      const sin = Math.sin(heading);

      // Spine: the rippling centerline of the fabric, in world space.
      const spine: Point[] = [];
      for (let i = 0; i < SEGMENTS; i++) {
        const u = i / (SEGMENTS - 1);
        const along = (u - 0.5) * ribbonLength;
        const wave =
          maxWidth * 1.5 * Math.sin(u * Math.PI * 2.4 + t * 0.0034 - waveSeed) +
          maxWidth * 0.75 * Math.sin(u * Math.PI * 4.6 - t * 0.0052 + waveSeed * 0.5);
        spine.push({
          x: cx + along * cos - wave * sin,
          y: cy + along * sin + wave * cos,
        });
      }

      const top: Point[] = [];
      const bottom: Point[] = [];
      for (let i = 0; i < SEGMENTS; i++) {
        const prev = spine[Math.max(i - 1, 0)];
        const next = spine[Math.min(i + 1, SEGMENTS - 1)];
        let tx = next.x - prev.x;
        let ty = next.y - prev.y;
        const len = Math.hypot(tx, ty) || 1;
        tx /= len;
        ty /= len;
        const nx = -ty;
        const ny = tx;
        const w = widthAt(i / (SEGMENTS - 1), t) / 2;
        top.push({ x: spine[i].x + nx * w, y: spine[i].y + ny * w });
        bottom.push({ x: spine[i].x - nx * w, y: spine[i].y - ny * w });
      }

      const buildRibbonPath = () => {
        const path = new Path2D();
        path.moveTo(top[0].x, top[0].y);
        for (let i = 1; i < SEGMENTS; i++) path.lineTo(top[i].x, top[i].y);
        for (let i = SEGMENTS - 1; i >= 0; i--) path.lineTo(bottom[i].x, bottom[i].y);
        path.closePath();
        return path;
      };

      const ribbonPath = buildRibbonPath();
      const gradient = ctx.createLinearGradient(
        spine[0].x,
        spine[0].y,
        spine[SEGMENTS - 1].x,
        spine[SEGMENTS - 1].y,
      );
      gradient.addColorStop(0, "#c99a4d");
      gradient.addColorStop(0.35, "#f6e7ba");
      gradient.addColorStop(0.65, "#d9b26b");
      gradient.addColorStop(1, "#a9793c");

      // Soft glow pass for a sense of motion/depth.
      ctx.save();
      ctx.globalAlpha = alpha * 0.45;
      ctx.filter = "blur(16px)";
      ctx.fillStyle = gradient;
      ctx.fill(ribbonPath);
      ctx.restore();

      // Crisp ribbon.
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = gradient;
      ctx.fill(ribbonPath);
      ctx.restore();

      // Silk sheen highlight along the top edge.
      ctx.save();
      ctx.globalAlpha = alpha * 0.55;
      ctx.strokeStyle = "#fffaf0";
      ctx.lineWidth = 1.4;
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(top[0].x, top[0].y);
      for (let i = 1; i < SEGMENTS; i++) ctx.lineTo(top[i].x, top[i].y);
      ctx.stroke();
      ctx.restore();

      if (p < 1) {
        rafId = requestAnimationFrame(frame);
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    }

    rafId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
