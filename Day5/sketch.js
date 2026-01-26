function setup() {
  createCanvas(540, 960);
  pixelDensity(2);
  noStroke();
}

function draw() {
  background(0);

  let t = frameCount * 0.03;

  // shared breathing size
  let size = 90 + sin(t * 0.8) * 25;

  let count = 5;

  for (let i = 0; i < count; i++) {
    let y = map(i, 0, count - 1, height * 0.2, height * 0.8);
    let offset = i * 0.6;

    let motion = sin(t + offset) * 40;

    fill(180, 120, 255);

    // left
    circle(width * 0.35, y + motion, size);

    // right (mirror)
    circle(width * 0.65, y + motion, size);
  }
}



























// calculate vertical position
function vert(i, count) {
  return map(i, 0, count - 1, height * 0.2, height * 0.8);
}

// shared breathing size
function sizeValue() {
  return 90 + sin((frameCount * 0.03) * 0.8) * 25;
}

// draw one circle
function drawCircle(y, size, i, t) {
  let offset = i * 0.6;
  let motion = sin(t + offset) * 40;

  fill(180, 120, 255);
  circle(width / 2, y + motion, size);
}
