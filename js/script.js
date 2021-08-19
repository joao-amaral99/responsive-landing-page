const menuBtn = document.querySelector(".responsive-menu");
const menuBars = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-times");
const menuMobile = document.querySelector(".menu-mobile");
const header = document.querySelector(".header");

document.addEventListener("click", (e) => {
  const el = e.target;

  if (el.classList.contains("fa-bars")) {
    menuBars.style.display = "none";
    closeMenu.style.display = "block";
    menuMobile.style.display = "block";
  }

  if (el.classList.contains("fa-times")) {
    menuBars.style.display = "block";
    closeMenu.style.display = "none";
    menuMobile.style.display = "none";
  }
});
