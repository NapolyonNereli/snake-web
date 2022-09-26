 class SnakeGame {
   constructor () {
      this.canvas = document.getElementById("game");
      this.ctx = this.canvas.getContext("2d");
      document.addEventListener("keydown", this.onKeyPress.bind(this));
   }
   init() {
      this.positionX = this.positionY = 10;
      this.appleX = this.appleY = 5;
      this.tailSize = 5;
      this.trail = [];
      this.gridSize = this.tileCount = 20;
      this.veloCityX = this.veloCityY = 0;

      this.timer = setInterval(this.loop.bind(this) , 1000/15);
   }

   reset () {
      clearInterval(this.timer);
      this.init();
      console.log("bitti ")
   }

   loop () {
      this.update();
      this.draw();
   }
   update (){
      this.positionX += this.veloCityX;
      this.positionY += this.veloCityY;

      if(this.positionX < 0) {
         this.positionX = this.tileCount - 1;
      }
      if(this.positionY < 0) {
         this.positionY = this.tileCount -1;
      }
      if (this.positionX > this.tileCount -1) {
         this.positionX = 0;
      }
      if (this.positionY > this.tileCount -1) {
         this.positionY = 0;
      }

      //yılanın ucu yılanın diğer yerlerine çarptığında oyun biter tekrar başlar.
      this.trail.forEach(t => { 
         if (this.positionX === t.positionX && this.positionY === t.positionY) {
            this.reset();
         }
      });
      
      this.trail.push({positionX: this.positionX, positionY: this.positionY});
      
      while (this.trail.length > this.tailSize) {
         this.trail.shift();
      }
      
      if (this.appleX === this.positionX && this.appleY === this.positionY) {
         this.tailSize++;
         this.appleX = Math.floor(Math.random() * this.tileCount)
         this.appleY= Math.floor(Math.random() * this.tileCount)
      }
   }
   draw (){
      this.ctx.fillStyle = "black"
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

      this.ctx.fillStyle = "white";
      this.ctx.font = "20px Arail";
      this.ctx.fillText(this.tailSize, 20, 40);

      this.ctx.fillStyle = "green";
      this.trail.forEach(() => {
         this.ctx.fillRect(this.positionX * this.gridSize, this.positionY * this.gridSize, this.gridSize -5, this.gridSize -5);
    });
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(this.appleX * this.gridSize, this.appleY * this.gridSize, this.gridSize -5, this.gridSize -5);
      
   }

   onKeyPress (e) {
      if(e.keyCode === 37 && this.veloCityX !== 1) {
         this.veloCityX = -1;
         this.veloCityY = 0;
      }
      if(e.keyCode === 38 && this.veloCityY !== 1) {
         this.veloCityX = 0;
         this.veloCityY = -1;
      }if(e.keyCode === 39 && this.veloCityX !== -1) {
         this.veloCityX = 1;
         this.veloCityY = 0;
      }if(e.keyCode === 40 && this.veloCityY !== -1) {
         this.veloCityX = 0;
         this.veloCityY = 1;
      }
   }
}

const deneme = new SnakeGame();
window.onload = () => deneme.init();
