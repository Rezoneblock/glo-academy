$(document).ready(function () {

/* <-- Modal --> */

  /* Variables */ 
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
      
      /* open modal by pressing button */
      modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
      });



      /* close modal by pressing button */
      closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
      });


      /* close modal by clicking everywhere else */
      $(document).on('click', function (event) {
        if ($(event.target).is('.modal')) {
          modal.toggleClass('modal--visible');
        }
      });


      /* close modal press 'esc'  */
      $(document).keydown(function (event) {
        if (event.keyCode === 27) {
          if (modal.hasClass('modal--visible')) {
            modal.toggleClass('modal--visible');
          }
        };
      });
/*---------------*/


/* <-- scroll-up button --> */      
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#button-up').fadeIn();
    } else {
      $('#button-up').fadeOut();
    }
  });

  $('#button-up').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
/*-------------------*/


/* <--    Slider's     --> */
    var mySwiper = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })

    var mySwiper2 = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: ('.steps__swiper-fraction'),
        type: 'fraction',
      },
      navigation: {
        nextEl: ('.steps__swiper-button-next'),
        prevEl: ('.steps__swiper-button-prev'),
      },
    })  

  $('.steps__swiper-button-next').on('click', function() {
    var id = $('.item--active').attr('id')
    $('.steps__swiper-menu__item').removeClass('item--active');
    var activeId = parseInt(id) + 1;
    if (activeId == 7) {
      activeId = 1;
    }
    $('#' + activeId).addClass('item--active');
  })

  $('.steps__swiper-button-prev').on('click', function () {
    var id = $('.item--active').attr('id')
    $('.steps__swiper-menu__item').removeClass('item--active');
    var activeId = parseInt(id) - 1;
    if (activeId == 0) {
      activeId = 6;
    }
    $('#' + activeId).addClass('item--active');
  })

  $('.steps__swiper-menu__item').on('click', function () {
    var index = $(this).index()
    mySwiper2[2].slideTo(index + 1);
    $('.steps__swiper-menu__item').removeClass('item--active');
    $(this).addClass('item--active');
  });

    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width() + 20 + bullets.width() + 20);
    bullets.css('left', prev.width() + 20);


/*-------------------------*/


});


