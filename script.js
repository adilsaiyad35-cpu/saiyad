const images = [
    "home.jfif",
    "home2.jfif",
    "home3.jfif",
    "home4.jfif"
];

let current = 0;
const img = document.getElementById("aboutImage");

setInterval(() => {
    img.style.opacity = 0;

    setTimeout(() => {
        current = (current + 1) % images.length;
        img.src = images[current];
        img.style.opacity = 1;
    }, 500);

}, 10000); // 10 seconds

// Mobile menu toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Navbar link pe click karne se menu band ho jaye
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});
