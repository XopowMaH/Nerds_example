var activationButton = document.querySelector(".button-write-us");
var modal = document.querySelector(".modal-connect-us");
var overlay = document.querySelector(".overlay");
var close = modal.querySelector(".close-button");
var username = modal.querySelector(".username");

// Open modal-window by "Напишите нам" button

activationButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.add("modal-active");
  overlay.classList.add("modal-active");
  username.focus();
});

// Close modal-window by "close" button

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (modal.classList.contains("modal-active")) {
    modal.classList.remove("modal-active");
    overlay.classList.remove("modal-active");
  };
});

// Close modal-window by click on overlay

overlay.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (modal.classList.contains("modal-active")) {
    modal.classList.remove("modal-active");
    overlay.classList.remove("modal-active");
  };
});

// Close modal-window by "Esc" button

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode == 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal-active")) {
      modal.classList.remove("modal-active");
      overlay.classList.remove("modal-active");
    };
  }
});