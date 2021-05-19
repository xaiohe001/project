<template>
  <div class="iconfont">
      <img src="../assets/dianzan.png" alt="">
      <img src="../assets/xiaoxi.png" alt="">
      <img src="../assets/shoucang.png" alt="">
      <img src="../assets/gantanhao.png" alt="">
      <p>分享</p>
      <img src="../assets/weibo.png" alt="">
      <img src="../assets/qq.png" alt="">
      <img src="../assets/weixin.png" alt="">
  </div>
</template>

<script>
export default {
    name:"Sidetail"
}
</script>

<style lang="scss">
  .iconfont{
    width: 36px;
    height: 364px;
    position: sticky;
    top: 20%;
    img{
      width: 32px;
      height: 32px;
      padding: 6px 0;
    }
    p{
      font-size: 12px;
      color: #666;
      text-align: center;
    }
  }
</style>