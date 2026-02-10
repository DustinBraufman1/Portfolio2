// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');
let isZoomed = false;

// Get all project images
const projectImages = document.querySelectorAll('.project-img');

// Add click event to all project images
projectImages.forEach(img => {
    img.addEventListener('click', () => {
        openLightbox(img.src, img.alt);
    });
});

// Open lightbox
function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add('active');
    isZoomed = false;
    lightboxImg.classList.remove('zoomed');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Close lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    isZoomed = false;
    lightboxImg.classList.remove('zoomed');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close button click
lightboxClose.addEventListener('click', closeLightbox);

// Click outside image to close
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Click image to zoom
lightboxImg.addEventListener('click', (e) => {
    e.stopPropagation();
    isZoomed = !isZoomed;
    lightboxImg.classList.toggle('zoomed');
});

// ESC key to close
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});
