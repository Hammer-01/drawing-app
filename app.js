// TODO: manually add event using addEventListener
/*
    cnv.elt.addEventListener('pointerdown', function(event) {
        if (event.pointerType === 'pen') {
            console.log(event.button?'eraser':'pen');
        } else {
            console.log(event.button);
        }
    }, false);
*/

var strokeColour;
var eraser = false;
var cnv;

var setup = function() {
    cnv = createCanvas(windowWidth, windowHeight);
    console.log('Canvas id: ' + cnv.id());
    strokeColour = color(255);
};

var mousePressed = function(event) {
    console.log(event);
    console.log(event.pointerType);
    console.log(event.button);
    console.log(event.buttons);
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
