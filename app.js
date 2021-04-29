const cardColors = [
  "#1a9561",
  "#3f3bd8",
  "#fd9b01",
  "#9fa8bb",
  "#50919f",
  "#1655e7",
  "#fac473",
  "#EF233C",
];

// random card color
const we = document.querySelectorAll(".card-container");

we.forEach((card, i) => {
  card.style.backgroundColor = cardColors[i % cardColors.length];
});

const swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
// menu
const nav = document.querySelector("nav");
const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    nav.classList.add("active");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    nav.classList.remove("active");
    menuOpen = false;
  }
});
