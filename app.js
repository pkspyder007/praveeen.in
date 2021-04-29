const modalCloseTrigger = document.querySelector(".popup-modal__close");
const bodyBlackout = document.querySelector(".body-blackout");
const popupModal = document.querySelector(".popup-modal");

popupModal
  .querySelector(".popup-modal__close")
  .addEventListener("click", () => {
    popupModal.classList.remove("is--visible");
    bodyBlackout.classList.remove("is-blacked-out");
  });

bodyBlackout.addEventListener("click", () => {
  // TODO: Turn into a function to close modal
  popupModal.classList.remove("is--visible");
  bodyBlackout.classList.remove("is-blacked-out");
});

var confettiElement = document.getElementById("cft");

let confettiOpt = {
  target: confettiElement,
  max: "100",
  size: "1",
  animate: true,
  props: ["circle", "square", "triangle", "line"],
  colors: [
    [165, 104, 246],
    [230, 61, 135],
    [0, 199, 228],
    [253, 214, 126],
  ],
  clock: "50",
  rotate: true,
  start_from_edge: true,
  respawn: false,
};

var confetti = new ConfettiGenerator(confettiOpt);

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      this.contact_number.value = (Math.random() * 100000) | 0;
      if (
        !this.user_name.value ||
        !this.user_email.value ||
        !this.message.value
      ) {
        alert("Please Fill out all form fields before submitting");
        return;
      }
      emailjs.sendForm("service_9x7dezg", "template_ridz4rb", this).then(
        function () {
          console.log("SUCCESS!");
          confettiElement.style.display = "block";
          confetti.render();
          document.getElementById("contact-form").reset();
        },
        function (error) {
          popupModal.classList.add("is--visible");
          bodyBlackout.classList.add("is-blacked-out");
          document.getElementById("contact-form").reset();
          console.log("FAILED...", error);
        }
      );
    });
};

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

//Get the button:
let toUpBtn = document.querySelector(".up");

toUpBtn.addEventListener("click", () => {
  topFunction();
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toUpBtn.style.display = "block";
  } else {
    toUpBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  //close opened menu if there
  if (menuOpen) {
    menuBtn.classList.remove("open");
    nav.classList.remove("active");
    menuOpen = false;
  }
}
