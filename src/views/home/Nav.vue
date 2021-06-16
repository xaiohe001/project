<template>
      <div class="home">
        <router-link to="/" class="imagess"><img src="/beforeone.png" /></router-link> 
        <router-link class="home__a" to="/">首页</router-link>
        <router-link class="home__a" to="../Boilingpoint">沸点</router-link>
        <a class="home__a" href="javascript:;">小册</a>
        <a class="home__a" href="javascript:;">活动</a>
        <div></div><div></div><div></div><div></div>
        <el-input
          placeholder="探索人生"
          prefix-icon="el-icon-search"
          v-model="input2" />

          <el-dropdown split-button type="primary" >
              写文章
            <el-dropdown-menu slot="dropdown">
              <router-link to="../../Login"><el-dropdown-item> 发布沸点 </el-dropdown-item></router-link>
            </el-dropdown-menu>
          </el-dropdown>
          <el-button> <router-link to="../../Login">登录</router-link> </el-button>
          <!-- ../../Login -->
    </div>
</template>

<script>
export default {
    name:"Nav",
    data() {
      return {
        input2:'',
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style>
  @import "../../style/home.scss";

</style>