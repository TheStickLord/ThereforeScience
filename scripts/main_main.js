"use strict";
// Top Div Menu Opener

let menuButton = document.querySelector(".openMenu");
const windowLocation = window.location.href;
console.log(windowLocation);

document.querySelector(".openMenu").addEventListener("click", function () {
  document.querySelector(".openMenuDiv").classList.toggle("hidden");
  if (menuButton.textContent == "≡") {
    menuButton.textContent = "X";
  } else {
    menuButton.textContent = "≡";
  }
});

document.querySelector(".LOGO").addEventListener("click", function () {});
