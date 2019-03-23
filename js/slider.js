var slide1 = document.querySelector(".slider-item-1");
var slide2 = document.querySelector(".slider-item-2");
var slide3 = document.querySelector(".slider-item-3");

var btn1 = document.querySelector(".slider-btn-1");
var btn2 = document.querySelector(".slider-btn-2");
var btn3 = document.querySelector(".slider-btn-3");

btn1.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!slide1.classList.contains("slider-current")) {
    slide1.classList.add("slider-current");
    slide2.classList.remove("slider-current");
    slide3.classList.remove("slider-current");

    btn1.classList.add("slider-button-current");
    btn2.classList.remove("slider-button-current");
    btn3.classList.remove("slider-button-current");
  };
});

btn2.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!slide2.classList.contains("slider-current")) {
    slide2.classList.add("slider-current");
    slide1.classList.remove("slider-current");
    slide3.classList.remove("slider-current");

    btn2.classList.add("slider-button-current");
    btn1.classList.remove("slider-button-current");
    btn3.classList.remove("slider-button-current");
  };
});

btn3.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!slide3.classList.contains("slider-current")) {
    slide3.classList.add("slider-current");
    slide1.classList.remove("slider-current");
    slide2.classList.remove("slider-current");

    btn3.classList.add("slider-button-current");
    btn1.classList.remove("slider-button-current");
    btn2.classList.remove("slider-button-current");
  };
});