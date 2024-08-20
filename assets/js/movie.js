//영화차트 탭 메뉴
var movBtn = $(".movie_title > ul > li");
var movCont = $(".movie_all > ul");

movCont.hide().eq(0).show();

movBtn.click(function (e) {
  e.preventDefault();
  var target = $(this);
  var index = target.index();
  movBtn.removeClass("active");
  target.addClass("active");
  movCont.css("display", "none");
  movCont.eq(index).css("display", "block");
});

// 트레일러1
$("#play-video1").on("click", function (e) {
  e.preventDefault();
  $("#video-overlay1").addClass("open");
  $("#video-overlay1").append(
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/qhKCYXSHpWY" frameborder="0" allowfullscreen></iframe>'
  );
});

$(".video-overlay, .video-overlay-close").on("click", function (e) {
  e.preventDefault();
  close_video();
});

$(document).keyup(function (e) {
  if (e.keyCode === 27) {
    close_video();
  }
});

function close_video() {
  $(".video-overlay.open").removeClass("open").find("iframe").remove();
}

// 트레일러2
$("#play-video2").on("click", function (e) {
  e.preventDefault();
  $("#video-overlay2").addClass("open");
  $("#video-overlay2").append(
    '<iframe width="560" height="315" src="https://youtube.com/embed/O939jApfgt8" frameborder="0" allowfullscreen></iframe>'
  );
});

$(".video-overlay, .video-overlay-close").on("click", function (e) {
  e.preventDefault();
  close_video();
});

$(document).keyup(function (e) {
  if (e.keyCode === 27) {
    close_video();
  }
});

function close_video() {
  $(".video-overlay.open").removeClass("open").find("iframe").remove();
}

// 트레일러3
$("#play-video3").on("click", function (e) {
  e.preventDefault();
  $("#video-overlay3").addClass("open");
  $("#video-overlay3").append(
    '<iframe width="560" height="315" src="https://youtube.com/embed/CKOjENn2MVI" frameborder="0" allowfullscreen></iframe>'
  );
});

$(".video-overlay, .video-overlay-close").on("click", function (e) {
  e.preventDefault();
  close_video();
});

$(document).keyup(function (e) {
  if (e.keyCode === 27) {
    close_video();
  }
});

function close_video() {
  $(".video-overlay.open").removeClass("open").find("iframe").remove();
}
