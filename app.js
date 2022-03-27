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
    cnv.elt.addEventListener('pointerdown', function(event) {
        console.log('pointerType: ' + event.pointerType);
        console.log('Button: ' + event.button);
        console.log('Eraser before: ' + eraser);
        eraser = event.button === 5;
        console.log('Eraser after: ' + eraser);
    }, true);
    
    strokeColour = color(255);
};

var mouseDragged = function() {
    console.log('Eraser in mouseDragged' + eraser);
    if (eraser) {
        noStroke();
        fill(255);
        circle(mouseX, mouseY, 5);
    } else {
        stroke(strokeColour);
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
};

var windowResized = function() {
    resizeCanvas(windowWidth, windowHeight);
};
