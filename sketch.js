function setup() {
  createCanvas(600, 600);
  background("pink");
}

function draw() {
  stroke("pink");
  fill("purple");
  
  if(mouseIsPressed){
    rect(mouseX,mouseY, 40, 68);
  }
}