document.addEventListener("DOMContentLoaded", function () {

    // Navbar Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    // Image Slider
    let currentIndex = 0;
    const images = document.querySelectorAll(".slider img");
    const totalImages = images.length;

    function moveSlider() {
        currentIndex = (currentIndex + 1) % totalImages;
        document.querySelector(".slider").style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(moveSlider, 3000); // Change image every 3 seconds

});

// Train Search Function (Example)
function searchTrain() {
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const date = document.getElementById("date").value;
    
    if (from && to && date) {
        alert(`Searching trains from ${from} to ${to} on ${date}`);
    } else {
        alert("Please fill in all fields.");
    }
}
