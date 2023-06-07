//=========== Active sidebar dashboard =============
const currentLocationNavbar = location.href;
const menuItemNavbar = document.querySelectorAll(
  ".navbar-nav .nav-item .nav-link"
);
const menuLengthNavbar = menuItemNavbar.length;
for (let i = 0; i < menuLengthNavbar; i++) {
  if (menuItemNavbar[i].href === currentLocationNavbar) {
    menuItemNavbar[i].className = "nav-link active";
  }
}
//=========== Active sidebar dashboard =============


window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  
  if (window.scrollY > 500) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});