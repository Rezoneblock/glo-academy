$(document).ready(function () {

/* <-- Modal --> */

  /* Variables */ 
  var modal = $('.modal'),
      modalThanks = $('.modal-thanks'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
      
      /* open modal by pressing button */
      modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
      });



      /* close modal by pressing button */
      closeBtn.on('click', function () {
        modal.removeClass('modal--visible'),
        modalThanks.css('opacity', '0'),
        modalThanks.css('visibility', 'hidden');
      });


      /* close modal by clicking everywhere else */
      $(document).on('click', function (event) {
        if ($(event.target).is('.modal')) {
          modal.toggleClass('modal--visible');
        }
      });
      $(document).on('click', function (event) {
        if ($(event.target).is('.modal-thanks')) {
          modalThanks.css('opacity', '0'),
          modalThanks.css('visibility', 'hidden');
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


/*<-- Animation  --> */
  new WOW().init();

  $(window).scroll(function () {
    var title1 = $('.projects__section-title');
    if ($(this).scrollTop() > title1.offset().top - 900) {
      title1.addClass('slider-title-animation');
      title1.removeClass('opacity0');
    }
    var buttons = $('.buttons');
    if ($(this).scrollTop() > buttons.offset().top - 1100) {
      buttons.addClass('buttons-animation');
      buttons.removeClass('opacity0');
    }
    var control = $('.control-animation');
    if ($(this).scrollTop() > control.offset().top - 800) {
      control.addClass('control-animations');
      control.removeClass('opacity0');
    }
  });
/*<--            --> */




   // form validation
   $('.modal__form').validate({
     errorClass: "invalid",
     rules: {
       // required 
       userName: {
         required: true,
         minlength: 2,
         maxlength: 15
       },
       userPhone: "required",
       // required group
       userEmail: {
         required: true,
         email: true
       }
     },
     // error massages
     messages: {
       userName: {
         required: "Заполните поле",
         minlength: "Имя не короче 2 букв",
         maxlength: "Имя должно быть короче 15 букв"
       }, 
       userPhone: "Заполните поле",
       userEmail: {
         required: "Заполните поле",
         email: "Введите корректный email"
       }
     },
    //  submitHandler: function (form) {
    //    $.ajax({
    //      type: "POST",
    //      url: "send.php",
    //      data: $(form).serialize(),
    //      success: function (response) {
    //        console.log('Ответ сервера: ' + response);
    //        $(form)[0].reset();
    //        modal.removeClass('modal--visible');
    //        modalThanks.css('opacity', '1');
    //        modalThanks.css('visibility', 'visible');
    //      },
    //      error: function (responce) {
    //        console.error('Ошибка запроса ' + responce);
    //      }
    //    });
    //  },
    });
  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      // required 
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // required group
      userEmail: {
        required: true,
        email: true
      }
    },
    // error massages
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя должно быть короче 15 букв"
      },
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    },
    // submitHandler: function (form) {
    //   $.ajax({
    //     type: "POST",
    //     url: "send.php",
    //     data: $(form).serialize(),
    //     success: function (response) {
    //       console.log('ajax сработал. Ответ сервера: ' + response);
    //       $(form)[0].reset();
    //       modal.removeClass('modal--visible');
    //       modalThanks.css('opacity', '1');
    //       modalThanks.css('visibility', 'visible');

    //     },
    //     error: function (responce) {
    //       console.error('Ошибка запроса ' + responce);
    //     }
    //   });
    // },
  });
  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      // required 
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // required group
      question: {
        required: true
      }
    },
    // error massages
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя должно быть короче 15 букв"
      },
      userPhone: "Заполните поле",
      question: {
        required: "Заполните поле"
      }
    },
    // submitHandler: function (form) {
    //   $.ajax({
    //     type: "POST",
    //     url: "send.php",
    //     data: $(form).serialize(),
    //     success: function (response) {
    //       console.log('ajax сработал. Ответ сервера: ' + response);
    //       $(form)[0].reset();
    //       modal.removeClass('modal--visible');
    //       modalThanks.css('opacity', '1');
    //       modalThanks.css('visibility', 'visible');

    //     },
    //     error: function (responce) {
    //       console.error('Ошибка запроса ' + responce);
    //     }
    //   });
    // }
  });

   //mask for telephone
   $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});




   // Yandex Map
     
   ymaps.ready(function () {
     var myMap = new ymaps.Map('map', {
         center: [59.921269, 30.338426],
         zoom: 9
       }, {
         searchControlProvider: 'yandex#search'
       }),

       // Создаём макет содержимого.
       MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
         '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
       ),

       myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
         hintContent: 'Наш оффис',
         balloonContent: 'Вход со двора'
       }, {
         // Опции.
         // Необходимо указать данный тип макета.
         iconLayout: 'default#image',
         // Своё изображение иконки метки.
         iconImageHref: 'img/marker.png',
         // Размеры метки.
         iconImageSize: [32, 32],
         // Смещение левого верхнего угла иконки относительно
         // её "ножки" (точки привязки).
         iconImageOffset: [-5, -38]
       });

     myMap.geoObjects
       .add(myPlacemark);
   });

}); 


