const World= Matter.World;
const Engine= Matter.Engine;
const Bodies= Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var ground;
var pig1,pig2;
var log1,log2,log3,log4;
var box5;
var bird;

function setup() {
  createCanvas(1200,400);

  engine= Engine.create();
  world= engine.world;

  ground=new Ground(600,400,1200,20);

  box1=new Box(700,320,70,70);
  box2=new Box(920,320,70,70);
  pig1=new Pig(810,320);
  log1=new Log(810,285,300,PI/2);

  box3=new Box(700,240,70,70);
  box4=new Box(920,240,70,70);
  pig2=new Pig(810,240);
  log2=new Log(810,205,300,PI/2);

  box5=new Box(810,160,70,70);

  log3=new Log(760,120,150,PI/7);
  log4=new Log(860,120,150,-PI/7);

  bird=new AngryBird(100,100);

}

function draw() {
  background("black");  

  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ground.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  bird.display();

  console.log(mouseX,mouseY)

}