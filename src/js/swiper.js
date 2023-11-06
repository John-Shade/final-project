var swiper = new Swiper(".mySwiper", {
    spaceBetween: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination--brand",
    },
    mousewheel: true,
    keyboard: true,
  });
  

  
var swiper2 = new Swiper(".mySwiper--card", {
  spaceBetween: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination--card",
    // el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});



var swiper3 = new Swiper(".mySwiper--price", {
  spaceBetween: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination--price",
    // el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
