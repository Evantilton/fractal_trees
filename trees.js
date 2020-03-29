
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(51);
    let length = 100;
    //this sets the line to white, 255 is white
    stroke(255);
    //translate sets where I am starting from, it sets the start location
    translate(200, height);
    branch(100);
}
function branch(length) {
    line(0, 0, 0, -length);
    //I now want to draw from the new location at the top of the first line 
    translate(0, -length)
    //pi / 4 is 45 degrees
    rotate(PI/4);
    if (length > 2);
    branch(length * 0.67)
}
