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

drawGrid(16);