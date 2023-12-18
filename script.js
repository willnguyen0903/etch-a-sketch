const gridContainer = document.createElement('div');
gridContainer.setAttribute('class', 'container');
document.body.appendChild(gridContainer);

// Create a 16x16 div element
const rows = 16;
const columns = 16;
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < columns; j++) {
    const grids = document.createElement('div');
    grids.setAttribute('id', 'grids');
    gridContainer.appendChild(grids);
  }
}

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








