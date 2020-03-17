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
    var mySwiper = new Swiper('#slider-first', {
      loop: true,
      pagination: {
        el: ('#pagination1' ),
        type: ('bullets' ),
      },
      navigation: {
        nextEl: '#next1',
        prevEl: '#prev1',
      },
    })
    var mySwiper = new Swiper('#slider-first-second', {
      loop: true,
      pagination: {
        el: ('#pagination1'),
        type: ('bullets'),
      },
      navigation: {
        nextEl: '#next1',
        prevEl: '#prev1',
      },
    })

    var mySwiper2 = new Swiper('#slider-second', {
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
    console.log(mySwiper2);
    console.log(mySwiper2);



    /*<-- working menu button --> */
    $('.steps__swiper-menu__item').on('click', function () {
      var index = $(this).index()
      mySwiper2.slideTo(index + 1);
      $('.steps__swiper-menu__item').removeClass('item--active');
      $(this).addClass('item--active');
      $('.bullet').removeClass('bullet--active')
      var id = $('.item--active').attr('id')
      var bulletId = parseInt(id) + 6;
      $('#' + bulletId).addClass('bullet--active')
    });
    /*--------------------------------*/


    /*<-- working next button --> */
  $('.steps__swiper-button-next').on('click', function () {
    var itemId = $('.item--active').attr('id')
    var bulletId = $('.bullet--active').attr('id');
    $('.bullet').removeClass('bullet--active');
    $('.bullet').removeClass('item--active');
    $('.steps__swiper-menu__item').removeClass('item--active');
    $('.steps__swiper-menu__item').removeClass('bullet--active');
    var activeItemId = parseInt(itemId) + 1;
    var activeBulletId = parseInt(bulletId) + 1;
    if (activeItemId == 7) {
      activeItemId = 1;
    }
    if (activeBulletId == 13) {
      activeBulletId = 7;
    }
    $('#' + activeItemId).addClass('item--active');
    $('#' + activeBulletId).addClass('bullet--active');
  })
/*--------------------------------*/

/*<-- working prev button --> */
  $('.steps__swiper-button-prev').on('click', function () {
    var itemId = $('.item--active').attr('id')
    var bulletId = $('.bullet--active').attr('id');
    $('.bullet').removeClass('bullet--active');
    $('.bullet').removeClass('item--active');
    $('.steps__swiper-menu__item').removeClass('item--active');
    $('.steps__swiper-menu__item').removeClass('bullet--active');
    var activeItemId = parseInt(itemId) - 1;
    var activeBulletId = parseInt(bulletId) - 1;
    if (activeItemId == 0) {
      activeItemId = 6;
    }
    if (activeBulletId == 6) {
      activeBulletId = 12;
    }
    $('#' + activeItemId).addClass('item--active');
    $('#' + activeBulletId).addClass('bullet--active');
  })
/*--------------------------------*/


    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width() + 20 + bullets.width() + 20);
    bullets.css('left', prev.width() + 20);


/*-------------------------*/


});


