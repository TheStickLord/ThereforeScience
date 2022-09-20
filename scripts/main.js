"use strict";
// Top Div Menu Opener

let menuButton = document.querySelector(".openMenu");

document.querySelector(".openMenu").addEventListener("click", function () {
  document.querySelector(".openMenuDiv").classList.toggle("hidden");
  if (menuButton.textContent == "≡") {
    menuButton.textContent = "X";
  } else {
    menuButton.textContent = "≡";
  }
});

document.querySelector(".LOGO").addEventListener("click", function () {
  window.location.replace("../main.html");
});
