function setup(){
  createCanvas(360, 480);
}

function draw(){
	background(0);
	
	let size = 50;
	
	let base = map(mouseX, 0, width, 10, 200);
	let pulse = sin(frameCount * 0.03) * 70;
	size = base + pulse;
	
	//Thanks
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	fill(180,120,255);
	circle(width/4, height/4,size *3);

	fill(180,120,255);
	circle((width/4)*3, (height/4)*3, size * 3);

	fill(180, 120, 255);
	circle(width/2, height/2, size * 2);
	
	fill(100,255,150);
	circle(width/2, height/2, size);
	
	
	//Make it Breath
	
	
}	