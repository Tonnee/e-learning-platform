'use strict';

// Menu collapse
$('.menu-btn').click(function(){
    $('.side-bar').addClass('active');
});

$('.close-btn').click(function(){
    $('.side-bar').removeClass('active');
});

// Nav shadow
let scrollcount = window.scrollY;
const navBar = document.querySelector("nav");
const navbarHeight = navBar.offsetHeight;

const addClassOnScroll = () => navBar.classList.add("nav_shadow");
const removeClassonScroll = () => navBar.classList.remove("nav_shadow");

window.addEventListener('scroll', function() {
    scrollcount = window.scrollY;

    if (scrollcount >= navbarHeight) {
        addClassOnScroll();
    }
    else {
        removeClassonScroll();
    }
})

// Video Modal
$('.demo_video').magnificPopup({
    type: 'iframe'
});