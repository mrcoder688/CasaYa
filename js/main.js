/* ========================================
   CASAYA - Premium JavaScript
   Cinematic animations & interactions
   ======================================== */

// Initialize Lenis smooth scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Sync Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// ========================================
// CUSTOM CURSOR
// ========================================
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

let mouseX = 0, mouseY = 0;
let outlineX = 0, outlineY = 0;

const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

if (!isTouchDevice && cursorDot && cursorOutline) {
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });
    
    function animateCursor() {
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;
        
        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .property-card, .neighborhood-card');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursorOutline.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hover'));
    });
}

// ========================================
// NAVIGATION SCROLL EFFECT
// ========================================
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
}, { passive: true });

// ========================================
// HERO ANIMATIONS
// ========================================
const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

heroTl
    .to('.hero-image', {
        scale: 1,
        duration: 2,
        ease: 'power2.out'
    })
    .to('.hero-eyebrow', {
        opacity: 1,
        y: 0,
        duration: 1
    }, 0.5)
    .to('.title-line', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.15
    }, 0.7)
    .to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1
    }, 1.2)
    .to('.hero-cta', {
        opacity: 1,
        y: 0,
        duration: 1
    }, 1.4);

// Hero parallax on scroll
gsap.to('.hero-image', {
    yPercent: 30,
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    }
});

// ========================================
// STATS COUNTER ANIMATION
// ========================================
const statNumbers = document.querySelectorAll('.stat-number');

statNumbers.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    
    ScrollTrigger.create({
        trigger: stat,
        start: 'top 85%',
        once: true,
        onEnter: () => {
            gsap.to(stat, {
                innerText: target,
                duration: 2,
                ease: 'power2.out',
                snap: { innerText: 1 },
                onUpdate: function() {
                    stat.innerText = Math.round(this.targets()[0].innerText);
                }
            });
        }
    });
});

// Stats entrance animation
gsap.from('.stat-item', {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.stats',
        start: 'top 80%',
        once: true
    }
});

// ========================================
// PROPERTIES ANIMATIONS
// ========================================
// Section header
gsap.from('.properties .section-header', {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.properties',
        start: 'top 80%',
        once: true
    }
});

// Property cards with stagger
gsap.from('.property-card', {
    y: 80,
    opacity: 0,
    duration: 1.2,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.properties-grid',
        start: 'top 85%',
        once: true
    }
});

// ========================================
// NEIGHBORHOODS ANIMATIONS
// ========================================
gsap.from('.neighborhoods-header', {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.neighborhoods',
        start: 'top 80%',
        once: true
    }
});

gsap.from('.neighborhood-card', {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.neighborhoods-grid',
        start: 'top 85%',
        once: true
    }
});

// ========================================
// TESTIMONIALS SLIDER
// ========================================
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.testimonial-dots .dot');
const prevBtn = document.querySelector('.testimonial-prev');
const nextBtn = document.querySelector('.testimonial-next');
let currentSlide = 0;

function goToSlide(index) {
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
    goToSlide(next);
}

function prevSlide() {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prev);
}

if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
}

if (dots.length > 0) {
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => goToSlide(i));
    });
}

// Auto-advance slides
setInterval(nextSlide, 6000);

// Testimonials entrance
gsap.from('.testimonials-content', {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.testimonials',
        start: 'top 70%',
        once: true
    }
});

// ========================================
// CONTACT CTA ANIMATIONS
// ========================================
gsap.from('.contact-content', {
    x: -60,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.contact-cta',
        start: 'top 75%',
        once: true
    }
});

gsap.from('.contact-image', {
    x: 60,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.contact-cta',
        start: 'top 75%',
        once: true
    }
});

// ========================================
// FOOTER ANIMATIONS
// ========================================
gsap.from('.footer-grid > *', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.footer',
        start: 'top 90%',
        once: true
    }
});

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            lenis.scrollTo(target, {
                offset: -80,
                duration: 1.5
            });
        }
    });
});

// ========================================
// MAGNETIC BUTTON EFFECT
// ========================================
const magneticBtns = document.querySelectorAll('.btn-primary, .btn-secondary');

if (!isTouchDevice) {
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(btn, {
                x: x * 0.2,
                y: y * 0.2,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.5)'
            });
        });
    });
}

// ========================================
// IMAGE REVEAL ON SCROLL
// ========================================
const revealImages = document.querySelectorAll('.property-image, .neighborhood-image');

revealImages.forEach(container => {
    const img = container.querySelector('img');
    if (!img) return;
    
    gsap.fromTo(img, 
        { scale: 1.2 },
        {
            scale: 1,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: container,
                start: 'top 90%',
                once: true
            }
        }
    );
});

// ========================================
// NAV LINK HOVER SOUND (Optional)
// ========================================
// Uncomment if you want subtle hover sounds
/*
const hoverSound = new Audio();
hoverSound.volume = 0.05;

document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        // Play subtle hover sound
    });
});
*/

console.log('🏠 CasaYa initialized - Luxury Real Estate');
