const swiper = new Swiper('.swiper', {

  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },

  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  speed: 1200,
  mousewheel: false,
  watchSlidesProgress: true,
  parallax: true,
  spaceBetween: -1,
  watchSlidesProgress: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});