// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Get the carousel element by its ID
    const carousel = document.getElementById('carouselExample');

    // Initialize the Bootstrap Carousel with the `pause` option set to false
    const carouselInstance = new bootstrap.Carousel(carousel, {
        pause: false // Disable pause on user interaction
    });
});