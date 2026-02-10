// Hamburger menu toggle
const hamburgerTrigger = document.getElementById('hamburger-trigger');
const hamburgerMenu = document.getElementById('hamburger-menu');

// Toggle menu when name is clicked
hamburgerTrigger.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
});

// Close menu when clicking outside the menu content
hamburgerMenu.addEventListener('click', (e) => {
    if (e.target === hamburgerMenu) {
        hamburgerMenu.classList.remove('active');
    }
});

// Close menu with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && hamburgerMenu.classList.contains('active')) {
        hamburgerMenu.classList.remove('active');
    }
});
