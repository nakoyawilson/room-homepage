const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");

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
