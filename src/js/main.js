const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const modal_close = document.querySelector(".modal_close");

cartButton.addEventListener("click", function (event) {
  modal.classList.add("is_open");
});

modal_close.addEventListener("click", function (event) {
  modal.classList.remove("is_open");
});
