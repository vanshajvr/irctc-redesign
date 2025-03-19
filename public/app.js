document.addEventListener("DOMContentLoaded", function () {
    // Toggle Navigation Menu
    const toggleBtn = document.querySelector(".toggle-btn");
    const navLinks = document.querySelector(".nav-links");

    toggleBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Image Slider
    let index = 0;
    const slides = document.querySelectorAll(".slider img");

    function changeSlide() {
        slides.forEach((img, i) => {
            img.style.transform = `translateX(-${index * 100}%)`;
        });
        index = (index + 1) % slides.length; // Loop back to first image
    }

    setInterval(changeSlide, 3000); // Change image every 3 seconds
});
