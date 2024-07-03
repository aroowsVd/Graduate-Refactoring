document.addEventListener("DOMContentLoaded", function () {
  let firstMenuItems = document.querySelectorAll(".nav > ul > li");
  let nav = document.querySelector("nav");

  firstMenuItems.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      nav.style.transition = "all 0.5s";
      nav.style.height = "270px";
    });

    item.addEventListener("mouseleave", function () {
      nav.style.transition = "all 0.5s";
      nav.style.height = "90px";
    });
  });
});

// 초기 로드 시 로고 변경 함수 호출
window.addEventListener("load", changeLogo);
// 윈도우 리사이즈 시 로고 변경 함수 호출
window.addEventListener("resize", changeLogo);

function changeLogo() {
  const logo = document.getElementById("main_logo").querySelector("img");
  const largeLogo = "assets/img/col_logo1.png";
  const smallLogo = "assets/img/Logo(200px).png";

  if (window.innerWidth <= 768) {
    logo.src = smallLogo;
    logo.alt = "페이지 로고";
  } else {
    logo.src = largeLogo;
    logo.alt = "페이지 로고";
  }
}
