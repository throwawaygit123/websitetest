<template>
  <div style="width:100%;height:100%;">
    <div style="width:230px;height:50px;float:left;">
       <img src="../assets/logo_03.png" alt style="max-width:44px;float:left;margin-left:0px;margin-top:7px" />
       <p style="float:left;color:#333; margin:5px 0 0 3px;font-size:30px">QuanBio</p>
    </div>
   
    <el-button
      icon="el-icon-back"
      size="mini"
      @click="$router.go(-1)"
      v-if="$route.path!='/index'"
      class="btn-back"
      style="float:left;margin-top:10px;margin-left:15px;"
    ></el-button>
    <div>
      <el-breadcrumb separator="/" class="mbx">
        <el-breadcrumb-item :to="{ path: '/index' }">Home Page</el-breadcrumb-item>
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
          <span style="color:#333;font-size:15px;">db</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" style=" width:200px">
           <router-link to="/login" style="text-decoration: none">
              <el-dropdown-item icon="el-icon-user"
                >{{$t('m.switchaccount')}}</el-dropdown-item
              >
            </router-link>
          <router-link to="/index" style="text-decoration: none">
              <el-dropdown-item icon="el-icon-switch-button"
                >{{$t('m.exitlogin')}}</el-dropdown-item
              >
            </router-link>
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
  line-height: 50px !important;
  color: #333 !important;
}
.el-breadcrumb__inner a,
.el-breadcrumb__inner.is-link {
  color: #333 !important;
}
.h2-2{
  width: 30px;
  height: 30px;
  border: none !important;
  background:none  !important;
  margin-top: 5px;
  display: block;
  margin-top: 12px;
}
.h2-2 img {
  max-width: 16px;

}
.el-dropdown-menu{

  position: static;

  margin-top: -30px;

}
.btn-back{
  color: #333 !important;
  background-color: white !important;
  border:1px solid #999 !important;

}
.btn-back:hover{
  color: white !important;
  /* border:none !important; */
  /* border:1px solid #999 !important; */
  border:1px solid #eb5350 !important;

  background-color: #eb5350 !important;
}
.btn-back:click{
  color: white !important;
  /* border:none !important; */
  border:1px solid #eb5350 !important;

  background-color: #eb5350 !important;
}
</style>