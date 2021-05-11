<template>
  <div>
    <div class="home">
        <a href="javascript:;"><img src="//sf3-scmcdn2-tos.pstatp.com/xitu_juejin_web/img/logo.a7995ad.svg" /></a> 
        <a href="javascript:;">首页</a>
        <a href="javascript:;">沸点</a>
        <a href="javascript:;">小册</a>
        <a href="javascript:;">活动</a>
        <div></div><div></div><div></div><div></div>
        <el-input
          placeholder="探索掘金"
          prefix-icon="el-icon-search"
          v-model="input2" />

          <el-dropdown split-button type="primary" @click="handleClick">
              写文章
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>发布沸点</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-button>登录</el-button>
    </div>
    <div class="home__tabs">
      <template>
        <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="推荐" name="first">
          <Recommend />
        </el-tab-pane>
        <el-tab-pane label="后端" name="second">后端</el-tab-pane>
        <el-tab-pane label="前端" name="third">前端</el-tab-pane>
        <el-tab-pane label="Android" name="fourth">Android</el-tab-pane>
        <el-tab-pane label="iOS" name="fifth">iOS</el-tab-pane>
        <el-tab-pane label="人工智能" name="sixth">人工智能</el-tab-pane>
        <el-tab-pane label="开发工具" name="seventh">开发工具</el-tab-pane>
        <el-tab-pane label="代码人生" name="eighth">代码人生</el-tab-pane>
        <el-tab-pane label="阅读" name="ninth">阅读</el-tab-pane>
        </el-tabs>
      </template>
    </div>
  </div>
  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Recommend from './Recommend'

export default {
  name: 'Home',
  components: {
    Recommend
  },
     data() {
      return {
        activeName: 'first',
        input2:''
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style lang="scss">
  @import "../../style/home.scss";
  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>