var database;
var gameState=0;
var playerCount;
var game,form,player;
var allPlayers;
var car1, car2, car3, car4;
var cars;
var car1IMG, car2IMG, car3IMG, car4IMG;
var track;
var ground

function preload(){
  car1IMG = loadImage("images/car1.png");
  car2IMG = loadImage("images/car2.png");
  car3IMG = loadImage("images/car3.png");
  car4IMG = loadImage("images/car4.png");
  track = loadImage("images/track.jpg");
  ground = loadImage("images/ground.png");

}


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth,displayHeight);

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");

  if(playerCount===2){
    game.update(1);
  }

  if(gameState===1){
    game.play();
  }

  if(gameState===2){
    game.end();
  }
  
}
