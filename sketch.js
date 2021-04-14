var canvas, backgroundImage;
var car1 ,car2,car3,car,cararr
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database,cars;

var form, player, game;

function preload(){

 carimg=loadImage('img/car1.png') 
 car1img=loadImage('img/car2.png') 
 car2img=loadImage('img/car2.png') 
 car3img=loadImage('img/car3.png') 
 trackimgj=loadImage('img/track.jpg')
 trackimgp=loadImage('img/track.png')
 groundimg=loadImage('img/ground.png')
}

function setup(){
  canvas = createCanvas(displayWidth/2+600,displayHeight/2+200);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    game.play();
  }
console.log(displayWidth,displayHeight)
if( gameState===2 ){
  player.updateCount(0);
  game.update(0)}
}
