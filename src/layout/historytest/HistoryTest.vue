<template>
  <div>
    <div class="box">
      <ul style="width:100%;padding-left:43%; height:30px;text-align:center;">
        <li>
          <div style="float:left ;margin-top:20px; width:30px;height:2px;background:#ce2127;"></div>
          <p style="float:right;line-height:normal;font-size:13px;margin-left:3px">Max</p>
        </li>
        <li>
          <div style="float:left ;margin-top:20px; width:30px;height:2px;background:#58595b;"></div>
          <p style="float:right;line-height:normal;font-size:13px;margin-left:3px">Min</p>
        </li>
      </ul>
      <div class="foot">
        <el-row :gutter="10">
          <el-col
            :xs="24"
            :sm="24"
            :md="12"
            :lg="12"
            :xl="12"
            style="border:1px solid #999;border-left:none;"
            class="bib1"
          >
            <div class="foot-1" id="main1"></div>
          </el-col>
          <el-col
            :xs="24"
            :sm="24"
            :md="12"
            :lg="12"
            :xl="12"
            style="border:1px solid #999;border-right:none;border-left:none"
            class="bib1"
          >
            <div class="foot-1" id="main2"></div>
          </el-col>
        </el-row>
      </div>

      <div class="foot">
        <el-row :gutter="10">
          <el-col
            :xs="24"
            :sm="24"
            :md="12"
            :lg="12"
            :xl="12"
            style="border:1px solid #999;border-left:none;"
            class="bib1"
          >
            <div class="foot-1" id="main3"></div>
          </el-col>
          <el-col
            :xs="24"
            :sm="24"
            :md="12"
            :lg="12"
            :xl="12"
            style="border:1px solid #999;border-right:none;border-left:none"
            class="bib1"
          >
            <div class="foot-1" id="main4"></div>
          </el-col>
        </el-row>
      </div>
      <div class="foot">
        <el-row :gutter="10">
          <el-col
            :xs="24"
            :sm="24"
            :md="12"
            :lg="12"
            :xl="12"
            style="border:1px solid #999;border-left:none;"
            class="bib1"
          >
            <div class="foot-1" id="main5"></div>
          </el-col>
          <el-col
            :xs="24"
            :sm="24"
            :md="12"
            :lg="12"
            :xl="12"
            style="border:1px solid #999;border-right:none;border-left:none"
            class="bib1"
          >
            <div class="foot-1" id="main6"></div>
          </el-col>
        </el-row>
      </div>
      <div class="foot">
        <el-row :gutter="10">
          <el-col
            :xs="24"
            :sm="24"
            :md="12"
            :lg="12"
            :xl="12"
            style="border:1px solid #999;border-left:none;"
            class="bib1"
          >
            <div class="foot-1" id="main7"></div>
          </el-col>
          <el-col
            :xs="24"
            :sm="24"
            :md="12"
            :lg="12"
            :xl="12"
            style="border:1px solid #999;border-right:none;border-left:none"
            class="bib1"
          >
            <div class="foot-1" id="main8"></div>
          </el-col>
        </el-row>
      </div>

      <div class="foot">
        <el-row :gutter="10">
          <el-col
            :xs="24"
            :sm="24"
            :md="12"
            :lg="12"
            :xl="12"
            style="border:1px solid #999;border-left:none;"
            class="bib1"
          >
            <div class="foot-1" id="main9"></div>
          </el-col>
          <el-col
            :xs="24"
            :sm="24"
            :md="12"
            :lg="12"
            :xl="12"
            style="border:1px solid #999;border-right:none;border-left:none"
            class="bib1"
          >
            <div class="foot-1" id="main10"></div>
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
      var chartDom = document.getElementById("main1");
      var myChart = echarts.init(chartDom);
      var option;

      let data = [65, 70, 68, 78, 70, 60, 80, 70, 70, 90];
      let yMax = 100;
      let dataShadow = [];
      for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
      }
      option = {
        title: {
          text: "HR"
          //   subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom"
        },
        legend: {
          data: ["good", "On the high side", "bad"],
          //   orient: "vertical",
          x: "right",
          y: "top"
        },

        tooltip: {
          // 鼠标悬浮提示框显示 X和Y 轴数据
          trigger: "axis",
          backgroundColor: "rgba(32, 33, 36,.7)",
          borderColor: "rgba(32, 33, 36,0.20)",
          borderWidth: 1,
          textStyle: {
            // 文字提示样式
            color: "#fff",
            fontSize: "12"
          },
          axisPointer: {
            // 坐标轴虚线
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },

        xAxis: [
          {
            type: "category",
            name: "days",
            axisLabel: { interval: 0, rotate: 30 },
            axisTick: { show: false },
            data: [
              "2021-10-5 11:00",
              "2021-10-6 11:00",
              "2021-10-7 11:00",
              "2021-10-8 11:00",
              "2021-10-9 11:00",
              "2021-10-10 11:00",
              "2021-10-11 11:00",
              "2021-10-12 11:00",
              "2021-10-13 11:00",
              "2021-10-14 11:00"
            ]
          }
        ],
        yAxis: {
          name: "value",

          axisLine: {
            show: true
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#999"
          }
        },
        dataZoom: [
          {
            type: "inside"
          }
        ],
        series: [
          {
            type: "bar",
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#83bff6" },
                { offset: 0.5, color: "#188df0" },
                { offset: 1, color: "#188df0" }
              ])
            },
            data: data,

            markLine: {
              symbol: "none",

              data: [
                {
                  name: "MIN",
                  value: "MIN",
                  xAxis: "4",
                  yAxis: "60",
                  lineStyle: {
                    type: "map",
                    // :"100",
                    // borderWidth:'100',
                    // fontSize:3,
                    width: 3,
                    color: "#58595b"
                  }
                },
                {
                  name: "MAX",
                  value: "60",
                  xAxis: "4",
                  yAxis: "100",
                  lineStyle: {
                    type: "solid",
                    width: 3,

                    color: "#ce2127"
                  }
                }
              ]
            }
          }
        ]
      };
      option && myChart.setOption(option);
    },
    two() {
      var chartDom = document.getElementById("main2");
      var myChart = echarts.init(chartDom);
      var option;

      let data = [100, 110, 108, 110, 115, 120, 123, 125, 135, 136];
      let yMax = 100;
      let dataShadow = [];
      for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
      }
      option = {
        title: {
          text: "SP"
          //   subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom"
        },
        legend: {
          data: ["good", "On the high side", "bad"],
          //   orient: "vertical",
          x: "right",
          y: "top"
        },

        tooltip: {
          // 鼠标悬浮提示框显示 X和Y 轴数据
          trigger: "axis",
          backgroundColor: "rgba(32, 33, 36,.7)",
          borderColor: "rgba(32, 33, 36,0.20)",
          borderWidth: 1,
          textStyle: {
            // 文字提示样式
            color: "#fff",
            fontSize: "12"
          },
          axisPointer: {
            // 坐标轴虚线
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },

        xAxis: [
          {
            type: "category",
            name: "days",
            axisLabel: { interval: 0, rotate: 30 },
            axisTick: { show: false },
            data: [
              "2021-10-5 11:00",
              "2021-10-6 11:00",
              "2021-10-7 11:00",
              "2021-10-8 11:00",
              "2021-10-9 11:00",
              "2021-10-10 11:00",
              "2021-10-11 11:00",
              "2021-10-12 11:00",
              "2021-10-13 11:00",
              "2021-10-14 11:00"
            ]
          }
        ],
        yAxis: {
          name: "value",

          axisLine: {
            show: true
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#999"
          }
        },
        dataZoom: [
          {
            type: "inside"
          }
        ],
        series: [
          {
            type: "bar",
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#83bff6" },
                { offset: 0.5, color: "#188df0" },
                { offset: 1, color: "#188df0" }
              ])
            },
            data: data,

            markLine: {
              symbol: "none",
              data: [
                {
                  name: "MIN",
                  value: "60",
                  xAxis: "4",
                  yAxis: "100",
                  lineStyle: {
                    type: " solid",
                    width: 3,

                    color: "#58595b"
                  }
                },
                {
                  name: "MAX",
                  value: "60",
                  xAxis: "4",
                  yAxis: "120",
                  lineStyle: {
                    type: "soloid",
                    width: 3,

                    color: "#ce2127"
                  }
                }
              ]
            }
          }
        ]
      };

      option && myChart.setOption(option);
    },
    three() {
      var chartDom = document.getElementById("main3");
      var myChart = echarts.init(chartDom);
      var option;

      let data = [45, 48, 50, 52, 55, 61, 62, 64, 66, 66];
      let yMax = 100;
      let dataShadow = [];
      for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
      }
      option = {
        title: {
          text: "DP"
          //   subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom"
        },
        legend: {
          data: ["good", "On the high side", "bad"],
          //   orient: "vertical",
          x: "right",
          y: "top"
        },

        tooltip: {
          // 鼠标悬浮提示框显示 X和Y 轴数据
          trigger: "axis",
          backgroundColor: "rgba(32, 33, 36,.7)",
          borderColor: "rgba(32, 33, 36,0.20)",
          borderWidth: 1,
          textStyle: {
            // 文字提示样式
            color: "#fff",
            fontSize: "12"
          },
          axisPointer: {
            // 坐标轴虚线
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },

        xAxis: [
          {
            type: "category",
            name: "days",
            axisLabel: { interval: 0, rotate: 30 },
            axisTick: { show: false },
            data: [
              "2021-10-5 11:00",
              "2021-10-6 11:00",
              "2021-10-7 11:00",
              "2021-10-8 11:00",
              "2021-10-9 11:00",
              "2021-10-10 11:00",
              "2021-10-11 11:00",
              "2021-10-12 11:00",
              "2021-10-13 11:00",
              "2021-10-14 11:00"
            ]
          }
        ],
        yAxis: {
          name: "value",

          axisLine: {
            show: true
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#999"
          }
        },
        dataZoom: [
          {
            type: "inside"
          }
        ],
        series: [
          {
            type: "bar",
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#83bff6" },
                { offset: 0.5, color: "#188df0" },
                { offset: 1, color: "#188df0" }
              ])
            },
            data: data,

            markLine: {
              symbol: "none",
              // lineStyle: {
              //   type: "dotted",
              //   color: "black"
              // },
              data: [
                {
                  name: "MIN",
                  value: "60",
                  xAxis: "4",
                  yAxis: "60",
                  lineStyle: {
                    type: "solid",
                    width: 3,

                    color: "#58595b"
                  }
                },
                {
                  name: "MAX",
                  value: "60",
                  xAxis: "4",
                  yAxis: "70",
                  lineStyle: {
                    type: "solid",
                    width: 3,

                    color: "#ce2127"
                  }
                }
              ]
            }
          }
        ]
      };

      option && myChart.setOption(option);
    },
    four() {
      // var chartDom = document.getElementById("main4");
      // var myChart = echarts.init(chartDom);
      // var option;

      // let data = [0.158,0.19,0.25,0.3,0.4,0.18,0.56,0.2,0.34,0.3

      // ];
      // let yMax = 100;
      // let dataShadow = [];
      // for (let i = 0; i < data.length; i++) {
      //   dataShadow.push(yMax);
      // }
      // option = {
      //   title: {
      //     text: "SPO2"
      //     //   subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom"
      //   },
      //   legend: {
      //     data: ["good", "On the high side", "bad"],
      //     //   orient: "vertical",
      //     x: "right",
      //     y: "top"
      //   },

      //   tooltip: {
      //     // 鼠标悬浮提示框显示 X和Y 轴数据
      //     trigger: "axis",
      //     backgroundColor: "rgba(32, 33, 36,.7)",
      //     borderColor: "rgba(32, 33, 36,0.20)",
      //     borderWidth: 1,
      //     textStyle: {
      //       // 文字提示样式
      //       color: "#fff",
      //       fontSize: "12"
      //     },
      //     axisPointer: {
      //       // 坐标轴虚线
      //       type: "cross",
      //       label: {
      //         backgroundColor: "#6a7985"
      //       }
      //     }
      //   },

      //   xAxis: [
      //     {
      //       type: "category",
      //       axisTick: { show: false },
      //       data: [
      //         "one day",
      //         "two day",
      //         "three day",
      //         "four day",
      //         "five day",
      //         "six day",
      //         "seven day",
      //         "eight day",
      //         "nine day",
      //         "ten day"
      //       ]
      //     }
      //   ],
      //   yAxis: {
      //     axisLine: {
      //       show: true
      //     },
      //     axisTick: {
      //       show: false
      //     },
      //     axisLabel: {
      //       color: "#999"
      //     }
      //   },
      //   dataZoom: [
      //     {
      //       type: "inside"
      //     }
      //   ],
      //   series: [
      //     {
      //       type: "bar",
      //       showBackground: true,
      //       itemStyle: {
      //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      //           { offset: 0, color: "#83bff6" },
      //           { offset: 0.5, color: "#188df0" },
      //           { offset: 1, color: "#188df0" }
      //         ])
      //       },
      //       data: data,
      //       markLine: {
      //         symbol: "none",
      //         data: [
      //           {
      //             name: "MIN",
      //             value: "60",
      //             xAxis: "4",
      //             yAxis: "0.2",
      //             lineStyle: {
      //               type: "solid",
      //               width: 3,

      //               color: "#58595b"
      //             }
      //           },
      //           {
      //             name: "MAX",
      //             value: "60",
      //             xAxis: "4",
      //             yAxis: "0.4",
      //             lineStyle: {
      //               type: "solid",
      //               width: 3,

      //               color: "#ce2127"
      //             }
      //           }
      //         ]
      //       }
      //     }
      //   ]
      // };

      // option && myChart.setOption(option);

      var chartDom = document.getElementById("main10");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "SPO2",
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
          name: "days",
          axisLabel: { interval: 0, rotate: 30 },
          axisTick: { show: false },
          data: [
            "2021-10-5 11:00",
            "2021-10-6 11:00",
            "2021-10-7 11:00",
            "2021-10-8 11:00",
            "2021-10-9 11:00",
            "2021-10-10 11:00",
            "2021-10-11 11:00",
            "2021-10-12 11:00",
            "2021-10-13 11:00",
            "2021-10-14 11:00"
          ]
        },
        yAxis: {
          name: "value",

          type: "value",
          axisLabel: {
            formatter: "{value} "
          }
        },
        series: [
          {
            name: "test result",
            type: "line",

            data: [0.15, 0.47, 0.35, 0.34, 0.31, 0.29, 0.3, 0.23, 0.24, 0.35]
          },
          {
            name: "highest value",

            type: "line",
            color: "#ce2157",
            data: [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4]
          },
          {
            name: "minimum value",
            color: "#58595b",
            type: "line",
            data: [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
            markPoint: {}
          }
        ]
      };

      option && myChart.setOption(option);
    },
    five() {
      var chartDom = document.getElementById("main5");
      var myChart = echarts.init(chartDom);
      var option;

      let data = [7.5, 5, 6.8, 4.8, 8.4, 3, 6, 12, 10, 8];
      let yMax = 100;
      let dataShadow = [];
      for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
      }
      option = {
        title: {
          text: "PWV"
          //   subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom"
        },
        legend: {
          data: ["good", "On the high side", "bad"],
          //   orient: "vertical",
          x: "right",
          y: "top"
        },

        tooltip: {
          // 鼠标悬浮提示框显示 X和Y 轴数据
          trigger: "axis",
          backgroundColor: "rgba(32, 33, 36,.7)",
          borderColor: "rgba(32, 33, 36,0.20)",
          borderWidth: 1,
          textStyle: {
            // 文字提示样式
            color: "#fff",
            fontSize: "12"
          },
          axisPointer: {
            // 坐标轴虚线
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },

        xAxis: [
          {
            type: "category",
            name: "days",
            axisLabel: { interval: 0, rotate: 30 },
            axisTick: { show: false },
            data: [
              "2021-10-5 11:00",
              "2021-10-6 11:00",
              "2021-10-7 11:00",
              "2021-10-8 11:00",
              "2021-10-9 11:00",
              "2021-10-10 11:00",
              "2021-10-11 11:00",
              "2021-10-12 11:00",
              "2021-10-13 11:00",
              "2021-10-14 11:00"
            ]
          }
        ],
        yAxis: {
          name: "value",

          axisLine: {
            show: true
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#999"
          }
        },
        dataZoom: [
          {
            type: "inside"
          }
        ],
        series: [
          {
            type: "bar",
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#83bff6" },
                { offset: 0.5, color: "#188df0" },
                { offset: 1, color: "#188df0" }
              ])
            },
            data: data,

            markLine: {
              symbol: "none",

              data: [
                {
                  name: "MIN",
                  value: "60",
                  xAxis: "4",
                  yAxis: "5",
                  lineStyle: {
                    type: "solid",
                    width: 3,

                    color: "#58595b"
                  }
                },
                {
                  name: "MAX",
                  value: "60",
                  xAxis: "4",
                  yAxis: "10",
                  lineStyle: {
                    type: "solid",
                    width: 3,

                    color: "#ce2127"
                  }
                }
              ]
            }
          }
        ]
      };

      option && myChart.setOption(option);
    },
    six() {
      var chartDom = document.getElementById("main6");
      var myChart = echarts.init(chartDom);
      var option;

      let data = [7.5, 5, 6.8, 4.8, 8.4, 3, 6, 12, 10, 8];
      let yMax = 100;
      let dataShadow = [];
      for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
      }
      option = {
        title: {
          text: "PI"
          //   subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom"
        },
        legend: {
          data: ["good", "On the high side", "bad"],
          //   orient: "vertical",
          x: "right",
          y: "top"
        },

        tooltip: {
          // 鼠标悬浮提示框显示 X和Y 轴数据
          trigger: "axis",
          backgroundColor: "rgba(32, 33, 36,.7)",
          borderColor: "rgba(32, 33, 36,0.20)",
          borderWidth: 1,
          textStyle: {
            // 文字提示样式
            color: "#fff",
            fontSize: "12"
          },
          axisPointer: {
            // 坐标轴虚线
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },

        xAxis: [
          {
            type: "category",
            name: "days",
            axisLabel: { interval: 0, rotate: 30 },
            axisTick: { show: false },
            data: [
              "2021-10-5 11:00",
              "2021-10-6 11:00",
              "2021-10-7 11:00",
              "2021-10-8 11:00",
              "2021-10-9 11:00",
              "2021-10-10 11:00",
              "2021-10-11 11:00",
              "2021-10-12 11:00",
              "2021-10-13 11:00",
              "2021-10-14 11:00"
            ]
          }
        ],
        yAxis: {
          name: "value",

          axisLine: {
            show: true
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#999"
          }
        },
        dataZoom: [
          {
            type: "inside"
          }
        ],
        series: [
          {
            type: "bar",
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#83bff6" },
                { offset: 0.5, color: "#188df0" },
                { offset: 1, color: "#188df0" }
              ])
            },
            data: data,

            markLine: {
              symbol: "none",

              data: [
                {
                  name: "MIN",
                  value: "60",
                  xAxis: "4",
                  yAxis: "5",
                  lineStyle: {
                    type: "solid",
                    width: 3,

                    color: "#58595b"
                  }
                },
                {
                  name: "MAX",
                  value: "60",
                  xAxis: "4",
                  yAxis: "10",
                  lineStyle: {
                    type: "solid",
                    width: 3,

                    color: "#ce2127"
                  }
                }
              ]
            }
          }
        ]
      };

      option && myChart.setOption(option);
    },
    seven() {
      var chartDom = document.getElementById("main7");
      var myChart = echarts.init(chartDom);
      var option;

      let data = [0.45, 0.5038, 0.68, 0.48, 0.844, 0.3, 0.6, 0.2, 0.4, 0.5038];
      let yMax = 100;
      let dataShadow = [];
      for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
      }
      option = {
        title: {
          text: "PPI"
          //   subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom"
        },
        legend: {
          data: ["good", "On the high side", "bad"],
          //   orient: "vertical",
          x: "right",
          y: "top"
        },

        tooltip: {
          // 鼠标悬浮提示框显示 X和Y 轴数据
          trigger: "axis",
          backgroundColor: "rgba(32, 33, 36,.7)",
          borderColor: "rgba(32, 33, 36,0.20)",
          borderWidth: 1,
          textStyle: {
            // 文字提示样式
            color: "#fff",
            fontSize: "12"
          },
          axisPointer: {
            // 坐标轴虚线
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },

        xAxis: [
          {
            type: "category",
            name: "days",
            axisLabel: { interval: 0, rotate: 30 },
            axisTick: { show: false },
            data: [
              "2021-10-5 11:00",
              "2021-10-6 11:00",
              "2021-10-7 11:00",
              "2021-10-8 11:00",
              "2021-10-9 11:00",
              "2021-10-10 11:00",
              "2021-10-11 11:00",
              "2021-10-12 11:00",
              "2021-10-13 11:00",
              "2021-10-14 11:00"
            ]
          }
        ],
        yAxis: {
          name: "value",

          axisLine: {
            show: true
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#999"
          }
        },
        dataZoom: [
          {
            type: "inside"
          }
        ],
        series: [
          {
            type: "bar",
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#83bff6" },
                { offset: 0.5, color: "#188df0" },
                { offset: 1, color: "#188df0" }
              ])
            },
            data: data,

            markLine: {
              symbol: "none",

              data: [
                {
                  name: "MIN",
                  value: "60",
                  xAxis: "4",
                  yAxis: "0.4",
                  lineStyle: {
                    type: "solid",
                    width: 3,

                    color: "#6d6e71"
                  }
                },
                {
                  name: "MAX",
                  value: "60",
                  xAxis: "4",
                  yAxis: "0.5038",
                  lineStyle: {
                    type: "solid",
                    width: 3,

                    color: "#ce2127"
                  }
                }
              ]
            }
          }
        ]
      };

      option && myChart.setOption(option);
    },
    eight() {
      var chartDom = document.getElementById("main4");
      var myChart = echarts.init(chartDom);
      var option;

      let data = [0.158, 0.19, 0.25, 0.3, 0.4, 0.18, 0.56, 0.2, 0.34, 0.3];
      let yMax = 100;
      let dataShadow = [];
      for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
      }
      option = {
        title: {
          text: "SPO2"
          //   subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom"
        },
        legend: {
          data: ["good", "On the high side", "bad"],
          //   orient: "vertical",
          x: "right",
          y: "top"
        },

        tooltip: {
          // 鼠标悬浮提示框显示 X和Y 轴数据
          trigger: "axis",
          backgroundColor: "rgba(32, 33, 36,.7)",
          borderColor: "rgba(32, 33, 36,0.20)",
          borderWidth: 1,
          textStyle: {
            // 文字提示样式
            color: "#fff",
            fontSize: "12"
          },
          axisPointer: {
            // 坐标轴虚线
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },

        xAxis: [
          {
            type: "category",
            name: "days",
            axisLabel: { interval: 0, rotate: 30 },
            axisTick: { show: false },
            data: [
              "2021-10-5 11:00",
              "2021-10-6 11:00",
              "2021-10-7 11:00",
              "2021-10-8 11:00",
              "2021-10-9 11:00",
              "2021-10-10 11:00",
              "2021-10-11 11:00",
              "2021-10-12 11:00",
              "2021-10-13 11:00",
              "2021-10-14 11:00"
            ]
          }
        ],
        yAxis: {
          name: "value",

          axisLine: {
            show: true
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#999"
          }
        },
        dataZoom: [
          {
            type: "inside"
          }
        ],
        series: [
          {
            type: "bar",
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#83bff6" },
                { offset: 0.5, color: "#188df0" },
                { offset: 1, color: "#188df0" }
              ])
            },
            data: data,
            markLine: {
              symbol: "none",
              data: [
                {
                  name: "MIN",
                  value: "60",
                  xAxis: "4",
                  yAxis: "0.2",
                  lineStyle: {
                    type: "solid",
                    width: 3,

                    color: "#58595b"
                  }
                },
                {
                  name: "MAX",
                  value: "60",
                  xAxis: "4",
                  yAxis: "0.4",
                  lineStyle: {
                    type: "solid",
                    width: 3,

                    color: "#ce2127"
                  }
                }
              ]
            }
          }
        ]
      };

      option && myChart.setOption(option);
    },
    nine() {
      var chartDom = document.getElementById("main8");
      var myChart = echarts.init(chartDom);
      var option;

      let data = [4.6, 7.8, 5.9, 4.5, 7.4, 8, 5.6, 2.9, 3.8, 5.7];
      let yMax = 100;
      let dataShadow = [];
      for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
      }
      option = {
        title: {
          text: "SI"
          //   subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom"
        },
        legend: {
          data: ["good", "On the high side", "bad"],
          //   orient: "vertical",
          x: "right",
          y: "top"
        },

        tooltip: {
          // 鼠标悬浮提示框显示 X和Y 轴数据
          trigger: "axis",
          backgroundColor: "rgba(32, 33, 36,.7)",
          borderColor: "rgba(32, 33, 36,0.20)",
          borderWidth: 1,
          textStyle: {
            // 文字提示样式
            color: "#fff",
            fontSize: "12"
          },
          axisPointer: {
            // 坐标轴虚线
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },

        xAxis: [
          {
            type: "category",
            name: "days",
            axisLabel: { interval: 0, rotate: 30 },
            axisTick: { show: false },
            data: [
              "2021-10-5 11:00",
              "2021-10-6 11:00",
              "2021-10-7 11:00",
              "2021-10-8 11:00",
              "2021-10-9 11:00",
              "2021-10-10 11:00",
              "2021-10-11 11:00",
              "2021-10-12 11:00",
              "2021-10-13 11:00",
              "2021-10-14 11:00"
            ]
          }
        ],
        yAxis: {
          name: "value",

          axisLine: {
            show: true
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#999"
          }
        },
        dataZoom: [
          {
            type: "inside"
          }
        ],
        series: [
          {
            type: "bar",
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#83bff6" },
                { offset: 0.5, color: "#188df0" },
                { offset: 1, color: "#188df0" }
              ])
            },
            data: data,

            markLine: {
              symbol: "none",

              data: [
                {
                  name: "MIN",
                  value: "60",
                  xAxis: "4",
                  yAxis: "4",
                  lineStyle: {
                    type: "solid",
                    width: 3,

                    color: "#58595b"
                  }
                },
                {
                  name: "MAX",
                  value: "60",
                  xAxis: "4",
                  yAxis: "6",
                  lineStyle: {
                    type: "solid",
                    width: 3,

                    color: "#ce2127"
                  }
                }
              ]
            }
          }
        ]
      };

      option && myChart.setOption(option);
    },
    ten() {
      var chartDom = document.getElementById("main9");
      var myChart = echarts.init(chartDom);
      var option;

      let data = [70, 75, 68, 80, 105, 120, 110, 70, 80, 60];
      let yMax = 100;
      let dataShadow = [];
      for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
      }
      option = {
        title: {
          text: "MAP"
          //   subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom"
        },
        legend: {
          data: ["good", "On the high side", "bad"],
          //   orient: "vertical",
          x: "right",
          y: "top"
        },

        tooltip: {
          // 鼠标悬浮提示框显示 X和Y 轴数据
          trigger: "axis",
          backgroundColor: "rgba(32, 33, 36,.7)",
          borderColor: "rgba(32, 33, 36,0.20)",
          borderWidth: 1,
          textStyle: {
            // 文字提示样式
            color: "#fff",
            fontSize: "12"
          },
          axisPointer: {
            // 坐标轴虚线
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },

        xAxis: [
          {
            type: "category",
            name: "days",
            axisLabel: { interval: 0, rotate: 30 },
            axisTick: { show: false },
            data: [
              "2021-10-5 11:00",
              "2021-10-6 11:00",
              "2021-10-7 11:00",
              "2021-10-8 11:00",
              "2021-10-9 11:00",
              "2021-10-10 11:00",
              "2021-10-11 11:00",
              "2021-10-12 11:00",
              "2021-10-13 11:00",
              "2021-10-14 11:00"
            ]
          }
        ],
        yAxis: {
          name: "value",

          axisLine: {
            show: true
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#999"
          }
        },
        dataZoom: [
          {
            type: "inside"
          }
        ],
        series: [
          {
            type: "bar",
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#83bff6" },
                { offset: 0.5, color: "#188df0" },
                { offset: 1, color: "#188df0" }
              ])
            },

            data: data,

            markLine: {
              symbol: "none",
              data: [
                {
                  name: "MIN",
                  value: "60",
                  yAxis: 70,
                  lineStyle: {
                    type: "solid",
                    width: 3,
                    color: "#58595b"
                  }
                },
                {
                  name: "MAX",
                  value: "60",
                  xAxis: "4",
                  yAxis: "105",
                  lineStyle: {
                    type: "solid",
                    width: 3,

                    color: "#ce2127"
                  }
                }
              ]
            }
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
    this.seven();
    this.eight();
    this.nine();
    this.ten();
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  /* height: 670px; */
  background-color: white;
  padding: 5px 5px;
}
.foot {
  margin-bottom: 20px;
}
ul li {
  list-style: none;
  float: left;
  /* width: 70px; */
  height: 30px;
  /* background: violet; */
  margin-left: 15px;
}
.foot-1 {
  height: 310px;
}
.bib1 {
  position: relative;
}
.bt1 {
  position: absolute;
  bottom: 0;
  right: 20px;
}
</style>