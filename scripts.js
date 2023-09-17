const n = 4;

function gridSetup(n) {
    const container = document.querySelector('.grid-container');

    for(i=1; i<= (n * n); i++) {
        const gridUnit = document.createElement('div');
        gridUnit.classList.add('grid-unit',`grid-unit-${i}`);
        gridUnit.addEventListener('mouseover', hoverClass) 
        container.appendChild(gridUnit);      
    }

}
gridSetup(n);

function hoverClass(e) {
    e.target.classList.add('hover');
}

function promptSide(n) {
    n = prompt('insert squares per side');
    clearGrid();
    gridSetup(n);
}

function clearGrid() {
    currentN = document.querySelectorAll('.grid-unit').length
    for(i=1; i<= currentN; i++) {
        gridUnit = document.querySelector(`.grid-unit`);
        gridUnit.remove();
    }
};

