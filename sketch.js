//Namespacing ===> nickname 
//const ===>Constant

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let eng;
let myWorld;

var ball,ground,rock,block;

function setup()
{
  createCanvas(400,400);

  eng = Engine.create(); //===> prop & function
  myWorld = eng.world; 

  var ball_options = {
    density : 0.7,
    restitution : 1
  }

  ball = Bodies.circle(100,100,10, ball_options);
  World.add(myWorld,ball);

  console.log(ball);

  var ground_option = {
    isStatic : true,
  }

  ground = Bodies.rectangle(200,380,400,20,ground_option);
  World.add(myWorld,ground);


  
  var rock_options = {
    mass: 1,
    density : 1,
    friction : 1
  }
 rock = Bodies.circle(300,20,20,rock_options);
 World.add(myWorld,rock);

 block = Bodies.rectangle(300,250,100,20,ground_option);
 World.add(myWorld,block);
}

function draw() 
{
  background(51);

  Engine.update(eng);

  console.log(ball.position.y);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10,10);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  

 ellipse(rock.position.x,rock.position.y,20,20);

 rect(block.position.x,block.position.y,100,20);

}

