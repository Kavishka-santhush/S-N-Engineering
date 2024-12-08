// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle form submission
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message. We will get back to you soon!');
    this.reset();
});

// Add scroll event listener for navigation background
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    }
});

// Image Slider
const sliderImages = [
    'gettyimages-1769425775-2048x2048.jpg',
    'gettyimages-1243618088-2048x2048.jpg',
    'gettyimages-1372488035-2048x2048.jpg',
    'gettyimages-2154601567-2048x2048.jpg',
    'gettyimages-1832608957-2048x2048.jpg'
];

let currentSlide = 0;

function showSlide(index) {
    const slider = document.querySelector('.slider-container img');
    const dots = document.querySelectorAll('.dot');
    
    if (!slider) return;

    if (index >= sliderImages.length) currentSlide = 0;
    if (index < 0) currentSlide = sliderImages.length - 1;

    slider.src = sliderImages[currentSlide];
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

document.querySelector('.prev')?.addEventListener('click', () => {
    currentSlide--;
    showSlide(currentSlide);
});

document.querySelector('.next')?.addEventListener('click', () => {
    currentSlide++;
    showSlide(currentSlide);
});

document.querySelectorAll('.dot')?.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Initialize map if on contact page
if (document.getElementById('map')) {
    const map = L.map('map').setView([6.7287294, 79.8976874], 15); // Updated coordinates
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: ' OpenStreetMap contributors'
    }).addTo(map);

    L.marker([6.7287294, 79.8976874]).addTo(map)
        .bindPopup('S&N Engineering')
        .openPopup();
}
