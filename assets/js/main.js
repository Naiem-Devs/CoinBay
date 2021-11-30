(function($) {
    "use strict";

    // menu 
    $('.siteBar-btn').click(function() {
        $('.mobile-menu').toggleClass('siteBar');
    });

    // owlCarousel
    $(".Partner_slider").owlCarousel({
        loop: true,
        margin: 30,
        items: 5,
        navText: [
            '<i ></i>',
            '<i class="right"></i>'
        ],
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            767: {
                items: 3
            },
            992: {
                items: 5
            }
        }
    });



})(jQuery);