// const navToggle =
//   document.querySelector('.nav-toggle');

// navToggle.addEventListener('click', () => {
//   document.body.classList.toggle('nav-open');
// });

let big_wrapper;
let hamburger_menu;

function declare() {
    big_wrapper = document.querySelector(".big-wrapper");
    hamburger_menu = document.querySelector(".hamburger-menu");
}


declare();

function events() {
    hamburger_menu.addEventListener("click", () => {
        big_wrapper.classList.toggle("nav-open");
    });
}

events();


const links = document.querySelectorAll(".my-nav-link");

function closeMenu() {
    console.log("sameer");
    big_wrapper.classList.remove("nav-open");
    console.log("chanchal");
}
links.forEach((link) => link.addEventListener("click", () => closeMenu()));

const myCarouselElement = document.querySelector('#myCarousel')
const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 5000,
    wrap: false
})