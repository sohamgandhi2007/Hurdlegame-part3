var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var hurdle,hurdle1, hurdle2,hurdle3,hurdle4;
var hurdle1image,hurdle2image,hurdle3image,hurdle4image;

var form, player, game;

var players, player1, player2,player3,player4;
var player1image,player2image,player3image,player4image,groundimage, trackimage;

function preload(){
player1image=loadImage("images/player1.png")
player2image=loadImage("images/player2.png")
player3image=loadImage("images/player3.png")
player4image=loadImage("images/player4.png")
groundimage=loadImage("images/ground.png")
trackimage=loadImage("images/track.png")
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  
    if(keyDown("space")&&player.y>=159) {
        player1.velocityY = -10;
      }
      player1.velocityY = player1.velocityY + 0.8
      if(keyDown("space")&&player2.y>=159) {
        player2.velocityY = -10;
      }
      player2.velocityY = player2.velocityY + 0.8
      if(keyDown("space")&&player3.y>=159) {
        player3.velocityY = -10;
      }
      player3.velocityY = player3.velocityY + 0.8
      if(keyDown("space")&&player4.y>=159) {
        player4.velocityY = -10;
      }
      player4.velocityY = player4.velocityY + 0.8

       if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
if (gameState===2) {
  game.end()
}
spawnhurdles()
}

function spawnhurdles() {
  if(frameCount % 60 === 0) {
    var hurdle = createSprite(600,165,10,40);
    hurdle.velocityX = -(6+3*score/100);
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: hurdle.addImage(hurdlee1);
              break;
      case 2: hurdle.addImage(hurdle2);
              break;
      case 3: hurdle.addImage(hurdle3);
              break;
              case 4: hurdle.addImage(hurdle4);
              break;        
              case 5: hurdle.addImage(hurdle5);
              break;
              case 6: hurdle.addImage(hurdle6);
              break;
              default: break;
      
    }
    
  }
}
hurdle.scale = 0.5;
    hurdlee.lifetime = 300;
    //add each obstacle to the group
    hurdlesGroup.add(hurdle);