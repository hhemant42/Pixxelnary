function setup() {
  createCanvas(360, 480);
  noStroke();
}

function draw() {
  background(0);

  let t = frameCount * 0.03;

  // vertical movement
  let y = height / 2 + sin(t) * 120;

  // breathing size
  let size = 120 + sin(t * 0.8) * 30;

  fill(180, 120, 255);
  circle(width / 2, y, size);
}
