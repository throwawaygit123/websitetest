<template>
  <div class="box">
    <div class="one">

      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item :label="$t('m.accountnumber')" prop="user">
          <el-input
            type="user"
            v-model="ruleForm.user"
       
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('m.password')" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
     
       
        <el-form-item>

          <router-link to="/index">
            <el-button  class="btn" type="primary" @click="submitForm('ruleForm')"
            >{{ $t("m.submit") }}</el-button
          >
          </router-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
     data() {
      
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
  
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
     
        }
      };
    },
    methods: {

    }
};
</script>
<style  scoped>
.box {
  width: 100%;
  height: 100vh;
  background: radial-gradient(
    200% 100% at bottom center,
    #999,
    #3d4751,
    #1b2947,
    #1b1b1b
  );
  background: radial-gradient(
    220% 105% at top center,
    #999,
    #3d4751,
    #1b2947,
    #1b1b1b
  );
  background-attachment: fixed;
  overflow: hidden;
}

@keyframes rotate {
  0% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
  }

  100% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg)
      rotateY(-360deg);
  }
}
a {
  text-decoration: none;
  color: white;
}
.demo-ruleForm{
  margin-top: 10px;
}

.el-input{
  width: 80% !important;
}
.one {
  width: 400px;
  height: 200px;
  background-color: white;
  margin: 150px auto;
  opacity: 0.9;
  padding-top: 30px;
  border-radius: 15px;
}

h2 {
  text-align: center;
}

.one .btn {
  width: 150px;
  height: 50px;
  /* margin: 10px 0 0 0px; */
  background-color: #3d4751;
  border-radius: 15px;
  border: none;
  color: white;
}
.two {
  width: 100px;
  margin-left: 100px;
}
.el-input__suffix-inner {
  position: absolute;
  right: 10px;
  top: 22px;
}
</style>