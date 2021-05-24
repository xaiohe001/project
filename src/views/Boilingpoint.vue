<template>
  <div class="boilingpoint">
    <Nav></Nav>
    <div class="boilingpoint__content">
      <div class="boilingpoint__content__center">
        <div class="side">
          <template>
          <el-tabs :tab-position="tabPosition">
            <el-tab-pane label="推荐"></el-tab-pane>
            <el-tab-pane label="热门"></el-tab-pane>
            <el-tab-pane label="关注"></el-tab-pane>
            <el-tab-pane label="上班摸鱼"></el-tab-pane>
            <el-tab-pane label="内推招聘"></el-tab-pane>
            <el-tab-pane label="树洞一下"></el-tab-pane>
            <el-tab-pane label="今天学到了"></el-tab-pane>
            <el-tab-pane label="一图胜千言"></el-tab-pane>
            <el-tab-pane label="每日算法题"></el-tab-pane>
            <el-tab-pane label="开发工具"></el-tab-pane>
            <el-tab-pane label="更多话题+"></el-tab-pane>
          </el-tabs>
        </template>
        </div>
        <div>
        <div class="boilingpoint__content__center__content" v-for="(item,index) in list" :key="index">
          <div class="boilingpoint__content__center__content__title">
            <div class="boilingpoint__content__center__content__title__img">
              <img :src="item.author_user_info.avatar_large" alt="">
              <div>
                {{item.author_user_info.user_name}}
              <p>{{item.author_user_info.job_title}}·4分钟前</p>
              </div>
            </div>
            <div class="boilingpoint__content__center__content__title__btn">
              <button>关注</button>
            </div>
          </div>
          <div class="boilingpoint__content__center__content__contents">
           {{item.msg_Info.content}}
          </div>
          <div class="boilingpoint__content__center__content__fish">
            #上班摸鱼#
          </div>
          <div class="boilingpoint__content__center__content__footer">
            <div><router-link to="./Login"><img src="../assets/zan.png" alt=""><span> 赞</span></router-link></div> |
            <div><img src="../assets/pinglun.png" alt=""><span> 1</span></div> |
            <div @click="onclick(index)" ><img src="../assets/share.png" alt=""><span> 分享</span>
             <p v-show="actived===index">微信扫一扫<br /><img src="../assets/WeChat.png" alt=""></p> 
            </div>
          </div>
        </div>
        </div>
        <div class="sides">
          <div class="sides__top">
            <h3>精选沸点</h3>
            <div class="sides__all" v-for="(item,index) in 3" :key="index">
            <div class="sides__top__left">
              <p>
      👏奔走相告！！掘金创作者中心上线了！！
😚现在发沸点还能得丰厚的周边奖励！

活动时间：5月10日-5月23日
开奖时间：在活动结束后的7个工作日内公布中奖名单，请关注「稀土君」主页。
活动规则：选择下面两个玩法中的一个参与并达到活动要求，即可获得 掘金搪瓷杯1个 和随机发放的掘金徽章1个，每人至多获得一组奖品。


【玩法一】


在活动期间发布创作相关内容的沸点并带上创作者中心链接和话题 #创作者中心上线啦# ，沸点点赞数前10名的可以获得奖励。


【玩法二】


在活动期间坚持发布创作相关内容的沸点并带上创作者中心链接和话题 #创作者中心上线啦#，发布活动沸点天数达到10天可以获得奖励。


内容要求：要求与创作相关，例：写作技巧、写作感悟、阅读感悟等，也可以晒出自己的创作中心数据；非创作相关的内容不能参与此活动评选。

