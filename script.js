const text = "Lindokuhle Mgoduka Portfolio";
const typingElement = document.getElementById("typing-text");

let i = 0;
let isDeleting = false;

const typingSpeed = 120;
const deletingSpeed = 70;
const pauseTime = 1500;

function typeEffect(){

    if(!typingElement) return;

    if(!isDeleting){

        typingElement.textContent = text.substring(0, i + 1);

        i++;

        if(i === text.length){

            isDeleting = true;

            setTimeout(typeEffect, pauseTime);

            return;
        }

        setTimeout(typeEffect, typingSpeed);

    }else{

        typingElement.textContent = text.substring(0, i - 1);

        i--;

        if(i === 0){
            isDeleting = false;
        }

        setTimeout(typeEffect, deletingSpeed);
    }
}

typeEffect();

const images = [
"me.jpg",
"award.JPG",
"MyGrad.jpg",
];

let index = 0;

setInterval(() => {

    const slider = document.getElementById("slider");

    slider.style.opacity = 0;

    setTimeout(() => {

        index = (index + 1) % images.length;

        slider.src = images[index];

        slider.style.opacity = 1;

    }, 400);

}, 5000);

function revealCards(){

    const cards = document.querySelectorAll(".card, .price-box");

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight - 50){
            card.classList.add("show");
        }

    });
}

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

if(toggle && nav){

    toggle.addEventListener("click", () => {

        nav.classList.toggle("active");
    });
}

const sections = document.querySelectorAll("section, h2[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if(scrollY >= top){
            current = section.getAttribute("id");
        }

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});