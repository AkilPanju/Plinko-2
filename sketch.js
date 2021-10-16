const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=400;
var score = 0;
var particle;
var turn = 0;
var gameState = "play";


function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(590,800);
  //createSprite(400, 200, 50, 50);
//creating the ground
  ground = new Ground(295,800,590,20);
  //creating the divisions
  division1 = new Divisions(1,650,20,divisionHeight);
  division2 = new Divisions(80,650,20,divisionHeight);
  division3 = new Divisions(160,650,20,divisionHeight);
  division4 = new Divisions(240,650,20,divisionHeight);
  division5 = new Divisions(320,650,20,divisionHeight);
  division6 = new Divisions(400,650,20,divisionHeight);
  division7 = new Divisions(480,650,20,divisionHeight);
  division8 = new Divisions(560,650,20,divisionHeight);
  
  //creating the plinkos
  //highest row of plinkos
  plinko11 = new Plinko(50,150,20);
  plinko12 = new Plinko(100,150,20);
  plinko13 = new Plinko(150,150,20);
  plinko14 = new Plinko(200,150,20);
  plinko15 = new Plinko(250,150,20);
  plinko16 = new Plinko(300,150,20);
  plinko17 = new Plinko(350,150,20);
  plinko18 = new Plinko(400,150,20);
  plinko19 = new Plinko(450,150,20);
  //2nd row of plinkos
  plinko21 = new Plinko(25,250,20);
  plinko22 = new Plinko(75,250,20);
  plinko23 = new Plinko(125,250,20);
  plinko24 = new Plinko(175,250,20);
  plinko25 = new Plinko(225,250,20);
  plinko26 = new Plinko(275,250,20);
  plinko27 = new Plinko(325,250,20);
  plinko28 = new Plinko(375,250,20);
  plinko29 = new Plinko(425,250,20);
  //3rd row of plinkos
  plinko31 = new Plinko(50,350,20);
  plinko32 = new Plinko(100,350,20);
  plinko33 = new Plinko(150,350,20);
  plinko34 = new Plinko(200,350,20);
  plinko35 = new Plinko(250,350,20);
  plinko36 = new Plinko(300,350,20);
  plinko37 = new Plinko(350,350,20);
  plinko38 = new Plinko(400,350,20);
  plinko39 = new Plinko(450,350,20);

  particle = new Particle(random(1,790),100,10);







}

function draw() {
  Engine.update(engine);
  background(0,0,0);  
  drawSprites();

  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();
  plinko35.display();
  plinko36.display();
  plinko37.display();
  plinko38.display();
  plinko39.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();

  //writing the score
  text(score,50,50,50,50);

  //writing the value of each division
  text("400",40,400,50,50);
  text("300",120,400,50,50);
  text("200",200,400,50,50);
  text("100",280,400,50,50);
  text("200",360,400,50,50);
  text("300",440,400,50,50);
  text("400",520,400,50,50);



  ground.display();

  particle.display();
  //to drop the particle when spacebar is clicked
  particle.drop();

 if(frameCount%30===0) {
   particles.push( new Particle(random(width/2-10,width/2+10),10,10));
 }

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  function mousePressed() 
  {
    if(gameState!== "end")
    {
      count++;
      particle = new Particle(mouseX,10,10);
    }
  }

  if(count<5) 
  {
    gameState = "play";
  }

  if(particle!=null)
  {
    particle.display();

    if(particle.body.position.y>760)
    {
      if(particle.body.position.x<80) 
      {
        score=score+400;
        count = count+1;
        particle=null;
        if(count>=5) gameState = "end";
      }
    }
  }

  if(particle!=null)
  {
    particle.display();

    if(particle.body.position.y>760)
    {
      if(particle.body.position.x>80&particle.body.position.x<160) 
      {
        score=score+300;
        count = count+1;
        particle=null;
        if(count>=5) gameState = "end";
      }
    }
  }

  if(particle!=null)
  {
    particle.display();

    if(particle.body.position.y>760)
    {
      if(particle.body.position.x>160&particle.body.position.x<240) 
      {
        score=score+200;
        count = count+1;
        particle=null;
        if(count>=5) gameState = "end";
      }
    }
  }

  if(particle!=null)
  {
    particle.display();

    if(particle.body.position.y>760)
    {
      if(particle.body.position.x>240&particle.body.position.x<320) 
      {
        score=score+100;
        count = count+1;
        particle=null;
        if(count>=5) gameState = "end";
      }
    }
  }

  if(particle!=null)
  {
    particle.display();

    if(particle.body.position.y>760)
    {
      if(particle.body.position.x>320&particle.body.position.x<400) 
      {
        score=score+200;
        count = count+1;
        particle=null;
        if(count>=5) gameState = "end";
      }
    }
  }

  if(particle!=null)
  {
    particle.display();

    if(particle.body.position.y>760)
    {
      if(particle.body.position.x>400&particle.body.position.x<480) 
      {
        score=score+300;
        count = count+1;
        particle=null;
        if(count>=5) gameState = "end";
      }
    }
  }

  if(particle!=null)
  {
    particle.display();

    if(particle.body.position.y>760)
    {
      if(particle.body.position.x>480&particle.body.position.x<560) 
      {
        score=score+400;
        count = count+1;
        particle=null;
        if(count>=5) gameState = "end";
      }
    }
  }

  if(gameState == "end") {
    text("Game Over",295,400,200,200);
  }

  
  




  



  for(var k = 0; k <= innerWidth; k=k + 80) 
  {
    divisions.push(new Divisions(k, height+divisionHeight/2,10,divisionHeight));
  }
}