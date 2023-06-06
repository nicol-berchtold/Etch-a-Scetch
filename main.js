"use strict";
const reset = document.getElementById("reset");
const drawpad = document.getElementById("drawpad");

function createGrid(zahl) {
  if (zahl > 100) {
    prompt("Only under 100 columns!");
  }
  drawpad.style.gridTemplateColumns = "repeat(" + zahl + ", 1fr)";
  drawpad.style.gridTemplateRows = "repeat(" + zahl + ", 1fr)";
  const gridSize = zahl * zahl;
  for (let i = 0; i < gridSize; i++) {
    const element = document.createElement("div");
    drawpad.appendChild(element);
    element.classList.add("box");
  }
  farben();
}
createGrid(16);

function farben() {
  const box = document.getElementsByClassName("box");
  for (let i of box) {
    i.addEventListener("mouseover", () => {
      let farbe1 = Math.floor(Math.random() * 255);
      let farbe2 = Math.floor(Math.random() * 255);
      let farbe3 = Math.floor(Math.random() * 255);
      i.style.backgroundColor = `rgb(${farbe1}, ${farbe2}, ${farbe3})`;
    });
  }
}

reset.addEventListener("click", clear);

function clear() {
  drawpad.innerHTML = "";
  let neu = prompt("How many columns do you want?");
  createGrid(neu);
}
