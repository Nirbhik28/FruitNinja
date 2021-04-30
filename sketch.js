var PLAY=1;
var END=0;
var gameState=2;
var START=2;
var sword ,swordI;
var fru1,fru2,fru3,fru4;
var fruI1,fruI2,fruI3,fruI4;
var alien1,alien2,alien3,alien4;
var alienI1,alienI2;
var gameOver,gameOverI;
var fruitGroup,alienGroup;
var score=0;
var knifeSound,gameOverSound;
var slide, slideImage,down;
function preload(){
  swordI=loadImage("sword.png");
  fruI1=loadImage("fruit1.png");
  fruI2=loadImage("fruit2.png");
  fruI3=loadImage("fruit3.png");
  fruI4=loadImage("fruit4.png");
  alienI1=loadImage("alien1.png");
  alienI2=loadImage("alien2.png");
  gameOverI=loadImage("gameover.png");
  knifeSound=loadSound("knife1.wav");
  gameOverSound=loadSound("defeat.mp3");
  slideImage=loadImage("nin.png");
  down=loadAnimation("down.png");
 
}
function setup(){
  createCanvas(400,400);
  sword=createSprite(40,200,20,20);
  sword.setCollider('rectangle',0,0,50,140,45)
  sword.addImage(swordI);
  sword.scale=0.5;
  fruitGroup = new Group();
  alienGroup = new Group();
  slide=createSprite(200,200,400,400)
  slide.addAnimation("s",slideImage)
  slide.addAnimation("t",down)
  
}

function draw(){
  
  
  
  if(gameState===START){
    
    sword.visible=false;
    slide.addAnimation("s",slideImage);
    slide.depth=0;
    
    
    
    
  }
  if(keyDown("space")&& gameState===START){
     slide.changeAnimation("t",down)
      gameState=PLAY;
    sword.visible=true;
   
    }
  
  
  if(gameState===PLAY){
    
    background(220);
    
  sword.x=mouseX;
  sword.y=mouseY;
  fruitSpawn();
    alienSpawn();
    if(sword.isTouching(fruitGroup)){
      score++;
      fruitGroup.destroyEach();
      knifeSound.play();
    }
    
    
    
    if(sword.isTouching(alienGroup)){
      gameState=END;
      
    }
  }
  
  if(gameState===END){
    background(220);
    text("SCORE : "+score,300,20)
    alienGroup.setVelocityXEach(0);
    fruitGroup.setVelocityXEach(0);
    alienGroup.setVelocityYEach(0);
    fruitGroup.setVelocityYEach(0);
    
    alienGroup.destroyEach();
    fruitGroup.destroyEach();
    sword.x=200;
    sword.y=200;
    sword.scale=1;
    
    sword.addImage(gameOverI);
    gameOverSound.play();
    
  }
  
  drawSprites();
  text("SCORE : "+score,300,20);

}
function fruitSpawn(){
  
  if(frameCount%200===0){
    fruit1=createSprite(400,Math.round(random(50,350)),20,20)
    
    fruit1.velocityX=-(5+score/2);
    var choose1=Math.round(random(1,4))
    switch(choose1){
      case 1: fruit1.addImage(fruI1);
        break;
        case 2: fruit1.addImage(fruI2);
        break;
        case 3: fruit1.addImage(fruI3);
        break;
        case 4: fruit1.addImage(fruI4);
        break;
        default:break;
          }
    fruit1.scale=0.1;
    fruit1.lifetime=100;
    fruitGroup.add(fruit1)
    
  }
  if(frameCount%200===50){
    fruit2=createSprite(0,Math.round(random(50,350)),20,20)
    
    fruit2.velocityX=(5+score/2);
    var choose2=Math.round(random(1,4))
    switch(choose2){
      case 1: fruit2.addImage(fruI1);
        break;
        case 2: fruit2.addImage(fruI2);
        break;
        case 3: fruit2.addImage(fruI3);
        break;
        case 4: fruit2.addImage(fruI4);
        break;
        default:break;
          }
    fruit2.scale=0.1;
    fruit2.lifetime=100;
    fruitGroup.add(fruit2)
  }
  if(frameCount%200===100){
    fruit3=createSprite(Math.round(random(50,350)),0,20,20)
    
    fruit3.velocityY=(5+score/2);
    var choose3=Math.round(random(1,4))
    switch(choose3){
      case 1: fruit3.addImage(fruI1);
        break;
        case 2: fruit3.addImage(fruI2);
        break;
        case 3: fruit3.addImage(fruI3);
        break;
        case 4: fruit3.addImage(fruI4);
        break;
        default:break;
          }
    fruit3.scale=0.1;
    fruit3.lifetime=100;
    fruitGroup.add(fruit3)
  }
  if(frameCount%200===150){
    fruit4=createSprite(Math.round(random(50,350)),400,20,20)
    
    fruit4.velocityY=-(5+score/2);
    var choose4=Math.round(random(1,4))
    switch(choose4){
      case 1: fruit4.addImage(fruI1);
        break;
        case 2: fruit4.addImage(fruI2);
        break;
        case 3: fruit4.addImage(fruI3);
        break;
        case 4: fruit4.addImage(fruI4);
        break;
        default:break;
          }
    fruit4.scale=0.1;
    fruit4.lifetime=100;
    fruitGroup.add(fruit4)
  }
   
}

function alienSpawn(){
  if(frameCount%400===0){
    
    alien1=createSprite(Math.round(random(100,300)),0,20,20)
    alien1.velocityY=(5+score/2);
    alien1.scale=0.8;
    alien1.lifetime=100;
    
    var choose5=Math.round(random(1,2))
    switch(choose5){
  case 1: alien1.addImage(alienI1);
        break;
  case 2: alien1.addImage(alienI2);
        break;
        default:break;
        
        
    }
    alienGroup.add(alien1)
  }
  if(frameCount%400===200){
    
    alien2=createSprite(Math.round(random(100,300)),400,20,20)
    alien2.velocityY=-(5+score/2);
    alien2.scale=0.8;
    alien2.lifetime=100;
    
    var choose6=Math.round(random(1,2))
    switch(choose6){
  case 1: alien2.addImage(alienI1);
        break;
  case 2: alien2.addImage(alienI2);
        break;
        default:break;
        
        
    }
    alienGroup.add(alien2)
  }
  if(frameCount%400===300){
    
    alien3=createSprite(0,Math.round(random(100,300)),20,20)
    alien3.velocityX=(5+score/2);
    alien3.scale=0.8;
    alien3.lifetime=100;
    
    var choose7=Math.round(random(1,2))
    switch(choose7){
  case 1: alien3.addImage(alienI1);
        break;
  case 2: alien3.addImage(alienI2);
        break;
        default:break;
        
        
    }
    alienGroup.add(alien3)
  }
  if(frameCount%400===100){
    
    alien4=createSprite(400,Math.round(random(100,300)),20,20)
    alien4.velocityX=-(5+score/2);
    alien4.scale=0.8;
    alien4.lifetime=100;
    
    var choose8=Math.round(random(1,2))
    switch(choose8){
  case 1: alien4.addImage(alienI1);
        break;
  case 2: alien4.addImage(alienI2);
        break;
        default:break;
        
        
    }
    alienGroup.add(alien4)
  }
  
  
}
