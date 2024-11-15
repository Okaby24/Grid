$('.owl-media ').owlCarousel({
    loop:true,
    margin: 0,
    nav:true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3,
            dots:true
        }
    }
})
$('.owl-events').owlCarousel({
    loop: true,
    margin: 80,
    dots: false,
    nav: false, 
    responsive: {
        0: {
            items: 1 
        },
        600: {
            items: 1 
        },
        1000: {
            items: 2 
        }
    }
});


$('.events__btn-left').click(function() {
    $('.owl-events').trigger('prev.owl.carousel');
});

$('.events__btn-right').click(function() {
    $('.owl-events').trigger('next.owl.carousel');
});



$('.owl-read ').owlCarousel({
    loop:true,
    margin: 21,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2,
            
        }
    }
})

$('.events__btn-left').click(function() {
    $('.owl-read').trigger('prev.owl.carousel');
});

$('.events__btn-right').click(function() {
    $('.owl-read').trigger('next.owl.carousel');
});