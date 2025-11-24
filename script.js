let wind = 0;   // global varible to trach wind angle over time
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

    drawBranch(120)   // Start drawing the branch of length 120

}

function drawBranch(len) {
    strokeWeight(map(len, 10, 120, 1, 6))  // thinner branch when smaller

    line(0, 0, 0, -len);  // draw branch line upwards
    translate(0, -len);  // move to the end of this branch

    if(len > 10){  // Stop recursion if branch is small
        push(); // save current drawing state
        rotate(25);   // rotate right
        drawBranch(len * 0.7)  // draw smaller right branch
        pop()   // restore drawing 
        
        push()
        rotate(-25)  // rotate left
        drawBranch(len * 0.7)  // draw smaller left branch
        pop()
    }
    
}



