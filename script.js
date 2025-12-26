// JavaScript for AI & Robotics Book Website

// Typing animation for hero section
function initTypingAnimation() {
    const typingTexts = document.querySelectorAll('.typing-text');
    const heroTitle = document.querySelector('.hero-title');

    // Add animation class to each typing text with delay
    typingTexts.forEach((text, index) => {
        setTimeout(() => {
            text.style.opacity = '1';
            text.style.transform = 'translateY(0)';
        }, 500 + (index * 300));
    });
}

// Scroll animations using Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                // Add specific animations based on element type
                if (entry.target.classList.contains('feature-card')) {
                    entry.target.style.transform = 'translateY(-10px)';
                } else if (entry.target.classList.contains('module-card')) {
                    entry.target.style.transform = 'scale(1)';
                }
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    document.querySelectorAll('[data-aos]').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Hover effects for interactive elements
function initHoverEffects() {
    // Button hover effects
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    });

    // Card hover effects
    const cards = document.querySelectorAll('.feature-card, .module-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
        });
    });
}

// Parallax effect for animated section
function initParallax() {
    const animatedSection = document.querySelector('.animated-section');
    const floatingElements = document.querySelectorAll('.floating-element');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        floatingElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrollPosition * speed * 0.5);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Smooth scrolling for navigation
function initSmoothScroll() {
    // Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initTypingAnimation();
    initScrollAnimations();
    initHoverEffects();
    initParallax();
    initSmoothScroll();

    // Additional interactive features
    setupModuleButtons();
    setupHeroButton();
});

// Setup module buttons functionality
function setupModuleButtons() {
    const moduleButtons = document.querySelectorAll('.module-btn');

    moduleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const moduleCard = this.closest('.module-card');
            const moduleName = moduleCard.querySelector('h4').textContent;

            // Add visual feedback
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            this.disabled = true;

            // Simulate loading and redirect
            setTimeout(() => {
                alert(`Redirecting to ${moduleName} module...`);
                this.innerHTML = 'Explore Module';
                this.disabled = false;
            }, 1500);
        });
    });
}

// Setup hero button functionality - removed since buttons are now direct links
function setupHeroButton() {
    // Buttons are now direct links in HTML, so no JavaScript needed for navigation
}

// Setup navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));

            // Add active class to clicked link
            this.classList.add('active');

            // Get target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Scroll to target section
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Setup module buttons functionality
function setupModuleButtons() {
    const moduleButtons = document.querySelectorAll('.module-btn');

    moduleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const moduleCard = this.closest('.module-card');
            const moduleName = moduleCard.querySelector('h4').textContent;
            const moduleId = this.getAttribute('data-module');

            // Add visual feedback
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            this.disabled = true;

            // Simulate loading and redirect to module page
            setTimeout(() => {
                alert(`Redirecting to ${moduleName} module... In a full implementation, this would load the module content.`);
                this.innerHTML = 'Explore Module';
                this.disabled = false;
            }, 1500);
        });
    });
}

// Setup demo buttons functionality
function setupDemoButtons() {
    const demoButtons = document.querySelectorAll('.demo-btn');

    demoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const demoTitle = this.closest('.demo-info').querySelector('h3').textContent;

            // Add visual feedback
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Launching...';
            this.disabled = true;

            // Simulate launching demo
            setTimeout(() => {
                alert(`Launching ${demoTitle}... In a full implementation, this would open the interactive demo.`);
                this.innerHTML = 'Launch ' + (demoTitle.includes('Simulator') ? 'Simulator' : 'Visualizer');
                this.disabled = false;
            }, 1500);
        });
    });
}

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initTypingAnimation();
    initScrollAnimations();
    initHoverEffects();
    initParallax();
    initSmoothScroll();
    initNavigation();

    // Additional interactive features
    setupModuleButtons();
    setupDemoButtons();
    setupHeroButton();
});

// Additional animations for interactive elements
function initInteractiveAnimations() {
    // Add ripple effect to buttons
    const rippleButtons = document.querySelectorAll('.cta-button, .module-btn');

    rippleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple element
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');

            // Position ripple at click location
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            // Add ripple to button
            this.appendChild(ripple);

            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add ripple effect CSS dynamically
function addRippleCSS() {
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }

        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize additional features after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    addRippleCSS();
    initInteractiveAnimations();

    // Add scroll progress indicator
    createScrollProgress();
});

// Create scroll progress indicator
function createScrollProgress() {
    const progressContainer = document.createElement('div');
    progressContainer.id = 'scroll-progress';
    progressContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--accent-blue), var(--accent-purple));
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressContainer);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        progressContainer.style.width = scrollPercent + '%';
    });
}

// Add particle background effect to hero section
function createParticleBackground() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-background';
    particleContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;

    // Create particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(0, 255, 255, 0.6);
            border-radius: 50%;
            animation: float 6s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        particleContainer.appendChild(particle);
    }

    hero.appendChild(particleContainer);

    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
            25% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) rotate(90deg); }
            50% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) rotate(180deg); opacity: 0.7; }
            75% { transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) rotate(270deg); }
        }
    `;
    document.head.appendChild(style);
}

// Initialize particle background
document.addEventListener('DOMContentLoaded', createParticleBackground);