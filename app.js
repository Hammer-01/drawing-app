// TODO: 
//   Add export option, to save as json (maybe in contextmenu), also import said json, if using contextmenu re-add save image (using save()) etc. 

var cnv;

var points = [];

var strokeColour;
var eraser = false;
var eraserSize = 50;
var erasablePoint;
var drawingHistory = [];

var setup = function() {
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.elt.addEventListener('pointerdown', function(event) {
        eraser = event.button === 5;
    }, true);
    
    if (localStorage.points) points = JSON.parse(localStorage.getItem('points'));
    
    strokeColour = color(0);
};

var savePoints = function() {
    localStorage.setItem('points', JSON.stringify(points)); // autosave
};

var draw = function() {
    background(255);
    stroke(strokeColour); // move inside loop later when diff colours available
    for (let p = 0; p < points.length-1; p++) {
        if (points[p] && points[p+1]) line(points[p][0], points[p][1], points[p+1][0], points[p+1][1]);
    }
};

var mousePressed = function() {
    drawingHistory = []; // fix
    points.push(false);
};

var mouseDragged = function() {
    if (eraser) {
        while ((erasablePoint = points.findIndex(p => p ? dist(p[0], p[1], mouseX, mouseY) <= eraserSize/2 : false)) !== -1) {
            points.splice(erasablePoint, 1, false);
        }
        points = points.filter((p, i, a) => !i || p !== a[i - 1]); // clear duplicate falses
    } else {
        points.push([mouseX, mouseY]);
    }
};

var mouseReleased = function() {
    if (!eraser) points.push([mouseX, mouseY]);
    savePoints(); // autosave
};

var keyPressed = function(event) {
    if (event.ctrlKey) {
        switch (event.code) {
        case 'KeyZ': // Ctrl + Z
            // pop points array until false value
            // that won't work for erasing but whatever
            drawingHistory.push(...points.splice(points.lastIndexOf(false)));
            break;
        case 'KeyY': // Ctrl + Y
            if (drawingHistory.length) points.push(...drawingHistory.splice(drawingHistory.lastIndexOf(false)));
            break;
        }
    }
    savePoints();
};

var windowResized = function() {
    resizeCanvas(windowWidth, windowHeight);
};
