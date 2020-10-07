var directionScroll = [];
$(document).on('scroll', function (e) {
  directionScroll.push($(document).scrollTop());
  if ($(window).scrollTop() < 50) {
    $(document).find('.banner__top').removeClass('active');
  } else {
    $(document).find('.banner__top').addClass('active');
  }
});

window.onbeforeunload = function () {
  $('video').css('opacity', '0');
}

$(window).on('load', function () {
  $('body').addClass('visible');
  if ($(window).scrollTop() < 50) {
    $(document).find('.header').removeClass('visible');
  } else {
    $(document).find('.header').addClass('visible');
  }
});

$(document).on('click', '.banner__scroll', function () {
  let height = $(window).height() - $('.banner__top').outerHeight();
  $('html, body').animate({
    scrollTop: height
  }, 500);
});

