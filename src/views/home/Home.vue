<template>
  <div>
    <Nav></Nav>
    <div class="home__tabs">
      <template>
        <el-tabs v-model="activeName">
        <el-tab-pane label="推荐" name="first">
          <Recommend />
          <Side/>
        </el-tab-pane>
        <el-tab-pane label="后端" name="second">
          <After />
          <Side/>
        
        </el-tab-pane>
        <el-tab-pane label="前端" name="third">
          <Before />
          <Side/>
        
        </el-tab-pane>
        <el-tab-pane label="Android" name="fourth">
          <Android />
          <Side/>
        
        </el-tab-pane>
        <el-tab-pane label="iOS" name="fifth">
          <Ios />
          <Side/>
        
        </el-tab-pane>
        <el-tab-pane label="人工智能" name="sixth">
          <ArtificialIntelligence />
          <Side/>
        
        </el-tab-pane>
        <el-tab-pane label="开发工具" name="seventh">
          <DevelopmentTools />
          <Side/>
        
        </el-tab-pane>
        <el-tab-pane label="代码人生" name="eighth">
          <Codes />
          <Side/>
        
        </el-tab-pane>
        <el-tab-pane label="阅读" name="ninth">
          <Read />
          <Side/>
        
        </el-tab-pane>
        </el-tabs>
      </template>
    </div>
  </div>
  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Recommend from './Recommend'
import Side from '../Side'
import After from './After'
import Before from './Before'
import Android from './Android'
import Ios from './Ios'
import ArtificialIntelligence from './ArtificialIntelligence'
import DevelopmentTools from './DevelopmentTools'
import Codes from './Codes'
import Read from './Read'
import Login from '../Login'
import Nav from './Nav'
import Sidetil from '../Sidetil'

export default {
  name: 'Home',
  components: {
    Recommend,
    Side,
    After,
    Before,
    Android,
    Ios,
    ArtificialIntelligence,
    DevelopmentTools,
    Codes,
    Read,
    Login,
    Nav,
    Sidetil

  },
     data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
     
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
  .home__a{
    line-height: 40px;
  } 
</style>