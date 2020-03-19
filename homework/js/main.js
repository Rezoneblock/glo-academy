$(function () {
  zoom = $('.feature').css('background-size')
  zoom = parseFloat(zoom) / 100
  size = zoom * $('.feature').width();
  $(window).on('scroll', function () {
    fromTop = $(window).scrollTop();
    newSize = size - (fromTop / 3);
    if (newSize > $('.feature').width()) {
      $('.feature').css({
        '-webkit-background-size': newSize,
        '-moz-background-size': newSize,
        '-o-background-size': newSize,
        'background-size': newSize,
        '-webkit-filter': 'blur(' + 0 + (fromTop / 100) + 'px)',
        'opacity': 1 - ((fromTop / $('html').height()) * 1.3)
      });
    }
  });
});

$(function () {
  var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

  if (isChrome || isSafari) {
  } else {
    $('.feature').append('<div class="opaque"></div>');
    $(window).on('scroll', function () {
      var opacity = 0 + ($(window).scrollTop() / 5000);
      $('.opaque').css('opacity', opacity);
    });
  }
});

$(function () {
  $('.face2').each(function(indx, el) {
    if($('.face2__link', el).length >= 2) {
      $('.face2__link', el).css("cssText", "margin-top: 0");
    };
  });
})


$(function () {
  new WOW().init();
})


//  $(window).scroll(function () {
//    var before = $('.');
//    if ($(this).scrollTop() > title1.offset().top - 900) {
//      title1.addClass('slider-title-animation');
//      title1.removeClass('opacity0');
//    }
//  });

