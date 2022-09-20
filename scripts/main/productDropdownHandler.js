"use strict";

let hasOpened = 0;

// Choose which products to display
document.querySelector(".PD_B0").addEventListener("click", function () {
  if (hasOpened == 0) {
    document.querySelector(".PD2").classList.remove("hidden");
    hasOpened = 1;
  }
});

document.querySelector(".PD_B1").addEventListener("click", function () {
  if (hasOpened == 0) {
    document.querySelector(".PD3").classList.remove("hidden");
    hasOpened = 1;
  }
});

// Gov Functs
function toggleDropdown(DDnum) {
  document.querySelector(`.DD${DDnum}`).classList.toggle("minimizeDD");
  document.querySelector(`.SDD${DDnum}`).classList.toggle("hidden");
  console.log("test");
}

function rotationAnimation(DDnum) {
  document
    .querySelector(`.DDA${DDnum}`)
    .classList.toggle("DDA_RotationAnimation2");
}

// Civi Functs

function toggleDropdown1(DDnum) {
  document.querySelector(`.DD${DDnum}-1`).classList.toggle("minimizeDD");
  document.querySelector(`.SDD${DDnum}-1`).classList.toggle("hidden");
  console.log("test");
}

function rotationAnimation1(DDnum) {
  document
    .querySelector(`.DDA${DDnum}-1`)
    .classList.toggle("DDA_RotationAnimation2");
}

// Gov Products

document.querySelector(".DD1").addEventListener("click", function () {
  toggleDropdown(1);
  rotationAnimation(1);
});

document.querySelector(".DD2").addEventListener("click", function () {
  toggleDropdown(2);
  rotationAnimation(2);
});

document.querySelector(".DD3").addEventListener("click", function () {
  toggleDropdown(3);
  rotationAnimation(3);
});

// Civi Products

document.querySelector(".DD1-1").addEventListener("click", function () {
  toggleDropdown1(1);
  rotationAnimation1(1);
});

document.querySelector(".DD2-1").addEventListener("click", function () {
  toggleDropdown1(2);
  rotationAnimation1(2);
});

document.querySelector(".DD3-1").addEventListener("click", function () {
  toggleDropdown1(3);
  rotationAnimation1(3);
});
