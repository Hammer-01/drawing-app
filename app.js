var setup = function() {
    createCanvas(windowWidth, windowHeight);
};

var mouseDragged = function() {
    line(mouseX, mouseY, pmouseX, pmouseY);
};

var windowResized = function() {
    resizeCanvas(windowWidth, windowHeight);
};
