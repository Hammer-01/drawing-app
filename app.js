var setup = function() {
    createCanvas(windowWidth, windowHeight);
};

var mouseDragged = function() {
    line(pmouseX, pmouseY, mouseX, mouseY);
};

var windowResized = function() {
    // change to true when drawing is saved to array
    resizeCanvas(windowWidth, windowHeight, false);
};
