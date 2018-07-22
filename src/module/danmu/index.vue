<template>
  <div class="block">我是弹幕</div>
</template>

<script>
export default {

}
</script>

<style>
.block{
  margin-top: 50px;
  position: absolute;
  border: 1px solid rosybrown;
  border-radius:5px;
  animation: barrage 15s linear 0s
}

@keyframes barrage{
   from{
     left:100%;
     transform:translate3d(0,0,0);
   }
   to{
     left:0;
     transform:translate3d(-100%,0,0);
   }
}
</style>
