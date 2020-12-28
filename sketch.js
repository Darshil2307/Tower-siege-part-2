const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2,ground3;
var chain1;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15;
var block16;
var block17,block18,block19,block20,block21,block22,block23,block24,block25;
var polygon,poly_img;

var gamestate = "onsling"
var gameState = "launched"

function preload()
{
poly_img = loadImage("polygon.png");
}

function setup(){
createCanvas(1400,800);
engine = Engine.create();
world = engine.world;

var poptions = {
  restitution:0.8  
}
polygon = Bodies.circle(50,200,20,poptions);
World.add(world,polygon);

ground1 = new Ground(30,775,2800,30);
ground2 = new Ground(540,550,400,20);
ground3 = new Ground(1050,350,300,20);

//level 1 ground 2
block1 = new Box4(390,510,50,70);
block2 = new Box4(440,510,50,70);
block3 = new Box4(490,510,50,70);
block4 = new Box4(540,510,50,70);
block5 = new Box4(590,510,50,70);
block6 = new Box4(640,510,50,70);
block7 = new Box4(690,510,50,70);

//level 2 
block8 = new Box3(440,480,50,70);
block9 = new Box3(490,480,50,70);
block10 = new Box3(540,480,50,70);
block11 = new Box3(590,480,50,70);
block12 = new Box3(640,480,50,70);

//level 3
block13 = new Box2(490,450,50,70);
block14 = new Box2(540,450,50,70);
block15 = new Box2(590,450,50,70);

//level 4
block16 = new Box(540,420,50,70);

//level 1 G3
block17 = new Box4(950,310,50,70);
block18 = new Box4(1000,310,50,70);
block19 = new Box4(1050,310,50,70);
block20 = new Box4(1100,310,50,70);
block21 = new Box4(1150,310,50,70);

//level 2
block22 = new Box2(1000,280,50,70);
block23 = new Box2(1050,280,50,70);
block24 = new Box2(1100,280,50,70);

block25 = new Box3(1050,250,50,70);

chain1 = new chainCL(this.polygon,{x:100,y:200});
}

function draw(){

strokeWeight(3);
background(214,103,12);
Engine.update(engine);

imageMode(CENTER);
image(poly_img,polygon.position.x,polygon.position.y,40,40);

ground1.display();

ground2.display();

ground3.display();

//level 1 ground 2
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();

//level 2
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();

//level 3
block13.display();
block14.display();
block15.display();

//level 4
block16.display();

//level 1 ground 3
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();

//level 2
block22.display();
block23.display();
block24.display();

//level 3
block25.display();

chain1.display();

mouseDragged();

mouseReleased();

keyPressed();

//drawSprites();
}

function mouseDragged(){
  if(gameState!=="launched"){
  Matter.Body.setPosition(polygon,{x: mouseX , y: mouseY});  
  }
}

function mouseReleased(){
  chain1.fly();
  gameState = "launched"   
}

function keyPressed(){
  if(keyCode === 32 && gamestate==="launched" ){  
   Matter.Body.setPosition(polygon.body,{x:50, y:200});   
   slingshot.attach(polygon.body);
   gamestate==="onsling";
  }
}
