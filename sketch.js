let cor
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {
  
  createCanvas(400, 400);
  cor = color(random(0, 225), random(0, 225), random(0, 225));
  background( color(random(0, 225), random(0, 225), random(0, 225)));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}

function draw() {
  
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);
  
  if(mouseX < posicaoHorizontal){
  posicaoHorizontal = posicaoHorizontal - random(0, 5);
  }
  
  if(mouseX > posicaoHorizontal){
  posicaoHorizontal = posicaoHorizontal + random(0, 5);
  }
  
  if(mouseY > posicaoVertical){
    posicaoVertical = posicaoVertical + random(0, 5);
    }
  
  if(mouseY < posicaoVertical){
    posicaoVertical = posicaoVertical - random(0, 5);
  }
  
  if(mouseIsPressed)
    cor = color(random(0, 225), random(0, 225), random(0, 225));
  random(0, 100);
  
}