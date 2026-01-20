console.log("script.js is running");

const DEFAULT_SIZE = 16;

const grid = document.querySelector("#grid");
const sizeBtn = document.querySelector("#sizeBtn");
const resetBtn = document.querySelector("#resetBtn");

// track the current grid size so reset keeps it
let currentSize = DEFAULT_SIZE;

function createGrid(size) {
  grid.replaceChildren();

  const gridSizePx = grid.clientWidth;
  const squareSize = gridSizePx / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    grid.appendChild(square);
  }
}

function hover(event) {
  if (event.target.classList.contains("square")) {
    event.target.style.backgroundColor = "black";
  }
}

function changeSize() {
  let number = prompt("What size grid? (1–100)");
  if (number === null) return;

  number = Number(number);

  if (!Number.isInteger(number) || number < 1 || number > 100) {
    alert("Please enter a whole number between 1 and 100.");
    return;
  }

  currentSize = number;
  createGrid(currentSize);
}

function reset() {
  createGrid(currentSize);
}

grid.addEventListener("mouseover", hover);
sizeBtn.addEventListener("click", changeSize);
resetBtn.addEventListener("click", reset);

// initial grid
createGrid(currentSize);
