w = 400
h = 400
f = 0
b = 500
function setup() {
  createCanvas(w,h)
}

function draw () {
  f += 1.11
  background(0)
  fill(0)
  stroke(200)
  
  for (y = 50; y < b; y += 5) {
    beginShape()
    
    for(x = 0; x < b; x++) {
      vertex(x, y - 50 / (1 + pow(x - w/2, 4)/8e6) * noise(x/30 + f/50 + y))
    }
    
    vertex(x, 1e4)
    endShape()
  }
}