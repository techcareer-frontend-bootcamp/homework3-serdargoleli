/*=============== MOBILE MENU TOGGLE ===============*/
const btnMobileMenu = document.getElementById("btn-menu");
const mobileMenu = document.getElementById("menu");

btnMobileMenu.addEventListener("click", () => {
  btnMobileMenu.classList.toggle("rotate-90");
  mobileMenu.classList.toggle("menu-show");
});

/*=============== MOBILE MENU CLICK > REMOVE MOBILE MENU CLOSE ===============*/
const navLink = document.querySelectorAll(".nav-right-menu a");

function linkAction() {
  const navMenu = document.getElementById("menu");
  btnMobileMenu.classList.remove("rotate-90");
  navMenu.classList.remove("menu-show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD ACTIVE CLASS ===============*/
const nav_links = mobileMenu.getElementsByClassName("nav-link");
let i = 0;
for (i; i < nav_links.length; i++) {
  nav_links[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
