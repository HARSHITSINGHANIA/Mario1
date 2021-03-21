var ground,groundImage;
var mario,marioImage;
var coin,coinImage;
var mushroom,mushroomImage;
var cloud,cloudImage;
var block,blockImage;
var score=0;
var gameState="play";
var edges,invisibleGround

function preload(){
groundImage=loadImage("images/groundimage.png");
marioImage=loadImage("images/MarioRight.png");
coinImage=loadImage("images/COIN.png");
mushroomImage=loadImage("images/MUSHROOM.png");
cloudImage=loadImage("images/CLOUD.png");
blockImage=loadImage("images/BLOCKS.png");
}
function setup(){
createCanvas(800,500);
ground=createSprite(0,470,1200,10);
ground.addImage(groundImage);
mario=createSprite(50,400,10,10);
mario.addImage(marioImage); 
mario.scale=0.05
createEdgeSprites()
invisibleGround=createSprite(0,465,1200,10);
invisibleGround.visible=false
}
function draw (){
background("pink");
text(mouseX+","+mouseY,mouseX,mouseY);
if (keyDown("space")&&mario.y>=380){
mario.velocityY=-8
}
mario.velocityY+=0.3
ground.velocityX=-2;
if(ground.x<0){
ground.x=ground.width/2
}

mario.collide(invisibleGround);
console.log(mario.y)
spawnCoins();
spawnMushrooms();

  drawSprites();
  text(mouseX+","+mouseY,mouseX,mouseY);
}
function spawnCoins(){
  if(frameCount%100===0){
    coin=createSprite(400,Math.round(random(250,300),20,20))
    coin.addImage(coinImage)
    coin.scale=0.05
    coin.velocityX=-3
    coin.lifetime=150
  }
}

function spawnMushrooms(){
  if(frameCount%150===0){
    mushroom=createSprite(500,435,20,20)
    mushroom.addImage(mushroomImage)
    mushroom.scale=0.02
    mushroom.velocityX=-3
    mushroom.lifetime=150
  }
}









