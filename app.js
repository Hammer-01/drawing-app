var cnv;

var points = [];
var keys = [];

var strokeColour;
var eraser = false;
var eraserSize = 50;
var erasablePoint;

var setup = function() {
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.elt.addEventListener('pointerdown', function(event) {
        eraser = event.button === 5;
    }, true);
    
    if (localStorage.points) points = JSON.parse(localStorage.getItem('points'));
    
    strokeColour = color(0);
};

var draw = function() {
    background(255);
    stroke(strokeColour); // move inside loop later when diff colours available
    for (let p = 0; p < points.length-1; p++) {
        if (points[p] && points[p+1]) line(points[p][0], points[p][1], points[p+1][0], points[p+1][1]);
    }
};

var mousePressed = function() {
    mouseDragged(true);
};

var mouseDragged = function(pressed) {
    if (eraser) {
        while ((erasablePoint = points.findIndex(p => p ? dist(p[0], p[1], mouseX, mouseY) <= eraserSize/2 : false)) !== -1) {
            points.splice(erasablePoint, 1, false);
        }
        points = points.filter((p, i, a) => !i || p !== a[i - 1]); // clear duplicate falses
    }
    else {
        if (pressed === true) points.push(false);
        points.push([mouseX, mouseY]);
    }
};

var mouseReleased = function() {
    if (!eraser) points.push([mouseX, mouseY]);
    localStorage.setItem('points', JSON.stringify(points)); // autosave
};

var keyPressed = function() {
    keys[keyCode] = true;
    if (keys[17] && keys[90]) { // Ctrl + Z
        // pop points array until false value
        // that won't work for erasing but whatever
        if (points.indexOf !== -1) points.splice(points.lastIndexOf(false));
        //keys[90] = false;
    }
};

var keyReleased = function() {
    keys[keyCode] = false;
};

var windowResized = function() {
    resizeCanvas(windowWidth, windowHeight);
};
