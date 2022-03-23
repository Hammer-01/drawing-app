var setup = function() {
    createCanvas(windowWidth, windowHeight);
};

var mouseDragged = function() {
    line(mouseX, mouseY, pmouseX, pmouseY);
};

var windowResized = function() {
    // change to true when drawing is saved to array
    resizeCanvas(windowWidth, windowHeight, false);
};
