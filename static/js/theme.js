/*
 Theme Name: Bespoke - Creative One Page HTML5 Template 
 Theme URL: http://nasfactor.com/themes/bespoke/
 Author: nasirwd
 Author URI: http://nasfactor.com/
 Description: Bespoke - Creative One Page HTML5 Template 
 Version: 1.0
 */

/*=======================================================================
 [Table of contents]
 =========================================================================
 [01] HEADER
 [02] TESTMONIAL
 [03] TESTMONIAL WITH BG
 [04] WORK CAROUSEL
 [05] STICKY HEADER
 [06] BACK TO TOP
 [07] AJAX CONTACT FORM
 [08] AJAX SUBSCRIPTION FORM
 
 
 
 ==========================================================================*/

(function($){
    'use strict';
    /*=======================================================================
     [01] REVOLUTION SLIDER
     =========================================================================*/

    $(window).on('load', function(){
        var rev = $(".slider");
        if(rev.length > 0)
        {
            $('.tp-banner').revolution({
                delay : 7000,
                startwidth : 1170,
                startheight : 700,
                startWithSlide : 0,
                fullScreenAlignForce : "off",
                navigationType : "bullet",
                navigationArrows : "on",
                navigationStyle : "round",
                touchenabled : "on",
                onHoverStop : "on",
                navOffsetHorizontal : 0,
                navOffsetVertical : 20,
                shadow : 0,
                fullWidth : "on",
                fullScreen : "on",
                navigationVOffset : 65
            });
        }

    });

    /*=======================================================================
     [02] TESTMONIAL
     =========================================================================*/
    var testCarousel = $('#testmonial');
    if(testCarousel.length > 0){
        testCarousel.owlCarousel({
            items : 1,
            dots : false,
            autoplay : true
        });
    }
    ;


    /*=======================================================================
     [03] TESTMONIAL WITH BG
     =========================================================================*/
    var testmonialCaro = $('#testmonialCaro');
    if(testmonialCaro.length > 0){
        testmonialCaro.owlCarousel({
            items : 1,
            dots : true,
            autoplay : false
        });
    }
    ;

    /*=======================================================================
     [04] WORK CAROUSEL
     =========================================================================*/
    var workCarousel = $('#workCarousel');
    if(workCarousel.length > 0){
        workCarousel.slick({
            centerMode : true,
            slidesToShow : 1,
            centerPadding : '275px',
            dots : false,
            prevArrow : '<div class="slick-prev slick-arrow"><i class="flaticon-arrows-2"></i></div>',
            nextArrow : '<div class="slick-next slick-arrow"><i class="flaticon-arrows-3"></i></div>',
            responsive : [
                {
                    breakpoint : 1440,
                    settings : {
                        slidesToShow : 1,
                        centerPadding : '175px'
                    }
                },
                {
                    breakpoint : 767,
                    settings : {
                        slidesToShow : 1,
                        centerPadding : '0'
                    }
                },
                {
                    breakpoint : 1280,
                    settings : {
                        slidesToShow : 1,
                        centerPadding : '80px'
                    }
                }
            ]
        });
    }
    ;


    /*=======================================================================
     [05] STICKY HEADER
     =========================================================================*/
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 300)
        {
            $(".isSticky").addClass('fixedHeader animated slideInDown');
        }else
        {
            $(".isSticky").removeClass('fixedHeader animated slideInDown');
        }

        /*====== Menu Active on Scroll ======*/
        Scroll();
        Scroll2();
        Scroll3();
    });

    $('.mainMenu ul li.scroll > a, .mouseSlider a, .mainMenu_home3 ul li.scroll > a').on('click', function(){
        if($(this).parent().hasClass('has-child'))
        {
            $(this).parent().children('ul').slideToggle('slow');
        }
        $('html, body').animate({scrollTop : $(this.hash).offset().top - 68}, 1000);
        return false;
    });

    function Scroll(){

        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;

        $('.mainMenu').find('.scroll > a').each(function(){
            var atr = $(this).attr('href');
            if($(atr).length > 0)
            {
                contentTop.push($($(this).attr('href')).offset().top);
                contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
            }
        });

        $.each(contentTop, function(i){
            if(winTop > contentTop[i] - rangeTop){
                $('.mainMenu li.scroll').removeClass('active').eq(i).addClass('active');
            }
        });
    }



    $('.fixednavHeader ul li.scroll > a, .mouseSlider2 > a').on('click', function(){
        if($(this).parent().hasClass('has-child'))
        {
            $(this).parent().children('ul').slideToggle('slow');
        }
        $('html, body').animate({scrollTop : $(this.hash).offset().top + 10}, 1000);
        return false;
    });



    function Scroll2(){

        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;

        $('.fixednavHeader').find('.scroll > a').each(function(){
            var atr = $(this).attr('href');
            if($(atr).length > 0)
            {
                contentTop.push($($(this).attr('href')).offset().top);
                contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
            }
        });
        $.each(contentTop, function(i){
            if(winTop > contentTop[i] - rangeTop){
                $('.fixednavHeader li.scroll, .mouseSlider2').removeClass('active').eq(i).addClass('active');
            }
        });
    }

    function Scroll3(){

        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;

        $('.mainMenu_home3').find('.scroll > a').each(function(){
            var atr = $(this).attr('href');
            if($(atr).length > 0)
            {
                contentTop.push($($(this).attr('href')).offset().top);
                contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
            }
        });
        $.each(contentTop, function(i){
            if(winTop > contentTop[i] - rangeTop){
                $('.mainMenu_home3 li.scroll').removeClass('active').eq(i).addClass('active');
            }
        });
    }

    /*=======================================================================
     [06] BACK TO TOP
     =========================================================================*/
    $(window).on('scroll', function(){
        if($(window).scrollTop() > $(window).height())
        {
            $("#backToTop").addClass('showit');
        }
        else
        {
            $("#backToTop").removeClass('showit');
        }

    });
    $("body, html").on("click", "#backToTop", function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop : 0}, 800);
    });



    /*=======================================================================
     [07] AJAX CONTACT FORM
     =========================================================================*/
    if($("#contactForm").length > 0)
    {
        $("#contactForm").on('submit', function(e){
            e.preventDefault();
            $('#con_submit').val('Processsing...');

            var con_name = $("#con_name").val(),
                con_phone = $("#con_phone").val(),
                con_email = $("#con_email").val(),
                con_company = $("#con_company").val(),
                con_msg = $("#con_msg").val(),
                required = 0;

            $(".required", this).each(function()
            {
                if($(this).val() === '')
                {
                    $(this).addClass('reqError');
                    required += 1;
                }
                else
                {
                    if($(this).hasClass('reqError'))
                    {
                        $(this).removeClass('reqError');
                        if(required > 0)
                        {
                            required -= 1;
                        }
                    }
                }
            });
            if(required === 0)
            {
                $.ajax({
                    type : "POST",
                    url : 'php/mail.php',
                    data : {
                        con_name : con_name,
                        con_phone : con_phone,
                        con_email : con_email,
                        con_company : con_company,
                        con_msg : con_msg
                    },
                    success : function()
                    {
                        $("#contactForm input, #contactForm textarea").val('');
                        $(".contactSuccess").fadeIn('slow');
                        $("#con_submit").val('Done!');
                        setTimeout(function(){
                            $(".contactSuccess").fadeOut('slow');
                        }, 2500);
                    }
                });
            }
            else
            {
                $("#con_submit").val('Failed!');
            }

        });
        $(".required").on('keyup', function(){
            $(this).removeClass('reqError');
        });
    }


    /*=======================================================================
     [08] AJAX SUBSCRIPTION FORM
     =========================================================================*/
    if($("#subscriptForm").length > 0)
    {
        $("#subscriptForm").on('submit', function(e){
            e.preventDefault();
            var sub_email = $("#sub_email").val();
            $('#sub_submit').val('Processsing...');

            if(sub_email === '')
            {
                $("#sub_email").addClass('reqError');
                $('#sub_submit').val('Failed!');
            }
            else
            {
                $("#sub_email").removeClass('reqError');
                $.ajax({
                    type : "POST",
                    url : "php/subscribe.php",
                    data : {sub_email : sub_email},
                    success : function()
                    {
                        $("#subscriptForm input").val('');
                        $("#sub_submit").val('Done!');
                        $(".subscriptionSuccess").fadeIn('slow');
                        setTimeout(function(){
                            $(".subscriptionSuccess").fadeOut('slow');
                        }, 2500);
                    }
                });

            }
        });
    }

    /*=======================================================================
     [08] PERELAX
     =========================================================================*/
    $(document).ready(function(){
        if($('.perelaxBg1').length > 0){
            $('.perelaxBg1').parallax("0", 0.1);
        }
        if($('.perelaxBg2').length > 0){
            $('.perelaxBg2').parallax("0", 0.1);
        }
        if($('.perelaxBg3').length > 0){
            $('.perelaxBg3').parallax("0", 0.1);
        }
        if($('.perelaxBg4').length > 0){
            $('.perelaxBg4').parallax("0", 0.1);
        }
        if($('.perelaxBg5').length > 0){
            $('.perelaxBg5').parallax("0", 0.1);
        }
    });


    /*=======================================================================
     [09] BLOG CAT TOGGLE
     =========================================================================*/
    if($('.blogCat').length > 0){
        $('.blogCat h6').on('click', function(){
            $('.blogCat').toggleClass('active');
        });
    }

    /*=======================================================================
     [10] PRELOADER
     =========================================================================*/
    $(window).load(function(){
        if($('.preloader').length > 0){
            $('.preloader').delay(800).fadeOut('slow');
        }
    });

    /*=======================================================================
     [11] Single Blog Comment Has Top
     =========================================================================*/
    var jon_comment = $('.jon_comment');
    jon_comment.on('click', function(){
        $('html, body').animate({scrollTop : $(this.hash).offset().top - 100}, 1000);
        return false;
    });

    /*=======================================================================
     [11] Typing Animation
     =========================================================================*/
    var TxtType = function(el, toRotate, period){
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    TxtType.prototype.tick = function(){
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if(this.isDeleting){
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        }else{
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if(this.isDeleting){
            delta /= 2;
        }
        if(! this.isDeleting && this.txt === fullTxt){
            delta = this.period;
            this.isDeleting = true;
        }else if(this.isDeleting && this.txt === ''){
            this.isDeleting = false;
            this.loopNum ++;
            delta = 500;
        }

        setTimeout(function(){
            that.tick();
        }, delta);
    };
    window.onload = function(){
        var elements = document.getElementsByClassName('typewrite');
        for(var i = 0; i < elements.length; i ++){
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if(toRotate){
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap{border-right: 10px solid #fff;}";
        document.body.appendChild(css);
    };

    /*=======================================================================
     [11] Home3 Header Nav
     =========================================================================*/
    $(window).on('scroll', function(){
        var wh = parseInt($(document).height()) - 1000;
        if($(this).scrollTop() > wh){
            $(".header3").addClass('active');
        }
        else{
            $(".header3").removeClass('active');
        }
    });

    /*=======================================================================
     [12] Mobile Menu
     =========================================================================*/
    if($('.mobileBar').length > 0){
        $('.mobileBar').on('click', function(){
            $(this).toggleClass('active');
            $('.mainMenu > ul').slideToggle('slow');
        });
        if($(window).width() < 1280)
        {
            $(".mainMenu li.has-menu-items > a").on('click', function(){
                $(this).parent().toggleClass('active');
                $(this).parent().children('.sub-menu').slideToggle('slow');
                return false;
            });
        }
    }

    //=======================================================
    // Home 3 Mobile Menu
    //=======================================================
    if($(".mainMenu_home3").length > 0)
    {
        var todg = true;
        $(".mobileBar.home3").on("click", function(e){
            e.preventDefault();
            if(todg)
            {
                $(".mainMenu_home3 > ul").animate({'right' : '0px'}, 400);
                todg = false;
            }else
            {
                $(".mainMenu_home3 > ul").animate({'right' : '-245px'}, 400);
                todg = true;
            }
        });
        $(document).on('mouseup', function(e){
            var container = $(".mainMenu_home3 > ul");

            if(! container.is(e.target) && container.has(e.target).length === 0)
            {
                $(".mainMenu_home3 > ul").animate({'right' : '-245px'}, 400);
                todg = true;
            }

        });
        if($(".mainMenu_home3 > ul li a").on('click', function(e){
            e.preventDefault();
            $(".mainMenu_home3 > ul").animate({'right' : '-245px'}, 400);
        }))
            ;
    }
    ;



})(jQuery);
