function loginOk() {
  alert("투표하기는 로그인 후 이용하실 수 있습니다.");
}

var swiperCards = new Swiper(".choice_cards", {
  effect: "cards",
  grabCursor: true,
  initialSlide: 2,
  speed: 500,
  loop: true,
  rotate: true,
  mousewheel: {
    invert: false,
  },
});
