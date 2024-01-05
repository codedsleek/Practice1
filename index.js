var navLinks = document.getElementById("navLinks");
var isMenuVisible = false;

function toggleMenu() {
   if (isMenuVisible) {
       hideMenu();
   } else {
       showMenu();
   }
}

function showMenu() {
    navLinks.style.right = "0";
    isMenuVisible = true;
}

function hideMenu() {
    navLinks.style.right = "-200px";
    isMenuVisible = false;
}
