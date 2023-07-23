burger = document.querySelector(".burger");
navlist = document.querySelector(".lists");
rightNav = document.querySelector(".right-nav");
navbar = document.querySelector(".navbar");

burger.addEventListener("click", function () {
  navlist.classList.toggle("vis-resp");
  rightNav.classList.toggle("vis-resp");
  navbar.classList.toggle("h-nav-resp");
});



navList = document.querySelectorAll("nav-list li")

navlist.addEventListener("click",()=>{
  navlist.classList.toggle("vis-resp");
  rightNav.classList.toggle("vis-resp");
  navbar.classList.toggle("h-nav-resp");
})










/*=================================================sliders========================== */
const slides = document.querySelectorAll(".slides");
var count = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
  if (count == 0) {
    count = slides.length - 1;
    slideShow();
  } else {
    count--;
    slideShow();
  }
};

const goNext = () => {
  if (count == slides.length - 1) {
    count = 0;
    slideShow();
  } else {
    count++;
    slideShow();
  }
};

const slideShow = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
};

/*==================================== Scroll reveal =================================================*/
ScrollReveal({
  reset: true,
  distance: "50px",
  duration: 2000,
  delay: 100,
});

ScrollReveal().reveal(".lft-title,.resoures-section h2,.interview-section h3,.succes-h2,.idea-pitch h1", { origin: "top" });
ScrollReveal().reveal(".rgt-title,.resources-contents,.carousel,.pitch-p,.pitch-img", { origin: "bottom",});
// ScrollReveal().reveal(".left-suc-content,.pitch-img", { origin: "left" });
// ScrollReveal().reveal(".right-suc-content,.pitch-p", { origin: "right" });
