<template>
  <div>
  <div class="home__tabs__lists" v-for="(item, index) in 10" :key="index">
    <div class="lists__mintitle">
      <div class="lists__mintitle__left">
        <p>小蚂蚁游戏开发</p>
        <span> | </span>
        <p class="times">11小时前</p>
      </div>
      <div class="lists__mintitle__rights">游戏开发</div>
    </div>
    <h3>
          微信小游戏开发新手教程6-不要挡住我，我要去上面
    </h3>
    <div class="home__tabs__left">
      <div class="home__tabs__left__txt">
        <p>
              这一节里，我们将学习精灵层级的管理，只需要记住一句简单的口诀，就能够驾轻就熟了。口诀：谁挡住了我，我就去谁的上面。
        </p>
        <div class="comment">
          <span>
            <img src="../../assets/zan.png" alt="" />
            2
          </span>
          <span>
            <img src="../../assets/pinglun.png" alt="" />
            评论
          </span>
          <span>
            <img src="../../assets/share.png" alt="" />
            分享
          </span>
        </div>
      </div>
      <div class="home__tabs__left__img">
        <img
          src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/557f4c23d07a4b26b9b308f0be9a0536~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:426:240.awebp"
          alt=""
        />
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name:"DevelopmentTools"
}
</script>

<style lang="scss" >
// @import "../../assets/css/home.scss";
.home__tabs__lists{
  padding: 15px 15px 0 15px;
  width: 700px;
  height: 185px;
  box-sizing: border-box;
  background-color: #f4f5f5;
  cursor: pointer;
  .lists__mintitle{
    display: flex;
    justify-content: space-between;
    &__left{
      display: flex;
      padding-right: 10px;
      P:nth-child(1){
        font-size: 14px;
        color: #666;
      }
      .times{
        font-size: 14px;
        color: #999;
      }
      span{
        padding: 0 6px 0 6px;
        color: #e5e6eb;
        font-size: 14px;
      }
      
    }
  }
  h3{
    padding-top: 15px;
  }
}
.lists__mintitle__rights{
  font-size: 14px;
  color: #4e5969;
  width: 70px;
  text-align: center;
  height: 20px;
  cursor: pointer;
  background-color: #ebe6e6;
  
}
.lists__mintitle__right:hover{
  background-color: rgb(185, 183, 183);
}
.home__tabs__left{
  padding: 15px 0 0 0;
  height: 93px;
  border-bottom: 1px solid #E5E6EB;
  display: flex;
  justify-content: space-between;
  &__img{
    img{
      width: 142px;
      height: 80px;
      border-radius: 2px;
    }
  }
  &__txt{
    p{
      width: 500px;
      height: 40px;
      overflow: hidden;
      text-overflow: ellipsis;
      display:-webkit-box; 
      -webkit-box-orient:vertical;
      -webkit-line-clamp:2; 
      font-size: 14px;
      color:#4e5969
    }
    .comment{
      font-size: 14px;
      color: #86909C;
      padding-top: 15px;
      span{
        height: 20px;
        line-height: 20px;
        padding: 0 30px 0 0;
        cursor: pointer;
        img{
          width: 16px;
          height: 16px;
          position: relative;
          top: 3px;
        }
      }
      span:hover{
        color: #007FFF;
      }
    }
  }
}
.home__tabs__lists:hover{
  background-color: rgb(246, 242, 242);
}
.el-tabs__header.is-top {
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #fff;
}
.el-tab-pane{
  display: flex;
  justify-content: space-between;
}
</style>