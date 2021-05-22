<template>
    <div class="login__background">
        <div class="login">
            <p class="login__p">账号登录</p>
            <div><input type="text" placeholder="请输入用户名" v-model="name" /> </div> 
            <div><input type="text" placeholder="请输入密码" v-model='psw' /></div>  
            <button @click="login">登录</button>
            <p class="login__user">注册登录即表示同意 <router-link to="./Useragreement"> <span>用户协议</span> </router-link> 、<router-link to="./Privacypolicy"> <span>隐私政策</span> </router-link></p>
        </div>
    </div>
</template>

<script>
export default {
    name:'Login',
    data() {
      return {
          show:false,
          name: '',
          psw: '',
          username: 'xiaohe',
          password: 123456789
      }
   },
      methods: {
        login() {
            console.log(11);
            console.log(this);
            this.show=true
            const url = this.$route.query.url
            if(this.name==this.username&&this.psw==this.password) {
                localStorage.setItem('jud',true)
                this.$router.push({
                    name: url,
                    path:'/'
                })
                // this.$router.go(0)
            }else {
                alert('用户密码错误')
                // this.$router.push({
                //     // path: '/Login'
                // })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .login__background{
        width: 100%;
        height: 100vh;
        background: url('../assets/wallhaven-011k19.jpg');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: relative;
       .login{
           width: 318px;
           height: 312px;
           display: flex;
           flex-direction: column;
           justify-content: space-between;
           background-color: #A45101;
           border-radius: 10px;
           opacity: .6;
           position: absolute;
           margin: auto;
           padding: 20px;
           box-sizing: border-box;
           top: 0;
           right: 0;
           bottom: 0;
           left: 0;
            &__p{
                font-weight: 600;
            }
            input{
                width: 260px;
                height: 40px;
                padding-left: 14px;
                outline: none;
                border-radius: 5px;
                border: none;
            }
            button{
                width: 278px;
                height: 40px;
                outline: none;
                border-radius: 5px;
                border: none;
                background-color: #007FFF;
                color: #fff;
                cursor: pointer;
            }
            &__user{
                font-size: 14px;
                color: #222;
                span{
                    color: #007FFF;
                }
            }

       }
    }
 
</style>