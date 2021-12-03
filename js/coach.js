$(function() {

  $('.burger').click(function(event) {
    event.preventDefault();

    $(this).toggleClass('active');
    $('.nav').toggleClass('active');
    $('.header').toggleClass('active');
  });



})
