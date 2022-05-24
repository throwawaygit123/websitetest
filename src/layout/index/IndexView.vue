<template>
  <div class="one">
    <div class="box" style="height:150px;">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="12" :md="4" :lg="6" :xl="6">
          <div
            class="one-1"
            style="background-color: #6c7ac6; border: 1px solid #505ea8"
          >
            <div class="one-2">
              <!-- <h2>$23569</h2> -->
              <h4>Welcome</h4>
            </div>
            <div class="one-3">
              <i class="el-icon-goods one3-1"></i>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
          <div
            class="one-1"
            style="background-color: #66bb6a; border: 1px solid #59a45d"
          >
            <div class="one-2">
              <!-- <h2>$23569</h2> -->
              <h4>Welcome</h4>
            </div>
            <div class="one-3">
              <i class="el-icon-s-data one3-1"></i>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
          <div
            class="one-1"
            style="background-color: #ffa726; border: 1px solid #df9221"
          >
            <div class="one-2">
              <!-- <h2>$23569</h2> -->
              <h4>Welcome</h4>
            </div>
            <div class="one-3">
              <i class="el-icon-s-grid one3-1"></i>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="4" :lg="6" :xl="6">
          <div
            class="one-1"
            style="background-color: #42a5f5; border: 1px solid #3a90d6"
          >
            <div class="one-2">
              <!-- <h2>$23569</h2> -->
              <h4>Welcome</h4>
            </div>
            <div class="one-3">
              <i class="el-icon-s-platform one3-1"></i>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="box1" style="height:320px;">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="8" :lg="10" :xl="10">
          <div class="box-1" id="main1" ></div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="16" :lg="14" :xl="14">
          <div class="box-2" id="main2"></div>
        </el-col>
      </el-row>
    </div>
    <div class="foot">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="10" :md="12" :lg="12" :xl="12">
          <div class="foot-1" id="main3"></div>
        </el-col>
        <el-col :xs="24" :sm="10" :md="6" :lg="6" :xl="6">
          <div class="foot-2" id="main4"></div>
        </el-col>

        <el-col :xs="24" :sm="10" :md="6" :lg="6" :xl="6">
          <div class="foot-2" id="main5"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// import * as echarts from 'echarts'
const echarts = require("echarts/lib/echarts");
require("echarts/lib/component/title");
require("echarts/lib/component/toolbox");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/grid");
require("echarts/lib/component/legend");
require("echarts/lib/chart/line");
require("echarts/lib/chart/bar");
require("echarts/lib/chart/gauge");
require('echarts/lib/chart/pie');
export default {
  methods: {
    fn() {
      var chartDom = document.getElementById("main1");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],

        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["Line 1", "Line 2", "Line 3", "Line 4", "Line 5"],
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "Line 1",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(128, 255, 165)",
                },
                {
                  offset: 1,
                  color: "rgb(1, 191, 236)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [140, 232, 101, 264, 90, 340, 250],
          },
          {
            name: "Line 2",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(0, 221, 255)",
                },
                {
                  offset: 1,
                  color: "rgb(77, 119, 255)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [120, 282, 111, 234, 220, 340, 310],
          },
          {
            name: "Line 3",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(55, 162, 255)",
                },
                {
                  offset: 1,
                  color: "rgb(116, 21, 219)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [320, 132, 201, 334, 190, 130, 220],
          },
          {
            name: "Line 4",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(255, 0, 135)",
                },
                {
                  offset: 1,
                  color: "rgb(135, 0, 157)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [220, 402, 231, 134, 190, 230, 120],
          },
          {
            name: "Line 5",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            label: {
              show: true,
              position: "top",
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(255, 191, 0)",
                },
                {
                  offset: 1,
                  color: "rgb(224, 62, 76)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [220, 302, 181, 234, 210, 290, 150],
          },
        ],
      };

      option && myChart.setOption(option);
    },
    fn1() {
      var chartDom = document.getElementById("main2");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "Email",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "Union Ads",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "Video Ads",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "Direct",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "Search Engine",
            type: "line",
            stack: "Total",
            label: {
              show: true,
              position: "top",
            },
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      };

      option && myChart.setOption(option);
    },
    fn2() {
      var chartDom = document.getElementById("main3");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },
    
    fn3() {
      var chartDom = document.getElementById("main4");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          // text: "Referer of a Website",
          // subtext: "Fake Data",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },
    fn4() {
      var chartDom = document.getElementById("main5");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%",
        },
        series: [
          {
            name: "Pressure",
            type: "gauge",
            detail: {
              formatter: "{value}",
            },
            data: [
              {
                value: 90,
                name: "SCORE",
              },
            ],
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
  mounted() {
    this.fn();
    this.fn1();
    this.fn2();
    this.fn3();
    this.fn4();
    window.onresize = () => {
      // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('newEcharts'));
        myChart.resize();
        };
  },
};
</script>

<style scoped>
.one-1 {
  height: 100px;
  margin-top: 5px;
}
h4{
  margin-left: 10px;
}
.one-2 {
  width: 50%;
  height: 100%;

  float: left;
}
.one-2 h2 {
  color: #fff;
  /* padding: 45px 45px 10px 45px; */
}
.one-2 h4 {
  color: #fff;
  /* padding-left: 45px; */
}
.one-3 {
  width: 50%;
  height: 100%;
  float: right;

}
.one3-1 {
  color: whitesmoke;
  font-size: 30px;
  margin-top: 33px;
  margin-left: 60px;
  opacity: 0.8;
}

.box-1 {
    width: 100%;
    /* background-color: pink; */
  height: 300px;
  border: 1px solid #999;
}
.box-2 {
  height: 300px;
  border: 1px solid #999;

}
.main1 {
  width: 100% !important;
  height: 100%;
}
.main2 {
  width: 100% !important;
  height: 100%;
}
/* .foot {
  margin-top: 50px;
} */
.foot-1 {
  height: 400px;
  border: 1px solid #999;
}
.foot-2 {
  height: 400px;
  border: 1px solid #999;
}
</style>
 