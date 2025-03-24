// Navbar functionality
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navCenter = document.querySelector('.nav-center');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navCenter.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            navCenter.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navCenter.contains(e.target) && !burger.contains(e.target)) {
            burger.classList.remove('active');
            navCenter.classList.remove('active');
        }
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });

    initTypingAnimation();
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .project-card, .skill-tag').forEach(element => {
    observer.observe(element);
});

// Add hover effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'none';
    });
});

// Typing Animation
function initTypingAnimation() {
    const beautiful = document.querySelector('.typing-text.beautiful');
    const functional = document.querySelector('.typing-text.functional');

    setInterval(() => {
        if (beautiful.style.opacity === '0') {
            beautiful.style.opacity = '1';
            functional.style.opacity = '0';
        } else {
            beautiful.style.opacity = '0';
            functional.style.opacity = '1';
        }
    }, 4000);
}

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Prevent scroll when mobile menu is open
function toggleScrollLock() {
    document.body.style.overflow = navCenter.classList.contains('active') ? 'hidden' : '';
}

burger.addEventListener('click', toggleScrollLock);
navLinks.forEach(link => {
    link.addEventListener('click', toggleScrollLock);
}); 