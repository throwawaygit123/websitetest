<template>
  <div class="box">
    <div class="one">
      <el-form
        :model="ruleForm"
        status-icon
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item prop="email" :label="$t('m.email')">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <!-- <el-form-item
          :label="$t('m.email')"
          prop="email"
          :rules="[ { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                  { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }]"
        >
          <el-input type="email" v-model="ruleForm.emali"></el-input>
        </el-form-item>-->
        <el-form-item :label="$t('m.password')" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <!-- <router-link to="/index"> -->
          <el-button
            :style="selfstyle"
            class="btn"
            type="primary"
            @click="submitForm('ruleForm')"
          >{{ $t("m.submit") }}</el-button>
          <!-- </router-link> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import {Login} from  '@/request/login'
export default {
  data() {
    return {
      selfstyle: {
        color: "white",
        width: "167px",
        height: "50px",
        backgroundColor: "#eb5350",
        border: "none"
      },

      ruleForm: {
        email: "",
        pass: ""
        // checkPass: "",
        // age: ""
      }
      // rules: {
      //   pass: [
      //     { min: 5, max: 9, message: "长度在 3 到 5 个字符", trigger: "blur" }
      //   ]
      // }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let _this = this;
          console.log(_this.ruleForm.email, _this.ruleForm.pass);
          
            // .post("http://52.3.194.83:9191/api/userlogin/login", {
            axios.post("http://192.168.3.15:9191/api/userlogin/login", {
              email: _this.ruleForm.email,
              password: _this.ruleForm.pass
            })
            .then(res => {
              console.log(res.status);
              if(res.status==200){
                _this.$router.push({path:'/index'})
              }else{
                alert('Login failed')
              }
            })
            .catch(err => {
              alert('Login failed')
              console.log("问题" + err);
            });

          // Login(this.ruleForm)
          // if (this.ruleForm.email == "user@quanbio.com" && this.ruleForm.pass == "123456") {
          //   console.log("ok");
          //   this.$router.push({path:'/index'})
          // } else {
          //   console.log(111)
          //   alert('Incorrect account password')
          //   // return;
          // }
          // console.log(this.ruleForm.email, this.ruleForm.pass);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};

// :rules="[
//               { required: true, message: 'Please enter email address', trigger: 'blur' },
//               { type: 'email',message: 'Please enter the correct email address', trigger: ['blur', 'change'] }
//             ]"

// :rules="[
//             { required: true, message: 'Please input a password', trigger: 'blur' },
//             { min: 5, max: 9,  message: '5 to 9 characters in length', trigger: ['blur', 'change'] }
//           ]"

</script>

<style  scoped>
.box {
  width: 100%;
  height: 100vh;
  background-image: url(../assets/index.png);
  background-size: 100% 100% !important;
  background-attachment: fixed;
  overflow: hidden !important;
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
.demo-ruleForm {
  margin-top: 10px;
}

.el-input {
  width: 80% !important;
}
.one {
  width: 400px;
  height: 200px;
  background-color: white;
  margin: 200px auto;
  opacity: 0.9;
  padding-top: 30px;
  border-radius: 15px;
}

h2 {
  text-align: center;
}

.one .btn {
  height: 50px;
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