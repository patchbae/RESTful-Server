var painters = [];
var inital = 1;
var maxHist;

function setup() {
  createCanvas(displayWidth, displayHeight);
  for (var i=0; i < inital; i++){
    painters.push(new Liner());
  }
  frameRate(120);
  dSlider = createSlider(0, 400, 88);
  dSlider.position(20, 20);
  textSize(20);
  fill(255);
}

function draw () {
  background(0);
  text('The slider adjusts the length of the trails.', 25, 60);  
  text('Click to add more lines.', 25, 80);


  for (var i=0; i<painters.length; i++) {
    painters[i].update();
    painters[i].show();
  }
}

function mouseClicked() {
      painters.push(new Liner());
}