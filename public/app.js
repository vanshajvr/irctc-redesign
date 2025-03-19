document.addEventListener("DOMContentLoaded", () => {
    // Select the toggle button (Make sure the ID matches your HTML)
    const toggleButton = document.getElementById("toggle-icon");

    // Select the body element for applying dark mode
    const body = document.body;

    // Check if the button exists before adding event listener
    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            // Toggle dark mode class on body
            body.classList.toggle("dark-mode");

            // Toggle between moon and sun icons (optional)
            if (body.classList.contains("dark-mode")) {
                toggleButton.classList.replace("fa-moon", "fa-sun");
            } else {
                toggleButton.classList.rep;

console.log("app.js is loaded!");

