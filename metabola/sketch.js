let bx = [];
let by = [];
let br = [];
let bxs = [];
let bys = [];

let nblobs = 30;

let step = 20;
let cols, rows;

function setup() {

  createCanvas(windowWidth, windowHeight);
  //colorMode(HSB);
  noStroke();

  cols = floor(width/step);
  rows = floor(height/step);

  for (let i=0;i<nblobs;i++){

    bx[i] = random(width);
    by[i] = random(height);

    let angle = random(TWO_PI);

    bxs[i] = random(width*0.0001, width*0.0003)*cos(angle);
    bys[i] = random(width*0.0001, width*0.0003)*sin(angle);

    br[i] = random(height*0.25,width*0.3);
  }
}

function draw() {

  background(0);

  for (let i=0;i<cols;i++){

    let x = i*step;

    for (let j=0;j<rows;j++){

      let y = j*step;

      let sum = 0;

      for (let k=0;k<nblobs;k++){

        let dx = x - bx[k];
        let dy = y - by[k];

        let d = dx*dx + dy*dy + 0.0001;

        sum += (br[k]*br[k]) / (10*d);
      }

      let hue = (sum*20);

      fill(hue,0,100);
      rect(x,y,step,step);
    }
  }

  // actualizar blobs
  for (let i=0;i<nblobs;i++){

    bx[i] += bxs[i];
    by[i] += bys[i];

    if (bx[i] > width || bx[i] < 0) bxs[i] *= -1;
    if (by[i] > height || by[i] < 0) bys[i] *= -1;
  }
}

// Automatically resize the canvas when the window changes
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}