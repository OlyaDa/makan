
//input mask

$('.phoneidcl').inputmask('+380(99) 999-99-99',{ "oncomplete": function(){
        $(".disbutt").prop("disabled", false);
    }, "onincomplete": function(){ $(".disbutt").prop("disabled", true); } });

//modal window

$(document).ready(function() {
    $('.popup-link').magnificPopup();
});

//video popup

$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});

//scroll

$('.nav-link-new').mPageScroll2id();

//
$(window).scroll(function() {
    let height = $(window).scrollTop();
    if(height > 1){
        $('.header').addClass('color');
    } else{
        $('.header').removeClass('color');
    }
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

        // $('.cls').click(function () {
        //     $('.mobile-menu').removeClass('show');
        //     $('.toggle-menu').removeClass('menu-on');
        // });
    });
});


//slider for "cars"

$('.cars-slider').slick({
    dots: false,
    prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-long-arrow-alt-left"></i> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-long-arrow-alt-right"></i> </button>',
    infinite: true,
});


//slider for "brands"

$('.brands-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-long-arrow-alt-left"></i> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-long-arrow-alt-right"></i> </button>',
    infinite: true,

    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }
        },

        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }
        },

        {
            breakpoint: 501,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }
        },
    ]
});

//slider for "reviews"

$('.reviews-slider').slick({
    dots: false,
    prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-long-arrow-alt-left"></i> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-long-arrow-alt-right"></i> </button>',
    infinite: true,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                arrows: false,
                dots: true,
            }
        },
    ]
});


//slider for "gallery"

$('.gallery-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-long-arrow-alt-left"></i> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-long-arrow-alt-right"></i> </button>',
    infinite: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },

        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }
        },

        {
            breakpoint: 568,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }
        },
    ]
});


//gallery popup
$(document).ready(function() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });

});

////select

var x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
