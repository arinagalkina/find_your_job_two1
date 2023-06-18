document.addEventListener("DOMContentLoaded", function() {
  var hamburger = document.querySelector(".hamburger");
  var navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("open");
    navMenu.classList.toggle("open");
  });

  var menuItems = document.querySelectorAll(".list > li");
  menuItems.forEach(function(item) {
    item.addEventListener("click", function() {
      navMenu.classList.remove("open");
      hamburger.classList.remove("open");
    });
  });
});
