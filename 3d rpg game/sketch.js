let airplane;
let cow;
let slot;
let car;
let realcar;
let carwrap
var monster;

function preload() {
  // Load model with normalise parameter set to true
  airplane = loadModel('/3d rpg game/bestplane.txt', true);


  cow = loadModel('/3d rpg game/cow.txt', true);
  realcar = loadModel('/3d rpg game/firstcar.txt', true);
  //slot = loadModel('/teddy.txt', true);
  car = loadModel('/3d rpg game/car.txt', true);
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
  realplayer = new newplayer(0, 0, 0)
  print(realplayer)
  for (var i =0; i <100; i++){
  monsters.push(new realmonster(random(0,-2000),random(0,-2000),random(0,-2000)))
  
  }
}

function draw() {
  background(155);
  angleMode(DEGREES);

  camera(0, 0, this.zcam + 400, this.xcam + 50, this.ycam - 200, 0, 0, 1, 0)

  realplayer.display()

for (var i= 0; i < monsters.length;i++){
monsters[i].display()
}
  

  /////controls
  if (keyIsDown(87)) {
    realplayer.z += 1


  }
  if (keyIsDown(83)) { //same but backwardre
    realplayer.z -= 1

  }
  if (keyIsDown(68)) {
    realplayer.x -= 1
  }
  if (keyIsDown(65)) { //same but left

    realplayer.x += 1
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
  if (key === '8') {
    z += 1

  }
  if (key === '2') {
    z -= 1

  }

  if (key === '=') {


  }
}
class newplayer {
  constructor(x, y, z) {
    this.x = x
    this.y = y
    this.z = z

  }
  display() {
    push()
    rotateX(180)
    smooth()
    normalMaterial()
    model(realcar)
    pop()

  }


}
class realmonster{
constructor(x,y,z){
this.x =x
this.y =0
this.z=z
}
display(){
push()
  translate(realplayer.x + this.x, realplayer.y +this.y, realplayer.z +this.z)
  normalMaterial()
  smooth()
  rotateX(180)
  model(cow)
  pop()

}

}
