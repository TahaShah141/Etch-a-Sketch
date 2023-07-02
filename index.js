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
            row.appendChild(cell);
        }

        grid.appendChild(row);
    }
}

drawGrid(16);