function setup() {
  createCanvas(540, 960);
  pixelDensity(2);
  noStroke();
}

function draw() {
	background(0);

	let pulse = 0.03;
	breath(pulse);
}

function breath(pulse) {
	
	let size = 120 + sin(frameCount * pulse) * 40;

	fill(180, 120, 255);
	circle(width/2, height/2, size);
}