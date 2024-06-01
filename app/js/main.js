const newsSwiper = new Swiper(".news__cards", {
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

const popup = document.querySelector(".gallery__popup");
const popupImage = popup.querySelector(".gallery__popup-img");
const popupClose = popup.querySelector(".gallery__popup-close");
const galleryItems = document.querySelectorAll(".gallery__item");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    popupImage.src = item.querySelector("img").src;
    popupImage.alt = item.querySelector("img").alt;
    popup.style.display = "flex";
    popup.classList.add("open");
  });
});

popupClose.addEventListener("click", () => {
  popup.style.display = "none";
  popup.classList.remove("open");
});

popup.addEventListener("click", (event) => {
  if (event.target !== popupImage) {
    popup.style.display = "none";
  }
  popup.classList.remove("open");
});
