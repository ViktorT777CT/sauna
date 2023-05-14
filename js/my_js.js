
$(document).ready(function(){

        $(".owl-carousel").owlCarousel();

});

$('.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    margin: 20,
    responsive:{
        0:{
            items:1,
            nav: false
        },
        1200:{
            items:1,
            nav: true
        }
    }
})