/**
 * Kalaa by Bindu - Website Interactive Engine
 * Orchestrates Single Page Application views, dynamic product loading,
 * cart operations, detail modals, scroll reveals, and micro-interactions.
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. PRODUCT DATABASE (Expanded for 5 categories)
    // ==========================================================================
    const products = [
        {
            id: 'kurti-amodini',
            name: 'Peacock Feather Kurti',
            price: 2000,
            category: 'kurtis',
            image: 'product_kurta_floral_1.jpeg',
            tag: 'Bestseller',
            date: '2026-01-20',
            featured: true,
            description: 'Crafted on premium hand-spun cotton. This warm terracotta kurta features intricate hand-painted marigolds and white jasmines around the neckline and cuffs. Light, breathable, and designed to flatter.',
            options: ['Size: S (Bust 36")', 'Size: M (Bust 38")', 'Size: L (Bust 40")', 'Size: XL (Bust 42")']
        },
        {
            id: 'kurta-chandra',
            name: 'Lotus Kurti',
            price: 1700,
            category: 'kurtis',
            image: 'product_kurta_floral_2.jpeg',
            tag: null,
            date: '2026-04-18',
            featured: false,
            description: 'A striking blend of tradition and modern geometry. This mustard-yellow khadi cotton kurti features subtle indigo geometric hand-painted strokes along the placket and sleeve tabs. Simple, bold, and modern.',
            options: ['Size: M (Bust 38")', 'Size: L (Bust 40")', 'Size: XL (Bust 42")', 'Size: XXL (Bust 44")']
        },
        {
            id: 'kurta-anarkali',
            name: 'Gold Poo Kurti',
            price: 1500,
            category: 'kurtis',
            image: 'product_kurta_floral_3.jpeg',
            tag: 'New',
            date: '2026-05-28',
            featured: false,
            description: 'A flowing, grand silhouette. This premium pure linen Anarkali kurti features large, hand-painted orange marigolds cascading along the heavy flare. Styled with a notched neck and side pockets.',
            options: ['Size: S (Bust 36")', 'Size: M (Bust 38")', 'Size: L (Bust 40")', 'Size: XL (Bust 42")']
        },
        {
            id: 'saree-peacock',
            name: 'Mayur Chiffon Saree',
            price: 18500,
            category: 'sarees',
            image: 'product_saree_peacock.png',
            tag: 'Bestseller',
            date: '2026-02-15',
            featured: true,
            description: 'A masterpiece on fluid pure chiffon. This saree features detailed, hand-painted peacock feather motifs in emerald green, indigo, and shimmering gold metallic outlines along the borders and drape. Drapes like a dream, catching the light beautifully.',
            options: ['Saree Length: Standard (5.5m) + 80cm Blouse Piece', 'Saree Length: Extended (6m) + 80cm Blouse Piece']
        },
        {
            id: 'saree-lotus',
            name: 'Pushpa Organza Saree',
            price: 22000,
            category: 'sarees',
            image: 'product_saree_lotus.png',
            tag: 'New',
            date: '2026-06-01',
            featured: true,
            description: 'Elegance woven into sheer organza. Painted stroke-by-stroke in our studio, this blush-pink saree is adorned with large blossoming pink lotuses and winding olive-green leaves. Hand-highlighted with a fine gold border. Perfect for summer festivities.',
            options: ['Saree Length: Standard (5.5m) + 80cm Blouse Piece']
        },
        {
            id: 'saree-vrindavan',
            name: 'Vrindavan Zari Saree',
            price: 16800,
            category: 'sarees',
            image: 'product_saree_peacock.png',
            tag: null,
            date: '2026-03-05',
            featured: false,
            description: 'Premium pure georgette saree hand-painted with delicate trailing jasmine vines and traditional birds. Features gold zari borders that add a touch of classic boutique shine.',
            options: ['Saree Length: Standard (5.5m) + 80cm Blouse Piece']
        },
        {
            id: 'saree-rose',
            name: 'Misty Rose Chiffon Saree',
            price: 19200,
            category: 'sarees',
            image: 'product_saree_lotus.png',
            tag: null,
            date: '2026-05-02',
            featured: false,
            description: 'Ethereal drape. Pure chiffon saree featuring a soft hand-dyed rose pink gradient, dotted with floating hand-painted white jasmine flowers and tiny gold dew points.',
            options: ['Saree Length: Standard (5.5m) + 80cm Blouse Piece']
        },
        {
            id: 'dupatta-jasmine',
            name: 'Jasmine Silk Dupatta',
            price: 6800,
            category: 'dupattas',
            image: 'product_saree_lotus.png',
            tag: 'New',
            date: '2026-06-10',
            featured: false,
            description: 'Ethereal georgette dupatta featuring hand-painted jasmine flowers cascading across the borders. Lightweight with fine gold scalloped edges.',
            options: ['Standard Size (2.5m)']
        },
        {
            id: 'dupatta-lotus',
            name: 'Lotus Organza Dupatta',
            price: 8200,
            category: 'dupattas',
            image: 'product_saree_peacock.png',
            tag: null,
            date: '2026-05-15',
            featured: false,
            description: 'Sheer organza dupatta featuring hand-painted pink lotus mandalas on the ends, with metallic gold thread borders.',
            options: ['Standard Size (2.5m)']
        },
        {
            id: 'tote-lotus',
            name: 'Vrinda Lotus Canvas Tote',
            price: 4500,
            category: 'totes',
            image: 'product_tote_lotus.png',
            tag: 'New',
            date: '2026-05-10',
            featured: false,
            description: 'Artistry meets utility. Built from thick, organic off-white canvas, this structured tote features a beautiful hand-painted pink lotus and green leaf illustrations on the front. Features genuine brown leather shoulder straps and water-resistant internal lining.',
            options: ['Strap: Leather (Standard 10" drop)', 'Strap: Heavy Canvas (Adjustable)']
        },
        {
            id: 'tote-gold',
            name: 'Padma Golden Lotus Tote',
            price: 5200,
            category: 'totes',
            image: 'product_tote_lotus.png',
            tag: null,
            date: '2026-03-25',
            featured: false,
            description: 'A statement accessory. Natural heavy cotton canvas bag decorated with a stylized hand-painted golden lotus mandala and green vine border. Complete with leather accents and secure metal zippers.',
            options: ['Strap: Leather (Standard 10" drop)']
        },
        {
            id: 'frock-sunshine',
            name: 'Sunshine Cotton Frock',
            price: 2499,
            category: 'frocks',
            image: 'product_frock_1.jpeg',
            tag: 'New',
            date: '2026-06-05',
            featured: true,
            description: 'Playful organic cotton frock for kids with hand-painted sunshine and floral motifs. Soft, breathable, and finished with gentle hides for comfort.',
            options: ['Age: 2-3 Years', 'Age: 4-5 Years', 'Age: 6-7 Years']
        },
        {
            id: 'men-kurta',
            name: 'Men Cotton Kurta',
            price: 1499,
            category: 'kurtas',
            image: 'product_kurta_floral_men_1.jpeg',
            tag: 'New',
            date: '2026-06-12',
            featured: false,
            description: 'Handcrafted kids frock made of pure organic cotton. Features hand-painted playful butterflies and botanical marigolds on the skirt. Safe, organic fabric paints used.',
            options: ['Age: 2-3 Years', 'Age: 4-5 Years', 'Age: 6-7 Years']
        },
    ];

    // ==========================================================================
    // 2. STATE VARIABLES & CACHED SELECTORS
    // ==========================================================================
    let cart = JSON.parse(localStorage.getItem('kalaa_cart')) || [];
    let currentFilter = 'all';
    let currentSort = 'featured';

    const header = document.getElementById('main-header');
    const navLinks = document.querySelectorAll('.nav-link');
    const pageViews = document.querySelectorAll('.page-view');
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const cartToggleBtn = document.getElementById('cart-toggle-btn');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartCloseBtn = document.getElementById('cart-close-btn');
    const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
    const cartCountBadge = document.getElementById('cart-count-badge');
    const cartEmptyView = document.getElementById('cart-empty-view');
    const cartItemsList = document.getElementById('cart-items-list');
    const cartSubtotalPrice = document.getElementById('cart-subtotal-price');
    const cartDrawerFooter = document.getElementById('cart-drawer-footer');
    const cartShopNowBtn = document.getElementById('cart-shop-now-btn');
    const cartCheckoutBtn = document.getElementById('cart-checkout-btn');
    const productModal = document.getElementById('product-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalBody = document.getElementById('modal-body');
    const shopProductsContainer = document.getElementById('shop-products-container');
    const featuredProductsContainer = document.getElementById('featured-products-container');
    const shopSortSelect = document.getElementById('shop-sort');
    const resetFiltersBtn = document.getElementById('reset-filters-btn');
    const shopEmptyState = document.getElementById('shop-empty-state');
    const toastContainer = document.getElementById('toast-container');

    // ==========================================================================
    // 3. ROUTING & VIEW NAVIGATION SYSTEM (Updated)
    // ==========================================================================
    
    function handleRouting() {
        const hash = window.location.hash || '#home';
        const parts = hash.split('?');
        const viewName = parts[0].substring(1);
        const params = {};
        
        if (parts[1]) {
            const paramPairs = parts[1].split('&');
            paramPairs.forEach(pair => {
                const [key, val] = pair.split('=');
                params[key] = decodeURIComponent(val);
            });
        }

        navMenu.classList.remove('active');
        hamburger.classList.remove('open');

        const targetView = document.getElementById(`${viewName}-view`);
        if (targetView) {
            pageViews.forEach(view => {
                view.classList.remove('active', 'fade-in');
            });
            
            targetView.classList.add('active');
            
            setTimeout(() => {
                targetView.classList.add('fade-in');
                // Re-evaluate scroll animations inside view
                observeScrollReveals();
                if (typeof initClipReveals === 'function') initClipReveals();
                if (typeof initMagneticButtons === 'function') initMagneticButtons();
                if (typeof refreshScrollTrigger === 'function') refreshScrollTrigger();
                // Trigger hero title staggers if home
                if (viewName === 'home') {
                    triggerHeroTitleStagger();
                }
            }, 50);

            navLinks.forEach(link => {
                const linkView = link.getAttribute('data-view');
                // Support customize routing mapped to #customize-view
                if (linkView === viewName || (viewName === 'customize' && linkView === 'customize')) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });

            if (viewName === 'shop') {
                if (params.category) {
                    setShopCategoryFilter(params.category);
                } else {
                    setShopCategoryFilter('all');
                }
            }

            if (window.__kalaaLenis) {
                // Stop first so any in-flight momentum from a recent wheel/touch
                // gesture doesn't keep animating toward its old target and undo
                // the reset a frame later.
                window.__kalaaLenis.stop();
                window.__kalaaLenis.scrollTo(0, { immediate: true, force: true });
                window.__kalaaLenis.start();
            } else {
                window.scrollTo({ top: 0, behavior: 'auto' });
            }
        }
    }

    function setShopCategoryFilter(category) {
        currentFilter = category;
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            if (btn.getAttribute('data-filter') === category) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // 5-category text details mappings
        const categoryTitles = {
            'all': 'Explore Wearable Art',
            'kurtis': 'Hand-Painted Kurtis',
            'sarees': 'Hand-Painted Silk & Organza Sarees',
            'dupattas': 'Designer Hand-Painted Dupattas',
            'totes': 'Canvas Botanical Tote Bags',
            'frocks': "Kids' Cotton Frocks",
            'kurtas': 'Hand-Painted Kurtas'
        };

        const categoryDescs = {
            'all': 'Browse our collection of hand-painted kurtis, sarees, dupattas, bags, and frocks. Filter by category and sort to find your signature piece.',
            'kurtis': 'Bespoke tailored garments crafted from pure cottons and linens, detailed with delicate paint brushstrokes and metallic outlines.',
            'sarees': 'Drape yourself in stories. Premium mulberry silks and translucent organzas hand-painted with peacocks, lotuses, and classic floral vines.',
            'dupattas': 'Ethereal overlays. Floating layers of sheer organza and georgette hand-painted with signature botanical art.',
            'totes': 'Durable daily canvases. Thick organic canvas tote bags decorated with hand-drawn botanical illustrations and finished with leather straps.',
            'frocks': 'Pure cotton and linen frocks for kids, hand-painted with playful floral patterns and whimsical butterfly details using organic, child-safe binders.',
            'kurtas': 'Bespoke tailored garments crafted from pure cottons and linens, detailed with delicate paint brushstrokes and metallic outlines.'
        };

        const titleEl = document.getElementById('shop-category-title');
        const descEl = document.getElementById('shop-category-desc');
        if (titleEl) titleEl.innerText = categoryTitles[category] || categoryTitles['all'];
        if (descEl) descEl.innerText = categoryDescs[category] || categoryDescs['all'];

        renderShopProducts();
    }

    window.addEventListener('hashchange', handleRouting);
    handleRouting();

    document.body.addEventListener('click', (e) => {
        const viewLink = e.target.closest('[data-view]');
        if (viewLink) {
            const targetView = viewLink.getAttribute('data-view');
            if (viewLink.getAttribute('data-category')) {
                window.location.hash = `#shop?category=${viewLink.getAttribute('data-category')}`;
            } else {
                window.location.hash = `#${targetView}`;
            }
            e.preventDefault();
        }
        
        const categoryLink = e.target.closest('[data-category]');
        if (categoryLink && !viewLink) {
            window.location.hash = `#shop?category=${categoryLink.getAttribute('data-category')}`;
            e.preventDefault();
        }
    });

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('open');
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ==========================================================================
    // 4. ANIMATION & PARALLAX SYSTEMS
    // ==========================================================================

    // Brand hero animation reset: called when user navigates back to home
    function triggerHeroTitleStagger() {
        // The brand hero animations are CSS-driven (animation keyframes).
        // To replay them on re-visit, we clone and re-insert the brand wrapper.
        const wrapper = document.getElementById('brand-reveal-wrapper');
        if (!wrapper) return;

        // Force animation restart by cloning the node
        const parent = wrapper.parentNode;
        const clone = wrapper.cloneNode(true);
        wrapper.remove();
        // Append clone back to trigger CSS animations from start
        setTimeout(() => {
            parent.appendChild(clone);
        }, 10);
    }

    // Intersection Observer scroll reveals
    let revealObserver;
    function observeScrollReveals() {
        const revealElements = document.querySelectorAll('.reveal-fade, .reveal-slide-up');
        if (revealObserver) {
            revealObserver.disconnect();
        }

        const observerOptions = {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        };

        revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
    }

    // ==========================================================================
    // 4b. GSAP + LENIS ANIMATION ENGINE (progressive enhancement — CDN based)
    // ==========================================================================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktopPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const gsapAvailable = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';

    if (gsapAvailable) {
        gsap.registerPlugin(ScrollTrigger);

        // Buttery smooth scroll, wired into GSAP's ticker so ScrollTrigger stays in sync
        if (typeof Lenis !== 'undefined' && !prefersReducedMotion) {
            const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
            lenis.on('scroll', ScrollTrigger.update);
            gsap.ticker.add((time) => lenis.raf(time * 1000));
            gsap.ticker.lagSmoothing(0);
            window.__kalaaLenis = lenis;
        }

        if (!prefersReducedMotion) {
            // Layered background parallax — scrubbed to scroll position within each section
            const parallaxLayers = [
                { el: '#hero-bg', trigger: '#hero-section-wrap', yPercent: 16 },
                { el: '#hero-midground', trigger: '#hero-section-wrap', yPercent: 9 },
                { el: '#about-hero-bg', trigger: '.about-hero-section', yPercent: 14 },
                { el: '#newsletter-bg-texture', trigger: '.newsletter-section', yPercent: 10 },
            ];

            parallaxLayers.forEach((layer) => {
                const el = document.querySelector(layer.el);
                const trigger = document.querySelector(layer.trigger);
                if (!el || !trigger) return;
                gsap.to(el, {
                    yPercent: layer.yPercent,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: trigger,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    }
                });
            });
        }

        window.__kalaaGsapReady = true;
    }

    // Re-sync ScrollTrigger measurements after view swaps / dynamic content changes
    function refreshScrollTrigger() {
        if (gsapAvailable) {
            requestAnimationFrame(() => ScrollTrigger.refresh());
        }
    }

    // Scroll-triggered clip-path image reveals (wipe-in), progressive: only runs if GSAP loaded
    function initClipReveals() {
        if (!gsapAvailable || prefersReducedMotion) return;
        // Only process images that are actually visible right now — images inside an
        // inactive (display:none) page-view are skipped and picked up on the next
        // call once their view becomes active, avoiding zero-size trigger bounds.
        const targets = Array.from(document.querySelectorAll('.category-img, .product-img, .bts-img, .bio-img'))
            .filter(img => !img.dataset.clipInited && img.offsetParent !== null);
        if (targets.length === 0) return;

        targets.forEach(img => {
            img.dataset.clipInited = '1';
            gsap.set(img, { clipPath: 'inset(0 0 0 100%)' });
        });

        ScrollTrigger.batch(targets, {
            start: 'top 88%',
            once: true,
            onEnter: (batch) => {
                gsap.to(batch, {
                    clipPath: 'inset(0 0 0 0%)',
                    duration: 1.1,
                    ease: 'power3.out',
                    stagger: 0.08,
                });
            }
        });

        refreshScrollTrigger();
    }

    // Magnetic pull on primary CTAs — desktop pointer only
    function initMagneticButtons() {
        if (!gsapAvailable || !isDesktopPointer || prefersReducedMotion) return;
        document.querySelectorAll('.btn-primary, .btn-secondary, .btn-accent').forEach((btn) => {
            if (btn.dataset.magnetic) return;
            btn.dataset.magnetic = '1';
            const xTo = gsap.quickTo(btn, 'x', { duration: 0.5, ease: 'power3' });
            const yTo = gsap.quickTo(btn, 'y', { duration: 0.5, ease: 'power3' });
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                xTo((e.clientX - rect.left - rect.width / 2) * 0.25);
                yTo((e.clientY - rect.top - rect.height / 2) * 0.35);
            });
            btn.addEventListener('mouseleave', () => { xTo(0); yTo(0); });
        });
    }

    // Refined custom cursor — dot + lagging ring, desktop pointer only, pure rAF (no GSAP dependency)
    function initCustomCursor() {
        if (!isDesktopPointer) return;
        const dot = document.getElementById('custom-cursor-dot');
        const ring = document.getElementById('custom-cursor-ring');
        if (!dot || !ring) return;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let ringX = mouseX;
        let ringY = mouseY;
        let cursorStarted = false;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
            if (!cursorStarted) {
                cursorStarted = true;
                document.body.classList.add('cursor-ready');
            }
        });

        (function ringLoop() {
            ringX += (mouseX - ringX) * 0.16;
            ringY += (mouseY - ringY) * 0.16;
            ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
            requestAnimationFrame(ringLoop);
        })();

        const hoverSelector = 'a, button, .filter-btn, .product-img, .category-img, input, select, textarea';
        document.body.addEventListener('mouseover', (e) => {
            if (e.target.closest(hoverSelector)) document.body.classList.add('cursor-hover');
        });
        document.body.addEventListener('mouseout', (e) => {
            if (e.target.closest(hoverSelector)) document.body.classList.remove('cursor-hover');
        });
    }

    initCustomCursor();
    initClipReveals();
    initMagneticButtons();



    // ==========================================================================
    // 7. SHOP PRODUCTS GRIDDING & CAROUSELS
    // ==========================================================================
    
    function renderShopProducts() {
        if (!shopProductsContainer) return;
        
        const launchingSoonCategories = ['sarees', 'dupattas', 'totes'];

        let filtered = products;
       if (currentFilter === 'all') {
            filtered = products.filter(p => !launchingSoonCategories.includes(p.category));
        } else {
            filtered = products.filter(p => p.category === currentFilter);
        }

        // For selected categories, show a "Launching soon" placeholder instead of product listings
        if (currentFilter !== 'all' && launchingSoonCategories.includes(currentFilter)) {
            shopProductsContainer.classList.remove('d-none');
            shopEmptyState.classList.add('d-none');
            shopProductsContainer.innerHTML = `
                <div class="shop-launching-soon reveal-fade" style="text-align:center;padding:80px 0;">
                    <p class="empty-message" style="font-size:1.25rem;font-weight:600;">Launching soon</p>
                    <p style="margin-top:6px;color:var(--muted,#666);">This collection will be available shortly. Stay tuned.</p>
                </div>
            `;
            observeScrollReveals();
            return;
        }
        
        if (currentSort === 'price-low') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (currentSort === 'price-high') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (currentSort === 'newest') {
            filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else {
            // Sort by featured first, then name
            filtered.sort((a, b) => {
                if (a.featured && !b.featured) return -1;
                if (!a.featured && b.featured) return 1;
                return 0;
            });
        }

        if (filtered.length === 0) {
            shopProductsContainer.classList.add('d-none');
            shopEmptyState.classList.remove('d-none');
        } else {
            shopProductsContainer.classList.remove('d-none');
            shopEmptyState.classList.add('d-none');
            
            shopProductsContainer.innerHTML = '';
            filtered.forEach(p => {
                shopProductsContainer.appendChild(createProductCard(p));
            });
        }
        observeScrollReveals();
        if (typeof initClipReveals === 'function') initClipReveals();
        if (typeof initMagneticButtons === 'function') initMagneticButtons();
    }

    function renderFeaturedProducts() {
        if (!featuredProductsContainer) return;
        
         // Exclude categories that are launching soon from the featured gallery
        const launchingSoonCategories = ['sarees', 'dupattas', 'totes'];
        const featured = products.filter(p => p.featured && !launchingSoonCategories.includes(p.category)).slice(0, 3);
        featuredProductsContainer.innerHTML = '';
        
        featured.forEach(p => {
            featuredProductsContainer.appendChild(createProductCard(p));
        });

        observeScrollReveals();
        if (typeof initClipReveals === 'function') initClipReveals();
        if (typeof initMagneticButtons === 'function') initMagneticButtons();
    }

    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card reveal-slide-up';
        card.setAttribute('data-id', product.id);

        let tagHtml = '';
        if (product.tag) {
            const tagClass = product.tag.toLowerCase() === 'new' ? 'tag-new' : 'tag-featured';
            tagHtml = `<span class="product-tag ${tagClass}">${product.tag}</span>`;
        }

        card.innerHTML = `
            <div class="product-img-wrapper">
                ${tagHtml}
                <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
                <div class="product-hover-actions">
                    <button class="btn btn-primary btn-add-to-cart-direct" data-id="${product.id}">Add to Cart</button>
                    <button class="btn btn-secondary btn-quick-view" data-id="${product.id}">Quick View</button>
                </div>
            </div>
            <div class="product-details">
                <span class="product-category-tag">${product.category}</span>
                <h3 class="product-title">
                    <a href="#shop" class="product-title-link btn-quick-view" data-id="${product.id}">${product.name}</a>
                </h3>
                <div class="product-price-row">
                    <span class="product-price">₹${product.price.toLocaleString('en-IN')}</span>
                </div>
            </div>
        `;
        return card;
    }

    // Filter Buttons Clicks
    document.body.addEventListener('click', (e) => {
        const filterBtn = e.target.closest('.filter-btn');
        if (filterBtn) {
            const filterValue = filterBtn.getAttribute('data-filter');
            window.location.hash = `#shop?category=${filterValue}`;
        }
    });

    if (shopSortSelect) {
        shopSortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderShopProducts();
        });
    }

    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', () => {
            window.location.hash = '#shop?category=all';
        });
    }

    renderFeaturedProducts();
    renderShopProducts();

    // ==========================================================================
    // 8. PRODUCT QUICK VIEW MODAL
    // ==========================================================================
    
    function openModal(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        let optionHtml = '';
        if (product.options && product.options.length > 0) {
            optionHtml = `
                <div class="modal-option-group">
                    <label class="modal-option-title">Select Variant</label>
                    <select class="modal-option-dropdown" id="modal-product-option">
                        ${product.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
                    </select>
                </div>
            `;
        }

        modalBody.innerHTML = `
            <div class="product-modal-grid">
                <div class="modal-gallery-wrapper">
                    <div class="modal-main-img-container">
                        <img src="${product.image}" alt="${product.name}" class="modal-main-img" id="modal-main-image">
                    </div>
                    <div class="modal-thumbs-row">
                        <div class="modal-thumb active" data-src="${product.image}">
                            <img src="${product.image}" alt="${product.name} Thumbnail" class="modal-thumb-img">
                        </div>
                        <div class="modal-thumb" data-src="hero_background.png">
                            <img src="hero_background.png" alt="Fabric Detail Thumbnail" class="modal-thumb-img">
                        </div>
                    </div>
                </div>
                
                <div class="modal-info-col">
                    <span class="modal-product-tag">${product.category}</span>
                    <h2 class="modal-product-title">${product.name}</h2>
                    <div class="modal-product-price">₹${product.price.toLocaleString('en-IN')}</div>
                    
                    <p class="modal-product-desc">${product.description}</p>
                    <p class="modal-product-desc"><em>*Note: Due to the handmade nature of fabric art, color shading and brushstroke layouts may vary slightly from the product image, making your item unique.</em></p>
                    
                    ${optionHtml}
                    
                    <div class="modal-actions-row">
                        <div class="quantity-selector">
                            <button class="qty-btn qty-minus" aria-label="Decrease Quantity">&minus;</button>
                            <input type="number" value="1" min="1" class="qty-input" id="modal-product-qty" readonly>
                            <button class="qty-btn qty-plus" aria-label="Increase Quantity">&plus;</button>
                        </div>
                        <button class="btn btn-primary btn-add-cart" id="modal-add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;

        productModal.classList.add('active');
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        productModal.classList.remove('active');
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    document.body.addEventListener('click', (e) => {
        const quickViewBtn = e.target.closest('.btn-quick-view') || e.target.closest('.product-title-link');
        if (quickViewBtn) {
            // Verify if inside product-hover-actions or category-link
            if (e.target.closest('.product-hover-actions') && !e.target.closest('.btn-quick-view')) return;
            
            const id = quickViewBtn.getAttribute('data-id');
            openModal(id);
            e.preventDefault();
        }
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

    document.body.addEventListener('click', (e) => {
        const thumb = e.target.closest('.modal-thumb');
        if (thumb) {
            const mainImg = document.getElementById('modal-main-image');
            const targetSrc = thumb.getAttribute('data-src');
            
            document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
            
            if (mainImg) mainImg.src = targetSrc;
        }
    });

    // ==========================================================================
    // 9. SHOPPING CART DRAWER & QUANTITY HANDLER
    // ==========================================================================
    
    function toggleCartDrawer() {
        cartDrawer.classList.toggle('active');
        cartDrawerOverlay.classList.toggle('active');
    }

    function openCartDrawer() {
        cartDrawer.classList.add('active');
        cartDrawerOverlay.classList.add('active');
    }

    function closeCartDrawer() {
        cartDrawer.classList.remove('active');
        cartDrawerOverlay.classList.remove('active');
    }

    if (cartToggleBtn) cartToggleBtn.addEventListener('click', toggleCartDrawer);
    if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
    if (cartDrawerOverlay) cartDrawerOverlay.addEventListener('click', closeCartDrawer);
    if (cartShopNowBtn) cartShopNowBtn.addEventListener('click', () => {
        closeCartDrawer();
        window.location.hash = '#shop';
    });

    function addToCart(productId, quantity, option = '') {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const existingIdx = cart.findIndex(item => item.id === productId && item.option === option);
        
        if (existingIdx > -1) {
            cart[existingIdx].quantity += quantity;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                category: product.category,
                quantity: quantity,
                option: option
            });
        }

        updateCartStorage();
        renderCart();
        
        showToast(`Added ${quantity}x "${product.name}" to cart.`);
        setTimeout(openCartDrawer, 300);
    }

    function removeFromCart(index) {
        if (index > -1 && index < cart.length) {
            const name = cart[index].name;
            cart.splice(index, 1);
            updateCartStorage();
            renderCart();
            showToast(`Removed "${name}" from cart.`);
        }
    }

    function updateCartQuantity(index, qty) {
        if (index > -1 && index < cart.length && qty > 0) {
            cart[index].quantity = qty;
            updateCartStorage();
            calculateCartTotals();
        }
    }

    function updateCartStorage() {
        localStorage.setItem('kalaa_cart', JSON.stringify(cart));
    }

    function calculateCartTotals() {
        let totalCount = 0;
        let subtotal = 0;

        cart.forEach(item => {
            totalCount += item.quantity;
            subtotal += item.price * item.quantity;
        });

        if (cartCountBadge) {
            cartCountBadge.innerText = totalCount;
            cartCountBadge.style.display = totalCount === 0 ? 'none' : 'flex';
        }

        if (cartSubtotalPrice) {
            cartSubtotalPrice.innerText = `₹${subtotal.toLocaleString('en-IN')}`;
        }
    }

    function renderCart() {
        calculateCartTotals();

        if (cart.length === 0) {
            cartEmptyView.classList.remove('d-none');
            cartItemsList.classList.add('d-none');
            cartDrawerFooter.classList.add('d-none');
        } else {
            cartEmptyView.classList.add('d-none');
            cartItemsList.classList.remove('d-none');
            cartDrawerFooter.classList.remove('d-none');

            cartItemsList.innerHTML = '';
            cart.forEach((item, idx) => {
                const itemEl = document.createElement('div');
                itemEl.className = 'cart-item';
                itemEl.setAttribute('data-index', idx);

                const optionMeta = item.option ? `<div class="cart-item-meta">${item.option}</div>` : '';

                itemEl.innerHTML = `
                    <div class="cart-item-img-wrapper">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    </div>
                    <div class="cart-item-details">
                        <h4 class="cart-item-name">${item.name}</h4>
                        ${optionMeta}
                        <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</div>
                        <div class="cart-item-bottom">
                            <div class="quantity-selector">
                                <button class="qty-btn qty-minus" aria-label="Decrease Quantity">&minus;</button>
                                <input type="number" value="${item.quantity}" min="1" class="qty-input" readonly>
                                <button class="qty-btn qty-plus" aria-label="Increase Quantity">&plus;</button>
                            </div>
                            <button class="cart-item-remove-btn" data-index="${idx}">Remove</button>
                        </div>
                    </div>
                `;
                cartItemsList.appendChild(itemEl);
            });
        }
    }

    document.body.addEventListener('click', (e) => {
        const addBtn = e.target.closest('.btn-add-to-cart-direct');
        if (addBtn) {
            const id = addBtn.getAttribute('data-id');
            const product = products.find(p => p.id === id);
            const defaultOpt = product && product.options && product.options.length > 0 ? product.options[0] : '';
            addToCart(id, 1, defaultOpt);
            e.preventDefault();
        }
    });

    document.body.addEventListener('click', (e) => {
        const modalAddBtn = e.target.closest('#modal-add-to-cart-btn');
        if (modalAddBtn) {
            const id = modalAddBtn.getAttribute('data-id');
            const qtyInput = document.getElementById('modal-product-qty');
            const qty = qtyInput ? parseInt(qtyInput.value) : 1;
            const optSelect = document.getElementById('modal-product-option');
            const opt = optSelect ? optSelect.value : '';
            
            addToCart(id, qty, opt);
            closeModal();
            e.preventDefault();
        }
    });

    document.body.addEventListener('click', (e) => {
        const removeBtn = e.target.closest('.cart-item-remove-btn');
        if (removeBtn) {
            const idx = parseInt(removeBtn.getAttribute('data-index'));
            removeFromCart(idx);
        }
    });

    // Quantity Selector Action Handlers
    document.body.addEventListener('click', (e) => {
        const qtyMinus = e.target.closest('.qty-minus');
        const qtyPlus = e.target.closest('.qty-plus');
        
        if (qtyMinus) {
            const container = qtyMinus.closest('.quantity-selector');
            const input = container.querySelector('.qty-input');
            let val = parseInt(input.value);
            if (val > 1) {
                val--;
                input.value = val;
                
                const cartItem = qtyMinus.closest('.cart-item');
                if (cartItem) {
                    const index = parseInt(cartItem.getAttribute('data-index'));
                    updateCartQuantity(index, val);
                }
            }
        }
        
        if (qtyPlus) {
            const container = qtyPlus.closest('.quantity-selector');
            const input = container.querySelector('.qty-input');
            let val = parseInt(input.value);
            val++;
            input.value = val;
            
            const cartItem = qtyPlus.closest('.cart-item');
            if (cartItem) {
                const index = parseInt(cartItem.getAttribute('data-index'));
                updateCartQuantity(index, val);
            }
        }
    });

    if (cartCheckoutBtn) {
        cartCheckoutBtn.addEventListener('click', () => {
            showToast('Order processing is disabled. Thank you for viewing our boutique!');
            closeCartDrawer();
        });
    }

    renderCart();

    // ==========================================================================
    // 10. TESTIMONIALS SLIDER
    // ==========================================================================
    const slides = document.querySelectorAll('.testimonial-slide');
    const testimonialDots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.getElementById('testimonial-prev');
    const nextBtn = document.getElementById('testimonial-next');
    let activeTestimonialIdx = 0;
    let testimonialInterval;

    function showTestimonial(idx) {
        if (slides.length === 0) return;

        if (idx >= slides.length) idx = 0;
        if (idx < 0) idx = slides.length - 1;

        activeTestimonialIdx = idx;

        slides.forEach((slide, sIdx) => {
            slide.classList.toggle('active', sIdx === idx);
        });

        testimonialDots.forEach((dot, dIdx) => {
            dot.classList.toggle('active', dIdx === idx);
        });
    }

    function startAutoTestimonials() {
        stopAutoTestimonials();
        testimonialInterval = setInterval(() => {
            showTestimonial(activeTestimonialIdx + 1);
        }, 6500);
    }

    function stopAutoTestimonials() {
        if (testimonialInterval) clearInterval(testimonialInterval);
    }

    testimonialDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const idx = parseInt(dot.getAttribute('data-index'));
            showTestimonial(idx);
            startAutoTestimonials();
        });
    });

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            showTestimonial(activeTestimonialIdx - 1);
            startAutoTestimonials();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            showTestimonial(activeTestimonialIdx + 1);
            startAutoTestimonials();
        });
    }

    startAutoTestimonials();

    // ==========================================================================
    // 11. FORM SUBMISSIONS & MICRO-INTERACTIONS
    // ==========================================================================
    
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <span class="toast-success-icon">✓</span>
            <span>${message}</span>
        `;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('show');
        }, 50);

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3500);
    }

    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('.form-input');
            const btn = newsletterForm.querySelector('button[type="submit"]');
            
            btn.disabled = true;
            btn.innerText = 'Subscribing...';
            
            setTimeout(() => {
                showToast(`Thank you! ${input.value} is now added to our Studio Circle.`);
                input.value = '';
                btn.disabled = false;
                btn.innerText = 'Subscribe';
            }, 1000);
        });
    }

    const contactForm = document.getElementById('contact-form');
    const contactSubmitBtn = document.getElementById('contact-submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btnText = contactSubmitBtn.querySelector('.btn-text-content');
            const btnLoader = contactSubmitBtn.querySelector('.btn-loader');
            
            contactSubmitBtn.disabled = true;
            btnText.classList.add('d-none');
            btnLoader.classList.remove('d-none');

            setTimeout(() => {
                showToast('Thank you! Your query has been sent to Bindu\'s studio inbox.');
                contactForm.reset();
                
                contactSubmitBtn.disabled = false;
                btnText.classList.remove('d-none');
                btnLoader.classList.add('d-none');
            }, 1200);
        });
    }

    // ==========================================================================
    // 12. TAB TOGGLE SYSTEM FOR CONTACT FORM
    // ==========================================================================
    const tabButtons = document.querySelectorAll('.contact-tab-btn');
    const tabContents = document.querySelectorAll('.contact-tab-content');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const targetContent = document.getElementById(`tab-${tabId}`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // ==========================================================================
    // 13. DROPZONE FILE UPLOADER & PREVIEW SYSTEM
    // ==========================================================================
    function setupDropzone(dropzoneId, inputId, contentId, previewId, imgId, filenameId, removeBtnId) {
        const dropzone = document.getElementById(dropzoneId);
        const input = document.getElementById(inputId);
        const content = document.getElementById(contentId);
        const preview = document.getElementById(previewId);
        const img = document.getElementById(imgId);
        const filename = document.getElementById(filenameId);
        const removeBtn = document.getElementById(removeBtnId);

        if (!dropzone || !input) return;

        dropzone.addEventListener('click', (e) => {
            if (e.target.closest(`#${removeBtnId}`)) return;
            input.click();
        });

        ['dragenter', 'dragover'].forEach(eventName => {
            dropzone.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
                dropzone.classList.add('dragover');
            }, false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dropzone.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
                dropzone.classList.remove('dragover');
            }, false);
        });

        dropzone.addEventListener('drop', (e) => {
            const dt = e.dataTransfer;
            const files = dt.files;
            if (files.length > 0) {
                input.files = files;
                handleFile(files[0]);
            }
        }, false);

        input.addEventListener('change', () => {
            if (input.files.length > 0) {
                handleFile(input.files[0]);
            }
        });

        function handleFile(file) {
            if (!file.type.startsWith('image/')) {
                showToast('Please upload an image file.');
                input.value = '';
                return;
            }

            filename.innerText = file.name;
            const reader = new FileReader();
            reader.onload = (e) => {
                img.src = e.target.result;
                content.classList.add('d-none');
                preview.classList.remove('d-none');
            };
            reader.readAsDataURL(file);
        }

        if (removeBtn) {
            removeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                input.value = '';
                img.src = '';
                content.classList.remove('d-none');
                preview.classList.add('d-none');
            });
        }
    }

    setupDropzone('file-dropzone', 'cust-file', 'dropzone-content', 'dropzone-preview', 'preview-img-el', 'preview-filename', 'preview-remove-btn');
    setupDropzone('contact-file-dropzone', 'ccust-file', 'contact-dropzone-content', 'contact-dropzone-preview', 'contact-preview-img-el', 'contact-preview-filename', 'contact-preview-remove-btn');

    // ==========================================================================
    // 14. DATE-TIME BOOKING VALIDATION & SUBMISSION
    // ==========================================================================
    function validateAppointment(dateInput, timeInput) {
        if (!dateInput || !dateInput.value) return true; // appointment is optional
        
        const selectedDate = new Date(dateInput.value);
        const today = new Date();
        today.setHours(0,0,0,0);
        
        if (selectedDate < today) {
            showToast('Please select a future date for your appointment.');
            dateInput.focus();
            return false;
        }

        if (dateInput.value && (!timeInput || !timeInput.value)) {
            showToast('Please select a preferred time slot.');
            if (timeInput) timeInput.focus();
            return false;
        }

        return true;
    }

    function setupCustomRequestForm(formId, submitBtnId, overlayId, dateInputId, timeInputId) {
        const form = document.getElementById(formId);
        const submitBtn = document.getElementById(submitBtnId);
        const overlay = document.getElementById(overlayId);
        const dateInput = document.getElementById(dateInputId);
        const timeInput = document.getElementById(timeInputId);

        if (!form || !submitBtn || !overlay) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (!validateAppointment(dateInput, timeInput)) {
                return;
            }

            const btnText = submitBtn.querySelector('.btn-text-content');
            const btnLoader = submitBtn.querySelector('.btn-loader');
            
            submitBtn.disabled = true;
            if (btnText) btnText.classList.add('d-none');
            if (btnLoader) btnLoader.classList.remove('d-none');

            setTimeout(() => {
                // Show success screen (triggers CSS dash checkmark animation automatically)
                overlay.classList.remove('d-none');
                
                // Clear forms
                form.reset();
                
                // Reset file dropzone
                const removeBtns = form.querySelectorAll('.preview-remove-btn');
                removeBtns.forEach(btn => btn.click());
                
                // Keep success screen visible for 4.5 seconds
                setTimeout(() => {
                    overlay.classList.add('d-none');
                    submitBtn.disabled = false;
                    if (btnText) btnText.classList.remove('d-none');
                    if (btnLoader) btnLoader.classList.add('d-none');
                }, 4500);
                
            }, 1200);
        });
    }

    setupCustomRequestForm('customize-request-form', 'cust-submit-btn', 'form-success-overlay', 'appt-date', 'appt-time');
    setupCustomRequestForm('contact-custom-request-form', 'contact-cust-submit-btn', 'contact-form-success-overlay', 'cappt-date', 'cappt-time');

    // ==========================================================================
    // 15. IMAGE LIGHTBOX OVERLAY
    // ==========================================================================
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCloseBtn = document.getElementById('lightbox-close-btn');

    function openLightbox(src) {
        if (!lightboxOverlay || !lightboxImg) return;
        lightboxImg.src = src;
        lightboxOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Lock background scrolling
    }

    function closeLightbox() {
        if (!lightboxOverlay) return;
        lightboxOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Unlock background scrolling
    }

    document.body.addEventListener('click', (e) => {
        const trigger = e.target.closest('.product-img') || e.target.closest('.img-lightbox-trigger') || e.target.closest('.modal-main-img') || e.target.closest('.bts-img');
        if (trigger) {
            // Skip triggering lightbox on button hover actions
            if (e.target.closest('.product-hover-actions')) return;
            
            openLightbox(trigger.src);
            e.preventDefault();
        }
    });

    if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
    if (lightboxOverlay) {
        lightboxOverlay.addEventListener('click', (e) => {
            if (e.target === lightboxOverlay || e.target === lightboxCloseBtn) {
                closeLightbox();
            }
        });
    }

});