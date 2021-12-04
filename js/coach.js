$(function() {

           /* БУРГЕР */

  $('.burger').click(function(event) {
    event.preventDefault();

    $(this).toggleClass('active');
    $('.nav').toggleClass('active')
    $('.header').toggleClass('active');

  });

            /* АКТИВНОСТЬ ССЫЛОК НАВИГАЦИИ */

  $('.links').click(function() {
    $('.links').removeClass('active');
    $(this).toggleClass('active');
  });

  $('.links').click(function(event) {
      event.preventDefault();

      $('.nav').removeClass('active');
      $('.burger').removeClass('active');
      $('.header').removeClass('active');
  });

  AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    offset: 0,
    delay: 0,
    duration: 1500,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-top',
  })







})
