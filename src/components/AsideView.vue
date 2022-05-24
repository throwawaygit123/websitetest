<template>
  <div class="asidview">
    <el-row>
      <el-col>
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#3D4751"
          text-color="#fff"
          active-text-color="#ffd04b"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
          <!-- <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span style="font-size: 17px">{{ $t("m.rolemanagement") }}</span>
            </template>
            
          </el-submenu>-->

          <router-link to="role">
            <el-menu-item index="1">
              <i class="el-icon-user-solid" style="color: white"></i>
              <span slot="title" style="font-size: 17px">{{ $t("m.rolemanagement") }}</span>
            </el-menu-item>
          </router-link>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-home"></i>

              <span style="font-size: 17px">
                {{
                $t("m.accountmanagement")
                }}
              </span>
            </template>
            <!-- <el-menu-item index="1-4">Patient information(病人信息)</el-menu-item> -->
            <router-link to="/globalaccount">
              <el-menu-item index="1-4">
                <span style="font-size: 14px">
                  {{
                  $t("m.globaladminaccount")
                  }}
                </span>
              </el-menu-item>
            </router-link>
            <router-link to="hospitalaccount">
              <el-menu-item index="1-5">
                <span style="font-size: 14px">
                  {{
                  $t("m.hospitaladminaccount")
                  }}
                </span>
              </el-menu-item>
            </router-link>
            <router-link to="doctoraccount">
              <el-menu-item index="1-6">
                <span style="font-size: 14px">{{ $t("m.doctoraccount") }}</span>
              </el-menu-item>
            </router-link>
          </el-submenu>

          <router-link to="hospital">
            <el-menu-item index="3">
              <i class="el-icon-office-building" style="color: white"></i>
              <span slot="title" style="font-size: 17px">
                {{
                $t("m.hospiatalmanagement")
                }}
              </span>
            </el-menu-item>
          </router-link>

          <router-link to="/device">
            <el-menu-item index="4">
              <i class="el-icon-s-opportunity" style="color: white"></i>
              <span slot="title" style="font-size: 17px">
                {{
                $t("m.devicemanagement")
                }}
              </span>
            </el-menu-item>
          </router-link>

          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-s-custom"></i>

              <span style="font-size: 17px">
                {{
                $t("m.patientmanagement")
                }}
              </span>
            </template>
            <router-link to="/personalinformation">
              <el-menu-item index="1-7">
                <span style="font-size: 14px">
                  {{
                  $t("m.patientinformation")
                  }}
                </span>
              </el-menu-item>
            </router-link>

            <router-link to="results">
              <el-menu-item index="1-8">
                <span style="font-size: 14px">
                  {{
                  $t("m.testresult")
                  }}
                </span>
              </el-menu-item>
            </router-link>
            <router-link to="historytest">
              <el-menu-item index="1-9">
              <span style="font-size: 14px">
                {{
                $t("m.dpht")
                }}
              </span>
            </el-menu-item>
            </router-link>
            
            <!-- <el-menu-item index="1-10"
              ><span style="font-size: 14px">{{
                $t("m.uef")
              }}</span></el-menu-item
            >-->
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
      // openeds:['1']
    };
  },
  // created(){
  //   this.$bus.$on('brotherEvent',res=>{
  //     console.log(res)
  //     this.isCollapse=res
  //   })
  // },
  // mounted:{

  // },
  methods: {
    // a(){
    //   this.$bus.$emit('brotherEvent',122)
    // },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
.el-menu--collapse {
  width: 150px !important;
}
.el-menu-vertical-demo {
  border-right-color: #3d4751;
}

.el-submenu__title i {
  color: white !important;
}
.el-submenu__title {
  font-size: 16px !important;
}
.el-menu-item {
  font-size: 14px !important;
}
a {
  text-decoration: none;
}
.el-menu--collapse {
  width: 100% !important;
}
.asidview {
  /* border-right: none !important; */
  /* width: 10%; */
  overflow: hidden;
}
/* .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  } */
</style>

