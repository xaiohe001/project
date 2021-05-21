<template>
<div>
  <div class="home__tabs__lists" v-for="(item, index) in lists" :key="index">
    <router-link :to=" '/topic/' +item.id">
    <div class="lists__mintitle">
      <div class="lists__mintitle__left">
        <p>{{item.author.loginname}}</p>
        <span> | </span>
        <p class="times">5分钟</p>
      </div>
      <div class="lists__mintitle__right">前端</div>
    </div>
    <h3>{{item.title}}</h3>
    <div class="home__tabs__left">
      <div class="home__tabs__left__txt">
        <p class="markdown-text" v-html="item.content"></p>
        <div class="comment">
          <span>
            <img src="../../assets/zan.png" alt="" />
            {{item.visit_count}}
          </span>
          <span>
            <img src="../../assets/pinglun.png" alt="" />
            {{item.reply_count}}
          </span>
          <span>
            <img src="../../assets/share.png" alt="" />
            分享
          </span>
        </div>
      </div>
      <div class="home__tabs__left__img">
        <img :src="item.author.avatar_url" alt="" />
      </div>
    </div>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
    name:'Recommend',
    data(){
      return{
        lists:[]
      }
    },
    mounted(){
      this.axios.get('https://cnodejs.org/api/v1/topics',{
        params:{
          tab:'all',
          page:1,
          limit:10
        }
      }).then(res=>{
        // console.log(res.data.data);
        this.lists=[...res.data.data]
      }).catch(err=>{
        console.log(err);
      })
    }
};
</script>

<style lang="scss" scoped>
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
    color: #222;
    padding-top: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
  &__img{
    img{
      width: 120px;
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
 ::v-deep .markdown-text{
  width: 500px;
  height: 40px;
  overflow: hidden;
 img{
    display: none;
  }
  h1{
    font-size: 14px;
    color: #4e5969;
  }
  h2{
    font-size: 14px;
    color: #4e5969;
  }
  h3{
    padding-top: 0px;
    font-size: 14px;
    color: #4e5969; 
  }
  a{
      color: #4e5969;
    }
}
</style>