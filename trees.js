
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(51);
    let length = 100;
    //this sets the line to white, 255 is white
    stroke(255);
    //line draws a line, 200 is halfways
    line(200, height, 200, height-length);
}

