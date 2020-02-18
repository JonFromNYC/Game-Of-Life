// Declare Rows and Columns
let grid;
let cols;
let rows;
let resolution = 40;

// Declare functions

function make2Darray(cols, rows) {
    let arr = new Array(cols);
    for(let i = 0; i < arr.length; i++){
        arr[i] = new Array(rows);
    }
    return arr;
}


//set up a 2D grid of zero's and 1's
function setup(){
    createCanvas(400,400);
    cols = width/resolution;
    rows = height / resolution;
    grid = make2Darray(cols,rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = floor(random(2));
        }
    }
}// End of Setup

function draw(){
    background(0);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * resolution;
            let y = j * resolution;

            if(grid[i][j] == 1){
                fill(255);
                rect(x,y,resolution,resolution);
            }
        }
    }
}// End of draw