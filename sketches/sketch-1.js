let globalDataBerlin = [];
let globalDataSantiago = [];
let distanceBerlin = 3.75;
let distanceSantiago = 1.35;
const diameter = 600;

function preload() {
  loadJSON('data/maxtemp/temp.json', getDataBerlin)
  loadJSON('data/maxtemp/temp-santiago.json', getDataSantiago)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // createCanvas(windowHeight,windowWidth);
  // createCanvas(1400, windowHeight);
  noStroke();
}

const getDataBerlin = (data) => {
  globalDataBerlin = data.days.map(v=> v.tempmax*10)
}
const getDataSantiago = (data) => {
  globalDataSantiago = data.days.map(v=> v.tempmax*10)
}

function draw() {
  background(174, 218, 205);
  // ellipseMode(CENTER);
  pieChart(diameter, globalDataBerlin, distanceBerlin)
  pieChart(diameter, globalDataSantiago, distanceSantiago)
}

function degreeCalcs(data) {
  // sum all the individual degree values of everyday
  // to get a proporption between 360 and the sum of
  // all values
  let sumAllTemp = 0;
  for(v of data) sumAllTemp += v;
  // divides the total degrees 360 per the sum of all values
  let degreeValue = 360/sumAllTemp
  // map all the values of degrees multiplied by its
  // degree value from 360, every temperature is equivalent
  // to a certain degree, proportionally
  return data.map(v=> v*degreeValue)
}

function pieChart(diameter, data, position) {
  // push()
  // noLoop();

  // rotation
    // translate(width / position, height /2);
    // rotate(270*(PI/180));
    // translate(- (width / position), -(height /2));
  // rotation

  let angleProportion = 360/data.length
  // let degreeCalc = degreeCalcs(data)
  let lastAngle = 0;
  const highestValue = Math.max(...data)
  const lowestValue = Math.min(...data)
  for (let i = 0; i < data.length; i++) {
    let color = map(data[i], lowestValue, highestValue, 0, 255);
    fill(90, color, 150);
    arc(
      width/position,
      height/2,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(angleProportion+0.5)
      );
      lastAngle += radians(angleProportion);
  }
  // pop()
}
