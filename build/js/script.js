let menuButton = document.getElementById("hamburger-menu");
menuButton.addEventListener("click", toggleMenu);
let menu = document.getElementById("mobile-menu");
menu.addEventListener("click", toggleMenu);

function toggleMenu() {
  let menu = document.getElementById("mobile-menu");
  let menuButton = document.getElementById("hamburger-menu");
  menuButton.classList.toggle("hidden");
  menu.classList.toggle("hidden");
  menu.classList.toggle("block");
}
