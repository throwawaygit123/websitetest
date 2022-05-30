
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
          <el-form-item :label="$t('m.rolename')">
            <el-select v-model="ruleForm.rolename" :placeholder="$t('m.slo')">
              <el-option :label="$t('m.globaladmin')" value="globaladmin"></el-option>
              <el-option :label="$t('m.hospitaladmin')" value="hospitaladmin"></el-option>
              <el-option :label="$t('m.doctorrole')" value="doctorrole"></el-option>

              <el-option :label="$t('m.nurse')" value="nurse"></el-option>
              <el-option :label="$t('m.patient')" value="patient"></el-option>
              <!-- <el-option label="" value="beijing"></el-option> -->
            </el-select>
          </el-form-item>
          <el-form-item :label="$t('m.familyname')">
              <el-input v-model="ruleForm.familyName" :placeholder="$t('m.pefn')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('m.firstname')">
              <el-input v-model="ruleForm.firstName" :placeholder="$t('m.pefirstn')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('m.middlename')">
              <el-input v-model="ruleForm.middleName" :placeholder="$t('m.pemn')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('m.gender')">
              <el-select v-model="ruleForm.gender" :placeholder="$t('m.slo')">
                <el-option :label="$t('m.female')" value="Female"></el-option>
                <el-option :label="$t('m.male')" value="Male"></el-option>
                <!-- <el-option label="" value="beijing"></el-option> -->
              </el-select>
            </el-form-item>

            <el-form-item :label="$t('m.dateofbirth')">
              <!-- <el-date-picker v-model="form.dataBirth" type="date" ></el-date-picker> -->
              <el-input v-model="ruleForm.dataBirth" :placeholder="$t('m.dateofbirth1')"></el-input>
            </el-form-item>
          <!-- <el-form-item :label="$t('m.username')">
            <el-input v-model.number="ruleForm.age"></el-input>
          </el-form-item> -->
          <el-form-item :label="$t('m.password')" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item :label="$t('m.confirmpasdsword')" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            prop="email"
            :label="$t('m.email')"
            :rules="[
      { required: true, message: 'Please enter email address', trigger: 'blur' },
      { type: 'email', message: 'Please enter the correct email address', trigger: ['blur', 'change'] }
    ]"
          >
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">{{ $t("m.submit") }}</el-button>
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
          this.$router.go(-1);
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