// 자주묻는 질문 + 1:1 탭
var movBtn = $(".section_tab > ul > li");
var movCont = $(".section_tab_desc > div");

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

//아코디언
$(".que").click(function () {
  $(this).next(".anw").stop().slideToggle(300);
  $(this).toggleClass("on").siblings().removeClass("on");
  $(this).next(".anw").siblings(".anw").slideUp(300); // 1개씩 펼치기
});
