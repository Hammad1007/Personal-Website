// Welcome to script.js file
// All of the functionality is here
// File starts here

let menu = document.querySelector('#menu-icon');
let navaber = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navaber.classList.toggle('.active');
};

const sr = ScrollReveal ({
    distance: '80px', 
    duration: 2800, reset: true
})

sr.reveal('.text,.social', {delay: 300, origin: 'bottom'})
sr.reveal('.header', {delay: 100, origin: 'top'})
sr.reveal('.text,.social', {delay: 300, origin: 'bottom'})

