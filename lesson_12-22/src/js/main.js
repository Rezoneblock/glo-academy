$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
      

      modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
      });
      closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
      });
      $(document).on('click', function (event) {
        if ($(event.target).is('.modal')) {
          modal.toggleClass('modal--visible');
        }
      });
      $(document).keydown(function (event) {
        if (event.keyCode === 27) {
          if (modal.hasClass('modal--visible')) {
            modal.toggleClass('modal--visible');
          }
        };
      });
});

$(document).ready(function () {
  /**
   * При прокрутке страницы, показываем или срываем кнопку
   */
  $(window).scroll(function () {
    // Если отступ сверху больше 50px то показываем кнопку "Наверх"
    if ($(this).scrollTop() > 50) {
      $('#button-up').fadeIn();
    } else {
      $('#button-up').fadeOut();
    }
  });

  /** При нажатии на кнопку мы перемещаемся к началу страницы */
  $('#button-up').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

});


