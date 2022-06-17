// rows of straight lines (vertices)
// change each vertex along horizontal line up or down randomly


let linesCanvasWidth
let linesCanvasHeight
let distanceBetweenLines = 15;
let yoff = 0.0;
let margin = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  linesCanvasWidth = windowWidth - (margin * 2)
  linesCanvasHeight = windowHeight - (margin * 2)
}

function draw() {
  // noLoop()
  let xoff = 0.0;
  background(240);
  strokeWeight(1.5);
  stroke(50, 100, 255);
  noFill();
  
  for (let y = 0; y <= linesCanvasHeight; y += distanceBetweenLines) {
    
    beginShape();

    for (let x = 0; x <= linesCanvasWidth; x += distanceBetweenLines) {
    	let noiseScale = map(noise(x * xoff, yoff), 0, 1, -15, 15)
			curveVertex(x + margin, (y + noiseScale) + margin);
			// curveVertex(x + margin, y + x + margin);
      xoff += 0.00002;
    }
    
    yoff += 0.0001;
    endShape();
  }
}