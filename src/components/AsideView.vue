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
          router
        >
          <!-- <router-link to="role"> -->
          <el-menu-item index="role">
            <i class="el-icon-user-solid" style="color: #333;"></i>
            <span slot="title" style="font-size: 17px">{{ $t("m.rolemanagement") }}</span>
          </el-menu-item>
          <!-- </router-link> -->

          <!-- <router-link to="globalaccount"> -->
          <el-menu-item index="globalaccount">
            <i class="el-icon-s-home" style="color: #333"></i>
            <span slot="title" style="font-size: 17px">
              {{
              $t("m.accountmanagement")
              }}
            </span>
          </el-menu-item>
          <!-- </router-link> -->

          <!-- <router-link to="hospital"> -->
          <el-menu-item index="hospital">
            <i class="el-icon-office-building" style="color: #333"></i>
            <span slot="title" style="font-size: 17px">
              {{
              $t("m.hospiatalmanagement")
              }}
            </span>
          </el-menu-item>
          <!-- </router-link> -->

          <!-- <router-link to="/device"> -->
          <el-menu-item index="device">
            <i class="el-icon-s-opportunity" style="color: #333"></i>
            <span slot="title" style="font-size: 17px">
              {{
              $t("m.devicemanagement")
              }}
            </span>
          </el-menu-item>
          <!-- </router-link> -->

          <!-- <router-link to="/patient"> -->
          <el-menu-item index="patient">
            <i class="el-icon-s-custom" style="color: #333"></i>
            <span slot="title" style="font-size: 17px">
              {{
              $t("m.patientmanagement")
              }}
            </span>
          </el-menu-item>
          <!-- </router-link> -->
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
  overflow: hidden;
}

.el-menu-item:hover {
  background-color: #f5a9a8 !important;
}
</style>
