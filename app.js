// TODO: 
//   Save to localStorage
//   Fix eraser/add new eraser functionality

var cnv;

var points = [];
var ePoints = []; // temporary

var strokeColour;
var eraser = false;
var eraserSize = 50;
var eraseFn;

var setup = function() {
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.elt.addEventListener('pointerdown', function(event) {
        eraser = event.button === 5;
    }, true);
    
    strokeColour = color(0);
    
    eraseFn = p => p ? p[0]+eraserSize/2 >= mouseX && p[0]-eraserSize/2 <= mouseX && p[1]+eraserSize/2 >= mouseY && p[1]-eraserSize/2 <= mouseY : false;
};

var draw = function() {
    background(255);
    stroke(strokeColour); // move inside loop later when diff colours available
    for (let p = 0; p < points.length-1; p++) {
        if (points[p] && points[p+1]) line(points[p][0], points[p][1], points[p+1][0], points[p+1][1]);
    }
};

var mousePressed = function() {
    if (!eraser) points.push(false, [mouseX, mouseY]);
};

var mouseDragged = function() {
    if (eraser) points = points.filter(p => p ? p[0]+eraserSize/2 >= mouseX && p[0]-eraserSize/2 <= mouseX && p[1]+eraserSize/2 >= mouseY && p[1]-eraserSize/2 <= mouseY : false);
    else points.push([mouseX, mouseY]);
};

var mouseReleased = function() {
    if (!eraser) points.push([mouseX, mouseY]);
    // add a save to localStorage here
};

var windowResized = function() {
    resizeCanvas(windowWidth, windowHeight);
};