示例如图，兄弟姐妹们赶紧来参与吧！
    </p>
              <p class="discuss"><span>12</span>赞 · <span>6</span>评论</p>
            </div>
            <div class="sides__top__right">
              <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b0e3a202cca6490b80218ced8b0649da~tplv-k3u1fbpfcp-watermark.image" alt="">
            </div>
          </div>
          </div>
          <div class="sides__bottom">
            <img src="//sf3-scmcdn2-tos.pstatp.com/xitu_juejin_web/6c1b9a023d0084efca85cc217a4ee962.svg" alt="">
           <span>如何玩转沸点</span> 
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './home/Nav'
export default {
    name:"Boilingpoint",
    components:{
      Nav
    },
    data() {
      return{
        list:[],
        actived:-1,
        tabPosition: 'left'
      }
    },
    methods:{
      onclick(i){
        if(this.actived===i){
          this.actived=-1
        }else{
          this.actived=i
        }
        
      }
    },
    created(){
      this.axios.get('https://www.fastmock.site/mock/a6617ba69e1a887fd9bf6df577f3e5b7/fei/feidian').then(res=>{
        console.log(res.data);
        this.list=res.data
      }).catch(err=>{
        console.log(err);
      })
    }
}
</script>

<style lang="scss" scoped>   
  .boilingpoint{
    &__content{
      width: 100%;
      border-top: 1px solid #f1f1f1;
      background-color: #F4F5F5;
      &__center{
        width: 960px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        &__content{
          width: 570px;
          background-color: #fff;
          margin-top: 15px;
          &__title{
            padding: 16px 24px 0 20px;
            display: flex;
            justify-content: space-between;
            &__img{
              display: flex;
              img{
                width: 45px;
                height: 45px;
                border-radius: 50%;
              }
              div{
                margin-left: 15px;
                font-weight: bold;
                font-size: 15px;
                p{
                  font-size: 14px;
                  font-weight: normal;
                  color: #8a9aa9;
                  margin-top: 5px;
                }
              }
            }
            &__btn{
                width: 55px;
                height: 26px;
                line-height: 45px;
              button{
                width: 55px;
                height: 26px;
                outline: none;
                color: #6CBD45;
                border: none;
                border-radius: 3px;
              }
            }
              
          }
          &__contents{
            width: 445px;
            font-size: 15px;
            color: #17181a;
            line-height: 24px;
            margin-top: 5px;
            margin-left: 80px;
          }
          &__fish{
            height: 30px;
            line-height: 30px;
            cursor: pointer;
            font-size: 14px;
            color: #1d7dfa;
            margin-left: 80px;
          }
          &__footer{
            height: 34px;
            line-height: 34px;
            color: #8a93a0;
            border-top: 1px solid #EBEBEB;
            display: flex;
            justify-content: space-around;
            div{
              width: 190px;
              text-align: center;
              cursor: pointer;
              img{
                width: 18px;
                height: 18px;
                position: relative;
                top: 3px;
              }
              span{
                color: #8a93a0;
                font-size: 13px;
              }
              p{
                background-color: aliceblue;
                width: 120px;
                position: relative;
                right: -35px;
                img{
                  width: 120px;
                  height: 120px;
                }
              }
            }
          }
        }
      }
    }
  }
  .side{
    width: 110px;
    height: 440px;
    background-color: #fff;
    margin-top: 15px;
    position: sticky;
    padding: 0;
    top: 50px;
   .el-tabs__item{
      padding: 0;
    }
  }
  .sides{
    width: 248px;
    height: 400px;
    margin-top: 15px;
    position: sticky;
    top: 50px;
    &__top{
      width: 248px;
      background-color: #fff;
      height: 320px;
      box-sizing: border-box;
      h3{
        font-size: 15px;
        padding: 13px 16px;
        border-bottom: 1px solid #F4F4F4;

      }
      &__left{
        height: 68px;
        box-sizing: border-box;
        p{
          font-size: 14px;
          width: 132px;
          height: 36px;
          overflow: hidden;
          -webkit-line-clamp: 2;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          margin-top: 8px;
        }
        .discuss{
          font-size: 12px;
          color: #76797e;
        }
      }
      &__right{
        img{
          width: 68px;
          height: 68px;
        }
      }
    }
    &__bottom{
      width: 248px;
      height: 70px;
      margin-top: 15px;
      background-color: #fff;
      font-size: 14px;
      padding: 16px;
      box-sizing: border-box;
      span{    
        position: relative;
        top: -12px;
        left: 12px;
      }
    }

  }
  ::v-deep.el-tabs--left .el-tabs__item.is-left {
    text-align: center;
  }
  .sides__all{
    margin-top: 13px;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
  }
</style>