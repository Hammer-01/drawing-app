var strokeColour;
var eraser = false;
var eraserSize = 20;
var cnv;

var setup = function() {
    cnv = createCanvas(windowWidth, windowHeight);
    console.log('Canvas id: ' + cnv.id());
    cnv.elt.addEventListener('pointerdown', function(event) {
        eraser = event.button === 5;
    }, true);
    
    strokeColour = color(0);
};

var mouseDragged = function() {
    if (eraser) {
        noStroke();
        fill(255);
        circle(mouseX, mouseY, eraserSize);
    } else {
        stroke(strokeColour);
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
};

var windowResized = function() {
    resizeCanvas(windowWidth, windowHeight);
};
