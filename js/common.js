// Header > nav-menu
function toggleMenu() {
    const nav = document.getElementById("nav-menu");
    nav.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    toggleButton.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
});
