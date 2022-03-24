var strokeColour;
var eraser = false;

var setup = function() {
    createCanvas(windowWidth, windowHeight);
    strokeColour = color(255);
};

var mousePressed = function(event) {
    eraser = event.button === 5;
};

var mouseDragged = function() {
    if (eraser) {
        noStroke();
        fill(255);
        circle(mouseX, mouseY, 5);
    }
    else {
        stroke(strokeColour);
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
};

var windowResized = function() {
    resizeCanvas(windowWidth, windowHeight);
};
