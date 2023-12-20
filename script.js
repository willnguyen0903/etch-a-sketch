const gridContainer = document.createElement('div');
gridContainer.setAttribute('class', 'container');
document.body.appendChild(gridContainer);

// Create a 16x16 div element
const rows = 100;
const columns = 100;
const gridWidth = 100 / rows;
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < columns; j++) {
    const grid = document.createElement('div');
    grid.setAttribute('id', 'grids');
    grid.style.width = `${gridWidth}%`;
    grid.style.height = `${gridWidth}%`;
    gridContainer.appendChild(grid);
  }
}
//coloring function: hold lclick and drag to color
let isMouseDown = false; 
const grids = document.querySelectorAll('#grids');
    grids.forEach((gridItem) => {
      gridItem.addEventListener('mousedown', function () {
        isMouseDown = true;
        coloring(gridItem);
      });

      gridItem.addEventListener('mouseup', function() {
        isMouseDown = false;
      });

      gridItem.addEventListener('mouseenter', function() {
        if (isMouseDown) {
          coloring(gridItem);
        }
      });
    });
    

function coloring(element) {
  element.style.backgroundColor = 'lightcoral';
}

//reset button: reset the board on click
const resetButton = document.querySelector('#reset-btn');
resetButton.addEventListener('click',clearBoard);

function clearBoard() {
  grids.forEach((gridItem) => {
    gridItem.style.backgroundColor = 'white'
  });
}

//resize button 
const sizeSelector = document.querySelector('#size');
resizeButton.addEventListener('click',resize);

function resize() {
  
}



