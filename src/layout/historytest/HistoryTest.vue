<template>
  <div>
    <!-- <div style="height:50px">
      <el-input
      v-model="search"
      size="mini"
      style="width:20%;float:right"
      :placeholder="$t('m.ekts')"
    />
    </div>-->

    <div class="box">
      <div class="foot">
        <el-row :gutter="10">
          <el-col
            :xs="24"
            :sm="24"
            :md="12"
            :lg="12"
            :xl="12"
            style="border:1px solid #999;"
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
            style="border:1px solid #999;"
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
            style="border:1px solid #999;"
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
            style="border:1px solid #999;"
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
            style="border:1px solid #999;"
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

  
      let data = [{
                name:'bad',
                value: 58,
                itemStyle: {
                color: "#a90000"
                }
              },{name:'good',
                value: 70,},68,
              {
                  name:'On the high side',
                  value: 90,
                  itemStyle: {
                  color: "orange"
                }
              },65,75,61,83,79,{
                name:'bad',
                value: 58,
                itemStyle: {
                color: "#a90000"
                }
              }];
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
            axisTick: { show: false },
            data: [
              "one day",
              "two day",
              "three day",
              "four day",
              "five day",
              "six day",
              "seven day",
              "eight day",
              "nine day",
              "ten day"
            ]
          }
        ],
        yAxis: {
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
            // emphasis: {
            //   itemStyle: {
            //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //       { offset: 0, color: "#2378f7" },
            //       { offset: 0.7, color: "#2378f7" },
            //       { offset: 1, color: "#83bff6" }
            //     ])
            //   }
            // },
            data: data,
            // [
            //   120,
            //   {
            //     value: 200,
            //     itemStyle: {
            //       color: "#a90000"
            //     }
            //   },
            //   150,
            //   80,
            //   70,
            //   110,
            //   130
            // ],
            markLine: {
              symbol: "none",
              lineStyle: {
                type: "dotted",
                color: "black"
              },
              data: [
                { name: "MIN", value: "60", xAxis: "4", yAxis: "60" },
                { name: "MAX", value: "60", xAxis: "4", yAxis: "100" }
              ]
            }
          }
        ]
        // markLine: {
        //   symbol: "none",
        //   lineStyle: {
        //     type: "solid",
        //     color: "black"
        //   },
        //   data: [{ name: "MIN", value: "60", xAxis: "4", yAxis: "60" }]
        // }
      };
      // Enable data zoom when user click bar.
      //   const zoomSize = 6;
      //   myChart.on("click", function(params) {
      //     console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
      //     myChart.dispatchAction({
      //       type: "dataZoom",
      //       startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
      //       endValue:
      //         dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
      //     });
      //   });

      option && myChart.setOption(option);
      //   var chartDom = document.getElementById("main1");
      //   var myChart = echarts.init(chartDom);
      //   var option;

      //   option = {
      //     title: {
      //       text: "HR",

      //     },
      //     tooltip: {
      //       trigger: "axis"
      //     },
      //     legend: {
      //         orient:'vertical',
      //         x:'right',
      //         y:'top',

      //     },

      //     calculable: true,
      //     xAxis: [
      //       {
      //         type: "category",

      //         data: ['one day', 'two day','three day','four day','five day' ]
      //       }
      //     ],
      //     yAxis: [
      //       {
      //         type: "value"
      //       }
      //     ],
      //     series: [
      //       {
      //         name: "good",
      //         type: "bar",
      //         data: [
      //           70,
      //           69,
      //           70,
      //           69,
      //           100,
      //           100,

      //         ],

      //         markLine: {
      //             symbol:'none',
      //             lineStyle:{
      //                 type:'solid',
      //                 color:'black'
      //             },
      //           data: [{ name: "MIN",value:'60',xAxis:'4',yAxis:'60' }],
      //         },

      //       },
      //       {
      //         name: "bad",
      //         type: "bar",
      //         data: [
      //          60,80,90,70,60,
      //         ],

      //         markLine: {
      //             symbol:'none',
      //             lineStyle:{
      //                 type:'solid',
      //                 color:'pink'
      //             },
      //           data: [{ name: "MAX",value:'60',xAxis:'4',yAxis:'100' }],
      //         }
      //       }
      //     ]
      //   };

      //   option && myChart.setOption(option);
    },
    two() {
      var chartDom = document.getElementById("main2");
      var myChart = echarts.init(chartDom);
      var option;

  
      let data = [{
                name:'bad',
                value: 95,
                itemStyle: {
                color: "#a90000"
                }
              },{name:'good',
                value: 110,},116,
              {
                  name:'On the high side',
                  value: 125,
                  itemStyle: {
                  color: "orange"
                }
              },116,{
                name:'bad',
                value: 95,
                itemStyle: {
                color: "#a90000"
                }
              },105,{
                name:'bad',
                value: 78,
                itemStyle: {
                color: "#a90000"
                }
              },105,117];
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
            axisTick: { show: false },
            data: [
              "one day",
              "two day",
              "three day",
              "four day",
              "five day",
              "six day",
              "seven day",
              "eight day",
              "nine day",
              "ten day"
            ]
          }
        ],
        yAxis: {
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
            // emphasis: {
            //   itemStyle: {
            //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //       { offset: 0, color: "#2378f7" },
            //       { offset: 0.7, color: "#2378f7" },
            //       { offset: 1, color: "#83bff6" }
            //     ])
            //   }
            // },
            data: data,
            // [
            //   120,
            //   {
            //     value: 200,
            //     itemStyle: {
            //       color: "#a90000"
            //     }
            //   },
            //   150,
            //   80,
            //   70,
            //   110,
            //   130
            // ],
            markLine: {
              symbol: "none",
              lineStyle: {
                type: "dotted",
                color: "black"
              },
              data: [
                { name: "MIN", value: "60", xAxis: "4", yAxis: "100" },
                { name: "MAX", value: "60", xAxis: "4", yAxis: "120" }
              ]
            }
          }
        ]
        // markLine: {
        //   symbol: "none",
        //   lineStyle: {
        //     type: "solid",
        //     color: "black"
        //   },
        //   data: [{ name: "MIN", value: "60", xAxis: "4", yAxis: "60" }]
        // }
      };
      // Enable data zoom when user click bar.
      //   const zoomSize = 6;
      //   myChart.on("click", function(params) {
      //     console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
      //     myChart.dispatchAction({
      //       type: "dataZoom",
      //       startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
      //       endValue:
      //         dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
      //     });
      //   });

      option && myChart.setOption(option);
    },
    three() {
      var chartDom = document.getElementById("main3");
      var myChart = echarts.init(chartDom);
      var option;

  
      let data = [{
                name:'bad',
                value: 58,
                itemStyle: {
                color: "#a90000"
                }
              },{name:'good',
                value: 70,},68,
              {
                  name:'On the high side',
                  value: 90,
                  itemStyle: {
                  color: "orange"
                }
              },65,75,61,83,79,{
                name:'bad',
                value: 58,
                itemStyle: {
                color: "#a90000"
                }
              }];
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
            axisTick: { show: false },
            data: [
              "one day",
              "two day",
              "three day",
              "four day",
              "five day",
              "six day",
              "seven day",
              "eight day",
              "nine day",
              "ten day"
            ]
          }
        ],
        yAxis: {
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
            // emphasis: {
            //   itemStyle: {
            //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //       { offset: 0, color: "#2378f7" },
            //       { offset: 0.7, color: "#2378f7" },
            //       { offset: 1, color: "#83bff6" }
            //     ])
            //   }
            // },
            data: data,
            // [
            //   120,
            //   {
            //     value: 200,
            //     itemStyle: {
            //       color: "#a90000"
            //     }
            //   },
            //   150,
            //   80,
            //   70,
            //   110,
            //   130
            // ],
            markLine: {
              symbol: "none",
              lineStyle: {
                type: "dotted",
                color: "black"
              },
              data: [
                { name: "MIN", value: "60", xAxis: "4", yAxis: "60" },
                { name: "MAX", value: "60", xAxis: "4", yAxis: "100" }
              ]
            }
          }
        ]
        // markLine: {
        //   symbol: "none",
        //   lineStyle: {
        //     type: "solid",
        //     color: "black"
        //   },
        //   data: [{ name: "MIN", value: "60", xAxis: "4", yAxis: "60" }]
        // }
      };
      // Enable data zoom when user click bar.
      //   const zoomSize = 6;
      //   myChart.on("click", function(params) {
      //     console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
      //     myChart.dispatchAction({
      //       type: "dataZoom",
      //       startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
      //       endValue:
      //         dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
      //     });
      //   });

      option && myChart.setOption(option);
      //   var chartDom = document.getElementById("main1");
      //   var myChart = echarts.init(chartDom);
      //   var option;

      //   option = {
      //     title: {
      //       text: "HR",

      //     },
      //     tooltip: {
      //       trigger: "axis"
      //     },
      //     legend: {
      //         orient:'vertical',
      //         x:'right',
      //         y:'top',

      //     },

      //     calculable: true,
      //     xAxis: [
      //       {
      //         type: "category",

      //         data: ['one day', 'two day','three day','four day','five day' ]
      //       }
      //     ],
      //     yAxis: [
      //       {
      //         type: "value"
      //       }
      //     ],
      //     series: [
      //       {
      //         name: "good",
      //         type: "bar",
      //         data: [
      //           70,
      //           69,
      //           70,
      //           69,
      //           100,
      //           100,

      //         ],

      //         markLine: {
      //             symbol:'none',
      //             lineStyle:{
      //                 type:'solid',
      //                 color:'black'
      //             },
      //           data: [{ name: "MIN",value:'60',xAxis:'4',yAxis:'60' }],
      //         },

      //       },
      //       {
      //         name: "bad",
      //         type: "bar",
      //         data: [
      //          60,80,90,70,60,
      //         ],

      //         markLine: {
      //             symbol:'none',
      //             lineStyle:{
      //                 type:'solid',
      //                 color:'pink'
      //             },
      //           data: [{ name: "MAX",value:'60',xAxis:'4',yAxis:'100' }],
      //         }
      //       }
      //     ]
      //   };

      //   option && myChart.setOption(option);
    },
    four() {
      var chartDom = document.getElementById("main4");
      var myChart = echarts.init(chartDom);
      var option;

  
      let data = [{
                name:'bad',
                value: 95,
                itemStyle: {
                color: "#a90000"
                }
              },{name:'good',
                value: 110,},116,
              {
                  name:'On the high side',
                  value: 125,
                  itemStyle: {
                  color: "orange"
                }
              },116,{
                name:'bad',
                value: 95,
                itemStyle: {
                color: "#a90000"
                }
              },105,{
                name:'bad',
                value: 78,
                itemStyle: {
                color: "#a90000"
                }
              },105,117];
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
            axisTick: { show: false },
            data: [
              "one day",
              "two day",
              "three day",
              "four day",
              "five day",
              "six day",
              "seven day",
              "eight day",
              "nine day",
              "ten day"
            ]
          }
        ],
        yAxis: {
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
            // emphasis: {
            //   itemStyle: {
            //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //       { offset: 0, color: "#2378f7" },
            //       { offset: 0.7, color: "#2378f7" },
            //       { offset: 1, color: "#83bff6" }
            //     ])
            //   }
            // },
            data: data,
            // [
            //   120,
            //   {
            //     value: 200,
            //     itemStyle: {
            //       color: "#a90000"
            //     }
            //   },
            //   150,
            //   80,
            //   70,
            //   110,
            //   130
            // ],
            markLine: {
              symbol: "none",
              lineStyle: {
                type: "dotted",
                color: "black"
              },
              data: [
                { name: "MIN", value: "60", xAxis: "4", yAxis: "100" },
                { name: "MAX", value: "60", xAxis: "4", yAxis: "120" }
              ]
            }
          }
        ]
        // markLine: {
        //   symbol: "none",
        //   lineStyle: {
        //     type: "solid",
        //     color: "black"
        //   },
        //   data: [{ name: "MIN", value: "60", xAxis: "4", yAxis: "60" }]
        // }
      };
      // Enable data zoom when user click bar.
      //   const zoomSize = 6;
      //   myChart.on("click", function(params) {
      //     console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
      //     myChart.dispatchAction({
      //       type: "dataZoom",
      //       startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
      //       endValue:
      //         dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
      //     });
      //   });

      option && myChart.setOption(option);
    },
    five() {
      var chartDom = document.getElementById("main5");
      var myChart = echarts.init(chartDom);
      var option;

  
      let data = [{
                name:'bad',
                value: 58,
                itemStyle: {
                color: "#a90000"
                }
              },{name:'good',
                value: 70,},68,
              {
                  name:'On the high side',
                  value: 90,
                  itemStyle: {
                  color: "orange"
                }
              },65,75,61,83,79,{
                name:'bad',
                value: 58,
                itemStyle: {
                color: "#a90000"
                }
              }];
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
            axisTick: { show: false },
            data: [
              "one day",
              "two day",
              "three day",
              "four day",
              "five day",
              "six day",
              "seven day",
              "eight day",
              "nine day",
              "ten day"
            ]
          }
        ],
        yAxis: {
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
            // emphasis: {
            //   itemStyle: {
            //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //       { offset: 0, color: "#2378f7" },
            //       { offset: 0.7, color: "#2378f7" },
            //       { offset: 1, color: "#83bff6" }
            //     ])
            //   }
            // },
            data: data,
            // [
            //   120,
            //   {
            //     value: 200,
            //     itemStyle: {
            //       color: "#a90000"
            //     }
            //   },
            //   150,
            //   80,
            //   70,
            //   110,
            //   130
            // ],
            markLine: {
              symbol: "none",
              lineStyle: {
                type: "dotted",
                color: "black"
              },
              data: [
                { name: "MIN", value: "60", xAxis: "4", yAxis: "60" },
                { name: "MAX", value: "60", xAxis: "4", yAxis: "100" }
              ]
            }
          }
        ]
        // markLine: {
        //   symbol: "none",
        //   lineStyle: {
        //     type: "solid",
        //     color: "black"
        //   },
        //   data: [{ name: "MIN", value: "60", xAxis: "4", yAxis: "60" }]
        // }
      };
      // Enable data zoom when user click bar.
      //   const zoomSize = 6;
      //   myChart.on("click", function(params) {
      //     console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
      //     myChart.dispatchAction({
      //       type: "dataZoom",
      //       startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
      //       endValue:
      //         dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
      //     });
      //   });

      option && myChart.setOption(option);
      //   var chartDom = document.getElementById("main1");
      //   var myChart = echarts.init(chartDom);
      //   var option;

      //   option = {
      //     title: {
      //       text: "HR",

      //     },
      //     tooltip: {
      //       trigger: "axis"
      //     },
      //     legend: {
      //         orient:'vertical',
      //         x:'right',
      //         y:'top',

      //     },

      //     calculable: true,
      //     xAxis: [
      //       {
      //         type: "category",

      //         data: ['one day', 'two day','three day','four day','five day' ]
      //       }
      //     ],
      //     yAxis: [
      //       {
      //         type: "value"
      //       }
      //     ],
      //     series: [
      //       {
      //         name: "good",
      //         type: "bar",
      //         data: [
      //           70,
      //           69,
      //           70,
      //           69,
      //           100,
      //           100,

      //         ],

      //         markLine: {
      //             symbol:'none',
      //             lineStyle:{
      //                 type:'solid',
      //                 color:'black'
      //             },
      //           data: [{ name: "MIN",value:'60',xAxis:'4',yAxis:'60' }],
      //         },

      //       },
      //       {
      //         name: "bad",
      //         type: "bar",
      //         data: [
      //          60,80,90,70,60,
      //         ],

      //         markLine: {
      //             symbol:'none',
      //             lineStyle:{
      //                 type:'solid',
      //                 color:'pink'
      //             },
      //           data: [{ name: "MAX",value:'60',xAxis:'4',yAxis:'100' }],
      //         }
      //       }
      //     ]
      //   };

      //   option && myChart.setOption(option);
    },
    six() {
      var chartDom = document.getElementById("main6");
      var myChart = echarts.init(chartDom);
      var option;

  
      let data = [{
                name:'bad',
                value: 95,
                itemStyle: {
                color: "#a90000"
                }
              },{name:'good',
                value: 110,},116,
              {
                  name:'On the high side',
                  value: 125,
                  itemStyle: {
                  color: "orange"
                }
              },116,{
                name:'bad',
                value: 95,
                itemStyle: {
                color: "#a90000"
                }
              },105,{
                name:'bad',
                value: 78,
                itemStyle: {
                color: "#a90000"
                }
              },105,117];
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
            axisTick: { show: false },
            data: [
              "one day",
              "two day",
              "three day",
              "four day",
              "five day",
              "six day",
              "seven day",
              "eight day",
              "nine day",
              "ten day"
            ]
          }
        ],
        yAxis: {
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
            // emphasis: {
            //   itemStyle: {
            //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //       { offset: 0, color: "#2378f7" },
            //       { offset: 0.7, color: "#2378f7" },
            //       { offset: 1, color: "#83bff6" }
            //     ])
            //   }
            // },
            data: data,
            // [
            //   120,
            //   {
            //     value: 200,
            //     itemStyle: {
            //       color: "#a90000"
            //     }
            //   },
            //   150,
            //   80,
            //   70,
            //   110,
            //   130
            // ],
            markLine: {
              symbol: "none",
              lineStyle: {
                type: "dotted",
                color: "black"
              },
              data: [
                { name: "MIN", value: "60", xAxis: "4", yAxis: "100" },
                { name: "MAX", value: "60", xAxis: "4", yAxis: "120" }
              ]
            }
          }
        ]
        // markLine: {
        //   symbol: "none",
        //   lineStyle: {
        //     type: "solid",
        //     color: "black"
        //   },
        //   data: [{ name: "MIN", value: "60", xAxis: "4", yAxis: "60" }]
        // }
      };
      // Enable data zoom when user click bar.
      //   const zoomSize = 6;
      //   myChart.on("click", function(params) {
      //     console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
      //     myChart.dispatchAction({
      //       type: "dataZoom",
      //       startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
      //       endValue:
      //         dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
      //     });
      //   });

      option && myChart.setOption(option);
    },
    seven() {
      var chartDom = document.getElementById("main7");
      var myChart = echarts.init(chartDom);
      var option;

  
      let data = [{
                name:'bad',
                value: 58,
                itemStyle: {
                color: "#a90000"
                }
              },{name:'good',
                value: 70,},68,
              {
                  name:'On the high side',
                  value: 90,
                  itemStyle: {
                  color: "orange"
                }
              },65,75,61,83,79,{
                name:'bad',
                value: 58,
                itemStyle: {
                color: "#a90000"
                }
              }];
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
            axisTick: { show: false },
            data: [
              "one day",
              "two day",
              "three day",
              "four day",
              "five day",
              "six day",
              "seven day",
              "eight day",
              "nine day",
              "ten day"
            ]
          }
        ],
        yAxis: {
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
            // emphasis: {
            //   itemStyle: {
            //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //       { offset: 0, color: "#2378f7" },
            //       { offset: 0.7, color: "#2378f7" },
            //       { offset: 1, color: "#83bff6" }
            //     ])
            //   }
            // },
            data: data,
            // [
            //   120,
            //   {
            //     value: 200,
            //     itemStyle: {
            //       color: "#a90000"
            //     }
            //   },
            //   150,
            //   80,
            //   70,
            //   110,
            //   130
            // ],
            markLine: {
              symbol: "none",
              lineStyle: {
                type: "dotted",
                color: "black"
              },
              data: [
                { name: "MIN", value: "60", xAxis: "4", yAxis: "60" },
                { name: "MAX", value: "60", xAxis: "4", yAxis: "100" }
              ]
            }
          }
        ]
        // markLine: {
        //   symbol: "none",
        //   lineStyle: {
        //     type: "solid",
        //     color: "black"
        //   },
        //   data: [{ name: "MIN", value: "60", xAxis: "4", yAxis: "60" }]
        // }
      };
      // Enable data zoom when user click bar.
      //   const zoomSize = 6;
      //   myChart.on("click", function(params) {
      //     console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
      //     myChart.dispatchAction({
      //       type: "dataZoom",
      //       startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
      //       endValue:
      //         dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
      //     });
      //   });

      option && myChart.setOption(option);
      //   var chartDom = document.getElementById("main1");
      //   var myChart = echarts.init(chartDom);
      //   var option;

      //   option = {
      //     title: {
      //       text: "HR",

      //     },
      //     tooltip: {
      //       trigger: "axis"
      //     },
      //     legend: {
      //         orient:'vertical',
      //         x:'right',
      //         y:'top',

      //     },

      //     calculable: true,
      //     xAxis: [
      //       {
      //         type: "category",

      //         data: ['one day', 'two day','three day','four day','five day' ]
      //       }
      //     ],
      //     yAxis: [
      //       {
      //         type: "value"
      //       }
      //     ],
      //     series: [
      //       {
      //         name: "good",
      //         type: "bar",
      //         data: [
      //           70,
      //           69,
      //           70,
      //           69,
      //           100,
      //           100,

      //         ],

      //         markLine: {
      //             symbol:'none',
      //             lineStyle:{
      //                 type:'solid',
      //                 color:'black'
      //             },
      //           data: [{ name: "MIN",value:'60',xAxis:'4',yAxis:'60' }],
      //         },

      //       },
      //       {
      //         name: "bad",
      //         type: "bar",
      //         data: [
      //          60,80,90,70,60,
      //         ],

      //         markLine: {
      //             symbol:'none',
      //             lineStyle:{
      //                 type:'solid',
      //                 color:'pink'
      //             },
      //           data: [{ name: "MAX",value:'60',xAxis:'4',yAxis:'100' }],
      //         }
      //       }
      //     ]
      //   };

      //   option && myChart.setOption(option);
    },
    eight() {
      var chartDom = document.getElementById("main8");
      var myChart = echarts.init(chartDom);
      var option;

  
      let data = [{
                name:'bad',
                value: 95,
                itemStyle: {
                color: "#a90000"
                }
              },{name:'good',
                value: 110,},116,
              {
                  name:'On the high side',
                  value: 125,
                  itemStyle: {
                  color: "orange"
                }
              },116,{
                name:'bad',
                value: 95,
                itemStyle: {
                color: "#a90000"
                }
              },105,{
                name:'bad',
                value: 78,
                itemStyle: {
                color: "#a90000"
                }
              },105,117];
      let yMax = 100;
      let dataShadow = [];
      for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax);
      }
      option = {
        title: {
          text: "SIC"
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
            axisTick: { show: false },
            data: [
              "one day",
              "two day",
              "three day",
              "four day",
              "five day",
              "six day",
              "seven day",
              "eight day",
              "nine day",
              "ten day"
            ]
          }
        ],
        yAxis: {
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
            // emphasis: {
            //   itemStyle: {
            //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //       { offset: 0, color: "#2378f7" },
            //       { offset: 0.7, color: "#2378f7" },
            //       { offset: 1, color: "#83bff6" }
            //     ])
            //   }
            // },
            data: data,
            // [
            //   120,
            //   {
            //     value: 200,
            //     itemStyle: {
            //       color: "#a90000"
            //     }
            //   },
            //   150,
            //   80,
            //   70,
            //   110,
            //   130
            // ],
            markLine: {
              symbol: "none",
              lineStyle: {
                type: "dotted",
                color: "black"
              },
              data: [
                { name: "MIN", value: "60", xAxis: "4", yAxis: "100" },
                { name: "MAX", value: "60", xAxis: "4", yAxis: "120" }
              ]
            }
          }
        ]
        // markLine: {
        //   symbol: "none",
        //   lineStyle: {
        //     type: "solid",
        //     color: "black"
        //   },
        //   data: [{ name: "MIN", value: "60", xAxis: "4", yAxis: "60" }]
        // }
      };
      // Enable data zoom when user click bar.
      //   const zoomSize = 6;
      //   myChart.on("click", function(params) {
      //     console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
      //     myChart.dispatchAction({
      //       type: "dataZoom",
      //       startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
      //       endValue:
      //         dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
      //     });
      //   });

      option && myChart.setOption(option);
    },
    nine() {
      var chartDom = document.getElementById("main9");
      var myChart = echarts.init(chartDom);
      var option;

  
      let data = [{
                name:'bad',
                value: 58,
                itemStyle: {
                color: "#a90000"
                }
              },{name:'good',
                value: 70,},68,
              {
                  name:'On the high side',
                  value: 90,
                  itemStyle: {
                  color: "orange"
                }
              },65,75,61,83,79,{
                name:'bad',
                value: 58,
                itemStyle: {
                color: "#a90000"
                }
              }];
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
            axisTick: { show: false },
            data: [
              "one day",
              "two day",
              "three day",
              "four day",
              "five day",
              "six day",
              "seven day",
              "eight day",
              "nine day",
              "ten day"
            ]
          }
        ],
        yAxis: {
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
            // emphasis: {
            //   itemStyle: {
            //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //       { offset: 0, color: "#2378f7" },
            //       { offset: 0.7, color: "#2378f7" },
            //       { offset: 1, color: "#83bff6" }
            //     ])
            //   }
            // },
            data: data,
            // [
            //   120,
            //   {
            //     value: 200,
            //     itemStyle: {
            //       color: "#a90000"
            //     }
            //   },
            //   150,
            //   80,
            //   70,
            //   110,
            //   130
            // ],
            markLine: {
              symbol: "none",
              lineStyle: {
                type: "dotted",
                color: "black"
              },
              data: [
                { name: "MIN", value: "60", xAxis: "4", yAxis: "60" },
                { name: "MAX", value: "60", xAxis: "4", yAxis: "100" }
              ]
            }
          }
        ]
        // markLine: {
        //   symbol: "none",
        //   lineStyle: {
        //     type: "solid",
        //     color: "black"
        //   },
        //   data: [{ name: "MIN", value: "60", xAxis: "4", yAxis: "60" }]
        // }
      };
      // Enable data zoom when user click bar.
      //   const zoomSize = 6;
      //   myChart.on("click", function(params) {
      //     console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
      //     myChart.dispatchAction({
      //       type: "dataZoom",
      //       startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
      //       endValue:
      //         dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
      //     });
      //   });

      option && myChart.setOption(option);
      //   var chartDom = document.getElementById("main1");
      //   var myChart = echarts.init(chartDom);
      //   var option;

      //   option = {
      //     title: {
      //       text: "HR",

      //     },
      //     tooltip: {
      //       trigger: "axis"
      //     },
      //     legend: {
      //         orient:'vertical',
      //         x:'right',
      //         y:'top',

      //     },

      //     calculable: true,
      //     xAxis: [
      //       {
      //         type: "category",

      //         data: ['one day', 'two day','three day','four day','five day' ]
      //       }
      //     ],
      //     yAxis: [
      //       {
      //         type: "value"
      //       }
      //     ],
      //     series: [
      //       {
      //         name: "good",
      //         type: "bar",
      //         data: [
      //           70,
      //           69,
      //           70,
      //           69,
      //           100,
      //           100,

      //         ],

      //         markLine: {
      //             symbol:'none',
      //             lineStyle:{
      //                 type:'solid',
      //                 color:'black'
      //             },
      //           data: [{ name: "MIN",value:'60',xAxis:'4',yAxis:'60' }],
      //         },

      //       },
      //       {
      //         name: "bad",
      //         type: "bar",
      //         data: [
      //          60,80,90,70,60,
      //         ],

      //         markLine: {
      //             symbol:'none',
      //             lineStyle:{
      //                 type:'solid',
      //                 color:'pink'
      //             },
      //           data: [{ name: "MAX",value:'60',xAxis:'4',yAxis:'100' }],
      //         }
      //       }
      //     ]
      //   };

      //   option && myChart.setOption(option);
    },
    ten() {
      var chartDom = document.getElementById("main10");
      var myChart = echarts.init(chartDom);
      var option;

  
      let data = [{
                name:'bad',
                value: 95,
                itemStyle: {
                color: "#a90000"
                }
              },{name:'good',
                value: 110,},116,
              {
                  name:'On the high side',
                  value: 125,
                  itemStyle: {
                  color: "orange"
                }
              },116,{
                name:'bad',
                value: 95,
                itemStyle: {
                color: "#a90000"
                }
              },105,{
                name:'bad',
                value: 78,
                itemStyle: {
                color: "#a90000"
                }
              },105,117];
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
            axisTick: { show: false },
            data: [
              "one day",
              "two day",
              "three day",
              "four day",
              "five day",
              "six day",
              "seven day",
              "eight day",
              "nine day",
              "ten day"
            ]
          }
        ],
        yAxis: {
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
            // emphasis: {
            //   itemStyle: {
            //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //       { offset: 0, color: "#2378f7" },
            //       { offset: 0.7, color: "#2378f7" },
            //       { offset: 1, color: "#83bff6" }
            //     ])
            //   }
            // },
            data: data,
            // [
            //   120,
            //   {
            //     value: 200,
            //     itemStyle: {
            //       color: "#a90000"
            //     }
            //   },
            //   150,
            //   80,
            //   70,
            //   110,
            //   130
            // ],
            markLine: {
              symbol: "none",
              lineStyle: {
                type: "dotted",
                color: "black"
              },
              data: [
                { name: "MIN", value: "60", xAxis: "4", yAxis: "100" },
                { name: "MAX", value: "60", xAxis: "4", yAxis: "120" }
              ]
            }
          }
        ]
        // markLine: {
        //   symbol: "none",
        //   lineStyle: {
        //     type: "solid",
        //     color: "black"
        //   },
        //   data: [{ name: "MIN", value: "60", xAxis: "4", yAxis: "60" }]
        // }
      };
      // Enable data zoom when user click bar.
      //   const zoomSize = 6;
      //   myChart.on("click", function(params) {
      //     console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
      //     myChart.dispatchAction({
      //       type: "dataZoom",
      //       startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
      //       endValue:
      //         dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
      //     });
      //   });

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
    this.ten()
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 670px;
}
.foot {
  margin-bottom: 20px;
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