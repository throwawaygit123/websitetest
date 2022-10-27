<template>
<!-- 医院订阅 Hospital subscription-->
  <div class="qus">
    <h1>QuanCardio Pricing Model</h1>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <div class="grid-content bg-purple">
          <h2>PREMIUM GOLD</h2>
          <div>
            <div style="width:100%;height:50px;">
              <h3 style="font-size:16px;float:left">Number of Users (Size)</h3>
              <button
                style="float:right;margin-top:15px;margin-right:5px;"
                @click="fn1"
              >{{$t("m.Switchingnumber")}}</button>
            </div>

            <div v-show="state">
              <h3 style="font-size:16px;color:#999;">Average User = up to 50 patients/week</h3>
              <h2 style="text-align:left;line-height:35px;">
                $1800 one-time consts plus
                <br />$1200 per year
              </h2>
              <el-button
                :style="selfstyle"
                class="btndev"
                type="primary"
                plain
                style=" text-align: center;margin-left:15px;"
              >payment</el-button>
            
            </div>
            <div v-show="!state">
              <h3 style="font-size:16px;color:#999;">Power User = More than 50 patients/week</h3>
              <h2 style="text-align:left;line-height:35px;">
                $1800 one-time plus
                <br />$2500 per year
              </h2>
              <el-button
                :style="selfstyle"
                class="btndev"
                type="primary"
                plain
                style=" text-align: center;margin-left:15px;"
              >payment</el-button>
            </div>
            <div class="box1">
              <div style="height:50px;">
                <h3
                  style="font-size:13px;"
                  @mouseenter="fn4"
                  @mouseleave="fn5"
                >* 25+ cardiovascular parameters (A1C,lioids,stress,parameters)</h3>
                <p
                  v-show="state3"
                  style="margin-left:8px;font-size:12px;"
                >(HR,SP,DP,SPO2,PWV,PI,PPT,AIC,SI,MAP,HR,SP,DP,SPO2...)</p>
              </div>

              <h3 style="font-size:13px;height:50px">* Full analyssis and recommendations</h3>
              <h3 style="font-size:13px;height:50px">* Cardiologists,Clinics,VascularLabs</h3>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <div class="grid-content bg-purple">
          <h2>PRO Silver</h2>
          <div>
            <div style="width:100%;height:50px;">
              <h3 style="font-size:16px;float:left">Number of Users (Size)</h3>
              <button
                style="float:right;margin-top:15px;margin-right:5px;"
                @click="fn2"
              >{{$t("m.Switchingnumber")}}</button>
            </div>

            <div v-show="state1">
              <h3 style="font-size:16px;color:#999;">Average User = up to 50 patients/week</h3>
              <h2 style="text-align:left;line-height:35px;">
                $1500 one-time costs year plus
                <br />$1000 per year
              </h2>
              <el-button
                :style="selfstyle"
                class="btndev"
                type="primary"
                plain
                style=" text-align: center;margin-left:15px;"
              >payment</el-button>
              

            </div>
            <div v-show="!state1">
              <h3 style="font-size:16px;color:#999;">Power User = More than 50 patients/week</h3>
              <h2 style="text-align:left;line-height:35px;">
                $1500 one-time plus
                <br />$1700 per year
              </h2>

              <el-button
                :style="selfstyle"
                class="btndev"
                type="primary"
                plain
                style=" text-align: center;margin-left:15px;"
              >payment</el-button>
            </div>
            <div class="box1">
              <div style="height:50px;">
                <h3
                  style="font-size:13px;"
                  @mouseenter="fn6"
                  @mouseleave="fn7"
                >* 15+ cardiovascular parameters (A1C,lioids)</h3>
                <p
                  v-show="state4"
                  style="margin-left:8px;font-size:12px;"
                >(HR,SP,DP,SPO2,PWV,PI,PPT,AIC,SI,MAP,HR,SP,DP,SPO2...)</p>
              </div>

              <h3 style="font-size:13px;height:50px">* Basic analysis and recommendations</h3>
              <h3 style="font-size:13px;height:50px">* Smaller cardiology / endocrinologr offices</h3>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <div class="grid-content bg-purple">
          <h2>STANDARD Bronze</h2>
          <div>
            <div style="width:100%;height:50px;">
              <h3 style="font-size:16px;float:left">Number of Users (Size)</h3>
              <button
                style="float:right;margin-top:15px;margin-right:5px;"
                @click="fn3"
              >{{$t("m.Switchingnumber")}}</button>
            </div>

            <div v-show="state2">
              <h3 style="font-size:16px;color:#999;">Average User = up to 50 patients/week</h3>
              <h2 style="text-align:left;line-height:35px;">
                $1100 one-time consts plus
                <br />$850 per year
              </h2>
              <el-button
                :style="selfstyle"
                class="btndev"
                type="primary"
                plain
                style=" text-align: center;margin-left:15px;"
              >payment</el-button>
              
            </div>
            <div v-show="!state2">
              <h3 style="font-size:16px;color:#999;">Power User = More than 50 patients/week</h3>
              <h2 style="text-align:left;line-height:35px;">
                $1100 one-time plus
                <br />$850 per year
              </h2>
              <el-button
                :style="selfstyle"
                class="btndev"
                type="primary"
                plain
                style=" text-align: center;margin-left:15px;"
              >payment</el-button>
            </div>
            <div class="box1">
              <div style="height:50px;">
                <h3
                  style="font-size:13px;"
                  @mouseenter="fn8"
                  @mouseleave="fn9"
                >* 8 cardiovascular parameters </h3>
                <p
                  v-show="state5"
                  style="margin-left:8px;font-size:12px;"
                >(HR,SP,DP,SPO2,PWV,PI,PPT,AIC)</p>
              </div>

              <h3 style="font-size:13px;height:50px">* Simple analysis</h3>
              <h3 style="font-size:13px;height:50px">* Primary Care</h3>
            </div>
          </div>
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
        width: "120px",
        height: "40px",
        backgroundColor: "#eb5350",
        border: "none"
      },
      selfstyle1: {
        color: "black",
        width: "120px",
        height: "40px",
        backgroundColor: "#ccc",
        border: "none",
        borderRadius: "5px"
      },
      state: true,
      state1: true,
      state2: true,
      state3: false,
      state4: false,
      state5: false
    };
  },
  created() {},
  mounted() {},
  methods: {
    fn1() {
      this.state = !this.state;
      // console.log(this.state);
    },
    fn2() {
      this.state1 = !this.state1;
      // console.log(this.state);
    },
    fn3() {
      this.state2 = !this.state2;
      // console.log(this.state);
    },
    fn4() {
      this.state3 = true;
    },
    fn5() {
      this.state3 = false;
    },
    fn6() {
      this.state4 = true;
    },
    fn7() {
      this.state4 = false;
    },
    fn8() {
      this.state5 = true;
    },
    fn9() {
      this.state5 = false;
    }
  }
};
</script>

<style  scoped>
.qus {
  background-color: white;
  padding: 5px 5px;
}
h1 {
  color: rgb(235, 83, 80);
  line-height: normal;
  font-weight: 600;
  font-size: 20px;
}
h2 {
  color: rgb(235, 83, 80);
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  margin-top: 20px;
}

.el-col {
  border-radius: 5px;
}

.bg-purple {
  background-image: linear-gradient(135deg, #fff 25%, #ccc 100%);
  /* background: #d3dce6; */
  overflow: hidden;
}



.grid-content {
  border-radius: 4px;
  height: 500px;
}
.btndev:hover {
  color: white !important;
  border: 1px solid #f5a9a8 !important;
  background-color: #f5a9a8 !important;
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #eb5350 !important;
}
.el-pager li:hover {
  color: #f5a9a8 !important;
}
</style>
