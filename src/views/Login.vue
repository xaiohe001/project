<template>
    <div class="login__background">
        <div class="login">
            <div>用户名 : <input type="text" v-model="name" /> </div> 
            <div>密  码 : <input type="text" v-model='psw' /></div>  
            <button @click="login">登录</button>
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
                this.$router.push({
                    path: '/Login'
                })
            }
        }
    }
}
</script>

<style>
    .login{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 999;
        width: 300px;
        height: 300px;
        font-size: 20px;
        margin: 0 auto;
        background-color: bisque;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .login input{
        height: 30px;
        outline: none;
    }
    .login>div:nth-child(2) {
        margin-left: 15px;
    }
    .login button{
        width: 100px;
        height: 35px;
        margin: 0 auto;
        color: #fff;
        background-color: green;
        border-radius: 20px;
        outline: none;
        border: none;
        cursor: pointer;
    }
    .login button:hover{
        color: orange;
    }
</style>