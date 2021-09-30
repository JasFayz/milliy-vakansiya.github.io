$(document).ready(function () {


    if ($(document).width() < 776) {
        $('.mobile__btn button').click(function () {
            $('.main_nav').toggleClass('show')
        });
        $('.js_close_main-nav').click(function () {
            $('.main_nav').removeClass('show')
        });
    }


    $('.js_popup').click(function (e) {
        var popup = $('.map_popup');
        var regionName = $(e.delegateTarget).attr('data-name');
        popup.find('.title b').text(regionName);
        var left = (e.originalEvent.pageX - popup.width() / 2 - 15) + 'px';
        var top = (e.originalEvent.pageY - popup.height() - 50) + 'px';
        popup.css({
            top: top,
            left: left
        });

        popup.addClass('show');
        $('.map').mouseleave(function () {
            setTimeout(function () {
                $('.map_popup').removeClass('show');
            }, 2000)
        });
    })

    $('.type-carousel').owlCarousel({
        items: 2,
        loop: true,
        margin: 10,
        autoWidth: true,
        dots: false,
        nav: false,
        navText: ["<div class='prev-btn'><img src='./image/icon_prev-btn.svg' width='30'></div>", "<div class='next-btn'><img src='./image/icon_next-btn.svg' width='30'></div>"],
        responsive: {
            600: {
                items: 6,
                nav: true,
            }
        }
    });

    $('.tips-carousel').owlCarousel({
        loop: true,
        margin: 32,
        nav: true,
        items: 1,
        stagePadding: 80,
        dots: false,
        singleItem: true,
        navText: ["<div class='prev-btn'><img src='./image/icon_prev-btn-white.svg' width='32'></div>", "<div class='next-btn'><img src='./image/icon_next-btn-white.svg' width='32'></div>"],
        responsive: {
            1200: {
                items: 4
            },
            991: {
                items: 3
            },
            776: {
                items: 2
            },
            558: {
                items: 1
            }
        }
    });

    $('.useful-links_carousel').owlCarousel({
        loop: true,
        margin: 32,
        nav: true,
        items: 1,
        autoplay: true,
        dots: false,
        singleItem: true,
        stagePadding: 80,
        nav: false,
        navText: ["<div class='prev-btn'><img src='./image/icon_prev-btn-blue.svg' width='32'></div>", "<div class='next-btn'><img src='./image/icon_next-btn-blue.svg' width='32'></div>"],
        responsive: {
            1200: {
                items: 4,
                nav: true,
            },
            991: {
                items: 3,
                nav: true,

            },
            776: {
                items: 2,
                nav: true,

            },
            556: {
                items: 1,
                nav: false,
            }
        }
    });

    if ($(document).width() < 991) {
        $('.vacancy__list .row').addClass('owl-carousel owl-theme');
        $('.employer__list .row').addClass('owl-carousel owl-theme');
        $('.vacancies__tab .tab-content .row').addClass('owl-carousel');


        $('.vacancy__list> .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            autoWidth: true,
            dots: false,
            nav: false,
            responsive: {
                600: {
                    items: 2
                }
            }
        });
        $('.employer__list> .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            autoWidth: true,
            dots: false,
            nav: false,
        });
        $('.vacancies__tab .tab-content .row ').owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            autoWidth: true,
            dots: false,
            nav: false,
            center: true
        });
    }

});