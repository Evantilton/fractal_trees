//this was made with a tutorial from The Coding Train
//video available https://www.youtube.com/watch?v=0jjeOYMjmDU


let angle = 0;
let slider;
function setup() {
    createCanvas(600, 600);
    slider = createSlider(0,TWO_PI, PI / 4);
}

function draw() {
    background(51);
    angle = slider.value();
    let length = 200;
    //this sets the line to white, 255 is white
    stroke(255);
    //translate sets where I am starting from, it sets the start location
    translate(300, 300);
    branch(100);
}
function branch(length) {
    line(0, 0, 0, -length);
    //I now want to draw from the new location at the top of the first line 
    translate(0, -length)
    if (length > 4) {
    push();
    rotate(angle);
    branch(length * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(length * 0.67);
    pop();
    };
}

