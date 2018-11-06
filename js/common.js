//  SLIDER
$(document).ready(function(){
    $('.sl').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear'
});
});
//  SLIDER-REF
$('.sl-ref').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    responsive: [
        {
            breakpoint: 1190,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
var btnburger = document.getElementById('btn-burger');
var over = document.getElementById('over');
var menu = document.getElementById('menu-fix');
function opennav() {
    menu.style.opacity = '1';
    menu.style.zIndex = '3';
    over.style.opacity = '1';
    over.style.zIndex = '2';
    over.style.backgroundColor = 'rgba(0, 0, 0, 0.54)';
}
function closenav() {
    menu.style.opacity = '0';
    menu.style.zIndex = '-1';
    // menu.style.display = 'none';
    over.style.opacity = '0';
    over.style.zIndex = '-1';
}

over.onclick = function () {
    over.style.zIndex = '-1'
    over.style.opacity = '0';
    menu.style.opacity = '0';
    menu.style.zIndex = '-1';
}
