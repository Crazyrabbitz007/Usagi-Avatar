let mic;
let raindrops = [];

function setup() {
  createCanvas(800, 800);
  noStroke();

  for (let i = 0; i <= 100; i++) {
    raindrops[i] =
      new Rain(
        random(-width, width),
        -random(500))
  }

  mic = new p5.AudioIn();
  mic.start();

  let xLeft = width * 0.375;
  let xRight = width * 0.625;
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);

  rectMode(CENTER); //Creates rectangles fr om the center
  angleMode(DEGREES); // Changes the mode to Degrees
}

function draw() {
  background(70);
  if (mouseX > 0 && mouseY > 0) {
    cursor('http://www.rw-designer.com/cursor-view/69674-48.png')
  }

  for (i = 0; i < raindrops.length; i++) {
    raindrops[i].display();
    raindrops[i].move();
  }

  vol = mic.getLevel();

  drawEar(width * 0.35, height * 0.35); // Left // xPos,yPos
  drawEar(width * 0.65, height * 0.35); // Right // xPos,yPos

  drawEarLobe(width * 0.325, height * 0.375); // Left // xPos,yPos
  drawEarLobe(width * 0.675, height * 0.375); // Right // xPos,yPos

  drawHead();

  y = map(mouseY, 0, height, height * 0.75, height * 0.80, true);
  xLeft = map(mouseX, 0, width, width * 0.35, width * 0.4, true);
  xRight = map(mouseX, 0, width, width * 0.6, width * 0.65, true);

  drawEyes();

  WhiskerLeftX = map(vol, 0, 5, width, 0, true);
  WhiskerRightX = map(vol, 0, 5, width, 0, true);
  WhiskerYTop = map(vol, 0, 5, height, 0, true);
  WhiskerYBottom = map(vol, 0, 5, height, 0, true);

  EyebrowHeight = map(vol, 0, 5, height, 0, true);
  EyebrowLeft = map(vol, 0, 5, width, 0, true);
  EyebrowRight = map(vol, 0, 5, width, 0, true);

  drawEyebrow(EyebrowLeft - width * 1.2, EyebrowHeight - width * 0.88, -25); // Left // xPos, yPos, Rotation
  drawEyebrow(width * 1.2 - EyebrowRight, EyebrowHeight - width * 0.88, 25); // Right // xPos, yPos, Rotation

  drawWhisker(WhiskerLeftX - width * 1.45, WhiskerYBottom - width * 0.7875, -25); // Bottom Left // xPos, yPos, Rotation
  drawWhisker(width * 1.45 - WhiskerRightX, WhiskerYBottom - width * 0.7875, 25); // Bottom Right // xPos, yPos, Rotation
  drawWhisker(width * 1.1875 - WhiskerRightX, width * 1.35 - WhiskerYTop, -25); // Top Right // xPos, yPos, Rotation
  drawWhisker(WhiskerLeftX - width * 1.1875, width * 1.35 - WhiskerYTop, 25); // Top Left // xPos, yPos, Rotation

}

function drawEar(xPos, yPos) {

  fill(r, g, b);
  rect(xPos, yPos, width * 0.1, width * 0.5, width * 0.025);
}

function drawEarLobe(xPos, yPos) {

  fill(237, 28, 36);
  rect(xPos, yPos, width * 0.05, width * 0.45);
}

function drawHead() {

  fill(r, g, b)
  rect(width * 0.5, height * 0.7, width * 0.4, width * 0.4);
}

function drawEyes() {

  //left eye
  fill(0); //Black fill from now on
  ellipse(xLeft, y, width * 0.0625);

  //right eye
  ellipse(xRight, y, width * 0.0625);

}

function drawEyebrow(xPos, yPos, rotation) {
  push();
  translate(width / 2, height / 2);
  rotate(rotation);
  rect(xPos, yPos, width * 0.125, width * 0.0375, width * 0.025);
  pop();
}

function drawWhisker(xPos, yPos, rotation) {
  fill(0);
  push();
  translate(width / 2, height / 2);
  rotate(rotation);
  rect(xPos, yPos, width * 0.1875, width * 0.03);
  pop();

}

function mousePressed() {
  // Pick new random color values
  r = random(255);
  g = random(255);
  b = random(255);
  return false;
}
