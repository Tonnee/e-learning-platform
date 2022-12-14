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

// Review Slick Slider
$('.review_main').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    asNavFor: '.review_img_main',
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 9000,
    prevArrow: '<span class="slick-prev"><i class="bi bi-chevron-left"></i></span>',
    nextArrow: '<span class="slick-next"><i class="bi bi-chevron-right"></i></span>'
});

$('.review_img_main').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    asNavFor: '.review_main',
    pauseOnHover: true,
    arrows: false
});

// Animation on scroll
AOS.init({
    offset: 30,
    once: true,
    duration: 1000,
});

// Outline Slick Slider
$('.outline_slider').slick({
    infinite: true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
        {
          breakpoint: 575,
          settings: {
            dots: false
          }
        }
    ]
});
// jQuery Plugin: http://flaviusmatis.github.io/simplePagination.js/

var items = $(".list-wrapper .list-item");
var numItems = items.length;
var perPage = 5;

items.slice(perPage).hide();

$('#pagination-container').pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: "&laquo;",
    nextText: "&raquo;",
    onPageClick: function (pageNumber) {
        var showFrom = perPage * (pageNumber - 1);
        var showTo = showFrom + perPage;
        items.hide().slice(showFrom, showTo).show();
        $('body,html').animate({
            scrollTop :0
        }, 100);
    }
});

