
let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow img');
const slideshow = document.querySelector('.slideshow');
const totalSlides = slides.length;
function showSlides(n)
{
    slideIndex = (n + totalSlides) % totalSlides; 
    slideshow.style.transform = `translateX(-${slideIndex * 100}%)`; // Slide effect
}
document.querySelector('.prev').addEventListener('click', () => showSlides(slideIndex - 1));
document.querySelector('.next').addEventListener('click', () => showSlides(slideIndex + 1));
setInterval(() => showSlides(slideIndex + 1), 5000);
