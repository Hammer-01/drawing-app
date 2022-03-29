var cnv;

var points = [];

var strokeColour;
var eraser = false;
var eraserSize = 250;
var erasablePoint;

var setup = function() {
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.elt.addEventListener('pointerdown', function(event) {
        eraser = event.button === 5;
    }, true);
    
    if (localStorage.points) points = JSON.parse(localStorage.getItem('points'));
    
    strokeColour = color(0);
    erasablePoint = () => points.findIndex(p => p ? p[0]+eraserSize/2 >= mouseX && p[0]-eraserSize/2 <= mouseX && p[1]+eraserSize/2 >= mouseY && p[1]-eraserSize/2 <= mouseY : false);
    //erasablePoint = () => points.findIndex(p => p ? dist(p[0], p[1], mouseX, mouseY) <= eraserSize) : false);
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
    // use dist() instead for circular eraser
    if (eraser) {
        while (erasablePoint() !== -1) {
            points.splice(erasablePoint(), 1, false);
        }
        points = points.filter((p, i, a) => !i || p !== a[i - 1]); // clear duplicate falses
    }
    else points.push([mouseX, mouseY]);
};

var mouseReleased = function() {
    if (!eraser) points.push([mouseX, mouseY]);
    localStorage.setItem('points', JSON.stringify(points)); // autosave
};

var windowResized = function() {
    resizeCanvas(windowWidth, windowHeight);
};
