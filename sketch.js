var nimbus,nimbusImg
var backgroundImg
var enemiesImg


function preload(){
  nimbusImg=loadAnimation("nimbus.png","nimbus_2.png","nimbus_3.png","nimbus_4.png")
  backgroundImg=loadImage("DBZ Background.png")
}

function setup() {
  canvas.resize(windowWidth/2,windowHeight/2);
  nimbus=createSprite(30,150)
  nimbus.addAnimation("nimbus",nimbusImg)
  nimbus.scale=0.4
}

function draw() {
  background(backgroundImg);
 
  
  drawSprites();
}

