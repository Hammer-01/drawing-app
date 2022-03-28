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
    
    eraseFn = p => p ? p[0]+this/2 >= mouseX && p[0]-this/2 <= mouseX && p[1]+this/2 >= mouseY && p[1]-this/2 <= mouseY : false;
};

var draw = function() {
    background(255);
    stroke(strokeColour); // move inside loop later when diff colours available
    for (let p = 0; p < points.length-1; p++) {
        //console.log(points); // debugging
        if (points[p] && points[p+1]) line(points[p][0], points[p][1], points[p+1][0], points[p+1][1]);
    }
};

var mousePressed = function() {
    if (!eraser) points.push(false, [mouseX, mouseY]);
    console.log(`false, [${mouseX}, ${mouseY}]`);
};

var mouseDragged = function() {
    if (eraser) {
        while (points.findIndex(eraseFn, eraserSize) !== -1) {
            points.splice(points.findIndex(eraseFn, eraserSize), 1);
            console.log('in erase while loop');
        }
    } else {
        points.push([mouseX, mouseY]);
        console.log(`[${mouseX}, ${mouseY}]`);
    }
};

var mouseReleased = function() {
    if (!eraser) points.push([mouseX, mouseY]);
    console.log(`[${mouseX}, ${mouseY}]`);
};

var windowResized = function() {
    resizeCanvas(windowWidth, windowHeight);
};
