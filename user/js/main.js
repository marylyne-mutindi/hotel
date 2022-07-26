(function ($) {
    "use strict";
    var wWidth = $(window).width();
    var main_wind = $(window);

    jQuery(document).ready(function ($) {
        //-----stuck header-1 navigation------
        jQuery(".menuzord").menuzord({
            align: "right",
            trigger: "click",
            effect: "slide",
            indicatorFirstLevel: '<i class="fa fa-angle-down"></i>',
            indicatorSecondLevel: '<i class="ion-ios-plus-outline"></i>'
        });

        /*---------sticky menu------------*/
        main_wind.on('scroll', function () {
            if ($(this).scrollTop() > 0) {
                $('.sticky-menu').addClass('sticky');
            } else {
                $('.sticky-menu').removeClass('sticky');
            }
        });



        //---------venobox-----------
        $('.venobox').venobox();


        //-------------fun facts active---------------
        $('.counter').counterUp({
            //delay: 10, // the delay time in ms
            time: 800 // the speed time in ms
        });


        //----clamp text---
        $('.clamp-text').each(function (index, element) {
            $clamp(element, {
                clamp: 3
            });
        });


        //-----------contact form class add for css3 effect-------------
        $(".abinput-group>input, .abinput-group>textarea").on("focusin", function () {
            $(this).parent().addClass("input-effect");
        });


        //---------------latest year------------
        var date = new Date();
        var year = date.getFullYear();
        $(".update-year").append(year);



    }); //---end document ready----


    function getPosition(element) {
        var xPosition = 0;
        var yPosition = 0;

        while (element) {
            xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
            yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
            element = element.offsetParent;
        }
        return {
            x: xPosition,
            y: yPosition
        };
    }

    (function () {
        window.onload = function () {
            var check = $('#header-2');
            if (check.length) {
                var menu = document.getElementById('header-2');
            }
            //var menu = document.getElementById('header-2');
            var init = getPosition(menu).y;
            var docked;

            window.onscroll = function () {

                if (!docked && (init - scrollTop() < 0)) {
                    $('.sticky-menu2').addClass('sticky');
                    docked = true;
                } else if (docked && scrollTop() <= init) {
                    $('.sticky-menu2').removeClass('sticky');
                    docked = false;
                }
            };
        };

        function scrollTop() {
            return document.body.scrollTop || document.documentElement.scrollTop;
        }
    })();


    /*---------check availability date picker---------*/
    $(function () {
        var dateFormat = "mm/dd/yy",
            from = $("#booking-checkin")
            .datepicker({
                minDate: "new Date()",
                numberOfMonths: 1
            })
            .on("change", function () {
                to.datepicker("option", "minDate", getDate(this));
            }),
            to = $("#booking-checkout").datepicker({
                minDate: "new Date()",
                numberOfMonths: 1
            })
            .on("change", function () {
                from.datepicker("option", "maxDate", getDate(this));
            });

        function getDate(element) {
            var date;
            try {
                date = $.datepicker.parseDate(dateFormat, element.value);
            } catch (error) {
                date = null;
            }

            return date;
        }
    });


    //--------children quantity increase or decrease-----
    $(".increse").on('click', function () {
        var old = $(this).parent().find('#children').val();
        var newn = parseInt(old);
        $(this).parent().find('#children').val(newn + 1);
    });

    $(".decrese").on('click', function () {
        var old = $(this).parent().find('#children').val();
        var newn = parseInt(old);
        if (newn > 1) {
            $(this).parent().find('#children').val(newn - 1);
        }
    });

    //--------adult quantity increase or decrease-----
    $(".increse").on('click', function () {
        var old = $(this).parent().find('#adult').val();
        var newn = parseInt(old);
        $(this).parent().find('#adult').val(newn + 1);
    });

    $(".decrese").on('click', function () {
        var old = $(this).parent().find('#adult').val();
        var newn = parseInt(old);
        if (newn > 1) {
            $(this).parent().find('#adult').val(newn - 1);
        }
    });


    //-----------banner carousel-----------
    $(".hero-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplay: true,
        smartSpeed: 1000,
    });

    //-----------hotel testimonial-----------
    $(".hotel-testimonial .testimonial-wrapper").owlCarousel({
        items: 2,
        loop: true,
        dots: false,
        nav: true,
        margin: 140,
        autoplay: true,
        stagePadding: 50,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        smartSpeed: 1200,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 10,
                stagePadding: 0
            },
            480: {
                items: 1,
            },
            992: {
                items: 2,
            }
        }
    });


    //----------------home page room carousel active------------
    $('.carousel-img-v1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        fade: true,
        dots: true,
        cssEase: 'ease-in-out',
        speed: 1300,
        asNavFor: '.carousel-info-v1'
    });
    $('.carousel-info-v1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.carousel-img-v1',
        speed: 1100,
        autoplay: true,
        cssEase: 'ease-in-out',
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
    });


    //----------------home page room carousel-2 active------------
    $('.carousel-img-v2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        fade: true,
        dots: true,
        cssEase: 'ease-in-out',
        speed: 1200,
        asNavFor: '.carousel-info-v2'
    });
    $('.carousel-info-v2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.carousel-img-v2',
        speed: 1000,
        autoplay: true,
        cssEase: 'ease-in-out',
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
    });


    //-----------home-2 carousel-----------
    $(".t-carousel3").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        autoplay: false,
        smartSpeed: 1200
    });


    //--------------home-3 testimonial-------------
    $(".t-carousel10").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        margin: 30,
        autoplay: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        smartSpeed: 1200
    });
    
    
    /*-----preloader----*/
    main_wind.on('load', function() {
        $('#loading').fadeOut('slow');
    });


    //--------Scroll Top---------
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scroll-top').fadeIn();
            $('.scroll-top').removeClass('not-visible');
        } else {
            $('.scroll-top').fadeOut();
        }
    });
    $('.scroll-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });


}(jQuery));
