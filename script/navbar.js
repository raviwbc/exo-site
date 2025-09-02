// document.addEventListener("DOMContentLoaded", function () {
//   const menuButton = document.getElementById("menuButton");
//   const closeMenu = document.getElementById("closeMenu");
//   const overlay = document.getElementById("overlay");

  function openMenu() {
      mobileMenu.classList.remove('translate-x-full');
      overlay.classList.remove('pointer-events-none', 'opacity-0');
    }

 
    function closeMenuFunc() {
      mobileMenu.classList.add('translate-x-full');
      overlay.classList.add('pointer-events-none', 'opacity-0');
    }

//   menuButton.addEventListener("click", openMenu);
//   closeMenu.addEventListener("click", closeMenuFunc);
//   overlay.addEventListener("click", closeMenuFunc);
// });


