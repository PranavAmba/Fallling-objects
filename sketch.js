const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3;
var tri1,tri2;

function setup() {
  var canvas =createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  box1 = new Box(400,200,50,50);
  box2 = new Box(430,390,50,100)
 
}

function draw() {
  background(0); 
  Engine.update(engine); 
 box1.display();
 box2.display();
}