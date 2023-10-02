let posX;
let posY;
const vel = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  posX = windowHeight / 2;
  posY = windowWidth / 2;
}

function draw() {
  update();
  fill(0);
  stroke(255, 50);
  strokeWeight(3);
  circle(posX, posY, 20);
}

function update() {
  posX += random(-1, 2);
  posY += random(-vel, vel);
}

class Walker {
  construntor(_posX, _posY) {
    this.posX = this.posY;
    // THIS HACE QUE LAS VARIABLES SEAN ASECIBLES SOLO DENTRO DE LA CLASE
  }
}
