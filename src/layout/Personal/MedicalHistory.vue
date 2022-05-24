<template>
  <div>
    <div class="patient">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <div class="grid-content p1-1">
            <p style="font-size: 14px; margin: 15px 0; display: inline-block">
              Personal Information
            </p>
            <span style="color: #999">病人信息</span>
            <el-form ref="form" :model="form" label-width="150px">
              <el-form-item label="Family Name">
                <el-input
                  v-model="form.familyName"
                  placeholder="请输入姓"
                ></el-input>
              </el-form-item>
              <el-form-item label="First Name ">
                <el-input
                  v-model="form.firstName"
                  placeholder="请输入名字"
                ></el-input>
              </el-form-item>
              <el-form-item label="Middle Name">
                <el-input
                  v-model="form.middleName"
                  placeholder="请输入中名"
                ></el-input>
              </el-form-item>
              <el-form-item label="Gender ">
                <el-select
                  v-model="form.gender"
                  placeholder="select your option"
                >
                  <el-option label="Female" value="Female"></el-option>
                  <el-option label="Male" value="Male"></el-option>
                  <!-- <el-option label="" value="beijing"></el-option> -->
                </el-select>
              </el-form-item>
              <el-form-item label="Race ">
                <el-select v-model="form.Race" placeholder="select your option">
                  <el-option
                    label="African-American"
                    value="African-American"
                  ></el-option>
                  <el-option
                    label="Asian-American"
                    value="Asian-American"
                  ></el-option>
                  <el-option label="Caucasian" value="Caucasian"></el-option>
                  <el-option label="Hispanic" value="Hispanic"></el-option>
                  <el-option label="Others" value="Others"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Date of Birth  ">
                <el-date-picker
                  v-model="form.dataBirth"
                  type="date"
                  placeholder="选择日期"
                >
                </el-date-picker>
              </el-form-item>

              <!-- <el-form-item > -->
              <div class="p1-2" v-show="state == 1">
                <p
                  style="
                    font-size: 14px;
                    margin-bottom: 15px;
                    border-bottom: 1px solid #999;
                  "
                >
                  Physical Data (BioData)
                </p>
                <button @click="one()">Use the metric system</button>
                <div class="p1-3">
                  <div class="p1-4">
                    <span style="font-size: 14px">Ft</span>
                    <input
                      type="text"
                      v-model="form.ft"
                      style="width: 50px; height: 20px; margin-left: 5px"
                    />
                  </div>
                  <div class="p1-5">
                    <span style="font-size: 14px">Lb</span>
                    <input
                      type="text"
                      v-model="form.lb"
                      style="width: 50px; height: 20px; margin-left: 5px"
                    />
                  </div>
                </div>
              </div>

              <div class="p1-2" v-show="state == 2">
                <p
                  style="
                    font-size: 14px;
                    margin-bottom: 15px;
                    border-bottom: 1px solid #999;
                  "
                >
                  Physical Data (BioData)
                </p>
                <button @click="two()">Use the Imperial system</button>
                <div class="p1-3">
                  <div class="p1-4">
                    <span style="font-size: 14px">Kg</span>
                    <input
                      type="text"
                      v-model="form.kg"
                      style="width: 50px; height: 20px; margin-left: 5px"
                    />
                  </div>
                  <div class="p1-5">
                    <span style="font-size: 14px">Meter</span>
                    <input
                      type="text"
                      v-model="form.meters"
                      style="width: 50px; height: 20px; margin-left: 5px"
                    />
                  </div>
                </div>
              </div>
              <!-- </el-form-item> -->

              <!-- <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
              </el-form-item> -->
            </el-form>
          </div></el-col
        >
        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <div class="grid-content p1-1" style="margin-top:120px">
            <p style="font-size: 14px; margin-top: 5px; margin-bottom:15px;display: inline-block">
              Hospital Information
            </p>
            <span style="color: #999">医院信息</span>
            <el-form ref="form" :model="form" label-width="150px">
              <el-form-item label="Hospital Number ">
                <el-input
                  v-model="form.hospitalNumber"
                  placeholder="请输入医院编号"
                ></el-input>
              </el-form-item>
              <el-form-item label="Hospital Name ">
                <el-input
                  v-model="form.hospitalName"
                  placeholder="请输入医院名字"
                ></el-input>
              </el-form-item>
            </el-form></div
        >
        <div class="grid-content p1-1" style="margin-top:50px">
            <p style="font-size: 14px; margin-top: 5px; margin-bottom:15px;display: inline-block">
              Doctor Information
            </p>
            <span style="color: #999">医生信息</span>
            <el-form ref="form" :model="form" label-width="150px">
              <el-form-item label="Doctor Number ">
                <el-input
                  v-model="form.doctorNumber"
                  placeholder="请输入医生编号"
                ></el-input>
              </el-form-item>
              <el-form-item label="Doctor Name ">
                <el-input
                  v-model="form.doctorName"
                  placeholder="请输入医生名字"
                ></el-input>
              </el-form-item>
            </el-form></div
        >
        </el-col>
      </el-row>
    </div>
    <div class="medhy">
      <p style="font-size: 14px">
        do you currently have or have been previously diagnosed(history) with
        any of these conditions?
      </p>
      <p style="font-size: 12px; color: #999">
        您目前是否患有或以前曾被诊断（病史）患有上述任何一种疾病?
      </p>

      <div class="m1">
        <el-form ref="form" :model="form">
          <el-row :gutter="10">
            <el-col :xs="24" :sm="8" :md="8" :lg="4" :xl="4"
              ><div class="grid-content m1-1">
                <p>Diabetes Melitus(DM)</p>
                <span style="color: #999"> 糖尿病</span>
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
                <p>Neuropathy</p>
                <span style="color: #999"> 神经病</span>
                <div class="m1-2">
                  <el-radio v-model="form.neuropathy" label="1">No</el-radio>
                  <el-radio v-model="form.neuropathy" label="2">Yes</el-radio>
                </div>
              </div></el-col
            >
            <el-col :xs="24" :sm="8" :md="8" :lg="4" :xl="4"
              ><div class="grid-content m1-1">
                <p>Hypertension(HTN)</p>
                <span style="color: #999"> 高血压</span>
                <div class="m1-2">
                  <el-radio v-model="form.hypertension" label="1">No</el-radio>
                  <el-radio v-model="form.hypertension" label="2">Yes</el-radio>
                </div>
              </div></el-col
            >
            <el-col :xs="24" :sm="8" :md="8" :lg="4" :xl="4"
              ><div class="grid-content m1-1">
                <p>Implanted Pacemaker</p>
                <span style="color: #999"> 植入起搏器</span>
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
                <p>Liver Disease</p>
                <span style="color: #999"> 肝病</span>
                <div class="m1-2">
                  <el-radio v-model="form.liverDisease" label="1">No</el-radio>
                  <el-radio v-model="form.liverDisease" label="2">Yes</el-radio>
                </div>
              </div></el-col
            >
            <el-col :xs="24" :sm="8" :md="8" :lg="4" :xl="4"
              ><div class="grid-content m1-1">
                <p>Kidney Disease</p>
                <span style="color: #999"> 肾脏疾病</span>
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
                <p>Nicotine use</p>
                <span style="color: #999"> 尼古丁使用</span>
                <div class="m1-2">
                  <el-radio v-model="form.nicotineUse" label="1">No</el-radio>
                  <el-radio v-model="form.nicotineUse" label="2">Yes</el-radio>
                </div>
              </div></el-col
            >
            <el-col :xs="24" :sm="8" :md="8" :lg="4" :xl="4"
              ><div class="grid-content m1-1">
                <p>Dialysls treatment</p>
                <span style="color: #999"> 透析治疗</span>
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
                <p>Covid-19</p>
                <span style="color: #999"> 2019新冠病毒</span>
                <div class="m1-2">
                  <el-radio v-model="form.covid19" label="1">No</el-radio>
                  <el-radio v-model="form.covid19" label="2">Yes</el-radio>
                </div>
              </div></el-col
            >
            <el-col :xs="24" :sm="8" :md="8" :lg="4" :xl="4"
              ><div class="grid-content m1-1">
                <p>Myocardial infarction(MI)</p>
                <span style="color: #999"> 心肌梗死</span>
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
                <p>Peripheral Vascular Disease(PVD)</p>
                <span style="color: #999"> 外周血管疾病</span>
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
                <p>
                  Percutaneous Transluminal Coronary Angloplasty(PTCA)or stents
                </p>
                <span style="color: #999"> 经皮腔内冠状动脉成形术或支架</span>
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
                <p>Cerebrovascular Accident()CVA</p>
                <span style="color: #999"> 脑血管意外</span>
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
                <p>Congestive Heart Failure(CHF)</p>
                <span style="color: #999"> 充血性心衰</span>
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
                <p>Coronary Artery Bypass Grafting(CABG)</p>
                <span style="color: #999"> 冠状动脉旁路移植术</span>
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

      <div class="m2">
        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"
            ><div class="grid-content m2-1">
              <el-form ref="form" :model="form" label-width="200px">
                <el-form-item label="List Current Medications">
                  <el-input
                    v-model="form.listCurrentMedication"
                    placeholder="列出目前的药物"
                  ></el-input>
                </el-form-item>
                <el-form-item label="Other Health Test Results">
                  <el-input
                    v-model="form.otherHealthTestResult"
                    placeholder="其他健康测试结果"
                  ></el-input>
                </el-form-item>
                <el-form-item label="Additional Comment">
                  <el-input
                    v-model="form.additionalComments"
                    placeholder="补充意见"
                  ></el-input>
                </el-form-item>
                <el-form-item label="Reasons For Clini">
                  <el-input
                    v-model="form.reasonClinicalVisit"
                    placeholder="就诊原因"
                  ></el-input>
                </el-form-item>
              </el-form></div
          ></el-col>
        </el-row>
      </div>
    </div>
    <button class="btn">添加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: 1,
      form: {
        familyName: "",
        firstName: "",
        middleName: "",
        gender: "",
        Race: "",
        Occupation: "",
        diabeteMellitus: "1",
        neuropathy: "1",
        hypertension: "1",
        implantedPacemaker: "1",
        liverDisease: "1",
        kidneyDisease: "1",
        nicotineUse: "1",
        dialisisTreatment: "1",
        covid19: "1",
        myocardialInfarction: "1",
        peripheralVascularDisease: "1",
        percutaneousTransluminal: "1",
        cerebrovascularAccident: "1",
        congestiveHeartFailure: "1",
        coronaryArteryBypass: "1",
        listCurrentMedication: "",
        otherHealthTestResult: "",
        additionalComments: "",
        reasonClinicalVisit: "",
        kg: "",
        meters: "",
        ft: "",
        lb: "",
        hospitalNumber:"",
        hospitalName:"",
        doctorNumber:"",
        doctorName:""
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        dataBirth: "",
      },
    };
  },

  mounted() {
    console.log(this.form);
  },
  methods: {
    one() {
      this.state = 2;
    //   console.log(222222222);
    },
    two() {
      this.state = 1;
    //   console.log(111111111);
    },
    onSubmit() {
      console.log("submit!");
    },
  },
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
.btn{
    width: 200px;
    height: 50px;
    margin:40px 0 20px 1950px;
    background-color: #409EFF;
    color: white;
    border: none;
    font-size: 16px;
    border-radius: 5px;
    /* float: right; */
    /* position: absolute; */
    
}
</style>