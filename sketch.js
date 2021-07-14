var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg1 = loadImage("b1.jpg")
  bg2 = loadImage("b2.jpg")
  bg3 = loadImage("aladdin_cave.jpg");
  t1 = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,900);
  system = new System()
  security = new Security()
}

function draw() {
 
  if(score === 0){
    clear()
    background(bg1)
    fill("black")
    textSize(40)
    text("Solve the firsr clue",400,218)
  }

  if(score === 1){
    clear()
    background(bg2)
    fill("black")
    textSize(40)
    text("Solve the second clue",400,218)
  }

  if(score === 2){
    clear()
  background(bg3);
  fill("black")
  textSize(40)
  text("Solve the third clue",400,218)
  }

  clues();
  security.display();

  // Add code to display score in the middle of the screen

  

  // Add code to display the end screen


  drawSprites()
}