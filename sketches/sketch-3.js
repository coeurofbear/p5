let globalData;

function preload() {
  loadJSON('data/convencion/asistencia.json', getData)
}
function setup() {
  createCanvas(900, 900);
  background(220);
  noStroke();
  noLoop();
}
const getData = (data) => {
  globalData = data.AsistenciasPleno.AsistenciaPleno;
}

function draw() {
  for (let i = 0; i < globalData.length; i++) {
  let asistencia = globalData[i].TotalPresencial
  let asistenciaRemota = globalData[i].TotalRemotos
  let inasistencia = globalData[i].TotalAusentes
    // drawCircles(100, asistencia, 2, 200, i);
    drawCircles(200, asistenciaRemota, 2, 400, i);
    // drawCircles(300, inasistencia, 3, 600, i);
  }
}

function drawCircles(ra, circles, size) {
  push()
  let angle = 0;
  //  move 0,0 to the center of the screen
  translate(width/2, height/2);
  fill('red')
  for (let i = 0; i < circles; i++) {
    // let color = map(i, 0, circles, 0, 255);
    // fill(color, 110, 130);

    //convert polar coordinates to cartesian coordinates
    var x = ra * sin(angle);
    var y = ra * cos(angle);
    
    //draw ellipse at every x,y point
    ellipse(x, y, size);
    
    //increase angle by step size
    angle += TWO_PI/circles;
  }
  pop();  
}
