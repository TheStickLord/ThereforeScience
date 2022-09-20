"use strict";

setTimeout(() => {
  document.querySelector(".loadTextContent").textContent = "Loading Page...";
}, 6000);

setTimeout(() => {
  document.querySelector(".loadTextContent").textContent = "Done!";
}, 8000);

setTimeout(() => {
  window.location.replace("main.html");
}, 10000);
