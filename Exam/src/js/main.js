$(document.body).ready(function () {
  var burger = $('#burger-menu');
  burger.on('click', function() {
    burger.toggleClass('burger--active');
  })


  var next1 = $('#next1');
  var slideL = $('.swiper-slide').length;
  var present = $('.slide--active').attr('id');
  var desc
  var prev1 = $('#prev1');

  prev1.on('click', function() {
    if (present == 1) {
      present = slideL;
      $('.swiper-slide').removeClass('slide--active');
      $('.swiper-slide__desc').removeClass('slide--active');
      $('#' + present).addClass('slide--active');
      desc = parseInt(present) + 3;
      $('#' + desc).addClass('slide--active');
    } else {
      $('.swiper-slide').removeClass('slide--active');
      $('.swiper-slide__desc').removeClass('slide--active');
      present = parseInt(present) - 1;
      console.log(present)
      $('#' + present).addClass('slide--active');
      desc = parseInt(present) + 3;
      console.log(desc)
      if (desc == 3) {
        desc = 6;
        $('#' + desc).addClass('slide--active');
      } else {
        $('#' + desc).addClass('slide--active');
      }
    }
  })
  next1.on('click', function() {
    if (present == 3) {
      present = 1;
      $('.swiper-slide').removeClass('slide--active');
      $('.swiper-slide__desc').removeClass('slide--active');
      $('#' + present).addClass('slide--active');
      desc = parseInt(present) + 3;
      $('#' + desc).addClass('slide--active');
    } else {
      $('.swiper-slide').removeClass('slide--active');
      $('.swiper-slide__desc').removeClass('slide--active');
      present = parseInt(present) + 1;
      $('#' + present).addClass('slide--active');
      desc = present + 3;
      if (desc == 7 ) {
        desc = 4;
        $('#' + desc).addClass('slide--active');
      } else {
        $('#' + desc).addClass('slide--active');
      }
    }
  })



  function countdown(dateEnd) {
    var timer, days, hours, minutes, seconds;

    dateEnd = new Date(dateEnd);
    dateEnd = dateEnd.getTime();

    if (isNaN(dateEnd)) {
      return;
    }

    timer = setInterval(calculate, 1000);

    function calculate() {
      var dateStart = new Date();
      var dateStart = new Date(dateStart.getUTCFullYear(),
        dateStart.getUTCMonth(),
        dateStart.getUTCDate(),
        dateStart.getUTCHours(),
        dateStart.getUTCMinutes(),
        dateStart.getUTCSeconds());
      var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)

      if (timeRemaining >= 0) {
        days = parseInt(timeRemaining / 86400);
        timeRemaining = (timeRemaining % 86400);
        hours = parseInt(timeRemaining / 3600);
        timeRemaining = (timeRemaining % 3600);
        minutes = parseInt(timeRemaining / 60);
        timeRemaining = (timeRemaining % 60);
        seconds = parseInt(timeRemaining);

        document.getElementById("days").innerHTML = parseInt(days, 10);
        document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
        document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
        document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
      } else {
        return;
      }
    }

    function display(days, hours, minutes, seconds) { }
  }



  countdown('06/19/2020 03:14:07 AM');
 



})
