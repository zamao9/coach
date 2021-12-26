const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows());
  }
};

if (isMobile.any()) {
  document.body.classList.add('_touch');
} else {
  document.body.classList.add('_pc');
};




$(function () {


                              /* SCROLL */

  $("[data-scroll]").click(function(event) {
    event.preventDefault();

    var blockId = $(this).data('scroll'),
        blockOffset = $(blockId).offset().top - document.querySelector('header').offsetHeight;

    $("html, body").animate ({
      scrollTop: blockOffset
    }, 1000);
  });

  var headerH = $("#header").innerHeight(),
      scrollOffset = 0;


  $(window).on("scroll", function() {

    scrollOffset = $(this).scrollTop();

    if( scrollOffset >= 300) {
      $('.scroll').addClass('fixed');
    } else {
      $('.scroll').removeClass('fixed');
    }

  });

                  /**/

  $('.scroll').click(function() {
    $('.links:first').addClass('active');

  });






                              /* BURGER */

  $('.burger').click(function(event) {
    event.preventDefault();

    $(this).toggleClass('active');
    $('.nav').toggleClass('active');
    $('.header').toggleClass('active');

  });

  $("#linav").click(function() {

    $("#nav a").removeClass('active');
    $(this).addClass('active');

    $('.header').removeClass('active');
    $('.nav').removeClass('active');
    $('.burger').removeClass('active');

  });




                              /* SLIDER */

  $('.slider').slick({
    fade: true,
    speed: 1000,
    autoplay: true,
    auyoplaySpeed: 2000,
  });



})
