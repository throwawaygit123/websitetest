<template>
<!-- 角色添加  Add Role-->
  <div class="roleadd">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
      style="background:white; padding:10px 10px;"
    >
      <el-form-item :label="$t('m.rolename')">
        <el-select v-model="ruleForm.rolename" :placeholder="$t('m.slo')">
          
          <el-option :label="$t('m.globaladmin')" value="globaladmin"></el-option>
          <el-option :label="$t('m.hospitaladmin')" value="hospitaladmin"></el-option>
          <el-option :label="$t('m.doctorrole')" value="doctorrole"></el-option>
         
          <el-option :label="$t('m.nurse')" value="nurse"></el-option>
           <el-option :label="$t('m.patient')" value="patient"></el-option>

        </el-select>
      </el-form-item>
      <el-form-item :label="$t('m.menupermissions')" prop="name">
        <el-tree
          :data="data"
          show-checkbox
          node-key="id"
          :default-expanded-keys="[2, 3]"
          :default-checked-keys="[5]"
          :props="defaultProps"
        ></el-tree>
      </el-form-item>

      <el-form-item>
        <router-link to="./role">
          <el-button type="primary" class="btnrole2" :style="selfstyle">
            {{
            $t("m.determination")
            }}
          </el-button>
        </router-link>

        <el-button  style="margin-left:15px">{{ $t("m.reset") }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selfstyle: {
					color: "white",
					width:'129px',
          height:'40px',
          backgroundColor: "#eb5350",
          border:'none'
				},
      ruleForm: {
        name: "",
        rolename:''
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please enter the username",
            trigger: "blur"
          },
          {
            min: 3,
            max: 8,
            message: "The length is between 3 and 8 characters",
            trigger: "blur"
          }
        ]
      },
      data: [
        {id:1,label:'Role Management'},
        {
          id: 2,
          label: 'Account Management',
        },
        {
          id: 3,
          label: 'Hospital Management',
        },
        {
          id: 4,
          label: 'Device Management',
        },
        {
          id: 5,
          label: 'Patient Management',
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  }
};
</script>

<style>
.roleadd {
  width: 50%;
}
.btnrole2:hover{
   color: white !important;
  border:1px solid #f5a9a8 !important;

  background-color: #f5a9a8 !important;
}

</style>