const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var fall1,fall2,fall3,fall4,fall5,fall6,fall7,fall8,fall9,fall10,fall11,fall12,fall13,fall14,fall15;

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  fall1=new Fall(50,10);
  fall2=new Fall(100,10);
  fall3=new Fall(150,10);
  fall4=new Fall(200,10);
  fall5=new Fall(250,10);
  fall6=new Fall(300,10);
  fall7=new Fall(350,10);
  fall8=new Fall(400,10);
  fall9=new Fall(450,10);
  fall10=new Fall(500,10);
  fall11=new Fall(550,10);
  fall12=new Fall(600,10);
  fall13=new Fall(650,10);
  fall14=new Fall(700,10);
  fall15=new Fall(750,10);
}

function draw() {
  background(0); 
  Engine.update(engine);

  fall1.display();
  fall2.display();
  fall3.display();
  fall4.display();
  fall5.display();
  fall6.display();
  fall7.display();
  fall8.display();
  fall9.display();
  fall10.display();
  fall11.display();
  fall12.display();
  fall13.display();
  fall14.display();
  fall15.display();
}