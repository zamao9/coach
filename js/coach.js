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








})
