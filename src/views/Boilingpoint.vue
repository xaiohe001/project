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
            456
          </div>
          <div class="sides__bottom">
            789
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
    width: 120px;
    height: 472px;
    background-color: #6CBD45;
    margin-top: 15px;
    position: sticky;
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
      background-color: #1d7dfa;
      height: 320px;
    }
    &__bottom{
      width: 248px;
      height: 70px;
      margin-top: 15px;
      background-color: violet;
    }

  }
</style>