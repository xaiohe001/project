<template>
      <div class="home">
        <a href="/"><img src="//sf3-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/logo.a7995ad.svg" /></a> 
        <a class="home__a" href="/">首页</a>
        <a class="home__a" href="javascript:;">沸点</a>
        <a class="home__a" href="javascript:;">小册</a>
        <a class="home__a" href="javascript:;">活动</a>
        <div></div><div></div><div></div><div></div>
        <el-input
          placeholder="探索掘金"
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