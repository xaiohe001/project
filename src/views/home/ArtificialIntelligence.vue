<template>
  <div>
  <div class="home__tabs__lists" v-for="(item, index) in 10" :key="index">
    <div class="lists__mintitle">
      <div class="lists__mintitle__left">
        <p>华为云开发者社区</p>
        <span> | </span>
        <p class="times">6小时前</p>
      </div>
      <div class="lists__mintitle__rights">人工智能</div>
    </div>
    <h3>
          聊聊人像抠图背后的算法技术
    </h3>
    <div class="home__tabs__left">
      <div class="home__tabs__left__txts">
        <p>
              摘要：本文将从算法概述、工程实现、优化改进三个方面阐述如何实现一个实时、优雅、精确的视频人像抠图项目。
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
    </div>
  </div>
</div>
</template>

<script>
export default {
    name:"ArtificialIntelligence"
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
  &__txts{
    p{
      width: 670px;
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