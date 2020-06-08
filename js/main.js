// const anime = require('animejs');

$(function(){
    $('.header_main_content_right').slick({
        arrows: false,
        vertical: false,
        dots: true,
        fade: true,
        // autoplay: true,
        dotsClass: 'header_dots',
        autoPlay: true,
    });


    $('.header_nav_btn').on('click', function(){
        $('.header_nav_items').slideToggle();
    });

    anime({
        targets: '.header_btn',
        translateX: 500,
        rotate: '1turn',
        duration: 2500
      });

      $(".header_nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
     
    
});

