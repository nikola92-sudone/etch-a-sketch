const grid = document.querySelector("#grid");

for (let i = 0; i < 16 * 16; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  grid.appendChild(square);
}

const grid = document.querySelector("#grid");

function hover(event) {
  if (event.target.classList.contains("square")) {
    event.target.style.backgroundColor = "black"
  }
}

grid.addEventListener("mouseover", hover)