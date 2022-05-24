<template>
  <div style="width:100%;height:100%;">
    <img src="../assets/logo.png" alt style="max-width:220px;float:left" />
    <el-button
      icon="el-icon-back"
      size="mini"
      @click="$router.go(-1)"
      v-if="$route.path!='/index'"
      class="btn-back"
      style="float:left;margin-top:40px;margin-left:20px;"
    ></el-button>
    <div>
      <el-breadcrumb separator="/" class="mbx">
        <el-breadcrumb-item :to="{ path: '/' }">Home Page</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a>{{$route.meta.title}}</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div style="float:right">
        <template>
          <button @click="fn1" v-show="st == 1" class="h2-2"><img src="../assets/zhen.png" alt=""></button>
        </template>
        <template>
          <button @click="fn2" v-show="st == 2" class="h2-2"><img src="../assets/zhen.png" alt=""></button>
        </template>
      </div>

      <el-dropdown class="xiala"  style="float:right">
        <span class="el-dropdown-link">
          <span style="color:white;font-size:15px;">db</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>

        <el-dropdown-menu slot="dropdown" style=" width:200px">
          <!-- <el-dropdown-item icon="el-icon-user" command="info">个人中心</el-dropdown-item> -->
           <router-link to="/login" style="text-decoration: none">
              <el-dropdown-item icon="el-icon-user"
                >{{$t('m.switchaccount')}}</el-dropdown-item
              >
            </router-link>
          <router-link to="/" style="text-decoration: none">
              <el-dropdown-item icon="el-icon-switch-button"
                >{{$t('m.exitlogin')}}</el-dropdown-item
              >
            </router-link>
          <!-- <el-dropdown-item icon="el-icon-switch-button" command="exit">退出</el-dropdown-item> -->
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      st: 2
    };
  },
  methods: {
    fn1() {
      console.log(111);
      this.$i18n.locale = "en-US";
      this.st = 2;
      // console.log(this.$i18n)
    },
    fn2() {
      console.log(222);
      this.$i18n.locale = "zh-CN";
      this.st = 1;
    }
  }
};
</script>

<style>
.mbx {
  float: left;
  margin-left: 20px;
  line-height: 110px !important;
  color: white !important;
}
.el-breadcrumb__inner a,
.el-breadcrumb__inner.is-link {
  color: white !important;
}
.h2-2{
  width: 30px;
  height: 30px;
  border: none !important;
  background:none  !important;
  margin-top: 5px;
  display: block;
  margin-top: 33px;
}
.h2-2 img {
  max-width: 20px;

  /* margin-top: 150px;
  margin-left: -80px; */
}
.el-dropdown-menu{

  position: static;
  /* display: block; */
  margin-top: -30px;
  /* top: 73px !important;
  right:1200px !important; */
}
</style>