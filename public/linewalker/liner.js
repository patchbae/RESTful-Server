// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var maxHist = 400;
var step = 5;
var opacity = 255;

class Liner {
  constructor() {
    this.position1 = createVector(width, height);
    this.position2 = createVector(width, height);
    this.noff1 = createVector(random(1000), random(1000));
    this.noff2 = createVector(random(1000), random(1000));

    this.r = random(127);
    this.g = random(127);
    this.b = random(127);

    this.history1 = [];
    this.history2 = [];
    this.history3 = [];
  }

  update() {
    this.position1.x = map(noise(this.noff1.x), 0, 1, 0, width);
    this.position1.y = map(noise(this.noff1.y), 0, 1, 0, height);
    this.position2.x = map(noise(this.noff1.x), 1, 0, 0, width);
    this.position2.y = map(noise(this.noff1.y), 1, 0, 0, height);

    //this.position2.x = map(noise(this.noff.x), 1, 0, 0, width); for radial
    //this.position2.y = map(noise(this.noff.y), 1, 0, 0, height); for radial
    this.noff1.add(0.001, 0.001, 0);
    //this.noff2.add(0.001, 0.001, 0);

    //this.history.push(this.position1.copy());
    let v = createVector(this.position1.x,this.position1.y);
    this.history1.push(v);
    let v1 = createVector(this.position2.x,this.position2.y);
    this.history2.push(v1);
    let colHist = createVector(this.r, this.g, this.b);
    this.history3.push(colHist);
    maxHist = dSlider.value();
    while (this.history1.length > maxHist) {
    	this.history1.splice(0, 1); //calculate the different current length and max history
      this.history2.splice(0, 1);
      this.history3.splice(0, 1); //this is how you get the erase
    }

    
   
    var count = floor(random(2));
    
    switch (count) {
      case 0:
        if (this.r > -1 && this.r < 256) {
          this.r = this.r + floor(random(step));
        } else if (this.r <= 0) {
          this.r = this.r + floor(random(step));
        } else if (this.r >= 256) {
          this.r = this.r - floor(random(step));
        }

        if (this.g > -1 && this.g < 256) {
          this.g = this.g + floor(random(step));
        } else if (this.g <= 0) {
          this.g = this.g + floor(random(step));
        } else if (this.g >= 256) {
          this.g = this.g - floor(random(step));
        }

        if (this.b > -1 && this.b < 256) {
          this.b = this.b + floor(random(step));
        } else if (this.b <= 0) {
          this.b = this.b + floor(random(step));
        } else if (this.b >= 256) {
          this.b = this.b - floor(random(step));
        }
        break;

      case 1:
        if (this.r > -1 && this.r < 256) {
          this.r = this.r - floor(random(step));
        } else if (this.r <= 0) {
          this.r = this.r + floor(random(step));
        } else if (this.r >= 256) {
          this.r = this.r - floor(random(step));
        }
        
        if (this.g > -1 && this.g < 256) {
          this.g = this.g - floor(random(step));
        } else if (this.g <= 0) {
          this.g = this.g + floor(random(step));
        } else if (this.g >= 256) {
          this.g = this.g - floor(random(step));
        }

        if (this.b > -1 && this.b < 256) {
          this.b = this.b - floor(random(step));
        } else if (this.b <= 0) {
          this.b = this.b + floor(random(step));
        } else if (this.b >= 256) {
          this.b = this.b - floor(random(step));
        }
        break;
    }
  }
  

  show() {
    //strokeWeight(1);
    //fill(this.r, this.g, this.b, 127);
    //point(this.position.x, this.position.y);
    //line(this.position1.x, this.position1.y, this.position2.x, this.position2.y);
    //ellipse(this.position1.x, this.position1.y, 12, 12);
    //fill(255);
    for (var i = 0; i < this.history1.length; i++) {
      var pos1 = this.history1[i];
      var pos2 = this.history2[i];
      var col = this.history3[i];
      stroke(col.x, 0, col.z, opacity);
      line(pos1.x, pos1.y, pos2.x, pos2.y);
    }
  }
}