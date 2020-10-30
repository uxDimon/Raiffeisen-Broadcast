var directionScroll = [];
$(document).on('scroll', function (e) {
  directionScroll.push($(document).scrollTop());
  if ($(window).scrollTop() < 50) {
    $(document).find('.banner__top').removeClass('active');
  } else {
    $(document).find('.banner__top').addClass('active');
  }

  if ($(window).scrollTop() > ($(window).height() / 2)) {
    $('.banner-top__btn').fadeIn();
  } else {
    $('.banner-top__btn').fadeOut();
  }

  if ($(window).scrollTop() > ($(window).height())) {
    $('.overlay').show();
    $('.timetable').addClass('active');
  } else {
    $('.overlay').hide();
    $('.timetable').removeClass('active');
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

  $(document).find('.timetable__item[data-starttime]').each(function (index) {
    let starttime = Date.parse($(this).attr('data-starttime'));
    let endtime = Date.parse($(this).attr('data-endtime'));
    if (starttime < Date.now() && Date.now() < endtime) {
      let cloneItem = $(this).clone();
      $(this).addClass('active');
      $('.banner__current').append(cloneItem);
    }
  });

  if ($(window).scrollTop() > ($(window).height() / 2)) {
    $('.banner-top__btn').fadeIn();
  } else {
    $('.banner-top__btn').fadeOut();
  }

  $('.banner__play').css('top', ($(window).height() / 2));
});

$(document).on('click', '.banner__scroll', function () {
  let height = $(window).height() - $('.banner__top').outerHeight();
  $('html, body').animate({
    scrollTop: height
  }, 500);
});

$(document).on('click', '.banner__play svg, .banner-top__btn', function (e) {
  e.preventDefault();
  $('html, body').scrollTop(0);
  $('html').addClass('active');
});
