var ball,ground;

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;

function setup() {
  createCanvas(800,600);
  engine=Engine.create();
  world= engine.world;
  
  var groundOption={
    isStatic:true
  }
  ground=Bodies.rectangle(400,580,300,20,groundOption);
  World.add(world,ground);

  var ballOption={
    restitution:1.0
  }
  ball=Bodies.circle(400,100,20,ballOption);
  World.add(world,ball);

}

function draw() {
  background(0);
  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,300,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20)
  drawSprites();
}