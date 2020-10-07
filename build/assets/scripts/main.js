var directionScroll = [];
$(document).on('scroll', function (e) {
  directionScroll.push($(document).scrollTop());
  if ($(window).scrollTop() < 50) {
    $(document).find('.banner__top, .timetable').removeClass('active');
  } else {
    $(document).find('.banner__top, .timetable').addClass('active');
  }
});

window.onbeforeunload = function () {
  $('video').css('opacity', '0');
}

$(window).on('load', function () {
  $('body').addClass('visible');
});