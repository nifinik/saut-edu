/// Menu side

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuClose = document.querySelector(".menu__close");
const navItems = document.querySelectorAll("#menuItem");
const menuBtn = document.querySelector(".menuBtn");

hamburger.addEventListener("click", function () {
  menu.classList.add("active");
});

menuClose.addEventListener("click", function () {
  menu.classList.remove("active");
});

menuBtn.addEventListener("click", function () {
  menu.classList.remove("active");
});

navItems.forEach((item) => {
  item.addEventListener("click", function () {
    menu.classList.remove("active");
  });
});
