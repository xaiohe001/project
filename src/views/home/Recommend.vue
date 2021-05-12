<template>
<div>
  <div class="home__tabs__lists" v-for="(item, index) in 10" :key="index">
    <div class="lists__mintitle">
      <div class="lists__mintitle__left">
        <p>阿里巴巴淘系技术</p>
        <span> | </span>
        <p class="times">3天前</p>
      </div>
      <div class="lists__mintitle__right">前端</div>
    </div>
    <h3>前端智能化看 "低代码/无代码"</h3>
    <div class="home__tabs__left">
      <div class="home__tabs__left__txt">
        <p>
          什么是低代码/无代码开发？业界对于低代码/无代码开发是否存在其他不同的理解？
          行业里流行观点，低代码是更加易用的搭建系统，无代码是图形化和可视化编程。
        </p>
        <div class="comment">
          <span>
            <img src="../../assets/zan.png" alt="" />
            38
          </span>
          <span>
            <img src="../../assets/pinglun.png" alt="" />
            9
          </span>
          <span>
            <img src="../../assets/share.png" alt="" />
            分享
          </span>
        </div>
      </div>
      <div class="home__tabs__left__img">
        <img
          src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/51c789a90ff54279a5e30caeb6e00011~tplv-k3u1fbpfcp-zoom-mark-crop-v2:0:0:426:240.awebp"
          alt=""
        />
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name:'Recommend'
};
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
    .lists__mintitle__left{
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
.lists__mintitle__right{
  font-size: 14px;
  color: #4e5969;
  width: 40px;
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
  .home__tabs__left__img{
    img{
      width: 142px;
      height: 80px;
      border-radius: 2px;
    }
  }
  .home__tabs__left__txt{
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