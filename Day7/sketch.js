let y;
let velocity = 0;
let gravity = 0.12;
let startY;

function setup() {
  createCanvas(540, 960);
  pixelDensity(2);
  noStroke();

  startY = height * 0.20;
  y = startY;
}

function draw() {
  background(0);

  let ball = ballState(); 
  updateBall(ball);
  drawBall(ball);
}



























function ballState() {
  return {
    x: width / 2,
    y: y,
    r: 40,
    c: color(255, 120, 120)
  };
}

function drawBall(ball) {
  fill(ball.c);
  circle(ball.x, ball.y, ball.r * 2);
}
























function updateBall(ball) {
  if (frameCount > 60) {
    velocity += gravity;
    y += velocity;

    // stop at ground
    if (y > height * 0.9) {
      y = height * 0.9;
      velocity = 0;
    }
  }
}

