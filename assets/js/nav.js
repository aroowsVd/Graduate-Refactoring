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

  // // mobile menu 아코디언
  // let mainLists = document.querySelectorAll(".m_main_li");

  // mainLists.forEach(function(mainList) {
  //   mainList.addEventListener("click", function() {
  //     let subList = mainList.nextElementSibling;

  //     if(subList.classList.contains("m_sub_li")) {
  //       if(subList.style.display === "block") {
  //         subList.style.display = "none";
  //       } else {
  //         document.querySelectorAll(".m_sub_li").forEach(function(otherSubLi) {
  //           otherSubLi.style.display = "none";
  //         });

  //         subList.style.display = "block"
  //       }

  //       mainList.classList.toggle("on");
  //       mainLists.forEach(function(otherMainList) {
  //         if (otherMainList !== mainList) {
  //           otherMainList.classList.remove("on");
  //         }
  //       })
  //     }
  //   });
  // });
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

//mobile menu
const menuWrap = document.querySelector(".mobile_menu_wrap");
const menu = document.querySelector(".mobile_menu");
const closeBtn = document.querySelector(".m_menu_close");
const openBtn = document.querySelector(".menu_btn");

closeBtn.addEventListener("click", function () {
  menuWrap.classList.remove("show");
});
openBtn.addEventListener("click", function () {
  menuWrap.classList.add("show");
});
menuWrap.addEventListener("click", function (event) {
  if (event.target === menuWrap) {
    menuWrap.classList.remove("show");
  }
});


// mobile menu 아코디언
$(".m_main_li").click(function() {
  $(this).next(".m_sub_li").stop().slideToggle(300);
  $(this).toggleClass('on').siblings().removeClass('on');
  $(this).next(".m_sub_li").siblings(".m_sub_li").slideUp(300); // 1개씩 펼치기

  $(this).parent().siblings().children('.m_main_li').removeClass('on');
  $(this).parent().siblings().children('.m_sub_li').stop().slideUp(300);  
});