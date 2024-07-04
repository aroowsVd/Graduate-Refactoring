let swiper = new Swiper(".food_chart", {
  slidesPerView: 5,
  spaceBetween: 30,
  mousewheel: {
    invert: true,
  },
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    769: {
      slidesPerView: 3,
    },
  },
});
