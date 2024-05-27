const newsSwiper = new Swiper(".news__cards", {
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const popup = document.querySelector(".gallery__popup");
const popupImage = popup.querySelector(".gallery__popup-img");
const popupClose = popup.querySelector(".gallery__popup-close");

document.querySelectorAll(".gallery__item").forEach((item) => {
  item.addEventListener("click", () => {
    popupImage.src = item.querySelector("img").src;
    popupImage.alt = item.querySelector("img").alt;
    popup.style.display = "flex";
  });
});

popupClose.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", (event) => {
  if (event.target !== popupImage) {
    popup.style.display = "none";
  }
});
