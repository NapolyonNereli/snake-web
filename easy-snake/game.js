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


// class SnakeGame{
//    constructor () {
//       this.canvas = document.getElementById("game");
//       this.ctx = this.canvas.getContext("2d");
//       document.addEventListener("keydown", onKeyPress.bind(this));
//    }

//    init() {
//       this.positionX = this.positionY = 10;
//       this.appleX = this.appleY = 5;
//       this.tailSize = 5;
//       this.trail = [];
//       this.gridSize = this.tileCount = 20;
//       this.velocityX = this.velocityY = 0;

//       this.timer = setInterval(this.loop.bind(this), 1000/15);
//    }
//    loop() {
//       this.update()
//       this.draw();
//    }
//    reset () {
//       clearInterval(this.timer)
//       this.init();
//    }

//    update() {

//    }

//    draw () {
//       this.ctx.fillStyle = "black";
//       this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

//       this.ctx.fillStyle = "white";
//       this.ctx.font = "20px Arial";
//       this.ctx.fillText(this.tailSize, 20, 40);

//       this.trail.forEach(() => {
//          this.ctx.fillRect(t.positionX * this.gridSize, t.positionY * this.gridSize, this.gridSize -5, this.gridSize -5);
//       });
      
//       this.ctx.fillStyle = "pink";
//       this.ctx.fillRect(t.appleX * this.gridSize, t.appleY * this.gridSize, this.gridSize -5, this.gridSize -5);
      
//    }

//    onKeyPress(e) {
//       if(e === 37 && this.velocityX !== 1) {
//          this.velocityX = -1;
//          this.velocityY = 0;
//       }
//       if(e === 38 && this.velocityY !== 1) {
//          this.velocityX = 0;
//          this.velocityY = -1;
//       }if(e === 39 && this.velocityX !== -1) {
//          this.velocityX = 1;
//          this.velocityY = 0;
//       }if(e === 40 && this.velocityY !== -1) {
//          this.velocityX = 0;
//          this.velocityY = 1;
//       }
//    }
// }

// const game = new SnakeGame();
// window.onload = () => game.init();



// var canvContext;
// var canv;

// window.onload = function () {
//     canv = document.getElementById("game");
//     canvContext = canv.getContext("2d");
//     document.addEventListener("keydown", keyPush);
//     this.denemess = setInterval(game, 1000 / 13); ? Buradan oyunun hızını ayarlıyoruz
    
// }

// const deneme = () => {
//     clearInterval(this.denemess);
// }

// var xv = yv = 0;
// var px = py = 10;
// var gs = tc = 20;
// var ax = ay = 15;
// var trail = [];
// var tail = 5;

// function game() {
//     px += xv;
//     py += yv;
//     if (px < 0) { // yılan sol kenara gelirse
//         px = tc - 1;
//     }
//     if (px > tc - 1) { // yılan sağ kenara gelirse
//         px = 0;
//     }
//     if (py < 0) { // yılan üst kenara gelirse
//         py = tc - 1;
//     }
//     if (py > tc - 1) { // yılan alt kenara gelirse
//         py = 0;
//     }
//     canvContext.fillStyle = "black";
//     canvContext.fillRect(0, 0, canv.width, canv.height);

//     canvContext.fillStyle = "lime";
//     for (var i = 0; i < trail.length; i++) {
//         canvContext.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
//         if (trail[i].x == px && trail[i].y == py) {
//             tail = 5;
//         }
//     }
//     trail.push({ x: px, y: py });
//     while (trail.length > tail) {
//         trail.shift();
//     }

//     canvContext.fillStyle = "red";
//     canvContext.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);

//     if (ax == px && ay == py) {
//         tail++;
//         ax = Math.floor(Math.random() * tc);
//         ay = Math.floor(Math.random() * tc);
//     }
// }


// function keyPush(e) {
//     if (e.keyCode == 37 && xv !== 1) { //sol  tamamlandı
//         xv = -1;
//         yv = 0;
//     }
//     if (e.keyCode == 38 && yv !== 1) { //yukarı
//         xv = 0;
//         yv = -1;
//     }
//     if (e.keyCode == 39 && xv !== -1) { //sağ tamamlandı
//         xv = 1;
//         yv = 0;
//     }
//     if (e.keyCode == 40 && yv !== -1) { //aşağı
//         xv = 0;
//         yv = 1;
//     }
// }