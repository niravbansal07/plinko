var Engine = Matter.Engine;
var World= Matter.World;
var Bodies = Matter.Bodies;
var Events = Matter.Events;

var engine, world;
var ground;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
   world = engine.world;


    ground = new Ground(width/2,height,width,20);
  
}

function draw() {
  background(0); 
  Engine.update(engine); 
  ground.display();
  
}