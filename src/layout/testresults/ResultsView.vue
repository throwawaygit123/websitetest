<template>
  <div>
    <div>
      <el-input
        v-model="search"
        size="mini"
        style="width:20%;display:block;"
        :placeholder="$t('m.ekts')"
      />
    </div>

    <div class="box">
      <div class="foot">
        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" style="border:1px solid #999;" class="bib1">
            <div class="foot-1" id="main3"></div>
            <router-link to="resultw">
              <template >
                <el-button
                  type="primary"
                  size="small"
                  class="bt1"
                >
                {{$t("m.details")}}
                </el-button>
              </template>
            </router-link>
          </el-col>
          <el-col
            :xs="24"
            :sm="24"
            :md="8"
            :lg="8"
            :xl="8"
            style="border:1px solid #999;border-right:none;border-left:none"
            class="bib1"
          >
            <div class="foot-1" id="main4"></div>
           <router-link to="resultw1">
              <template style="width:50px;height:50px;background:pink;">
                <el-button
                  type="primary"
                  size="small"
                  class="bt1"
                >
                {{$t("m.details")}}
                </el-button>
              </template>
            </router-link>
          </el-col>

          <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" style="border:1px solid #999" class="bib1">
            <div class="foot-1" id="main5"></div>
           <router-link to="resultw2">
              <template style="width:50px;height:50px;background:pink;">
                <el-button
                  type="primary"
                  size="small"
                  class="bt1"
                >
                {{$t("m.details")}}
                </el-button>
              </template>
            </router-link>
          </el-col>
        </el-row>
      </div>

      <div class="foot">
        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" style="border:1px solid #999" class="bib1">
            <div class="foot-1" id="main6"></div>
            <router-link to="resultw3">
              <template style="width:50px;height:50px;background:pink;">
                <el-button
                  type="primary"
                  size="small"
                  class="bt1"
                >
                {{$t("m.details")}}
                </el-button>
              </template>
            </router-link>
          </el-col>
          <el-col
            :xs="24"
            :sm="24"
            :md="8"
            :lg="8"
            :xl="8"
            style="border:1px solid #999;border-right:none;border-left:none"
            class="bib1"
          >
            <div class="foot-1" id="main7"></div>
           <router-link to="resultw4">
              <template style="width:50px;height:50px;background:pink;">
                <el-button
                  type="primary"
                  size="small"
                  class="bt1"
                >
                {{$t("m.details")}}
                </el-button>
              </template>
            </router-link>
          </el-col>

          <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" style="border:1px solid #999" class="bib1">
            <div class="foot-1" id="main8"></div>
           <router-link to="resultw5">
              <template style="width:50px;height:50px;background:pink;">
                <el-button
                  type="primary"
                  size="small"
                  class="bt1"
                >
                {{$t("m.details")}}
                </el-button>
              </template>
            </router-link>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  methods: {
    one() {
      var chartDom = document.getElementById("main3");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "Cardio1",
          left: "center",
          top: "bottom"
        },
        tooltip: {
          trigger: "axis"
        },
        // legend: {},
        // toolbox: {
        //   show: true,
        //   feature: {
        //     dataZoom: {
        //       yAxisIndex: "none"
        //     },
        //     dataView: { readOnly: false },
        //     magicType: { type: ["line", "bar"] },
        //     restore: {},
        //     saveAsImage: {}
        //   }
        // },
        legend: {
          data: ["test result", "highest value", "minimum value"]
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["PWV", "PPI", "HR", "PTT", "SP", "DP"]
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} "
          }
        },
        series: [
          {
            name: "test result",
            type: "line",
            data: [8, 0.47, 80, 0.3, 110, 65]
          },
          {
            name: "highest value",

            type: "line",
            data: [10, 0.5038, 100, 0.4, 120, 70]
          },
          {
            name: "minimum value",

            type: "line",
            data: [5, 0.4, 60, 0.2, 100, 60],
            markPoint: {}
          }
        ]
      };

      option && myChart.setOption(option);
    },
    two() {
      var chartDom = document.getElementById("main4");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "Arterial Age",
          left: "center",
          top: "bottom"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["test result", "highest value", "minimum value"]
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["AGI", "SI", "RI", "BD", "CAC", "VI"]
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} "
          }
        },
        series: [
          {
            name: "test result",
            type: "line",
            data: [0.1, 6, 0.4, 0.3, 110, 0.8]
          },
          {
            name: "highest value",

            type: "line",
            data: [0.3, 6, 0.6, 0.5, 400, 1.848]
          },
          {
            name: "minimum value",

            type: "line",
            data: [-0.7, 4, 0.2, 0.1, -10, 0.4462],
            markPoint: {}
          }
        ]
      };

      option && myChart.setOption(option);
    },
    three() {
      var chartDom = document.getElementById("main5");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "Dlabetes",
          left: "center",
          top: "bottom"
        },
        tooltip: {
          trigger: "axis"
        },

        legend: {
          data: ["test result", "highest value", "minimum value"]
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["b/a Index", "HbA1C", "mPAD1", "mPad2"]
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} "
          }
        },
        series: [
          {
            name: "test result",
            type: "line",
            data: [-1.35, 4.8, 1.3, 0.8]
          },
          {
            name: "highest value",

            type: "line",
            data: [-1.35, 5.7, 1.4, 1.4]
          },
          {
            name: "minimum value",

            type: "line",
            data: [-2, 4.6, 1, 0.7],
            markPoint: {}
          }
        ]
      };

      option && myChart.setOption(option);
    },
    four() {
      var chartDom = document.getElementById("main6");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "Cardio2",
          left: "center",
          top: "bottom"
        },
        tooltip: {
          trigger: "axis"
        },
        // legend: {},
        // toolbox: {
        //   show: true,
        //   feature: {
        //     dataZoom: {
        //       yAxisIndex: "none"
        //     },
        //     dataView: { readOnly: false },
        //     magicType: { type: ["line", "bar"] },
        //     restore: {},
        //     saveAsImage: {}
        //   }
        // },
        legend: {
          data: ["test result", "highest value", "minimum value"]
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["SV", "CO", "PPGF", "CHD", "TPR", "A-CIMT"]
          // data: ["b/a Index", "HbA1C", "mPAD1", "mPad2",]
          // data: ["PWV", "PPI", "HR", "PTT", "SP", "DP"]
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} "
          }
        },
        series: [
          {
            name: "test result",
            type: "line",
            data: [0.67, 5, 0.45, 0.2, 15, 1]
          },
          {
            name: "highest value",

            type: "line",
            data: [0.12, 8, 0.53, 0.4, 17.5, 1.29]
          },
          {
            name: "minimum value",

            type: "line",
            data: [0.06, 4, 0.4, 0.1, 13.13, 0.47],
            markPoint: {}
          }
        ]
      };

      option && myChart.setOption(option);
    },
    five() {
      var chartDom = document.getElementById("main7");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "V.Circulation",
          left: "center",
          top: "bottom"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["test result", "highest value", "minimum value"]
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["MR", "IMR", "BVEI", "SAEI"]
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} "
          }
        },
        series: [
          {
            name: "test result",
            type: "line",
            data: [88, 20, 3, 3]
          },
          {
            name: "highest value",

            type: "line",
            data: [100, 24, 8, 10.7]
          },
          {
            name: "minimum value",

            type: "line",
            data: [79, 14, 0, 5.7],
            markPoint: {}
          }
        ]
      };

      option && myChart.setOption(option);
    },
    six() {
      var chartDom = document.getElementById("main8");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "Cardio3",
          left: "center",
          top: "bottom"
        },
        tooltip: {
          trigger: "axis"
        },

        legend: {
          data: ["test result", "highest value", "minimum value"]
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["STI", "IPA", "LVET", "TC", "HDL", "LDL"]
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} "
          }
        },
        series: [
          {
            name: "test result",
            type: "line",
            data: [100, 0.2, 0.43, 200, 50, 80]
          },
          {
            name: "highest value",

            type: "line",
            data: [150, 0.5, 0.43, 200, 60, 130]
          },
          {
            name: "minimum value",

            type: "line",
            data: [40, 0.1, 0.27, 150, 40, 70],
            markPoint: {}
          }
        ]
      };

      option && myChart.setOption(option);
    }
  },
  mounted() {
    this.one();
    this.two();
    this.three();
    this.four();
    this.five();
    this.six();
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 670px;
  /* background-color: pink; */
}
.foot {
  margin-bottom: 20px;
}

.foot-1 {
  height: 310px;
  
  /* background-color: pink; */
  /* border: 1px solid #999; */
}
.bib1{
  position: relative;
}
.bt1{
  /* width: 50px;
  height: 50px;
  background-color: pink; */
  position: absolute;
  bottom: 0;
  right: 20px;

}
</style>