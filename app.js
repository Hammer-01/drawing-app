var setup = function() {
    createCanvas(windowWidth, windowHeight);
};

var mouseDragged = function() {
    line(pmouseX, pmouseY, mouseX, mouseY);
};

var windowResized = function() {
    resizeCanvas(windowWidth, windowHeight);
};
