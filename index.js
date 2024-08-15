const mainContainer = document.querySelector("#main-container");
const newGridBtn = document.querySelector("#new-grid-btn");

newGridBtn.onclick = () => {
  let gridSize = 0;
  const isWithinLimits = () => gridSize > 0 && gridSize <= 100;

  while (!isWithinLimits()) {
    gridSize = parseInt(prompt("Enter the size for the new grid. (Min 1, Max 100)"));
  }

  createGrid(gridSize);
};

createGrid(16);

function createGrid(gridSize) {
  if (gridSize < 1 || gridSize > 100) {
    throw new RangeError();
  }
  if (!Number.isInteger(gridSize)) {
    throw new TypeError();
  }

  mainContainer.textContent = "";

  const containerWidth =
    getComputedStyle(mainContainer).getPropertyValue("width");
  const squareSize = `calc(${containerWidth} / ${gridSize})`;

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const div = document.createElement("div");
      div.className = "square";
      div.style.width = squareSize;
      div.style.height = squareSize;
      div.onmouseover = () => updateSquareColor(div);

      mainContainer.appendChild(div);
    }
  }
}

function updateSquareColor(square) {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const opacity = getComputedStyle(square).getPropertyValue("opacity")

  square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  square.style.opacity = opacity - 0.1;
}