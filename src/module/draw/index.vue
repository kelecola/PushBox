<template>
  <div class="draw__wrapper">
    <div class="word">天街小雨润如酥<br>草色遥看近却无<br> 最是一年春好处
      <br>绝胜烟柳满皇都
    </div>
    <canvas class='canvas'>
    </canvas>
  </div>
</template>

<script>
export default {
  // 优化成es6&更加优秀课切分的canvas
  // 稍后把canvas的思路在理一遍
  mounted() {
    let canvas = document.querySelector('.canvas')
    let canCon = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canCon.lineWidth = 0.3
    canCon.strokeStyle = '#e1512ds'
    let aRain = []
    function random(min, max) {
      return Math.random() * (max - min) + min
    }
    function Rain() {}
    Rain.prototype = {
      init: function() {
        this.x = random(0, canvas.width)
        this.y = 0
        this.vY = random(4, 5)
        this.h = random(0.8 * canvas.height, 0.9 * canvas.height)
        this.r = 1
        this.vr = 1
      },
      draw: function() {
        if (this.y < this.h) {
          canCon.beginPath()
          canCon.fillStyle = 'white'
          canCon.fillRect(this.x, this.y, 2, 10)
        } else {
          canCon.beginPath()
          canCon.strokeStyle = 'white'
          canCon.arc(this.x, this.y, this.r, 0, Math.PI * 2)
          canCon.stroke()
        }
      },
      move: function() {
        if (this.y < this.h) {
          this.y += this.vY
        } else {
          if (this.r < 80) {
            this.r += this.vr
          } else {
            this.init()
          }
        }
        this.draw()
      }
    }
    function createRain(num) {
      for (var i = 0; i < num; i++) {
        setTimeout(function() {
          var rain = new Rain()
          rain.init()
          rain.draw()
          aRain.push(rain)
        }, 200 * i)
      }
    }
    createRain(66)
    setInterval(function() {
      canCon.fillStyle = 'rgba(0,0,0,0.05)'
      canCon.fillRect(0, 0, canvas.width, canvas.height)
      for (var item of aRain) {
        item.move()
      }
    }, 1000 / 60)
  }
}
</script>

<style>
.draw__wrapper {
  display: flex;
  justify-content: center;
}

.canvas {
  position: absolute;
  z-index: -2;
}

.word {
  position: absolute;
  color: white;
  padding-top: 100px;
  width: 200px;
  height: 200px;
}
</style>
