function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 35, 25);
  
  //background oval
  strokeWeight(1);
  ellipse(200,150,200,30);
  ellipse(100,150,20,20);
  
  //foreground purple rectangle
  strokeWeight(5);
  stroke(20,100,59);
  fill(135, 135, 237, 200);
  rect(175,150,200,50,10);
  
  //outline rectangle
  noFill();
  rect(175,300,150,50);
  
  
  
  
  
}