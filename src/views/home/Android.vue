<template>
  <div>
  <div class="home__tabs__lists" v-for="(item, index) in 10" :key="index">
    <div class="lists__mintitle">
      <div class="lists__mintitle__left">
        <p>老炮儿、狗儿</p>
        <span> | </span>
        <p class="times">5小时前</p>
      </div>
      <div class="lists__mintitle__rights">Android</div>
    </div>
    <h3>
          【View系列】让View滑动起来的几种方式
    </h3>
    <div class="home__tabs__left">
      <div class="home__tabs__left__txt">
        <p>
              前言 前几的文章一直在扒源码，讲流程，阅读难度系数略微高点。今天我们聊个稍微轻松基础的话题：让View滑动起来的几种方式。Android中又很多可滑动的View,比如ScrollView、Nested
        </p>
        <div class="comment">
          <span>
            <img src="../../assets/zan.png" alt="" />
            12
          </span>
          <span>
            <img src="../../assets/pinglun.png" alt="" />
            3
          </span>
          <span>
            <img src="../../assets/share.png" alt="" />
            分享
          </span>
        </div>
      </div>
      <div class="home__tabs__left__img">
        <img
          src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d49fd11752df4fdb83ba324874f2656f~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:426:240.awebp"
          alt=""
        />
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name:"Before"
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