// Welcome to my October IDP
//This is definetly a step up in my last IDP, but I feel I understand what is going on and I am happy with this project
//My goal for this project was to create a picture that somewhat resembles starry night

//define variables for the lines
let lines_1 = [];
let lines_2 = [];
let lines_3 = [];
let lines_4 = [];
let lines_5 = [];
let lines_6 = [];
let nums = 8000;
let noiseScale = 800;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background('black')
  for( let i = 0; i < nums; i++) {
// here i am making the lines draw at random
//this makes it so the drawing looks more abstract and different every time
    lines_1[i] = new Lines(random(0, width),random(0,height));
    lines_2[i] = new Lines(random(0, width),random(0,height));
    lines_3[i] = new Lines(random(0, width),random(0,height));
    lines_4[i] = new Lines(random(0, width),random(0,height));
    lines_5[i] = new Lines(random(0, width),random(0,height));
    lines_6[i] = new Lines(random(0, width),random(0,height));
  }
}

function draw() {
  noStroke();
  smooth();
    for( let i = 0; i < nums; i++) {
    let radius = map(i,0,nums,1,2);
    let alpha = map(i,0,nums,0,250);
//time to draw all the lines of starry night
    fill(34,65,153,alpha);
    lines_1[i].move();
    lines_1[i].display(radius);
    lines_1[i].checkEdge();

    fill(59,140,255,alpha);
    lines_2[i].move();
    lines_2[i].display(radius);
    lines_2[i].checkEdge();

    fill(102,207,255,alpha);
    lines_3[i].move();
    lines_3[i].display(radius);
    lines_3[i].checkEdge(); 

 fill(255,237,102,alpha);
    lines_4[i].move();
    lines_4[i].display(radius);
    lines_4[i].checkEdge();

    fill(255,149,28,alpha);
    lines_5[i].move();
    lines_5[i].display(radius);
    lines_5[i].checkEdge();

    fill(13,15,110,alpha);
    lines_6[i].move();
    lines_6[i].display(radius);
    lines_6[i].checkEdge(); 
    //after all lines are drawn, it ends up resembling starry night!
  }
}

function Lines(x,y) {
//making the line properties here including direction, velocity, speed and position on the screen
  this.dir = createVector(0,0);
  this.vel = createVector(200,0);
  this.pos = createVector(x,y);
  this.speed = 0.4;


  this.move = function() {
    let angle = noise(this.pos.x/noiseScale, this.pos.y/noiseScale)*TWO_PI*noiseScale;
    this.dir.x = cos(angle);
    this.dir.y = sin(angle);
    this.vel = this.dir.copy();
    this.vel.mult(this.speed);
    this.pos.add(this.vel);
  }

  this.checkEdge = function() {
    if(this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0) {
      this.pos.x = random(50,width);
      this.pos.y = random(50,height);
    }
  }

  this.display = function(radius) {
    ellipse(this.pos.x,this.pos.y,radius,radius);
  }
}