//top 버튼
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 500) {
      $(".go_top").fadeIn();
      $(".go_down").fadeIn();
    } else {
      $(".go_top").fadeOut();
      $(".go_down").fadeOut();
    }
  });

  $(".go_top").click(function (e) {
    e.preventDefault();
    $("html,body").stop().animate({ scrollTop: 0 }, 500);
  });

  $(".go_down").click(function (e) {
    e.preventDefault();
    $("html,body")
      .stop()
      .animate({ scrollTop: $(document).height() - $(window).height() }, 500);
  });
});
