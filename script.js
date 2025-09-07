document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const animatedContent = document.querySelectorAll('.about-content, .skills-grid, .projects-grid, .contact-content');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedContent.forEach(content => {
        observer.observe(content);
    });

    const subtitle = document.querySelector('.hero-subtitle');
    const heroSection = document.querySelector('.hero-section');

    heroSection.addEventListener('mousemove', (e) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const moveX = (e.clientX - centerX) / 20;
        const moveY = (e.clientY - centerY) / 20;

        subtitle.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});
