// Hamburger menu toggle for mobile nav
const hamburger = document.getElementById('hamburger');
const navItems = document.getElementById('nav-items');

hamburger.addEventListener('click', function () {
    const isOpen = navItems.classList.toggle('show');
    hamburger.classList.toggle('x', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
});

// Optional: Close nav when a link is clicked (for better UX)
navItems.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navItems.classList.remove('show');
            hamburger.classList.remove('x');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});