var strokeColour;

var setup = function() {
    createCanvas(windowWidth, windowHeight);
    strokeColour = color(255);
};

var mouseDragged = function(event) {
    console.log(event);
    console.log(event.button);
    if (event.button === 5) { // pen eraser
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
