// Slider
let slides = document.querySelectorAll(".slide");
let arrowLeft = document.querySelector(".arrow-left");
let arrowRight = document.querySelector(".arrow-right");
let dots = document.querySelectorAll(".dot");

// Menu
let menuButton = document.querySelector(".menu-button");
let menuMobile = document.querySelector(".header__nav__mobile-list");
let counter = 0;

// Slider dots

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].style.backgroundColor = "white";
    }
    counter = index;
    slides[counter].style.display = "flex";
    dot.style.backgroundColor = "var(--mint-color)";
  });
});

// Slide right
function slideRight() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].style.backgroundColor = "white";
  }
  counter++;

  if (counter > slides.length - 1) {
    counter = 0;
  }

  slides[counter].style.display = "flex";
  dots[counter].style.backgroundColor = "var(--mint-color)";
}

// Slide left
function slideLeft() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].style.backgroundColor = "white";
  }
  counter--;

  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides[counter].style.display = "flex";
  dots[counter].style.backgroundColor = "var(--mint-color)";
}

arrowRight.addEventListener("click", slideRight);
arrowLeft.addEventListener("click", slideLeft);

// Menu icons
menuButton.addEventListener("click", () => {
  menuMobile.classList.toggle("visible");

  if (menuMobile.classList.contains("visible")) {
    menuButton.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
  }
});
