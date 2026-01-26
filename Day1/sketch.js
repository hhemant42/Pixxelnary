function setup() {
  createCanvas(540, 960);
  pixelDensity(2);
  noStroke();
}

function draw() {
  background(0, 40);

  let t = timeValue();
  let s = sizeValue(t);
  let count = 5;

  for (let i = 0; i < count; i++) {
    let y = vert(i, count);
    drawMirror(y, s, i, t);
  }
}



























// time
function timeValue() {
  return frameCount * 0.03;
}

// shared breathing size
function sizeValue(t) {
  return 90 + sin(t * 0.8) * 25;
}

// vertical placement
function vert(i, count) {
  return map(i, 0, count - 1, height * 0.2, height * 0.8);
}

// draw mirrored circles with subtle variation
function drawMirror(y, size, i, t) {
  // fixed random value per index
  let drift = noise(i * 10) * 20 - 10;

  let offset = i * 0.6;
  let motion = sin(t + offset) * 40 + drift;

  fill(180, 120, 255);

  circle(width * 0.35, y + motion, size);
  circle(width * 0.65, y + motion, size);
}
