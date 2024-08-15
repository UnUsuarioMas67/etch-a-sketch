const mainContainer = document.querySelector("#main-container");
createGrid(16);

function createGrid(gridSize) {
  if (gridSize < 1 || gridSize > 100) {
    throw new RangeError
  }

  const containerWidth = getComputedStyle(mainContainer).getPropertyValue("width");
  const squareSize = `calc(${containerWidth} / ${gridSize})`

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const div = document.createElement("div");
      div.className = "square";
      div.style.width = squareSize;
      div.style.height = squareSize;
      div.onmouseover = () => div.classList.add("hovered");

      mainContainer.appendChild(div);
    }
  }   
}