var mobileBtn = document.querySelector("#navLinks");
var navLinks = document.getElementById("nav");
var mobileBtnExit = document.querySelector("#mobile-exit");

mobileBtn.addEventListener("click", function () {
    nav.classList.add("menu-btn");
})

mobileBtnExit.addEventListener("click", function () {
    nav.classList.remove("menu-btn");
})


