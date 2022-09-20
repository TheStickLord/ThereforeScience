"use strict";

setTimeout(() => {
  document.querySelector(".loadTextContent").textContent = "Loading Page...";
}, 7500);

setTimeout(() => {
  document.querySelector(".loadTextContent").textContent = "Done!";
}, 12000);

setTimeout(() => {
  window.location.replace("main.html");
}, 15000);
