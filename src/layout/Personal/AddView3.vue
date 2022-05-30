<template>
  <div style="background-color:white;">
    <el-form>
      <div class="medhy">
      <!-- <p style="font-size: 14px; line-height: 14px">
        do you currently have or have been previously diagnosed(history) with
        any of these conditions?
      </p> -->
      <p style="font-size: 12px; color: #999; line-height: 14px">
        {{$t('m.dychohbpdwaotad')}}
      </p>
      <div class="m1">
        <el-form ref="form" :model="form">
          <el-row :gutter="10">
            <el-col :xs="24" :sm="8" :md="8" :lg="4" :xl="4"
              ><div class="grid-content m1-1">
                <!-- <p>Diabetes Melitus(DM)</p>
                <span style="color: #999"> 糖尿病</span> -->
                <p>{{$t('m.diabetes')}}</p>
                <div class="m1-2">
                  <el-radio v-model="form.diabeteMellitus" label="1"
                    >No</el-radio
                  >
                  <el-radio v-model="form.diabeteMellitus" label="2"
                    >Yes</el-radio
                  >
                </div>
              </div></el-col
            >
            <el-col :xs="24" :sm="8" :md="8" :lg="4" :xl="4"
              ><div class="grid-content m1-1">
                <!-- <p>Neuropathy</p>
                <span style="color: #999"> 神经病</span> -->
                <p>{{$t('m.neuropathy')}}</p>
                <div class="m1-2">
                  <el-radio v-model="form.neuropathy" label="1">No</el-radio>
                  <el-radio v-model="form.neuropathy" label="2">Yes</el-radio>
                </div>
              </div></el-col
            >
            <el-col :xs="24" :sm="8" :md="8" :lg="4" :xl="4"
              ><div class="grid-content m1-1">
                <!-- <p>Hypertension(HTN)</p>
                <span style="color: #999"> 高血压</span> -->
                <p>{{$t('m.hypertension')}}</p>
                <div class="m1-2">
                  <el-radio v-model="form.hypertension" label="1">No</el-radio>
                  <el-radio v-model="form.hypertension" label="2">Yes</el-radio>
                </div>
              </div></el-col
            >
            <el-col :xs="24" :sm="8" :md="8" :lg="4" :xl="4"
              ><div class="grid-content m1-1">
                <!-- <p>Implanted Pacemaker</p>
                <span style="color: #999"> 植入起搏器</span> -->
                <p>{{$t('m.implantationofpacemaker')}}</p>
                <div class="m1-2">
                  <el-radio v-model="form.implantedPacemaker" label="1"
                    >No</el-radio
                  >
                  <el-radio v-model="form.implantedPacemaker" label="2"
                    >Yes</el-radio
                  >
                </div>
              </div></el-col
            >
            <el-col :xs="24" :sm="8" :md="8" :lg="4" :xl="4"
              ><div class="grid-content m1-1">
                <!-- <p>Liver Disease</p>
                <span style="color: #999"> 肝病</span> -->
                <p>{{$t('m.hepatopathy')}}</p>
                <div class="m1-2">
                  <el-radio v-model="form.liverDisease" label="1">No</el-radio>
                  <el-radio v-model="form.liverDisease" label="2">Yes</el-radio>
                </div>
              </div></el-col
            >
            <el-col :xs="24" :sm="8" :md="8" :lg="4" :xl="4"
              ><div class="grid-content m1-1">
                <!-- <p>Kidney Disease</p>
                <span style="color: #999"> 肾脏疾病</span> -->
                <p>{{$t('m.kidneydisease')}}</p>
                <div class="m1-2">
                  <el-radio v-model="form.kidneyDisease" label="1">No</el-radio>
                  <el-radio v-model="form.kidneyDisease" label="2"
                    >Yes</el-radio
                  >
                </div>
              </div></el-col
            >
          </el-row>

          <el-row :gutter="10">
            <el-col :xs="24" :sm="8" :md="8" :lg="4" :xl="4"
              ><div class="grid-content m1-1">
                <!-- <p>Nicotine use</p>
                <span style="color: #999"> 尼古丁使用</span> -->
                <p>{{$t('m.nicotineuse')}}</p>
                <div class="m1-2">
                  <el-radio v-model="form.nicotineUse" label="1">No</el-radio>
                  <el-radio v-model="form.nicotineUse" label="2">Yes</el-radio>
                </div>
              </div></el-col
            >
            <el-col :xs="24" :sm="8" :md="8" :lg="4" :xl="4"
              ><div class="grid-content m1-1">
                <!-- <p>Dialysls treatment</p>
                <span style="color: #999"> 透析治疗</span> -->
                <p>{{$t('m.dialysistreatment')}}</p>
                <div class="m1-2">
                  <el-radio v-model="form.dialisisTreatment" label="1"
                    >No</el-radio
                  >
                  <el-radio v-model="form.dialisisTreatment" label="2"
                    >Yes</el-radio
                  >
                </div>
              </div></el-col
            >
            <el-col :xs="24" :sm="8" :md="8" :lg="4" :xl="4"
              ><div class="grid-content m1-1">
                <!-- <p>Covid-19</p>
                <span style="color: #999"> 2019新冠病毒</span> -->
                <p>{{$t('m.novelcoronavirus')}}</p>
                <div class="m1-2">
                  <el-radio v-model="form.covid19" label="1">No</el-radio>
                  <el-radio v-model="form.covid19" label="2">Yes</el-radio>
                </div>
              </div></el-col
            >
            <el-col :xs="24" :sm="8" :md="8" :lg="4" :xl="4"
              ><div class="grid-content m1-1">
                <!-- <p>Myocardial infarction(MI)</p>
                <span style="color: #999"> 心肌梗死</span> -->
                <p>{{$t('m.miocardialinfarction')}}</p>
                <div class="m1-2">
                  <el-radio v-model="form.myocardialInfarction" label="1"
                    >No</el-radio
                  >
                  <el-radio v-model="form.myocardialInfarction" label="2"
                    >Yes</el-radio
                  >
                </div>
              </div></el-col
            >
            <el-col :xs="24" :sm="16" :md="16" :lg="8" :xl="8"
              ><div class="grid-content m1-1">
                <!-- <p>Peripheral Vascular Disease(PVD)</p>
                <span style="color: #999"> 外周血管疾病</span> -->
                <p>{{$t('m.pvd')}}</p>
                <div class="m1-2">
                  <el-radio v-model="form.peripheralVascularDisease" label="1"
                    >No</el-radio
                  >
                  <el-radio v-model="form.peripheralVascularDisease" label="2"
                    >Yes</el-radio
                  >
                </div>
              </div></el-col
            >
          </el-row>

          <el-row :gutter="10">
            <el-col :xs="24" :sm="8" :md="8" :lg="9" :xl="9"
              ><div class="grid-content m1-1">
                <!-- <p>
                  Percutaneous Transluminal Coronary Angloplasty(PTCA)or stents
                </p>
                <span style="color: #999"> 经皮腔内冠状动脉成形术或支架</span> -->
                <p>{{$t('m.ptcaos')}}</p>
                <div class="m1-2">
                  <el-radio v-model="form.percutaneousTransluminal" label="1"
                    >No</el-radio
                  >
                  <el-radio v-model="form.percutaneousTransluminal" label="2"
                    >Yes</el-radio
                  >
                </div>
              </div></el-col
            >
            <el-col :xs="24" :sm="8" :md="8" :lg="4" :xl="4"
              ><div class="grid-content m1-1">
                <!-- <p>Cerebrovascular Accident()CVA</p>
                <span style="color: #999"> 脑血管意外</span> -->
                <p>{{$t('m.cerebrovascularaccident')}}</p>
                <div class="m1-2">
                  <el-radio v-model="form.cerebrovascularAccident" label="1"
                    >No</el-radio
                  >
                  <el-radio v-model="form.cerebrovascularAccident" label="2"
                    >Yes</el-radio
                  >
                </div>
              </div></el-col
            >
            <el-col :xs="24" :sm="8" :md="8" :lg="4" :xl="4"
              ><div class="grid-content m1-1">
                <!-- <p>Congestive Heart Failure(CHF)</p>
                <span style="color: #999"> 充血性心衰</span> -->
                <p>{{$t('m.congestiveheartfailure')}}</p>
                <div class="m1-2">
                  <el-radio v-model="form.congestiveHeartFailure" label="1"
                    >No</el-radio
                  >
                  <el-radio v-model="form.congestiveHeartFailure" label="2"
                    >Yes</el-radio
                  >
                </div>
              </div></el-col
            >
            <el-col :xs="24" :sm="8" :md="8" :lg="7" :xl="7"
              ><div class="grid-content m1-1">
                <!-- <p>Coronary Artery Bypass Grafting(CABG)</p>
                <span style="color: #999"> 冠状动脉旁路移植术</span> -->
                <p>{{$t('m.Coronaryarterybypassgrafting')}}</p>
                <div class="m1-2">
                  <el-radio v-model="form.coronaryArteryBypass" label="1"
                    >No</el-radio
                  >
                  <el-radio v-model="form.coronaryArteryBypass" label="2"
                    >Yes</el-radio
                  >
                </div>
              </div></el-col
            >
          </el-row>
        </el-form>
      </div>
    </div>
    <div class="m2">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"
          ><div class="grid-content m2-1">
            <el-form ref="form" :model="form" label-width="200px">
              <!-- <el-form-item label="List Current Medications"> -->
              <el-form-item :label="$t('m.listcurrentdrugs')">

                <el-input
                  v-model="form.listCurrentMedication"
                  
                ></el-input>
              </el-form-item>
              <!-- <el-form-item label="Other Health Test Results"> -->
              <el-form-item :label="$t('m.otherhealthtestresults')">

                <el-input
                  v-model="form.otherHealthTestResult"
                  
                ></el-input>
              </el-form-item>
              <!-- <el-form-item label="Additional Comment"> -->
              <el-form-item :label="$t('m.supplement')">

                <el-input
                  v-model="form.additionalComments"
                  
                ></el-input>
              </el-form-item>
              <!-- <el-form-item label="Reasons For Clini"> -->
              <el-form-item :label="$t('m.reasonforvisit')">

                <el-input
                  v-model="form.reasonClinicalVisit"
                  
                ></el-input>
              </el-form-item>
            </el-form></div
        ></el-col>
      </el-row>
    </div>

         <el-form-item style="margin-top:20px;margin-left:340px">
            <el-button type="primary" :style="selfstyle" @click="submitForm('form')">{{ $t("m.determination") }}</el-button>
            <el-button @click="resetForm('form')">reset</el-button>
          </el-form-item>
    </el-form>
    
    <!-- <router-link to="/personalinformation">
      <el-button type="primary" style="float: right; margin-right: 20px"
        >{{ $t("m.determination") }}</el-button
      >
    </router-link> -->
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
        diabeteMellitus: "2",
        neuropathy: "1",
        hypertension: "1",
        implantedPacemaker: "2",
        liverDisease: "1",
        kidneyDisease: "1",
        nicotineUse: "2",
        dialisisTreatment: "1",
        covid19: "1",
        myocardialInfarction: "1",
        peripheralVascularDisease: "1",
        percutaneousTransluminal: "2",
        cerebrovascularAccident: "1",
        congestiveHeartFailure: "1",
        coronaryArteryBypass: "1",
        listCurrentMedication: "",
        otherHealthTestResult: "",
        additionalComments: "",
        reasonClinicalVisit: "",
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
.patient {
  border: 1px solid #999;
  padding: 5px 5px;
}
.p1-1 {
  border: 1px solid #999;
  padding: 5px 5px;

  margin-top: 20px;
}
.p1-2 {
  width: 400px;
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
}
.p1-3 {
  /* width: 50%; */
  /* border: 1px solid #999; */
  height: 80px;
}
.p1-4 {
  float: left;
  margin-left: 80px;
  margin-top: 25px;
}
.p1-5 {
  float: right;
  margin-right: 80px;
  margin-top: 25px;
}
/* .p1-2 p:hover{
    border: 1px solid #999;
} */
.medhy {
  /* border: 1px solid #999; */
  padding: 5px 5px;
  /* margin-top: 25px; */
}
.m1 {
  margin-top: 10px;
  width: 100%;
  height: 380px;
  /* background-color: pink; */
}

.m1-1 {
  border: 1px solid #999;
  height: 100px;
  margin-top: 20px;
}
.m1-1 p {
  /* width: 100%; */
  /* display: inline-block; */
  height: 30px;
  line-height: 30px;
  /* border-bottom: 1px solid #999; */
  font-size: 12px;
  text-align: center;
  /* margin-left: 10px; */
}
.m1-2 {
  width: 100%;
  height: 80px;
  line-height: 50px;
  text-align: center;
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
.back {
  line-height: 40px;
  font-size: 14px;
  /* background-color: #3D4751; */
}
.m2{
  margin-top: 50px;
}
</style>