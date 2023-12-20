const gridContainer = document.createElement('div');
gridContainer.setAttribute('class', 'gridContainer');
const container = document.querySelector('.container');
container.appendChild(gridContainer);

const slider = document.getElementById("myRange");
const output = document.getElementById("demo");

// Initial grid creation
createGrid(slider.value, slider.value);

function createGrid(rows, columns) {
  const gridWidth = 100 / rows;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const grid = document.createElement('div');
      grid.setAttribute('class', 'grid-item'); // Add a class for styling
      grid.style.width = `${gridWidth}%`;
      grid.style.height = `${gridWidth}%`;
      gridContainer.appendChild(grid);
    }
  }

  // Set up event listeners after creating the grid
  const grids = document.querySelectorAll('.grid-item');
  let isMouseDown = false;

  grids.forEach((gridItem) => {
    gridItem.addEventListener('mousedown', function (event) {
      isMouseDown = true;
      event.preventDefault();
      coloring(gridItem);
    });

    gridItem.addEventListener('mouseup', function() {
      isMouseDown = false;
    });

    gridItem.addEventListener('mousemove', function() {
      if (isMouseDown) {
        event.preventDefault();
        coloring(gridItem);
      }
    });
  });
}

// Size slider
output.innerHTML = slider.value;

slider.addEventListener("input", function() {
  output.innerHTML = this.value;

  // Clear existing grids
  gridContainer.innerHTML = '';

  // Create a new grid based on the updated slider value
  createGrid(this.value, this.value);
});

// Coloring function: hold left-click and drag to color
const colorPicker = document.querySelector('#colorPicker');
function coloring(element) {
  element.style.backgroundColor = colorPicker.value;
}

// Reset button & eraser
const resetButton = document.querySelector('#reset-btn');
resetButton.addEventListener('click', clearBoard);

function clearBoard() {
  const grids = document.querySelectorAll('.grid-item');
  grids.forEach((gridItem) => {
    gridItem.style.backgroundColor = 'white';
  });
}

const eraser = document.querySelector('#eraser');
eraser.addEventListener('click', () => {
  colorPicker.value = '#FFFFFF';
});

