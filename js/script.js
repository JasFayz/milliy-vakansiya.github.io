$(document).ready(function () {

    if ($(document).width() < 776) {
        $('.mobile__btn button').click(function () {
            $('.main_nav').toggleClass('show')
        });
        $('.js_close_main-nav').click(function () {
            $('.main_nav').removeClass('show')
        });
    }


    $('.grouped').click(function (e) {
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
        autoHeight: true,
        center: true,
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
                items: 4,
                stagePadding: 0,

            },
            991: {
                items: 3,
                stagePadding: 0,
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
                stagePadding: 0,

            },
            991: {
                items: 3,
                nav: true,
                stagePadding: 0,
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
        $('#vacancies__tab-slider').addClass('owl-carousel');
        $('.btn-group-slider').addClass('owl-carousel owl-theme')


        $('.btn-group-slider').owlCarousel({
            items: 2,
            loop: true,
            margin: 10,
            autoWidth: true,
            dots: false,
            nav: false,
            autoHeight: true,
            // center: true,
            navText: ["<div class='prev-btn'><img src='./image/icon_prev-btn.svg' width='30'></div>", "<div class='next-btn'><img src='./image/icon_next-btn.svg' width='30'></div>"],
            responsive: {
                600: {
                    items: 6,
                    // nav: true,
                }
            }
        });

        $('.swipe__btn').click(function () {
            $('.statistic').toggleClass('hiden')
        })




        $('.vacancy__list> .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            autoWidth: true,
            autoHeight: true,
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

            autoHeight: true,
            dots: false,
            nav: false,
        });
        $('#vacancies__tab-slider').owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            autoWidth: true,
            center: true,
            dots: false,
            nav: false,

        });

        $('.filter_mobile_btn').click(function () {
            $('.list__filters').toggleClass('open')
            $('.filter__header').toggleClass('open')
        });
    }
    $('.video__play').click(function () {
        $(this).siblings('video').get(0).play();
        $(this).siblings('video').attr('controls', true)
        $(this).hide();
    })
    $('.video__size').click(function () {
        let elem = $(this).siblings('video').get(0);
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    })
});