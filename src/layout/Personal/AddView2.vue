<template>
  <div class="qus">
    <h1>QuanCardio Pricing Model</h1>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <div class="grid-content bg-purple">
          <h2>PREMIUM GOLD</h2>
          <div>
            <h3 style="font-size:16px;">Number of Users (Size)</h3>
            <div>
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
            <div>
              <h3 style="font-size:16px;color:#999;">Power User = More than 50 patients/week</h3>
              <h2 style="text-align:left;line-height:35px;">$1800 one-time plus $2500per year</h2>
              <el-button
                :style="selfstyle"
                class="btndev"
                type="primary"
                plain
                style=" text-align: center;margin-left:15px;"
              >payment</el-button>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <div class="grid-content bg-purple">
          <h2>PRO Silver</h2>
          <div>
            <h3 style="font-size:16px;">Number of Users (Size)</h3>
            <div>
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
            <div>
              <h3 style="font-size:16px;color:#999;">Power User = More than 50 patients/week</h3>
              <h2 style="text-align:left;line-height:35px;">$1800 one-time plus $2500per year</h2>
              <el-button
                :style="selfstyle"
                class="btndev"
                type="primary"
                plain
                style=" text-align: center;margin-left:15px;"
              >payment</el-button>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <div class="grid-content bg-purple">
          <h2>STANDARD Bronze</h2>
          <div>
            <h3 style="font-size:16px;">Number of Users (Size)</h3>
            <div>
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
            <div>
              <h3 style="font-size:16px;color:#999;">Power User = More than 50 patients/week</h3>
              <h2 style="text-align:left;line-height:35px;">$1800 one-time plus $2500per year</h2>
              <el-button
                :style="selfstyle"
                class="btndev"
                type="primary"
                plain
                style=" text-align: center;margin-left:15px;"
              >payment</el-button>
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
      }
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style  scoped>
.qus {
  background-color: white;
  padding: 5px 5px;
}
h1 {
  color: rgb(235, 83, 80);
  /* float: left;
    display: inline-block; */
  /* width: 200px; */
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

/* .bg-purple-light {
    background-image: linear-gradient( 135deg, #FAD7A1 10%, #E96D71 100%);
  } */
  
.grid-content {
  border-radius: 4px;
  height: 500px;
}
.btndev:hover {
  color: white !important;
  /* border:none !important; */
  /* border:1px solid #999 !important; */
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
