var Runner,Runner_running;
var path,pathImage;
var bomb,bombImage;
var coin,coinImage;
var energyDrink,energyDrinkImage;
var a;
var power,powerImage;
var score = 1;

function preload(){
  //pre-load images
  
  Runner_running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImage = loadAnimation("path.png");
  bombImage = loadAnimation("bomb.png");
  coinImage = loadAnimation("coin.png");
  energyDrinkImage = loadAnimation("energyDrink.png");
  powerImage = loadAnimation("power.png");
}

function setup(){
  createCanvas(400,400);

  //create sprites here
  path = createSprite(190,200,10,10);
  path.addAnimation("path",pathImage);
  path.scale = 1.4
  path.velocityY = 3;

  bomb = createSprite(200,-50,10,10);
  bomb.addAnimation("bomb",bombImage);
  bomb.velocityY = 3;
  bomb.scale = 0.1;

  coin = createSprite(100,10,10,10);
  coin.addAnimation("coin",coinImage);
  coin.velocityY = 3;
  coin.scale = 0.5;

  energyDrink = createSprite(300,60,10,10);
  energyDrink.addAnimation("energyDrink",energyDrinkImage);
  energyDrink.velocityY = 3;
  energyDrink.scale = 0.1;

  Runner = createSprite(200,350,10,10);
  Runner.addAnimation("running",Runner_running);
  Runner.scale = 0.1;
  Runner.velocityX = 0;

}

  function score(){

    if(Runner.isTouching(coin))
    {
      text("score" + score ,350,50);
      
    }

  }
  
  function reset(){
    //reset();

    
    
  }

function draw() {
  background(0);
  
  if(path.y >300) {
    path.y = 175;
  }

  if(bomb.y >400){
    bomb.y = 0;
    bomb.lifeTime = 150
  }

  if(coin.y >400){
    coin.y = 0;
    coin.lifeTime = 150
  }

  if(energyDrink.y >400){
    energyDrink.y = 0;
    energyDrink.lifeTime = 150;
  }

  if(Runner.isTouching(bomb)){

    path.velocityY = 0;
    coin.velocityY = 0;
    energyDrink.velocityY = 0;
    bomb.velocityY = 0;
   
  }

  function score(){

    if(Runner.isTouching(coin))
    {
      text("score" + score ,200,200);
      
    }

  }

  if(frameCount %133===0){
    var a = Math.round(random(80,320));
    bomb.x = a;
    var a = Math.round(random(80,320));
    coin.x = a;
    var a = Math.round(random(80,320));
    energyDrink.x = a;
  }

  Runner.x = mouseX
  drawSprites();
}
