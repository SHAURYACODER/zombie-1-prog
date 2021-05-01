/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;*/

var backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2;

function preload(){

  backgroundImage = loadImage("Untitled.png");

}

function setup(){

  var canvas = createCanvas(800,800);

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  background(backgroundImage);

  

  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
} 