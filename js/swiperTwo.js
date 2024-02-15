const swiperTwo = new Swiper(".mySwiperTwo", {
    slidesPerView: 1,
    spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-nexts",
    prevEl: ".swiper-button-prevs",
  },
  breakpoints: {
    359: {
        slidesPerView: 1.5,
    },
    500: {
        slidesPerView: 2,
    },
    620: {
        slidesPerView: 3,
    },
    1240: {
        slidesPerView: 4,
    },
},
});