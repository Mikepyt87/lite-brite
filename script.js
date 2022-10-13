"use-strict";
const gridContainer = document.querySelector(".grid-container");
const commonAncestor = document.querySelector("body");
let buttonColor = "";

for (let i = 0; i < 100; i++) {
  const newCell = document.createElement("div");
  gridContainer.append(newCell);
  newCell.classList.add("cell");
}

commonAncestor.addEventListener("click", (e) => {
  if (e.target.classList.contains("red")) {
    buttonColor = "#FF0000";
  } else if (e.target.classList.contains("green")) {
    buttonColor = "green";
  } else if (e.target.classList.contains("blue")) {
    buttonColor = "blue";
  } else if (e.target.classList.contains("yellow")) {
    buttonColor = "yellow";
  }

  if (e.target.classList.contains("cell")) {
    e.target.style.backgroundColor = buttonColor;
  }
});
