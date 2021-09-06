var space,spaceImg
var rio,rioImg
var  invisiblebase
var gameoverImg,gameover
var  pointGroup  , pointsImg
var fourtyg,fortyimg,score
var twentyg,twentyimg 
var teng,tenimg
var ded , dedimg
var PLAY = 1;
var END = 0;
var gameState = PLAY; 
    
function preload(){

spaceImg = loadImage("background_space.png");
rioImg = loadImage("hero bird.png")
gameoverImg = loadImage("untitled.png")
pointsImg = loadImage( "gold.png" )
fortyimg= loadImage ("40 points.png")
twentyimg=loadImage("20 points.png")
tenimg=loadImage("10 points.png")
dedimg=loadImage("lead villan.png")

}

function setup() {
// background off the game
 space = createSprite(width/2,200);    
 space.addAnimation("running",spaceImg);
space.scale=1
space.velocity.x=-5;
    
// hero off the game
rio = createSprite(100,200,20,20);
rio.addAnimation("hero",rioImg);
rio.scale=0.2;
   
// end of the game 
invisiblebase=createSprite(200,399,400,10);

//game over image
gameover=createSprite(200,200);
gameover.addImage(gameoverImg);
gameover.visible=false

// create group
pointsGroup = createGroup();
fourtyg = createGroup();
twentyg=createGroup();
teng=createGroup();
ded=createGroup();
//score
score=0

}

function draw() {
// canvas off the game
createCanvas(400,400);
background("#000000")

if (gameState=== PLAY){

// bacground movemnt off game
if (space.x<0){
       space.x = space.width/2;
    }

    // jumping of the  rio
    if(keyWentDown("space")){
        rio.velocityY = -10
    }

    // gravity off rio 
     rio.velocityY = rio.velocityY + 0.9

    // gameover
    if(invisiblebase.isTouching(rio)||ded.isTouching(rio)||score<-100 ){
   gameState=END

   
     
    }
    // when rio hits in points
    if (pointsGroup.isTouching(rio)){
        pointsGroup.destroyEach();
        score=score+20
    }
   if(fourtyg.isTouching(rio)){
    fourtyg.destroyEach()
     score=score-40
      }
      if(twentyg.isTouching(rio)){
        twentyg.destroyEach()
         score=score-20
          }

}

else if (gameState=== END){

    gameover.visible = true;
    fourtyg.setLifetimeEach(-1);
    pointsGroup.setLifetimeEach(-1);
    twentyg.setLifetimeEach(-1);
    teng.setLifetimeEach(-1);
    ded.setLifetimeEach(-1);

     fourtyg.setVelocityXEach(0);
     pointsGroup.  setVelocityXEach(0);
     twentyg.setVelocityXEach(0);
    teng.setVelocityXEach(0);   
    ded.setVelocityXEach(0);
   space.velocityX = 0;
    rio.velocityY = 0;


    if(keyDown("r")) {
        reset();
    }

}
              
          

    
    spawndevil2();
    spawnDevil();
    createPoints();
    spawndeil3();
    drawSprites();
    textSize(20);
    fill(255);
    text("score="+score,200,30)
    
}   






function spawnDevil   () {

    if(frameCount %120=== 0){
       var devils =createSprite(500,380,90,20);
      devils.y = Math.round(random(10,370));
      devils.addImage(fortyimg);
      devils.velocityX=-5;
      devils.scale=0.2
      devils.lifetime = 200;
      fourtyg.add(devils);
        }


    }

    
function createPoints () {

    if(frameCount % 80===0 ){
    
      var points =createSprite(450,380,20,20);
    points.y = Math.round(random(1,380));
    points.addImage(pointsImg);
    points.velocityX=-5;
    points.lifetime = 200;
    points.scale=0.5
    pointsGroup.add(points); 
    }
    }



function spawndevil2 (){

    if(frameCount % 60 === 0){
        var devils1 =createSprite(500,380,90,20);
        devils1.y = Math.round(random(10,370));
        devils1.addImage(twentyimg);
        devils1.velocityX=-5;
        devils1.scale=0.2
        devils1.lifetime = 200;
        twentyg.add(devils1);
         }

        }

function spawndeil3(){
    if(frameCount % 500 === 0){
        var devils2 =createSprite(500,380,90,20);
        devils2.y = Math.round(random(10,370));
        devils2.addImage(dedimg);
        devils2.velocityX=-5;
        devils2.scale=0.2
        devils2.lifetime = 200;
         ded.add(devils2);
         }

        }
function reset(){
  
gameState = PLAY ;
gameover.visible = false;


score= 0;

        }


