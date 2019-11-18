// $(function() {
//   $("section").SnapScroll({
//     animateDuration: 1000
//   });
//   $(".about__whatwedo").SnapScroll({
//     animateDuration: 1000
//   });
//   $(".counting").SnapScroll({
//     animateDuration: 1000
//   });
//   $(".simple-steps").SnapScroll({
//     animateDuration: 1000
//   });
// });

// Animate on scroll
AOS.init();
// Count up
$(".counter").counterUp({
  delay: 10,
  time: 1000
});

// Menu animation
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu__item");
const body = document.querySelector("body");

menuBtn.addEventListener("click", toggleMenu);

menuItems.forEach(menuItem => menuItem.addEventListener("click", toggleMenu));

let showMenu = false;

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    body.classList.add("overflow");
    showMenu = !showMenu;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    body.classList.remove("overflow");

    showMenu = !showMenu;
  }
}

//Form validation
let form = document.querySelector(".needs-validation");
form.addEventListener("submit", function(event) {
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  form.classList.add("was-validated");
});
