var cnv; // canvas
var eraser = false;
var strokeColour;

var setup = function() {
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.addEventListener('pointerdown', (event) => {
        eraser = event.pointerType === 'pen' && event.button === 5;
    }, false);
    
    strokeColour = color(255);
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
