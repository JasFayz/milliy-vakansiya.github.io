$(document).ready(function () {


    if ($(window).width() < 991) {
        $('.mobile__button button').click(function () {
            $('#nav_menu').toggleClass('show')
        })
    }


    $('.type-carousel').owlCarousel({
        items: 2,
        loop: true,
        margin: 10,
        autoWidth: true,
        dots: false,
        nav: true,
        navText: ["<div class='prev-btn'><img src='./image/icon_prev-btn.svg' width='16'></div>", "<div class='next-btn'><img src='./image/icon_next-btn.svg' width='16'></div>"],
        responsive: {
            600: {
                items: 6
            }
        }
    })

    $('.tips-carousel').owlCarousel({
        loop: true,
        margin: 32,
        nav: true,
        items: 4,
        stagePadding: 0,
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
    })

    $('.useful-links_carousel').owlCarousel({
        loop: true,
        margin: 32,
        nav: true,
        items: 2,
        stagePadding: 0,
        autoplay: true,
        dots: false,
        singleItem: true,
        navText: ["<div class='prev-btn'><img src='./image/icon_prev-btn-blue.svg' width='32'></div>", "<div class='next-btn'><img src='./image/icon_next-btn-blue.svg' width='32'></div>"],
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
            556: {
                items: 1
            }
        }
    })


    $('.js_popup').click(function (e) {

        console.log(e.originalEvent.layerX, e.originalEvent.layerY)

        let popup = $('.map_popup');
        let regionName = $(e.delegateTarget).attr('data-name');

        var left = (e.originalEvent.layerX - popup.width() / 2 - 15) + 'px';
        var top = (e.originalEvent.layerY - popup.height() - 50) + 'px';
        popup.css({
            top: top,
            left: left
        })
        popup.find('.title b').text(regionName);
        popup.addClass('show');

        // setTimeout(function () {
        //     popup.removeClass('show');
        // }, 10000)

    })
})