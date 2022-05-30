
<template>
  <div>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="17" :xl="17" style="background: white">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="150px"
          class="demo-ruleForm"
          style="padding:15px 15px;"
        >
          <el-form-item :label="$t('m.devicename')">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item :label="$t('m.portnumber')">
            <el-input v-model="ruleForm.age"></el-input>
          </el-form-item>
         
         

          <el-form-item>
            <el-button type="primary" :style="selfstyle" @click="submitForm('ruleForm')">{{ $t("m.determination") }}</el-button>
            <el-button @click="resetForm('ruleForm')">reset</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("Name cannot be empty"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input a password"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter the password again"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("The two passwords are inconsistent!"));
      } else {
        callback();
      }
    };
    return {
      selfstyle: {
					color: "white",
					width:'129px',
          height:'40px',
          backgroundColor: "#eb5350",
          border:'none'
				},
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
        username: "",
        email: ""
      },

      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit!");
         this.$router.go(-1)
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>