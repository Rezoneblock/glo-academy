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


/* <-- Slider projects --> */
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


    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width() + 20 + bullets.width() + 20);
    bullets.css('left', prev.width() + 20)


/*-------------------------*/


});


