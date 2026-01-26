function setup() {
  createCanvas(540, 960);
  pixelDensity(2);
  noStroke();
}

function draw() {
  background(0, 40);

  let t = timeValue();
  let size = sizeValue(t);
  let count = 5;

  for (let i = 0; i < count; i++) {
    let y = vert(i, count);

	let offset = i * 0.6;
	let motion = sin(t + offset) * 40;

	let hueShift = sin(t + i) * 40;

	fill(180 + hueShift, 120, 255);
	circle(width / 2, y + motion, size);
	
	

	fill(100, 255 - hueShift, 150);
	circle(width / 2, y + motion, size * 0.65);

	fill(255);
	circle(width / 2, y + motion, size * 0.25);

  }
}




















function timeValue() {
  return frameCount * 0.03;
}

function sizeValue(t) {
  return 100 + sin(t * 0.8) * 30;
}

function vert(i, count) {
  return map(i, 0, count - 1, height * 0.2, height * 0.8);
}

