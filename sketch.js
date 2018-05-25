let t = 0; //time

function setup() {
  var clientHeight = document.getElementById('banner').clientHeight;
  var clientWidth = document.getElementById('banner').clientWidth;
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("banner");
  noStroke();
  fill(129, 236, 236);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(50, 30);

  for (let x = 0; x <= windowWidth; x = x + 70) {
    for (let y = 0; y <= windowHeight; y = y + 70) {

      let xAngle = map(mouseX, 0, width, -0.5 * PI, 0.5 * PI, true);
      let yAngle = map(mouseY, 0, height, -0.375 * PI, -0.375 * PI, true);

      let angle = xAngle * (x / width) + yAngle * (y / height);

      let myX = x + 50 * cos(2 * PI * t + angle);
      let myY = y + 30 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 40);
    }
  }
  t = t + 0.002;
}
