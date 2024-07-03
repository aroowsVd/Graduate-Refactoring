document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 50,
    mousewheel: {
      invert: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      600: {
        slidesPerView: 1.4,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });

  let movBtn = document.querySelectorAll(".movie_title > ul > li");
  let movCont = document.querySelectorAll(".movie_chart > div");

  // 요소 숨기기
  movCont.forEach(function (cont, index) {
    if (index !== 0) {
      cont.style.display = "none";
    }
  });

  movBtn.forEach(function (btn, index) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove 'active' class from all buttons
      movBtn.forEach(function (button) {
        button.classList.remove("active");
      });

      // Add 'active' class to the clicked button
      btn.classList.add("active");

      // Hide all content
      movCont.forEach(function (cont) {
        cont.style.display = "none";
      });

      // Show the corresponding content
      movCont[index].style.display = "block";
    });
  });
});
