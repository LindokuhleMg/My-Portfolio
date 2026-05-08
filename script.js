
// Text that will be typed in the navbar
const text = "Lindokuhle Mgoduka Portfolio";
const typingElement = document.getElementById("typing-text"); // Get the HTML element where typing will appear
let i = 0;
// Controls whether we are typing or deleting
let isDeleting = false;

// Speed settings (milliseconds)
const typingSpeed = 120;
const deletingSpeed = 70;
const pauseTime = 1500;

// Function that handles typing effect
function typeEffect(){

    // Stop if element is not found
    if(!typingElement) return;

    // Typing mode
    if(!isDeleting){

        // Show text up to current index
        typingElement.textContent = text.substring(0, i + 1);

        i++;

        // If full text is typed, start deleting after pause
        if(i === text.length){

            isDeleting = true;

            setTimeout(typeEffect, pauseTime);

            return;
        }

        // Continue typing
        setTimeout(typeEffect, typingSpeed);

    }else{

        // Deleting mode (remove characters one by one)
        typingElement.textContent = text.substring(0, i - 1);

        i--;

        // If fully deleted, switch back to typing
        if(i === 0){
            isDeleting = false;
        }

        setTimeout(typeEffect, deletingSpeed);
    }
}

// Start typing animation
typeEffect();


// List of images for the slider
const images = [
"me.jpg",
"award.JPG",
"MyGrad.jpg",
];

// Current image index
let index = 0;

// Change image every 5 seconds
setInterval(() => {

    // Get image element
    const slider = document.getElementById("slider");

    // Fade out effect
    slider.style.opacity = 0;

    setTimeout(() => {

        // Move to next image
        index = (index + 1) % images.length;

        // Update image source
        slider.src = images[index];

        // Fade in effect
        slider.style.opacity = 1;

    }, 400);

}, 5000);

// Shows cards when they enter the viewport (SCROLL ANIMATION (REVEAL CARDS))
function revealCards(){

    // Select all cards
    const cards = document.querySelectorAll(".card, .price-box");

    cards.forEach(card => {

        // Get position of card
        const top = card.getBoundingClientRect().top;

        // If card is visible on screen, show it
        if(top < window.innerHeight - 50){
            card.classList.add("show");
        }

    });
}

// Run on scroll and on page load
window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);


//MOBILE MENU TOGGLE
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

// Only add event if elements exist
if(toggle && nav){

    toggle.addEventListener("click", () => {

        // Show or hide mobile menu
        nav.classList.toggle("active");
    });
}


// Get all sections with IDs
const sections = document.querySelectorAll("section, h2[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        // Check position of section
        const top = section.offsetTop - 150;

        // Find which section is currently in view
        if(scrollY >= top){
            current = section.getAttribute("id");
        }

    });

    // Highlight active navigation link
    document.querySelectorAll(".nav-links a").forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});


// Close menu when a nav link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


// Close menu when clicking outside navbar
document.addEventListener("click", (e) => {

    const isClickInsideMenu = nav.contains(e.target);
    const isClickOnToggle = toggle.contains(e.target);

    if (!isClickInsideMenu && !isClickOnToggle) {
        nav.classList.remove("active");
    }

});


// Close menu when user scrolls
window.addEventListener("scroll", () => {
    nav.classList.remove("active");
});