<template>
<!-- 添加病人 Add patient -->
  <div>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="17" :xl="17" style="background: white">
        <div class="grid-content p1-1">
    

          <el-form ref="form" :model="form" label-width="150px">
            <el-form-item :label="$t('m.familyname')">
              <el-input v-model="form.familyName" :placeholder="$t('m.pefn')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('m.firstname')">
              <el-input v-model="form.firstName" :placeholder="$t('m.pefirstn')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('m.middlename')">
              <el-input v-model="form.middleName" :placeholder="$t('m.pemn')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('m.gender')">
              <el-select v-model="form.gender" :placeholder="$t('m.slo')">
                <el-option :label="$t('m.female')" value="Female"></el-option>
                <el-option :label="$t('m.male')" value="Male"></el-option>
                <!-- <el-option label="" value="beijing"></el-option> -->
              </el-select>
            </el-form-item>
            <el-form-item :label="$t('m.race')">
              <el-select v-model="form.Race" :placeholder="$t('m.slo')">
                <el-option :label="$t('m.africanamerican')" value="African-American"></el-option>
                <el-option :label="$t('m.asianamerican')" value="Asian-American"></el-option>
                <el-option :label="$t('m.caucasian')" value="Caucasian"></el-option>
                <el-option :label="$t('m.hispanic')" value="Hispanic"></el-option>
                <el-option :label="$t('m.others')" value="Others"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item :label="$t('m.dateofbirth')">
              <!-- <el-date-picker v-model="form.dataBirth" type="date" ></el-date-picker> -->
              <el-input v-model="form.dataBirth" :placeholder="$t('m.dateofbirth1')"></el-input>
            </el-form-item>

            <!-- <el-form-item > -->

            <div class="p1-2" >
              <p
                style="
                    font-size: 14px;
                    margin-bottom: 15px;
                    border-bottom: 1px solid #999;
                    line-height: 14px;
                  "
              >{{ $t("m.pd") }}</p>
              <div v-show="state1==1">
                <button @click.prevent="fn()">{{ $t("m.utms") }}</button>
                <div class="p1-3">
                  <div class="p1-4">
                    <span style="font-size: 14px">{{ $t("m.ft") }}</span>
                    <input
                      type="text"
                      v-model="form.ft"
                      style="width: 50px; height: 20px; margin-left: 5px"
                    />
                  </div>
                  <div class="p1-5">
                    <span style="font-size: 14px">{{ $t("m.lb") }}</span>
                    <input
                      type="text"
                      v-model="form.lb"
                      style="width: 50px; height: 20px; margin-left: 5px"
                    />
                  </div>
                </div>
              </div>
              <div v-show="state1==2">
                <button @click.prevent="two()" >{{ $t("m.utis") }}</button>
                <div class="p1-3" >
                <div class="p1-4">
                  <span style="font-size: 14px">{{ $t("m.kg") }}</span>
                  <input
                    type="text"
                    v-model="form.kg"
                    style="width: 50px; height: 20px; margin-left: 5px"
                  />
                </div>
                <div class="p1-5">
                  <span style="font-size: 14px">{{ $t("m.meter") }}</span>
                  <input
                    type="text"
                    v-model="form.meters"
                    style="width: 50px; height: 20px; margin-left: 5px"
                  />
                </div>
              </div>
              </div>
            </div>
            
            <el-form-item style="margin-top:20px;">
              <el-button type="primary" :style="selfstyle" @click="submitForm('form')">{{ $t("m.determination") }}</el-button>
              <el-button @click="resetForm('form')">reset</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>

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
      state1: 1,
      form: {
        // state: 1,
        familyName: "",
        firstName: "",
        middleName: "",
        gender: "",
        Race: "",
        Occupation: "",
        kg: "",
        meters: "",
        ft: "",
        lb: ""
      }
    };
  },
  methods: {
    fn() {
      this.state1 = 2;
      console.log(222222222);
    },
    two() {
      this.state1 = 1;
      console.log(111111111);
    },
    onSubmit() {
      console.log("submit!");
    },

    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
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

<style scoped>

.p1-1 {
  /* border: 1px solid #999; */
  padding: 15px 5px;
  margin-top: 20px;
}

.p1-2 {
  width: 350px;
  height: 150px;
  /* background-color: pink; */
  margin-left: 150px;
  border: 1px solid #999;
}
.p1-2 button {
  /* width: 100px; */
  height: 30px;
  padding: 5px 5px;
  margin-left: 20px;
  margin-bottom: 5px;
}
.p1-3 {
  /* width: 50%; */
  /* border: 1px solid #999; */
  height: 50px;
}
.p1-4 {
  float: left;
  margin-left: 80px;
  /* margin-top: 25px; */
}
.p1-5 {
  float: right;
  margin-right: 80px;
  /* margin-top: 25px; */
}
/* .p1-2 p:hover{
    border: 1px solid #999;
} */
.medhy {
  border: 1px solid #999;
  padding: 5px 5px;
  margin-top: 25px;
}
.m1 {
  margin-top: 10px;
  width: 100%;
  height: 400px;
  /* background-color: pink; */
}

.m1-1 {
  border: 1px solid #999;
  height: 100px;
  margin-top: 20px;
}
.m1-1 p {
  /* width: 100%; */
  display: inline-block;
  height: 30px;
  line-height: 30px;
  /* border-bottom: 1px solid #999; */
  font-size: 14px;
  margin-left: 10px;
}
.m1-2 {
  width: 100%;
  height: 69px;
  line-height: 69px;
  text-align: left;
  border-top: 1px solid #999;
  /* background-color: pink; */
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
/* .el-radio__input.is-checked .el-radio__inner {
    border-color: black;
    background: #999;
}
.el-radio__input.is-checked .el-radio__inner :hover{
    border-color: black;
}*/
.el-radio__input.is-checked + .el-radio__label {
  color: black;
}
.btn {
  width: 200px;
  height: 50px;
  margin: 40px 0 20px 1950px;
  background-color: #409eff;
  color: white;
  border: none;
  font-size: 16px;
  border-radius: 5px;
  /* float: right; */
  /* position: absolute; */
}
.go {
  position: absolute;
  /* border: 1px solid #999; */
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  /* background-color: pink; */
  bottom: 40%;
  left: 45%;
}
</style>