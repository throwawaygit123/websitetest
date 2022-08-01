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
// import axios from "axios";
// import { $Message } from "../common/untils";

import { Login } from "@/request/login";
// import {mapMutations} from 'vuex'
// console.log(WebSocket)
// console.log('WebSocket')
// console.log(window)

// console.log('WebSocket' in window)

if ('WebSocket' in window) {
       var  websocket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");

        websocket.onopen = function () {
            console.log("open成功");
            // websocket.send("hello");
        };

        //客户端收到服务器的方法，这个方法就会被回调
        websocket.onmessage = function (ev) {
            console.log("接收到消息:"+ev.data);
        };

        // websocket.onclose = function () {
        //     console.log("关闭连接");
        // };
        websocket.onerror = function () {
            console.log("连接错误");
         };

    } else {
        alert('当前浏览器 Not support websocket')
    }





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
      }
    };
  },
  methods: {
    // ...mapMutations(['changeLogin']),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let _this = this;

          //         axios.post("http://52.3.194.83:9192/api/userlogin/user", {
          //           email: _this.ruleForm.email,
          //           password: _this.ruleForm.pass
          //         })
          // // $Message(res.state ? "success" : "error", res.msg, 3000)
          //         .then(res => {
          //           console.log(res.data.token,'token');
          //           if(res.data.state){
          //             console.log(111);

          //           // localStorage.setItem("token", JSON.stringify(res.data.token))
          //           // console.log(_this.$store)
          //           //  _this.$store.commit('set_list', res.data)

          //            _this.$store.commit('set_token', res.data.token)
          //             this.$router.push({path:'/index'})
          //             $Message("success" , 'Login successful', 3000)
          //           }else{
          //             // alert('Login failed')
          //             $Message("error" , 'Login failed', 3000)

          //           }
          //         })
          //         // 1750 58
          //         // 1166 38x
          //         .catch(err => {
          //           alert('Login failed')

          //           console.log("问题" + err);
          //         });

          // console.log(this.ruleForm)
          Login({
            email: _this.ruleForm.email,
            password: _this.ruleForm.pass
          });
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