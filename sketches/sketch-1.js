let globalData = [];
const diameter = 600;

function preload() {
  loadJSON('data/maxtemp/temp.json', getData)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // createCanvas(1400, windowHeight);
  noStroke();
}

const getData = (data) => {
  globalData = data.days.map(v=> v.tempmax*10)
}

function draw() {
  // background(0, 160, 127, 100);
  background(174, 218, 205);
  pieChart(diameter, globalData)
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

function pieChart(diameter, data) {
  // noLoop();
  translate(width / 2, height / 2);
  rotate(270*(PI/180));
  translate(- (width / 2), -(height / 2));
  // let degreeCalc = degreeCalcs(data)
  let angleProportion = 360/data.length
  let lastAngle = 0;
  for (let i = 0; i < data.length; i++) {
    // let color = map(data[i], 0, 200, 0, 255);
    let color = map(data[i], 0, 209, 0, 255);
    fill(90, color, 150);
    arc(
      width/2,
      height/2,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(angleProportion+0.5)
      );
      lastAngle += radians(angleProportion);
  }
}
