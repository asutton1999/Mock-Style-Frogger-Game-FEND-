// Enemies our player must avoid
"use strict";

var Enemy = function(x,y) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
       this.x += 1;
    if (this.x > 500) {
      this.x = -20
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// This class requires an update(), render() and
// a handleInput() method.
var player = function () {
  this.sprite = 'images/char-boy.png';
  this.x = 200;
  this.y = 380;
  setInterval ( function (){
    document.getElementById('modal').style.display = 'none';
  } , 3000);
};
var allEnemies = [new Enemy (300, 140),new Enemy (0, 60), new Enemy (150, 230)];
// restrict player movement
player.prototype.update = function(dt){
  if (this.x < 0) {
    this.x = 0;
  }
else if (this.x > 400){
  this.x = 400;
}
else if (this.y < 0){
  this.y = 0;
}
else if (this.y > 400){
  this.y = 400;
}
else if (this.y === 0) {
  document.getElementById('modal').style.display = 'block';
  this.x = 200;
  this.y = 380;
}
// recognize and respond to collisons
 else if ( (this.x <= allEnemies[0].x + 40) && (this.x >= allEnemies[0].x - 40) && (this.y >= allEnemies[0].y - 20) && (this.y <= allEnemies[0].y + 20)) {
    this.x = 200;
    this.y = 380;
    console.log ('crash');
}
 else if ( (this.x <= allEnemies[1].x + 40) && (this.x >= allEnemies[1].x - 40) && (this.y >= allEnemies[1].y - 20) && (this.y <= allEnemies[1].y + 20)) {
   this.x = 200;
   this.y = 380;
   console.log ('crash');
}
 else if ( (this.x <= allEnemies[2].x + 40) && (this.x >= allEnemies[2].x - 40) && (this.y >= allEnemies[2].y - 20) && (this.y <= allEnemies[2].y + 20)) {
   this.x = 200;
   this.y = 380;
   console.log ('crash');
}

};

player.prototype.render = function(){
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

player.prototype.handleInput = function(dt){
 console.log(dt);

 switch (dt) {
    case "left" :
       this.x -= 30;
       break;
    case "right":
        this.x += 30;
        break;
    case "up" :
        this.y -= 30;
        break;
    case "down":
         this.y += 30
 }
};
var player = new player ();





// Place the player object in a variable called player
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
