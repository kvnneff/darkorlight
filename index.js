var dark = require('staygrimm/darkorlight').dark;
var randomColor = require('davidmerfield/randomColor');
var colors;
var grid;
var cell;

grid = document.createElement('div');
grid.classList.add('Grid');

cell = document.createElement('div');
cell.classList.add('Grid-cell');
cell.classList.add('u-size1of6');

colors = randomColor({count: 72});

colors.forEach(function (color, index) {
    var colorElement = cell.cloneNode(true);
    colorElement.style.background = color;
    colorElement.style.color = '#111'
    if (dark(color)) colorElement.style.color = '#FFF';
    colorElement.innerText = color.toUpperCase();
    grid.appendChild(colorElement);
});

document.body.appendChild(grid);

