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

    // Active link highlighting
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
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
            observer.unobserve(entry.target); // Only animate once
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