<template>
  <div class="menuadd">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="220px"
      class="demo-ruleForm"
    >
      <el-form-item :label="$t('m.superior')" prop="region">
        <el-select v-model="ruleForm.region" :placeholder="$t('m.psaaa')">
          <el-option
           :label="$t('m.systemsettings')"
            :value="$t('m.systemsettings')"
          ></el-option>
          <el-option
            :label="$t('m.hospiatalmanagement')"
           :value="$t('m.hospiatalmanagement')"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item :label="$t('m.cataloguename')" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item :label="$t('m.state')" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>

      <el-form-item :label="$t('m.type')" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio :label="$t('m.catalogue')"></el-radio>
          <el-radio :label="$t('m.menu')"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <router-link to="./menu">
          <el-button type="primary" @click="submitForm('ruleForm')">{{
            $t("m.determination")
          }}</el-button>
        </router-link>

        <el-button @click="resetForm('ruleForm')" style="margin-left: 15px">
          {{ $t("m.reset") }}</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please enter directory name",
            trigger: "blur",
          },
          {
            min: 3,
            max: 10,
            message: "The length is between 3 and 10 characters",
            trigger: "blur",
          },
        ],

        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],

        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style>
.menuadd {
  width: 50%;
}
.el-main {
  text-align: left;
}
</style>