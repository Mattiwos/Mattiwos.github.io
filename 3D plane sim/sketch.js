let airplane;
let cow;
let slot;
let car;
let realcar;
let carwrap
var monster;
function preload() {
  // Load model with normalise parameter set to true
  airplane = loadModel('/3D plane sim/bestplane.txt', true);
    

  cow = loadModel('/3D plane sim/cow.txt', true);
  realcar = loadModel('/3D plane sim/firstcar.txt', true);
  //slot = loadModel('/teddy.txt', true);
  car = loadModel('/3D plane sim/car.txt', true);
  //carwrap = loadModel('/sh3.txt', true)
  
  //monster = loadModel('/monster1.txt', true)
  

}


var xcam = 0;
var ycam = 0;
var zcam = 0;



var realplayer;
var monsters = [];
function setup() {

  createCanvas(windowWidth, windowHeight, WEBGL);
  

  realplayer = new player()
  //monsters.push(new monsterclass())
}

function draw() {
  background(155);
  angleMode(DEGREES);

  camera(0, 0, this.zcam + 300, this.xcam + 50, this.ycam - 100, 0, 0, 1, 0)
  realplayer.display()
  //   push()

  //   rotateX(180)
  //   rotateZ(xdegree)
  //   rotateY(y-90)

  // smooth()
  //   normalMaterial(); // For effect
  //   //texture(carwrap)
  //   model(airplane);
  //   pop()
  print(monsters.length)
  for(var i = 0; i < monsters.length; i++){
    print("inside forloop")
  monsters[i].display()
  }
  push()
  translate(-150 + realplayer.x, realplayer.upndown, realplayer.z)
  rotateX(135)
  normalMaterial();

  model(realcar)
  pop()

  push()
  translate(300 + realplayer.x, realplayer.upndown, realplayer.z)
  rotateX(135)
  normalMaterial();
  model(car)
  pop()

  /////controls
  if (keyIsDown(87)) {

    realplayer.rz += 1

  }
  if (keyIsDown(83)) { //same but backward

    realplayer.rz -= 1
  }
  if (keyIsDown(68)) {

    realplayer.y += 1
  }
  if (keyIsDown(65)) { //same but left

    realplayer.y -= 1
  }
  if (key === 'ArrowUp') {
    zcam -= 1

  }
  if (key === 'ArrowDown') {
    zcam += 1

  }
  if (key === 'ArrowLeft') {
    xcam -= 1

  }
  if (key === 'ArrowRight') {
    xcam += 1

  }
  

  if (key === '=') {


  }
}

function mouseWheel(event) {
  print(event.delta);
  //move the square according to the vertical scroll amount
  ycam += event.delta;
  //uncomment to block page scrolling
  //return false;
}
class player {
  constructor(rotatex = 180, rotatez = 0, rotatey = 0) {
    this.rx = rotatex
    this.rz = rotatez
    this.ry = rotatey
    this.y = 0
    this.x = 0;

    this.z = 0;
    this.upndown = 0;
    this.change = false

  }
  display() {
    this.moving()

    push()

    rotateX(this.rx)
    rotateZ(this.rz)
    rotateY(this.y - 90)

    smooth()
    normalMaterial(); // For effect
    //texture(carwrap)
    if (this.change == true){
    model(realcar);
    }
    else{
    model(airplane)
    
    }
    pop()
  }
  moving() {
    this.xs = 190
    this.xss = (sin(this.y + 90)) * (190 / 2)
    this.zss = (cos(this.y + 90)) * (190 / 2)

    this.speed = sqrt(sq(this.xss) + sq(this.zss))
    if (this.speed != 0) {
      this.z -= (this.zss / this.speed) //global

      this.x += (this.xss / this.speed) //global
    } else {
      this.z = 0
      this.x += 1

    }
    // while (this.rz>360){
    //   console.log(this.rz)
    // this.rz-=360
    // }
   
    

    this.xssss = (sin(this.rz + 180)) * (190 / 2)
    this.updowns = (cos(this.rz + 180)) * (190 / 2)

    this.speeds = sqrt(sq(this.xssss) + sq(this.updowns))
    if (this.speeds != 0) {

   
      this.upndown += (this.xssss / this.speeds)

    }

  }

}
function mouseClicked(){

realplayer.change = !realplayer.change
}
