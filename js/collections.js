let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-images img');
const dots = document.querySelectorAll('.carousel-dots span');
const totalSlides = slides.length;
const slideWidth = slides[0].clientWidth;  // Get the width of each slide

// Move carousel by a specific direction
function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Loop back to the last image
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0; // Loop back to the first image
    }

    updateCarousel();
}

// Navigate to a specific slide
function currentSlide(index) {
    currentIndex = index - 1; // The index in the dots is 1-based, but we use 0-based
    updateCarousel();
}

// Update carousel to show the correct slide
function updateCarousel() {
    const offset = -currentIndex * slideWidth;  // Calculate the offset based on the slide width
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}px)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Initialize the carousel
updateCarousel();