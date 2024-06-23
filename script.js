let slideIndex = 0;
        const slides = document.querySelectorAll('.slideshow img');

        function showSlides() {
            slides.forEach((slide, index) => {
                slide.classList.remove('active');
                if (index === slideIndex) {
                    slide.classList.add('active');
                }
            });
            slideIndex = (slideIndex + 1) % slides.length;
        }

        setInterval(showSlides, 3000);

          

const testimonialsContainer = document.querySelector('.testimonials');
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

// Clone testimonials for infinite scrolling effect
testimonials.forEach(testimonial => {
    const clone = testimonial.cloneNode(true);
    testimonialsContainer.appendChild(clone);
});

// Initial settings
let currentIndex = 0;
let isTransitioning = false;

function showNextTestimonial() {
    if (!isTransitioning) {
        isTransitioning = true;
        currentIndex++;
        const offset = -(testimonials[currentIndex % totalTestimonials].offsetWidth * currentIndex);

        testimonialsContainer.style.transition = 'transform 0.5s ease-in-out';
        testimonialsContainer.style.transform = `translateX(${offset}px)`;

        if (currentIndex >= totalTestimonials) {
            setTimeout(() => {
                testimonialsContainer.style.transition = 'none';
                currentIndex = 0;
                testimonialsContainer.style.transform = `translateX(0)`;
                setTimeout(() => {
                    testimonialsContainer.style.transition = 'transform 0.5s ease-in-out';
                    isTransitioning = false;
                }, 50); // Re-enable transition after resetting
            }, 500); // Time to wait for the scroll animation to finish
        } else {
            setTimeout(() => {
                isTransitioning = false;
            }, 500); // Ensure no new transition happens during the current one
        }
    }
}

setInterval(showNextTestimonial, 3000);
