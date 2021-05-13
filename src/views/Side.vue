<template>
  <div class="side">
      <div class="side__text">
          <b>掘金 - juejin.cn</b>
          <p>一个帮助开发者成长的社区</p>
          <el-input v-model="input" placeholder="请输入手机号"></el-input>
          <div class="side__text__verification">
              <input type="text" placeholder="验证码">
              <button>获取验证码</button>
          </div>
          <button class="btn">立即登录</button>
          <div class="side__text__agree">
              <p>注册登录即表示</p>
              <div>
                  同意 
                  <router-link target="_blank" :to="{path:'./Useragreement'}"> <span>用户协议</span> </router-link>
                      <!-- <router-link to="./Detail"> <span>用户协议</span> </router-link>  -->
                      、<router-link target="_blank" :to="{path:'./Privacypolicy'}"> <span>隐私政策</span> </router-link>
                </div>
          </div>
      </div>
      <div class="img">
          <img src="https://i01piccdn.sogoucdn.com/e9d2fd90868d1dc0" alt="">
          <img src="https://inews.gtimg.com/newsapp_bt/0/11382602620/1000" alt="">
      </div>
      <div class="side__about">
          <ul>
              <li><a href="javascript:;">关于</a></li><span> · </span>
              <li><a href="javascript:;">营业执照</a></li><span> · </span>
              <li><a href="javascript:;">友情链接</a></li><span> · </span>
              <li><a href="javascript:;">更多文章</a></li>
          </ul>
          <ul>
              <li><a href="javascript:;">用户协议</a></li><span> · </span>
              <li><a href="javascript:;">隐私政策</a></li><span> · </span>
              <li><a href="javascript:;">使用指南</a></li>
          </ul>
          <ul>
              <li><a href="javascript:;">京ICP备00000001号-1</a></li><span> · </span>
          </ul>
          <ul>
              <li><a href="javascript:;">京公网安备11000000000001号</a></li><span> · </span>
          </ul>
          <ul>
              <li>版权所有 : 小賀信息技术有限公司</li><span> · </span>
          </ul>
          <ul>
              <li>公司地址 : 位于国内中原地区</li><span> · </span>
          </ul>
          <ul>
              <li>公司座机 : 000-00000001</li><span> · </span>
          </ul>
          <ul>
              <li>举报邮箱 : <a href="javascript:;">123456@xiaohe.com</a></li>
          </ul>
          <ul>
              <li><a href="https://blog.csdn.net/Z_qing_he">©2021 小賀</a></li>
          </ul>
                    <ul class="imgs">
              <li>
                <a href="https://weibo.com/login.php?sudaref=www.google.com.hk&display=0&retcode=6102"><img src="http://sf3-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/weibo.0cd39f5.png" alt=""></a> 
              </li><span> . </span>
              <li>
                <a href="https://pc.weixin.qq.com/"><img src="//sf3-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/wechat.ce329e6.png" alt="" @mouseenter="enter()" @mouseleave="leave()"></a> 
                <div v-show="seen" class="imgs__img">
                    <p>微信扫一扫</p>
                    <img src="../assets/WeChat.png" alt="">
                </div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:"Side",
    data() {
    return {
      input: '',
      seen:false,
      current:0
    }
  },
  methods:{
      enter(){
        this.seen = true;
      },
      leave(){
        this.seen = false;
      }
    }
}
</script>

<style lang="scss">
.side{
        width: 240px;
        height: 270px;
        background-color: #f4f5f5;
        padding: 15px;
        box-sizing: border-box;
        font-size: 14px;
        &__text{
            line-height: 28px;
            .el-input__inner{
                margin-top: 10px;

                height: 30px !important;
                width: 120% !important;
            }
            &__verification{
                padding-top: 10px;
                input{
                    width: 93px;
                    height: 28px;
                    outline: none;
                    border: 1px solid #DCDFE6;
                    padding-left: 15px;
                    border-right:none;
                    border-bottom-left-radius: 3px;
                    border-top-left-radius: 3px;
                }
                button{
                    width: 90px;
                    height: 30px;
                    color: #007FFF;
                    cursor: pointer;
                    background-color: #fff;
                    outline: none;
                    border: 1px solid #DCDFE6;
                    border-left:none;
                    position: relative;
                    top: 1px;
                    border-bottom-right-radius: 3px;
                    border-top-right-radius: 3px;
                }
            }
            .btn{
                width: 95%;
                margin-top: 10px;
                height: 35px;
                color: #fff;
                background-color: #007FFF;
                outline: none;
                border: none;
                border-radius: 3px;
                cursor: pointer;
            }
            .btn:hover{
                    background-color: #0371df;
                }
            &__agree{
                margin-top: 10px;
                color: #767676;
                span{
                    color: #007FFF;
                }
            }
        }
        .img{
            width: 240px;
            height: 270px;
            position: relative;
            left: -15px;
            top: 28px;
            img{
                width: 240px;
                height: 270px;
                padding-bottom: 18px;
            }
        }
        &__about{
            // background-color: pink;
            width: 240px;
            position: relative;
            top: 340px;
            left: -15px;
            ul{
                display: flex;
                li{
                    font-size: 12px;
                    line-height: 19px;
                    padding: 0 5px 0 0;
                    color: #909090;
                    a{
                    color: #909090;
                    }
                    a:hover{
                        color: #007fff;
                    }
                    img{
                        width: 24px;
                        height: 24px;
                    }
                }
                span{
                    color: #909090;
                    padding: 0 5px 0 0;
                }
            }
                    img{
                        width: 24px;
                        height: 24px;
                    }
            .imgs{
                margin-top: 15px;
                &__img{
                    width: 120px;
                    height: 140px;
                    position: relative;
                    left: -25px;
                    p{
                        text-align: center;
                    }
                    img{
                        width: 120px;
                        height: 120px;
                    }
                }
            }
        }
        
    }
</style>
