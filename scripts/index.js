"use strict";

function checker(inp) {
  if (inp == "1234") {
    modal.classList.remove("hidden");
  } else {
    body.classList.add("incorrectBody");
    textboxEl.classList.add("incorrectText");
  }
}

const textboxEl = document.querySelector(".textbox");
const body = document.querySelector("body");
const buttonSub = document.querySelector(".submit");
const modal = document.querySelector(".modal");
let textbox = document.querySelector(".textbox").value;

let codeAt;

document.addEventListener("keydown", function (event) {
  body.classList.remove("incorrectBody");
  textboxEl.classList.remove("incorrectText");
  if (String(event.key) == "Enter") {
    textbox = document.querySelector(".textbox").value;
    checker(textbox);
  }
});

buttonSub.addEventListener("click", function () {
  body.classList.remove("incorrectBody");
  textboxEl.classList.remove("incorrectText");
  console.log("hellow workds");
  textbox = document.querySelector(".textbox").value;
  checker(textbox);
});
