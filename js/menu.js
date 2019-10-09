$(function() {
    $('body').addClass('js');
  
    var $hamburger = $('.hamburger'),
        $nav = $('#site-nav'),
        $masthead = $('#masthead');
  
    $hamburger.click(function() {
      $(this).toggleClass('is-active');
      $nav.toggleClass('is-active');
      $masthead.toggleClass('is-active');
      return false; 
    })
});

$(function () {
    var hamburger = $('.hamburger'),
        $nav = $('#site-nav'),
        $masthead = $('#masthead');

    hamburger.mouseenter(function () {
        $(this).addClass('is-active');
        $nav.addClass('is-active');
        $masthead.addClass('is-active');
        return false;
    });

    $masthead.mouseleave(function () {
        $(this).removeClass('is-active');
        $(hamburger).removeClass('is-active');
        $nav.removeClass('is-active');
        return false;
    });
});