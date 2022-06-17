let circles = [];

function setup() {
  // createCanvas(700, 860)
  noStroke()
  createCanvas(windowWidth, windowHeight);
  // background(197,233,254)
}

function draw () {
  noLoop()
  // for (let i = 0; i < 25; i++) {
  let protection = 0;
  while (circles.length < 4000) {
    let circle = {
      x: random(width),
      y: random(height),
      r: random(4,45),
      c: color(random(0,255), random(0,255), random(0,255), 200)
    }

    let overLapping = false

    for (let j = 0; j < circles.length; j++) {
      let other = circles[j]
      let d = dist(circle.x, circle.y, other.x, other.y)

      if (d - (circle.r + other.r) < 0) {
        // they overlapping
        overLapping = true
        break
      }
    }

    if (!overLapping) {
      circles.push(circle)
    }

    protection++

    if (protection > 50000) {
      break
    }
  }
  
  // for (let i = 0; i < 3; i++) {  
    for (let i = 0; i < circles.length; i++) {
      fill (circles[i].c)
      ellipse(circles[i].x, circles[i].y, circles[i].r*2, circles[i].r*2)
      // fill (circles[i].c)
      // fill (255, 0, 50, 100)
      // ellipse(circles[i].x, circles[i].y, circles[i].r*2, circles[i].r*2)
    // }
  }
}