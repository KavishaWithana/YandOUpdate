var swiper = new Swiper(".imageSliderHome", {
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  },

  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },

    480: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,
    },

    1024: {
      slidesPerView: 3.5,
    },
    1280: {
      slidesPerView: 3,
    },
  },
});
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".productSlider", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      bulletClass: "custom-bullet",
      bulletActiveClass: "custom-bullet-active",
    },
  });
});
