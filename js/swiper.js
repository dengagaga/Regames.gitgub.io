const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-nex",
    prevEl: ".swiper-button-pre",
  },
  breakpoints: {
    359: {
        slidesPerView: 1.3,
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