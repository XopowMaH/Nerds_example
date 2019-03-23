var filPrice = document.querySelector(".price-filter");
var filType = document.querySelector(".type-filter");
var filName = document.querySelector(".name-filter");

var down = document.querySelector(".indicator-down");
var up = document.querySelector(".indicator-up");

// Activate filter by price, toggle indicators

filPrice.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!filPrice.classList.contains("filters-list-current")) {
    filPrice.classList.add("filters-list-current");
    filType.classList.remove("filters-list-current");
    filName.classList.remove("filters-list-current");
    down.classList.add("indicator-active");
    up.classList.remove("indicator-active");
  } else {
    down.classList.toggle("indicator-active");
    up.classList.toggle("indicator-active");
  };
});

// Activate filter by type, toggle indicators

filType.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!filType.classList.contains("filters-list-current")) {
    filType.classList.add("filters-list-current");
    filPrice.classList.remove("filters-list-current");
    filName.classList.remove("filters-list-current");
    down.classList.add("indicator-active");
    up.classList.remove("indicator-active");
  } else {
    down.classList.toggle("indicator-active");
    up.classList.toggle("indicator-active");
  };
});

// Activate filter by name, toggle indicators

filName.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!filName.classList.contains("filters-list-current")) {
    filName.classList.add("filters-list-current");
    filPrice.classList.remove("filters-list-current");
    filType.classList.remove("filters-list-current");
    down.classList.add("indicator-active");
    up.classList.remove("indicator-active");
  } else {
    down.classList.toggle("indicator-active");
    up.classList.toggle("indicator-active");
  };  
})