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
const menuToggle = document.getElementById('menuToggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
