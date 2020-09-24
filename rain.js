class Rain {
  constructor(xPos1, yPos1) {
    this.xPos1 = xPos1;
    this.yPos1 = yPos1;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);

  }

  display() {
    push()
    stroke(this.r, this.g, this.b);
    strokeWeight(5);
    line(this.xPos1, this.yPos1, this.xPos1 + 10, this.yPos1 + 10);
    pop();

  }
  move() {
    if (this.xPos1 <= width * 1.25) {
      this.xPos1 += 3;
      this.yPos1 += 3;
    } else if (this.xPos1 >= width) {
      this.xPos1 = random(-width, width);
      this.yPos1 = -width *.25;
    }

  }
}