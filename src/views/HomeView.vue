<template>
  <div class="home">
    <el-container style="width:100%;height:100%">
      <el-header style="height:50px;border-bottom:2px solid #e9eef3;"><header-view /></el-header>
      <el-container>
        <el-aside width="240px" ><aside-view /></el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import AsideView from '../components/AsideView.vue'
import HeaderView from '../components/HeaderView.vue'

export default {
  name: "HomeView",
  components: {
    // HelloWorld
    AsideView,
    HeaderView
  },
};
</script>
<style scoped>

.home{
  width: 100%;
  height: 100vh;
}
.el-header {
  background-color: white;
  color: white;
  text-align: center;
  line-height: 50px;
  
}

.el-aside {
  /* background-color:#3D4751; */
  background-color: white;
  /* color: #333; */
  margin-top: 10px !important;
  color: #333;
  text-align: left;
  line-height: 200px;
  
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  /* width: 100%; */
  /* text-align: center; */
  /* line-height: 50px; */
  overflow: hidden;
}
</style>
