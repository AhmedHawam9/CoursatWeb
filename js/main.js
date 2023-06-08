//=========== Active navbar link =============
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
//=========== Active navbar link =============

//=========== Active sidebar link =============
const currentLocationSidebar = location.href;
const menuItemSidebar = document.querySelectorAll(
  ".sidebar .side-nav .nav-item .nav-link"
);
const menuLengthSidebar = menuItemSidebar.length;
for (let i = 0; i < menuLengthSidebar; i++) {
  if (menuItemSidebar[i].href === currentLocationSidebar) {
    menuItemSidebar[i].className = "nav-link active";
  }
}
//=========== Active sidebar link =============




window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  
  if (window.scrollY > 500) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});