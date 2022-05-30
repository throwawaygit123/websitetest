<template>
  <div class="asidview">
    <el-row>
      <el-col>
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#fff"
          text-color="#333"
          active-text-color="#eb5350"
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
              <i class="el-icon-user-solid" style="color: #333;"></i>
              <span slot="title" style="font-size: 17px">{{ $t("m.rolemanagement") }}</span>
            </el-menu-item>
          </router-link>


          <router-link to="globalaccount">
            <el-menu-item index="2">
              <i class="el-icon-s-home" style="color: #333"></i>
              <span slot="title" style="font-size: 17px">
                {{
                $t("m.accountmanagement")
                }}
              </span>
            </el-menu-item>
          </router-link>

          <!-- <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-home"></i>

              <span style="font-size: 17px">
                {{
                $t("m.accountmanagement")
                }}
              </span>
            </template>
          
            
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
          </el-submenu> -->

          <router-link to="hospital">
            <el-menu-item index="3">
              <i class="el-icon-office-building" style="color: #333"></i>
              <span slot="title" style="font-size: 17px">
                {{
                $t("m.hospiatalmanagement")
                }}
              </span>
            </el-menu-item>
          </router-link>

          <router-link to="/device">
            <el-menu-item index="4">
              <i class="el-icon-s-opportunity" style="color: #333"></i>
              <span slot="title" style="font-size: 17px">
                {{
                $t("m.devicemanagement")
                }}
              </span>
            </el-menu-item>
          </router-link>
          
           <router-link to="/patientmanagement">
            <el-menu-item index="5">
              <i class="el-icon-s-custom" style="color: #333"></i>
              <span slot="title" style="font-size: 17px">
                {{
                $t("m.patientmanagement")
                }}
              </span>
            </el-menu-item>
          </router-link>

          
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
 
  methods: {
 
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
/* .el-menu-vertical-demo {
  border-right-color: #3d4751;
} */

.el-submenu__title i {
  color: #333 !important;
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
.el-menu-item:hover{
  background-color: #f5a9a8 !important;
}
</style>

