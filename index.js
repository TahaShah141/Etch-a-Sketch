function drawGrid(n) {
    const grid = document.querySelector(".grid");

    for (let i = 0; i < n; i++) 
    {
        const row = document.createElement("div");
        row.classList.add("row");
        
        for (let j = 0; j < n; j++)
        {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("mouseenter", changeColor);
            row.appendChild(cell);
        }

        grid.appendChild(row);
    }
}

function changeColor() {
    let color = getColor();
    this.style['background-color'] = color;
}

function getColor() {
    return "#000000";
}

document.onkeydown = function(e) {
    if (e.code === "KeyR") resetGrid();
    else if (e.code === "KeyN") changeDimensions();
}

function resetGrid() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.style["background-color"] = "#FFFFFF");
        
}

function changeDimensions() {
    let n = parseInt(prompt("Enter the dimensions of the new board"));
    if (n > 100 || n <= 0 || !n) {alert("Dimension out of range");return;}

    const rows = document.querySelectorAll(".row");
    rows.forEach(row => row.remove());

    drawGrid(n);
}

drawGrid(16);