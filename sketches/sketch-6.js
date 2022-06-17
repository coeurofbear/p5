class Wave {
  constructor(amp, period, phase) {
    this.amplitud = amp
    this.period = period
    this.phase = phase
  }
  calculate(x) {
    return sin(this.phase + TWO_PI * x / this.period) * this.amplitud
  }
}

let waves = []

function setup() {
  createCanvas(600, 400)
  for (let i = 0; i < 3; i++) {
    waves[i] = new Wave(120+i*15, 600, i*10)
  }
}

function draw() {
  background(0)
  noStroke()
  // noLoop()
  for (let x = 0; x < width; x += 0.1) {
     for(wave of waves) {
       let y = wave.calculate(x)
       ellipse(x, y + height / 2, 1)
     }
  }
}