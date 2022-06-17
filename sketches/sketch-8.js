let xoff = 0.0;

function draw() {
  noLoop()
  background(204);
  xoff = xoff + 0.01;
  let n = noise(xoff) * width;
  // let n = random(xoff) * width;
  console.log(n);
  line(n, 0, n, height);
}