const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
const open = document.getElementById("btn-open");
const close = document.getElementById("btn-close");
const nav = document.querySelector(".nav");
const links = document.querySelectorAll(".nav-link");

let activeSlide = 0;

const setActiveSlide = () => {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[activeSlide].classList.add("active");
};

nextButton.addEventListener("click", () => {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setActiveSlide();
});

prevButton.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setActiveSlide();
});

open.addEventListener("click", () => {
  nav.classList.add("open");
  document.body.classList.add("lock-scroll");
});

close.addEventListener("click", () => {
  nav.classList.remove("open");
  document.body.classList.remove("lock-scroll");
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    nav.classList.remove("open");
    document.body.classList.remove("lock-scroll");
    e.preventDefault();
  });
});
