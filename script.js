
function setup() {
    createCanvas(400, 400);  // drawing areas (the canvas)
    angleMode(DEGREES) // Used degrees for rotation later
}

function draw(){
    background('#0a192f');   // Navy blue

    // Put the drawing start point at the bottom center
    translate(width / 2, height);

    stroke('#64ffda');  // tree color
    strokeWeight(6);   // Trunk thickness

    // Draw the trunk upward from the bottom
    line(0, 0, 0, -120)

}


