var hero,asteroids,villan,background;
var heroImg,asteroidsImg,villanImg,backgroundImg,asteroids1Img,asteroids2Img,alienImg,alien1Img,villan1Img;
var Dottedlines,DottedlinesImg;
var obstaclesGroup;

function preload(){
    villanImg = loadImage("Villan.png");
    heroImg = loadImage("Hero.png");
    asteroidsImg = loadImage("Asteroids.png");
    backgroundImg = loadImage("space.png");
    DottedlinesImg = loadImage("Dottedlines.png");
    asteroids1Img = loadImage("Asteroids1.png");
    asteroids2Img =  loadImage("Asteroids2.png");
    alienImg = loadImage("Alien1.png");
    villan1Img = loadImage("villan1.png")
}
function setup(){

    createCanvas(1350,600)

    hero = createSprite(600,500);
    hero.addImage(heroImg);
    hero.scale = 0.3;

    /*asteroids = createSprite(600,100);
    //asteroids.addImage(asteroidsImg);
    asteroids.scale = 0.3;
    asteroids.velocityY = 2;

    villan = createSprite(740,100)
    villan.addImage(villanImg);
    villan.scale = 0.3;
    villan.velocityY = 2;*/

    Dottedlines = createSprite(800,450)
    Dottedlines.addImage(DottedlinesImg);
    Dottedlines.scale = 10;
    Dottedlines.x = Dottedlines.width /2;
    Dottedlines.velocityX = 3;

    obstaclesGroup = createGroup();
}

function draw(){

    background(backgroundImg);
    if (Dottedlines.x > 900){
        Dottedlines.x = Dottedlines.width/2;
      }

      if (keyDown("left")) {
        hero.x = hero.x - 10;
    }
    
    if (keyDown("right")) {
      hero.x = hero.x + 10;
    }

    spawnObstacles();

   drawSprites();
}


function spawnObstacles(){
    if (frameCount % 60 === 0){
      var obstacle = createSprite(400,165,10,40);
      obstacle.x = Math.round(random(300,1000));
      obstacle.velocityY = (4);
      
       //generate random obstacles
       var rand = Math.round(random(1,6));
       switch(rand) {
         case 1: obstacle.addImage(asteroids1Img);
                 break;
         case 2: obstacle.addImage(asteroids2Img);
                 break;
         case 3: obstacle.addImage(asteroidsImg);
                 break;
         case 4: obstacle.addImage(alienImg);
                 break;
         case 5: obstacle.addImage(villan1Img);
                 break;
         case 6: obstacle.addImage(villanImg);
                 break;
         default: break;
       }
      
       //assign scale and lifetime to the obstacle           
       obstacle.scale = 0.2;
       obstacle.lifetime = 300;
      
      //add each obstacle to the group
       obstaclesGroup.add(obstacle);
    }
   }