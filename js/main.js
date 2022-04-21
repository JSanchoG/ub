start();
function start() {
  date_future = new Date(2022, 3, 24, 19, 4, 12);
  date_now = new Date();

  seconds = Math.floor((date_future - date_now) / 1000);
  minutes = Math.floor(seconds / 60);
  hours = Math.floor(minutes / 60);
  days = Math.floor(hours / 24);

  hours = hours - days * 24;
  minutes = minutes - days * 24 * 60 - hours * 60;
  seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
  if (days < 0) {
    $("#d").text("Unbanned!");
    $(".tohaft").hide();
    // $.getScript("js/fireworks.js");
    // $("#c").show();
    return;
  }

  $("#d").text(`${days}`);
  $("#h").text(`${hours}`);
  $("#m").text(`${minutes}`);
  $("#s").text(`${seconds}`);
}

$(function () {
  var calcNewYear = setInterval(function () {
    date_future = new Date(2022, 3, 24, 19, 4, 12);
    date_now = new Date();
    seconds = Math.floor((date_future - date_now) / 1000);
    minutes = Math.floor(seconds / 60);
    hours = Math.floor(minutes / 60);
    days = Math.floor(hours / 24);

    hours = hours - days * 24;
    minutes = minutes - days * 24 * 60 - hours * 60;
    seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

    if (days < 0) {
      $("#d").text("Unbanned!");
      $(".tohaft").hide();
      clearInterval(calcNewYear);
      $.getScript("js/fireworks.js");
      // $("#c").show();

      return;
    }
    $("#d").text(`${days}`);
    $("#h").text(`${hours}`);
    $("#m").text(`${minutes}`);
    $("#s").text(`${seconds}`);
  }, 1000);
});

$(".simpleslide100").each(function () {
  var delay = 5000;
  var speed = 1000;
  var itemSlide = $(this).find(".simpleslide100-item");
  var nowSlide = 0;

  $(itemSlide).hide();
  $(itemSlide[nowSlide]).show();
  nowSlide++;
  if (nowSlide >= itemSlide.length) {
    nowSlide = 0;
  }

  setInterval(function () {
    $(itemSlide).fadeOut(speed);
    $(itemSlide[nowSlide]).fadeIn(speed);
    nowSlide++;
    if (nowSlide >= itemSlide.length) {
      nowSlide = 0;
    }
  }, delay);
});
