'use strict';

// Menu collapse

$('.menu-btn').click(function(){
    $('.side-bar').addClass('active');
});

$('.close-btn').click(function(){
    $('.side-bar').removeClass('active');
});