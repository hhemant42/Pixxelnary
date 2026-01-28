let y;
let velocity = 0;
let gravity = 0.8;
let bounce = 0.7;   // energy loss
let startY;

function setup() {
  createCanvas(540, 960);
  pixelDensity(2);
  noStroke();

  startY = height * 0.25;
  y = startY;
}

function draw() {
  background(0);

  let ball = ballState();
  updateBall(ball);
  drawBall(ball);
}





// ball state
function ballState() {
  return {
    x: width / 2,
    y: y,
    r: 40,
    c: color(255, 120, 120)
  };
}

// update motion (WITH bounce)
function updateBall(ball) {
  if (frameCount > 60) {
    velocity += gravity;
    y += velocity;

    // bounce at ground
    if (y > height * 0.8) {
      y = height * 0.8;
      velocity *= -bounce;
    }
  }
}

// draw the ball
function drawBall(ball) {
  fill(ball.c);
  circle(ball.x, ball.y, ball.r * 2);
}
