var cnv;

var points = [];

var strokeColour;
var eraser = false;
var eraserSize = 50;

var setup = function() {
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.elt.addEventListener('pointerdown', function(event) {
        eraser = event.button === 5;
    }, true);
    
    frameRate(0); // max frame rate
    
    strokeColour = color(0);
};

var draw = function() {
    background(255);
    stroke(strokeColour); // move inside loop later when diff colours available
    for (let p = 0; p < points.length-1; p++) {
        if (points[p]) line(points[p][0], points[p][1], points[p+1][0], points[p+1][1]);
    }
};

var mousePressed = function() {
    if (!eraser) points.push(false, [mouseX, mouseY]);
};

var mouseDragged = function() {
    if (eraser) {
        noStroke();
        fill(255);
        circle(mouseX, mouseY, eraserSize);
    } else {
        points.push([mouseX, mouseY]);
    }
};

var mouseReleased = function() {
    if (!eraser) points.push([mouseX, mouseY]);
};

var windowResized = function() {
    resizeCanvas(windowWidth, windowHeight);
};
