console.log("script.js is running");

const grid = document.querySelector("#grid");
const sizeBtn = document.querySelector("#sizeBtn");

// Build/rebuild the grid
function createGrid(size) {
  // clear existing squares
  grid.innerHTML = "";

  // compute square size based on current grid width
  const gridSizePx = grid.clientWidth; // e.g. 800 from your CSS
  const squareSize = gridSizePx / size;

  // create size * size squares
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    // override the CSS hardcoded /16 with an inline size
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    grid.appendChild(square);
  }
}

// hover behavior using event delegation
function hover(event) {
  if (event.target.classList.contains("square")) {
    event.target.style.backgroundColor = "black";
  }
}

// button click handler
function changeSize() {
  let number = prompt("What size grid? (1–100)");

  if (number === null) return; // user hit Cancel

  number = Number(number);

  // validate
  if (!Number.isInteger(number) || number < 1 || number > 100) {
    alert("Please enter a whole number between 1 and 100.");
    return;
  }

  createGrid(number);
}

// attach ONE listener to the grid
grid.addEventListener("mouseover", hover);

// attach button listener
sizeBtn.addEventListener("click", changeSize);

// initial grid
createGrid(16);
