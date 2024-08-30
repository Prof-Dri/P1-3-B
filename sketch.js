function setup() {
    createCanvas(600, 600);
    background("white");
  }
  
  function draw() {
    stroke("purple");
    fill("pink");
    
    if(mouseIsPressed){
      rect(mouseX,mouseY, 40, 68);
    }
  }