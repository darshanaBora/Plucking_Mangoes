
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,ground,stone,mango1,mango2,mango3,mango4,mango5,mango6,mango7;

function preload() {
	treeImage = loadImage("tree.png");
}

function setup() {
	createCanvas(1000, 600);

	tree = createSprite(700,350, 10,10);
	tree.addImage("tree", treeImage);
	tree.scale = 0.4;
	
	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(600,height,1200,20);

	boy = new Boy(150,300);
	boy.scale = 0.5;

	stone = new Stone(500,30);

	mango1 = new Mango(720,120);
	mango2 = new Mango(600,200);
	mango3 = new Mango(800,150);
	mango4 = new Mango(650,280);
	mango5 = new Mango(750,250);
	mango6 = new Mango(900,250);
	mango7 = new Mango(500,270);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");

  drawSprites();
  
  ground.display();
  boy.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body,{x: 235, y: 420});
		launcher.attach(stone.body);
	}
}

function detectollision() {
	
}