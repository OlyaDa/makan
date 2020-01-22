
//input mask

$('.phoneidcl').inputmask('+380(99) 999-99-99',{ "oncomplete": function(){
        $(".disbutt").prop("disabled", false);
    }, "onincomplete": function(){ $(".disbutt").prop("disabled", true); } });

//modal window

$(document).ready(function() {
    $('.popup-link').magnificPopup();
});

//mobile menu (header)

$(function(){
    $('.toggle-menu').on('click',function(){
        $('.mobile-menu').toggleClass('show');
        $( ".toggle-menu" ).toggleClass( "menu-on");
    });
});

$(document).ready(function() {
    $('.mobile-menu').click(function () {
        $('.mobile-menu').removeClass('show');
        $('.toggle-menu').removeClass('menu-on');
    });

    $(document).ready(function() {
        $('.nav-link-new').click(function () {
            $('.mobile-menu').removeClass('show');
            $('.toggle-menu').removeClass('menu-on');
        });

        $('.cls').click(function () {
            $('.mobile-menu').removeClass('show');
            $('.toggle-menu').removeClass('menu-on');
        });
    });
});

//slider for "office"

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-long-arrow-alt-left"></i> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-long-arrow-alt-right"></i> </button>',
    fade: true,
    asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: false,
});

//slider for "soffits"

$('.soffits-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: false,
    speed: 1000,
    centerMode: true,
    centerPadding: '0px',
    prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-long-arrow-alt-left"></i> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-long-arrow-alt-right"></i> </button>',
    responsive: [
        {
            breakpoint: 993,
            settings: {
                slidesToShow: 3,
            }
        },

        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                arrows: false,
            }
        },

        {
            breakpoint: 701,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        },

        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                arrows: false,
                autoplay: false,
            }
        },

        // {
        //     breakpoint: 371,
        //     settings: {
        //         slidesToShow: 1,
        //         arrows: false,
        //         autoplay: false,
        //     }
        // }
    ]
});

//slider for "reviews"

$('.reviews-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-long-arrow-alt-left"></i> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-long-arrow-alt-right"></i> </button>',
    dots: false,
    autoplay: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },

        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 461,
            settings: {
                slidesToShow: 1,
                autoplay: false,
            }
        },
    ]
});

//slider for "certificates"

$('.certificates-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: false,
    centerMode: true,
    slickGoTo: 2,
    centerPadding: '0px',
    prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-long-arrow-alt-left"></i> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-long-arrow-alt-right"></i> </button>',
    responsive: [
        {
            breakpoint: 993,
            settings: {
                centerPadding: '0px',
                slidesToShow: 3,
            }
        },

        {
            breakpoint: 769,
            settings: {
                centerPadding: '0px',
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 411,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        },
    ]
});

//scroll

$('.nav-link-new').mPageScroll2id();

//animation

function ready() {
    if(window.innerWidth <= 992) {
        AOS.init({
            disable: true,
        });
    }
    else {
        AOS.init({
            disable: false,
        });
    }
};


ready();
