/**
 * 星空背景动画
 */

let canvas; // 初始canvasdom
let ctx;
let canvas2 = document.createElement("canvas");
let ctx2 = canvas2.getContext("2d");
let w;
let h;

let hue = 217;
let stars = [];
let count = 0;
// let maxStars = 10 //星星数量
let maxStars = 800; //星星数量

function initAni(el) {
  // console.log(stars.length);
  canvas = el;
  ctx = canvas.getContext("2d");
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  if (stars.length == 0) {
    createStar();
    moveFunc();
    animation();
  }
}

/**
 * 粒子移动func
 */
function moveFunc() {
  //   console.log(canvas, canvas2)
  canvas2.width = 100;
  canvas2.height = 100;
  let half = canvas2.width / 2;
  let gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
  gradient2.addColorStop(0.025, "#CCC");
  gradient2.addColorStop(0.1, "hsl(" + hue + ", 61%, 33%)");
  gradient2.addColorStop(0.25, "hsl(" + hue + ", 64%, 6%)");
  gradient2.addColorStop(1, "transparent");
  ctx2.fillStyle = gradient2;
  ctx2.beginPath();
  ctx2.arc(half, half, half, 0, Math.PI * 2);
  ctx2.fill();
}
// End cache
function random(min, max) {
  if (arguments.length < 2) {
    max = min;
    min = 0;
  }

  if (min > max) {
    var hold = max;
    max = min;
    min = hold;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function maxOrbit(x, y) {
  var max = Math.max(x, y),
    diameter = Math.round(Math.sqrt(max * max + max * max));
  return diameter / 2;
  //星星移动范围，值越大范围越小，
}

// 创建星星构造函数
function Star() {
  //   console.log(this)
  this.orbitRadius = random(maxOrbit(w, h));
  this.radius = random(60, this.orbitRadius) / 8;
  //星星大小
  this.orbitX = w / 2;
  this.orbitY = h / 2;
  this.timePassed = random(0, maxStars);
  this.speed = random(this.orbitRadius) / 200000;
  //星星移动速度
  this.alpha = random(2, 10) / 10;

  count++;
  stars[count] = this;

  this.draw = function() {
    var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
      y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
      twinkle = random(10);

    if (twinkle === 1 && this.alpha > 0) {
      this.alpha -= 0.05;
    } else if (twinkle === 2 && this.alpha < 1) {
      this.alpha += 0.05;
    }

    ctx.globalAlpha = this.alpha;
    ctx.drawImage(
      canvas2,
      x - this.radius / 2,
      y - this.radius / 2,
      this.radius,
      this.radius
    );
    // console.log(this.speed);
    this.timePassed += this.speed;
  };
}

function createStar() {
  for (var i = 0; i < maxStars; i++) {
    new Star();
  }
}

function animation() {
  //   console.log('-animation-el', canvas)
  ctx.globalCompositeOperation = "source-over";
  ctx.globalAlpha = 0.5; //尾巴
  ctx.fillStyle = "hsla(" + hue + ", 64%, 6%, 2)";
  ctx.fillRect(0, 0, w, h);

  ctx.globalCompositeOperation = "lighter";
  for (var i = 1, l = stars.length; i < l; i++) {
    stars[i].draw();
  }

  window.requestAnimationFrame(animation);
}

export default {
  initAni,
};
