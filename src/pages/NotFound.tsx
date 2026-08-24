import { Link } from "react-router-dom";
import { Ornament } from "../components/ui/Ornament";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center gap-6 bg-ivory-100 px-6 pt-24 text-center">
      <span className="text-xs tracking-wide-xl uppercase text-gold-600">404</span>
      <h1 className="text-4xl text-ink-900">This Canvas is Blank</h1>
      <Ornament />
      <p className="max-w-sm font-light text-ink-500">
        The page you're looking for doesn't exist — but our collection does.
      </p>
      <Link
        to="/"
        className="border border-plum-900 px-8 py-3 text-sm tracking-wide-xl uppercase text-plum-900 transition hover:bg-plum-900 hover:text-ivory-50"
      >
        Return Home
      </Link>
    </div>
  );
}
