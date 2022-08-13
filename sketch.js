// model
// define variables (aka boxes) to store value
// x, y, r
var canvasWidth = 500
var canvasHeight = 600

var x=50
var y=50
var r=20
var health=5

// initialize
// create a canvas
function setup() {
createCanvas(canvasWidth, canvasHeight)
}



// draw
// this is where you draw things based on the model
function draw() {
  if (health > 0) {
    createBackground()
    updateModel()
    drawThings(x, y, r)
  }
}



function createBackground() {
  background(100, 100, 200)
  fill(51);
  rect(0,0,canvasWidth/2,canvasHeight)
   fill('red')
   rect(245, 0, 10, 100)
   rect(245, 200, 10, 100)
   rect(245, 400, 10, 100)
}

function drawThings(x, y, r) {
  fill(255,204,0)
  circle(x,y,r)

  text("health: " + health, 10, 10)
}

function updateModel() {
  // r=r+.5
  if (r > 50) r=0
  x=x+2
  if (x > 500) x=0

  if (y < mouseY) {
    y=y+5
  }
  if (y > mouseY) y=y-5

  if (y > 500) y=500
  if (y < 0) y=0


  var collided = checkCollision(x, y)
  if (collided == true) health=health-1
}

function checkCollision(x, y) {
  if (x < 245) return false 
  if (x > 247) return false

  if (0<y && y<100) return true
  if (200<y && y<300) return true
  if (400<y && y<500) return true

  return false
}