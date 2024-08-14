const mainContainer = document.querySelector("#main-container");

// create 16x16 divs grid
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const div = document.createElement("div");
    div.className = "square";
    mainContainer.appendChild(div);
  }
}