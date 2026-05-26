// CasaYa - Main JavaScript
// Luxury Real Estate Experience

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lenis smooth scroll
    let lenis;
    if (typeof Lenis !== 'undefined') {
        lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Connect Lenis to GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
    }

    // ========================================
    // NAVIGATION
    // ========================================
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    // Nav scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close mobile menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // ========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                if (lenis) {
                    lenis.scrollTo(target, { offset: -80 });
                } else {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // ========================================
    // GSAP SCROLL ANIMATIONS
    // ========================================
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Stats animation
        const statItems = document.querySelectorAll('.stat-item');
        statItems.forEach((item, index) => {
            ScrollTrigger.create({
                trigger: item,
                start: 'top 85%',
                onEnter: () => {
                    item.classList.add('visible');
                    item.style.animationDelay = `${index * 0.15}s`;
                },
                once: true
            });
        });

        // Property cards animation
        const propertyCards = document.querySelectorAll('.property-card');
        propertyCards.forEach((card, index) => {
            ScrollTrigger.create({
                trigger: card,
                start: 'top 90%',
                onEnter: () => {
                    card.classList.add('visible');
                    card.style.transitionDelay = `${index * 0.1}s`;
                },
                once: true
            });
        });

        // Neighborhood cards animation
        const neighborhoodCards = document.querySelectorAll('.neighborhood-card');
        neighborhoodCards.forEach((card, index) => {
            ScrollTrigger.create({
                trigger: card,
                start: 'top 90%',
                onEnter: () => {
                    card.classList.add('visible');
                    card.style.animationDelay = `${index * 0.1}s`;
                },
                once: true
            });
        });

        // Section headers animation
        const sectionHeaders = document.querySelectorAll('.section-header, .neighborhoods-header');
        sectionHeaders.forEach(header => {
            gsap.from(header, {
                scrollTrigger: {
                    trigger: header,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                y: 40,
                duration: 1,
                ease: 'power3.out'
            });
        });

        // Contact section animation
        gsap.from('.contact-info', {
            scrollTrigger: {
                trigger: '.contact-section',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -50,
            duration: 1.2,
            ease: 'power3.out'
        });

        gsap.from('.contact-form', {
            scrollTrigger: {
                trigger: '.contact-section',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: 50,
            duration: 1.2,
            ease: 'power3.out'
        });
    }

    // ========================================
    // PROPERTY SEARCH FILTER
    // ========================================
    const filterLocation = document.getElementById('filterLocation');
    const filterType = document.getElementById('filterType');
    const filterPrice = document.getElementById('filterPrice');
    const filterRooms = document.getElementById('filterRooms');
    const btnSearch = document.getElementById('btnSearch');
    const propertiesGrid = document.getElementById('propertiesGrid');

    function filterProperties() {
        const location = filterLocation ? filterLocation.value : '';
        const type = filterType ? filterType.value : '';
        const price = filterPrice ? parseInt(filterPrice.value) || Infinity : Infinity;
        const rooms = filterRooms ? parseInt(filterRooms.value) || 0 : 0;

        const cards = document.querySelectorAll('.property-card');
        let visibleCount = 0;

        cards.forEach(card => {
            const cardLocation = card.dataset.location || '';
            const cardType = card.dataset.type || '';
            const cardPrice = parseInt(card.dataset.price) || 0;
            const cardRooms = parseInt(card.dataset.rooms) || 0;

            const matchLocation = !location || cardLocation === location;
            const matchType = !type || cardType === type;
            const matchPrice = cardPrice <= price;
            const matchRooms = cardRooms >= rooms;

            if (matchLocation && matchType && matchPrice && matchRooms) {
                card.style.display = '';
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    card.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, visibleCount * 100);
                
                visibleCount++;
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });

        // Show "no results" message if needed
        const existingNoResults = document.querySelector('.no-results');
        if (existingNoResults) {
            existingNoResults.remove();
        }

        if (visibleCount === 0) {
            const noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.style.cssText = 'grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; color: var(--color-text-muted);';
            noResults.innerHTML = `
                <p style="font-size: 1.2rem; margin-bottom: 1rem;">No se encontraron propiedades</p>
                <p style="font-size: 0.9rem;">Prueba a ajustar los filtros de búsqueda</p>
            `;
            propertiesGrid.appendChild(noResults);
        }
    }

    if (btnSearch) {
        btnSearch.addEventListener('click', filterProperties);
    }

    // ========================================
    // TESTIMONIAL SLIDER
    // ========================================
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    let currentSlide = 0;
    let autoSlideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            dots[i].classList.remove('active');
        });

        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    function prevSlide() {
        const prev = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prev);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 6000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    if (slides.length > 0) {
        // Initialize
        startAutoSlide();

        // Event listeners
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                stopAutoSlide();
                nextSlide();
                startAutoSlide();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                stopAutoSlide();
                prevSlide();
                startAutoSlide();
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                stopAutoSlide();
                showSlide(index);
                startAutoSlide();
            });
        });
    }

    // ========================================
    // CONTACT FORM
    // ========================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Show success message (in production, send to backend)
            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 6L9 17l-5-5"/>
                </svg>
                ¡Mensaje enviado!
            `;
            submitBtn.style.background = '#25D366';
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                contactForm.reset();
            }, 3000);
            
            // Log form data (replace with actual API call)
            console.log('Form submitted:', data);
        });
    }

    // ========================================
    // LAZY LOADING FOR IMAGES
    // ========================================
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px'
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // ========================================
    // PARALLAX EFFECT FOR HERO
    // ========================================
    const heroVideo = document.querySelector('.hero-video');
    
    if (heroVideo && !window.matchMedia('(pointer: coarse)').matches) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;
            
            if (rate < window.innerHeight) {
                heroVideo.style.transform = `translateY(${rate}px) scale(1.1)`;
            }
        });
    }

    // ========================================
    // NAV TOGGLE ANIMATION
    // ========================================
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            const spans = navToggle.querySelectorAll('span');
            if (navToggle.classList.contains('active')) {
                spans[0].style.transform = 'rotate(0) translateY(0)';
                spans[1].style.transform = 'rotate(0) translateY(0)';
            } else {
                spans[0].style.transform = 'rotate(45deg) translateY(3.5px)';
                spans[1].style.transform = 'rotate(-45deg) translateY(-3.5px)';
            }
        });
    }
});
