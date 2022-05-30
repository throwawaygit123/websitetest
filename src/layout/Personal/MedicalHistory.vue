<template>
  <div class="ad2" >
  

    <div style="height: 250px">
      <el-col :xs="24" :sm="24" :md="24" :lg="15" :xl="15" style="background:white;">
        <div
          class="grid-content p1-1"
          style="margin-top: 20px; "
        >
          <!-- <p
            style="
              font-size: 14px;
              margin-top: 5px;
              margin-bottom: 15px;
              display: inline-block;
            "
          >
           {{ $t("m.hospitalinformation") }}
          </p> -->
          <!-- <span style="color: #999">医院信息</span> -->
          <el-form ref="form" :model="form" label-width="150px">
            <!-- <el-form-item label="Hospital Number "> -->
            <el-form-item :label="$t('m.hospitalnumber')">

              <el-input
                v-model="form.hospitalNumber"
                :placeholder="$t('m.pethn')"
              ></el-input>
            </el-form-item>
            <!-- <el-form-item label="Hospital Name "> -->
            <el-form-item :label="$t('m.hospitalname')">

              <el-input
                v-model="form.hospitalName"
                :placeholder="$t('m.pethname')"
              ></el-input>
            </el-form-item>

             <el-form-item>
            <el-button type="primary" :style="selfstyle" @click="submitForm('form')">{{ $t("m.determination") }}</el-button>
            <el-button @click="resetForm('form')">reset</el-button>
          </el-form-item>

          </el-form>
        </div>
        <!-- <div
          class="grid-content p1-1"
          style="margin-top: 50px; "
        >
          <p
            style="
              font-size: 14px;
              margin-top: 5px;
              margin-bottom: 15px;
              display: inline-block;
            "
          >
          {{ $t("m.doctorinformation") }}
          </p>
       
          <el-form ref="form" :model="form" label-width="150px">
      
            <el-form-item :label="$t('m.doctornumber')">

              <el-input
                v-model="form.doctorNumber"
                :placeholder="$t('m.pedn')"
              ></el-input>
            </el-form-item>
            

            <el-form-item :label="$t('m.doctorname')">

              <el-input
                v-model="form.doctorName"
               :placeholder="$t('m.petdname')"
              ></el-input>
            </el-form-item>
          </el-form>
        </div> -->
      </el-col>
    </div>
   
    <!-- <div class="go">
      <router-link to="/addv3" style="color: black; text-decoration: none"
        ><el-button type="primary" style="width: 100%"
          >Continue(下一步)</el-button
        ></router-link
      >
    </div> -->
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
      form: {
        hospitalNumber: "",
        hospitalName: "",
        doctorNumber: "",
        doctorName: "",
      },

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

<style scoped>
.ad2 {
  width: 100%;
  height: 100%;
  position: relative;
}
.back {
  /* border: 1px solid #999; */


  line-height: 40px;
  font-size: 14px;
  /* background-color: #3d4751; */
}

</style>