let color ="black";

//Set up board (Area * Width) and changing size of board
function boardSize (size) {
    let grid_div = document.querySelector('.grid');
    let squares = grid_div.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    grid_div.style.gridTemplateColumns = `repeat(${size},1fr)`;
    grid_div.style.gridTemplateRows = `repeat(${size},1fr)`;

    let amount = size * size;
        for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'white';
        square.style.border = '1px solid gray';
        grid_div.insertAdjacentElement("beforeend",square);
    }
}
boardSize();

function changeSize(input) {
    if (input < 100) {
        boardSize(input);
    }
        else {
            return alert("Too many Squares!")
        }
    }

//Correlation between button in HTML and JS (onclick and this are the elements used)
//colorSquare function is for EACH SQUARE when you use "this"
function colorSquare () {
   if (color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
        else {
            this.style.backgroundColor = color;  
        }
    }

//Setting a variable equal to a color given in HTML. The buttons are given a functionality (check HTML)
function changeColor(colorChoice) {
    color = colorChoice;
}

function resetBoard () {
    let grid_div = document.querySelector('.grid');
    let squares = grid_div.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}