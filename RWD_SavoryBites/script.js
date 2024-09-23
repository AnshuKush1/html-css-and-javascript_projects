// GSAP Animation
gsap.from(".image-1", 1.5, {opacity: 0, y: 150, delay: 0.6});
gsap.from("h1", 1.2, {opacity: 0, y: -80, delay: 1.4});
gsap.from("p", 1.2, {opacity: 0, y: -80, delay: 1.25});
gsap.from("button", 1.2, {opacity: 0, y: -80, delay: 1});

// Toggle Menu Function
const menu = document.querySelector(".menu");
const toggle = document.getElementById("toggle");

toggle.onclick = function () {
    menu.classList.toggle("active");
}