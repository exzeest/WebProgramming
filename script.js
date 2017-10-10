'use strict'
function createTable(rows, columns) {
    var table = document.createElement('table');
    table.setAttribute('onmousedown', 'changeElementsColor(event.target)');
    table.setAttribute('align', 'center');
    for (var i = 0; i < rows; ++i) {
        var row = document.createElement('tr');
        for (var j = 0; j < columns; ++j) {
            var cell = document.createElement('td');
            cell.className = "whiteClr";
            row.appendChild(cell);
        }
        table.appendChild(row);
     }
     document.body.appendChild(table);
}

function changeElementsColor(element) {
	if (element.tagName === 'TD')
		element.className = (element.className == "whiteClr") ? "blackClr" : "whiteClr";
}

function changeColors() {
    var table = document.getElementsByTagName('table')[0]; 
    table.className = (table.className =='invert') ? 'standart' : 'invert';
}

createTable(5,5);