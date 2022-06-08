const hamburgerIcon = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburgerIcon.addEventListener("click", (e) => {
  hamburgerIcon.classList.toggle("open");
  navMenu.classList.toggle("open");
});
