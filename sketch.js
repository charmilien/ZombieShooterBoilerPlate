var bgImg;
var shooter, shooterImg, shootingImg;
var zombieImg;

function preload() {
  shooterImg = loadImage("assets/shooter_2.png");
  shootingImg = loadImage("assets/shooter_3.png");
  zombieImg = loadImage("assets/zombie.png");
  bgImg = loadImage("assets/bg.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //creating the player sprite
  shooter = createSprite(100, displayHeight - 300, 50, 50);
  shooter.addImage(shooterImg);
  shooter.scale = 0.3;
}

function draw() {
  background(bgImg);
  //moving the player up and down and making the game mobile compatible using touches
  if (keyDown("UP_ARROW") || touches.length > 0) {
  }
  if (keyDown("DOWN_ARROW") || touches.length > 0) {
  }

  //release bullets and change the image of shooter to shooting position when space is pressed
  if (keyWentDown("space")) {
  }

  //player goes back to original standing image once we stop pressing the space bar
  else if (keyWentUp("space")) {
  }

  //calling the function to spawn zombies
  spawnZombies();
  drawSprites();
}

//creating function to spawn zombies
function spawnZombies() {
  if (frameCount % 50 === 0) {
  }
}
