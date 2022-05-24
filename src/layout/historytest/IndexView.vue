<template>
  <div>
    <div style="height:50px">
      <el-input
      v-model="search"
      size="mini"
      style="width:20%;float:right"
      :placeholder="$t('m.ekts')"
    />
    </div>

    <div class="box">
      <div class="foot">
        <el-row :gutter="10">
          <el-col
            :xs="24"
            :sm="24"
            :md="8"
            :lg="8"
            :xl="8"
            style="border:1px solid #999;"
            class="bib1"
          >
            <div class="foot-1" id="main3"></div>
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
          </el-col>

          <el-col
            :xs="24"
            :sm="24"
            :md="8"
            :lg="8"
            :xl="8"
            style="border:1px solid #999"
            class="bib1"
          >
            <div class="foot-1" id="main5"></div>
          </el-col>
        </el-row>
      </div>

      <div class="foot">
        <el-row :gutter="10">
          <el-col
            :xs="24"
            :sm="24"
            :md="8"
            :lg="8"
            :xl="8"
            style="border:1px solid #999"
            class="bib1"
          >
            <div class="foot-1" id="main6"></div>
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
          </el-col>

          <el-col
            :xs="24"
            :sm="24"
            :md="8"
            :lg="8"
            :xl="8"
            style="border:1px solid #999"
            class="bib1"
          >
            <div class="foot-1" id="main8"></div>
           
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
      var app = {};

      var chartDom = document.getElementById("main3");
      var myChart = echarts.init(chartDom);
      var option;

      const posList = [
        "left",
        "right",
        "top",
        "bottom",
        "inside",
        "insideTop",
        "insideLeft",
        "insideRight",
        "insideBottom",
        "insideTopLeft",
        "insideTopRight",
        "insideBottomLeft",
        "insideBottomRight"
      ];
      app.configParameters = {
        rotate: {
          min: -90,
          max: 90
        },
        align: {
          options: {
            left: "left",
            center: "center",
            right: "right"
          }
        },
        verticalAlign: {
          options: {
            top: "top",
            middle: "middle",
            bottom: "bottom"
          }
        },
        position: {
          options: posList.reduce(function(map, pos) {
            map[pos] = pos;
            return map;
          }, {})
        },
        distance: {
          min: 0,
          max: 100
        }
      };
      app.config = {
        rotate: 90,
        align: "left",
        verticalAlign: "middle",
        position: "insideBottom",
        distance: 15,
        onChange: function() {
          //   const labelOption = {
          //     rotate: app.config.rotate,
          //     align: app.config.align,
          //     verticalAlign: app.config.verticalAlign,
          //     position: app.config.position,
          //     distance: app.config.distance
          //   };
          myChart.setOption({
            series: [
              {
                label: labelOption
              },
              {
                label: labelOption
              },
              {
                label: labelOption
              },
              {
                label: labelOption
              }
            ]
          });
        }
      };
      const labelOption = {
        show: true,
        position: app.config.position,
        distance: app.config.distance,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        rotate: app.config.rotate,
        formatter: "{c}  {name|{a}}",
        fontSize: 16,
        rich: {
          name: {}
        }
      };
      option = {
        title: {
          text: "Cardio1",
          left: "center",
          top: "bottom"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["first day", "second day", "third day"]
        },
        // toolbox: {
        //   show: true,
        //   orient: "vertical",
        //   left: "right",
        //   top: "center",
        //   feature: {
        //     mark: { show: true },
        //     dataView: { show: true, readOnly: false },
        //     magicType: { show: true, type: ["line", "bar", "stack"] },
        //     restore: { show: true },
        //     saveAsImage: { show: true }
        //   }
        // },
        xAxis: [
          {
            type: "category",
            axisTick: { show: false },
            data: ["PWV", "PPI", "HR", "PPT", "SP", "DP"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "first day",
            type: "bar",
            barGap: 0,
            // label: labelOption,
            // emphasis: {
            //   focus: "series"
            // },
            // showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#83bff6" },
                { offset: 0.5, color: "#188df0" },
                { offset: 1, color: "#188df0" }
              ])
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#2378f7" },
                  { offset: 0.7, color: "#2378f7" },
                  { offset: 1, color: "#83bff6" }
                ])
              }
            },
            data: [8, 0.43, 72, 0.3, 110, 64]
          },
          {
            name: "second day",
            type: "bar",
            // label: labelOption,
            // emphasis: {
            //   focus: "series"
            // },
            data: [7, 0.49, 71, 0.35, 108, 66]
          },
          {
            name: "third day",
            type: "bar",
            // label: labelOption,
            // emphasis: {
            //   focus: "series"
            // },
            data: [8, 0.47, 80, 0.3, 110, 65]
          }
        ]
      };

      option && myChart.setOption(option);
    },
    two() {
      var app = {};

      var chartDom = document.getElementById("main4");
      var myChart = echarts.init(chartDom);
      var option;

      const posList = [
        "left",
        "right",
        "top",
        "bottom",
        "inside",
        "insideTop",
        "insideLeft",
        "insideRight",
        "insideBottom",
        "insideTopLeft",
        "insideTopRight",
        "insideBottomLeft",
        "insideBottomRight"
      ];
      app.configParameters = {
        rotate: {
          min: -90,
          max: 90
        },
        align: {
          options: {
            left: "left",
            center: "center",
            right: "right"
          }
        },
        verticalAlign: {
          options: {
            top: "top",
            middle: "middle",
            bottom: "bottom"
          }
        },
        position: {
          options: posList.reduce(function(map, pos) {
            map[pos] = pos;
            return map;
          }, {})
        },
        distance: {
          min: 0,
          max: 100
        }
      };
      app.config = {
        rotate: 90,
        align: "left",
        verticalAlign: "middle",
        position: "insideBottom",
        distance: 15,
        onChange: function() {
          //   const labelOption = {
          //     rotate: app.config.rotate,
          //     align: app.config.align,
          //     verticalAlign: app.config.verticalAlign,
          //     position: app.config.position,
          //     distance: app.config.distance
          //   };
          myChart.setOption({
            series: [
              {
                label: labelOption
              },
              {
                label: labelOption
              },
              {
                label: labelOption
              },
              {
                label: labelOption
              }
            ]
          });
        }
      };
      const labelOption = {
        show: true,
        position: app.config.position,
        distance: app.config.distance,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        rotate: app.config.rotate,
        formatter: "{c}  {name|{a}}",
        fontSize: 16,
        rich: {
          name: {}
        }
      };
      option = {
        title: {
          text: "Arterial Age",
          left: "center",
          top: "bottom"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["first day", "second day", "third day"]
        },
        // toolbox: {
        //   show: true,
        //   orient: "vertical",
        //   left: "right",
        //   top: "center",
        //   feature: {
        //     mark: { show: true },
        //     dataView: { show: true, readOnly: false },
        //     magicType: { show: true, type: ["line", "bar", "stack"] },
        //     restore: { show: true },
        //     saveAsImage: { show: true }
        //   }
        // },
        xAxis: [
          {
            type: "category",
            axisTick: { show: false },
            data: ["AGI", "SI", "RI", "BD", "CAC", "VI"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "first day",
            type: "bar",
            barGap: 0,
            // label: labelOption,
            // emphasis: {
            //   focus: "series"
            // },
            // showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#83bff6" },
                { offset: 0.5, color: "#188df0" },
                { offset: 1, color: "#188df0" }
              ])
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#2378f7" },
                  { offset: 0.7, color: "#2378f7" },
                  { offset: 1, color: "#83bff6" }
                ])
              }
            },
            data: [0.23, 4.3, 0.3, 0.256, 230, 1.1]
          },
          {
            name: "second day",
            type: "bar",
            // label: labelOption,
            // emphasis: {
            //   focus: "series"
            // },
            data: [0.2, 4.36, 0.41, 0.35, 220, 1.121]
          },
          {
            name: "third day",
            type: "bar",
            // label: labelOption,
            // emphasis: {
            //   focus: "series"
            // },
            data: [0.3, 5, 0.37, 0.38, 230, 1.33]
          }
        ]
      };

      option && myChart.setOption(option);
    },
    three() {
      var app = {};

      var chartDom = document.getElementById("main5");
      var myChart = echarts.init(chartDom);
      var option;

      const posList = [
        "left",
        "right",
        "top",
        "bottom",
        "inside",
        "insideTop",
        "insideLeft",
        "insideRight",
        "insideBottom",
        "insideTopLeft",
        "insideTopRight",
        "insideBottomLeft",
        "insideBottomRight"
      ];
      app.configParameters = {
        rotate: {
          min: -90,
          max: 90
        },
        align: {
          options: {
            left: "left",
            center: "center",
            right: "right"
          }
        },
        verticalAlign: {
          options: {
            top: "top",
            middle: "middle",
            bottom: "bottom"
          }
        },
        position: {
          options: posList.reduce(function(map, pos) {
            map[pos] = pos;
            return map;
          }, {})
        },
        distance: {
          min: 0,
          max: 100
        }
      };
      app.config = {
        rotate: 90,
        align: "left",
        verticalAlign: "middle",
        position: "insideBottom",
        distance: 15,
        onChange: function() {
          //   const labelOption = {
          //     rotate: app.config.rotate,
          //     align: app.config.align,
          //     verticalAlign: app.config.verticalAlign,
          //     position: app.config.position,
          //     distance: app.config.distance
          //   };
          myChart.setOption({
            series: [
              {
                label: labelOption
              },
              {
                label: labelOption
              },
              {
                label: labelOption
              },
              {
                label: labelOption
              }
            ]
          });
        }
      };
      const labelOption = {
        show: true,
        position: app.config.position,
        distance: app.config.distance,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        rotate: app.config.rotate,
        formatter: "{c}  {name|{a}}",
        fontSize: 16,
        rich: {
          name: {}
        }
      };
      option = {
        title: {
          text: "Diabetes",
          left: "center",
          top: "bottom"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["first day", "second day", "third day"]
        },
        // toolbox: {
        //   show: true,
        //   orient: "vertical",
        //   left: "right",
        //   top: "center",
        //   feature: {
        //     mark: { show: true },
        //     dataView: { show: true, readOnly: false },
        //     magicType: { show: true, type: ["line", "bar", "stack"] },
        //     restore: { show: true },
        //     saveAsImage: { show: true }
        //   }
        // },
        xAxis: [
          {
            type: "category",
            axisTick: { show: false },
            data: ["b/a Index", "HbA1c", "mPAD1", "mPAD2"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "first day",
            type: "bar",
            barGap: 0,
            // label: labelOption,
            // emphasis: {
            //   focus: "series"
            // },
            // showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#83bff6" },
                { offset: 0.5, color: "#188df0" },
                { offset: 1, color: "#188df0" }
              ])
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#2378f7" },
                  { offset: 0.7, color: "#2378f7" },
                  { offset: 1, color: "#83bff6" }
                ])
              }
            },
            data: [-1.5, 5.2, 1.2, 1, ]
          },
          {
            name: "second day",
            type: "bar",
            // label: labelOption,
            // emphasis: {
            //   focus: "series"
            // },
            data: [-1.45, 5.3, 1.3, 1, ]
          },
          {
            name: "third day",
            type: "bar",
            // label: labelOption,
            // emphasis: {
            //   focus: "series"
            // },
            data: [-1.5, 5.7, 1.1, 0.9, ]
          }
        ]
      };

      option && myChart.setOption(option);
    },
    four() {
      var app = {};

      var chartDom = document.getElementById("main6");
      var myChart = echarts.init(chartDom);
      var option;

      const posList = [
        "left",
        "right",
        "top",
        "bottom",
        "inside",
        "insideTop",
        "insideLeft",
        "insideRight",
        "insideBottom",
        "insideTopLeft",
        "insideTopRight",
        "insideBottomLeft",
        "insideBottomRight"
      ];
      app.configParameters = {
        rotate: {
          min: -90,
          max: 90
        },
        align: {
          options: {
            left: "left",
            center: "center",
            right: "right"
          }
        },
        verticalAlign: {
          options: {
            top: "top",
            middle: "middle",
            bottom: "bottom"
          }
        },
        position: {
          options: posList.reduce(function(map, pos) {
            map[pos] = pos;
            return map;
          }, {})
        },
        distance: {
          min: 0,
          max: 100
        }
      };
      app.config = {
        rotate: 90,
        align: "left",
        verticalAlign: "middle",
        position: "insideBottom",
        distance: 15,
        onChange: function() {
          //   const labelOption = {
          //     rotate: app.config.rotate,
          //     align: app.config.align,
          //     verticalAlign: app.config.verticalAlign,
          //     position: app.config.position,
          //     distance: app.config.distance
          //   };
          myChart.setOption({
            series: [
              {
                label: labelOption
              },
              {
                label: labelOption
              },
              {
                label: labelOption
              },
              {
                label: labelOption
              }
            ]
          });
        }
      };
      const labelOption = {
        show: true,
        position: app.config.position,
        distance: app.config.distance,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        rotate: app.config.rotate,
        formatter: "{c}  {name|{a}}",
        fontSize: 16,
        rich: {
          name: {}
        }
      };
      option = {
        title: {
          text: "Cardio2",
          left: "center",
          top: "bottom"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["first day", "second day", "third day"]
        },
        // toolbox: {
        //   show: true,
        //   orient: "vertical",
        //   left: "right",
        //   top: "center",
        //   feature: {
        //     mark: { show: true },
        //     dataView: { show: true, readOnly: false },
        //     magicType: { show: true, type: ["line", "bar", "stack"] },
        //     restore: { show: true },
        //     saveAsImage: { show: true }
        //   }
        // },
        xAxis: [
          {
            type: "category",
            axisTick: { show: false },
            data: ["SV", "CO", "PPGF", "CHD", "TPR", "A-CIMT"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "first day",
            type: "bar",
            barGap: 0,
            // label: labelOption,
            // emphasis: {
            //   focus: "series"
            // },
            // showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#83bff6" },
                { offset: 0.5, color: "#188df0" },
                { offset: 1, color: "#188df0" }
              ])
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#2378f7" },
                  { offset: 0.7, color: "#2378f7" },
                  { offset: 1, color: "#83bff6" }
                ])
              }
            },
            data: [0.1, 6.2, 0.45,0.28, 15.53, 1.0]
          },
          {
            name: "second day",
            type: "bar",
            // label: labelOption,
            // emphasis: {
            //   focus: "series"
            // },
            data: [0.1, 6.3, 0.46, 0.25,14.93, 1.1]
          },
          {
            name: "third day",
            type: "bar",
            // label: labelOption,
            // emphasis: {
            //   focus: "series"
            // },
            data: [0.11, 6.5, 0.47,0.37, 15.53, 1.19]
          }
        ]
      };

      option && myChart.setOption(option);
    },
    five() {
      var app = {};

      var chartDom = document.getElementById("main7");
      var myChart = echarts.init(chartDom);
      var option;

      const posList = [
        "left",
        "right",
        "top",
        "bottom",
        "inside",
        "insideTop",
        "insideLeft",
        "insideRight",
        "insideBottom",
        "insideTopLeft",
        "insideTopRight",
        "insideBottomLeft",
        "insideBottomRight"
      ];
      app.configParameters = {
        rotate: {
          min: -90,
          max: 90
        },
        align: {
          options: {
            left: "left",
            center: "center",
            right: "right"
          }
        },
        verticalAlign: {
          options: {
            top: "top",
            middle: "middle",
            bottom: "bottom"
          }
        },
        position: {
          options: posList.reduce(function(map, pos) {
            map[pos] = pos;
            return map;
          }, {})
        },
        distance: {
          min: 0,
          max: 100
        }
      };
      app.config = {
        rotate: 90,
        align: "left",
        verticalAlign: "middle",
        position: "insideBottom",
        distance: 15,
        onChange: function() {
          //   const labelOption = {
          //     rotate: app.config.rotate,
          //     align: app.config.align,
          //     verticalAlign: app.config.verticalAlign,
          //     position: app.config.position,
          //     distance: app.config.distance
          //   };
          myChart.setOption({
            series: [
              {
                label: labelOption
              },
              {
                label: labelOption
              },
              {
                label: labelOption
              },
              {
                label: labelOption
              }
            ]
          });
        }
      };
      const labelOption = {
        show: true,
        position: app.config.position,
        distance: app.config.distance,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        rotate: app.config.rotate,
        formatter: "{c}  {name|{a}}",
        fontSize: 16,
        rich: {
          name: {}
        }
      };
      option = {
        title: {
          text: "V.Circulation",
          left: "center",
          top: "bottom"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["first day", "second day", "third day"]
        },
        // toolbox: {
        //   show: true,
        //   orient: "vertical",
        //   left: "right",
        //   top: "center",
        //   feature: {
        //     mark: { show: true },
        //     dataView: { show: true, readOnly: false },
        //     magicType: { show: true, type: ["line", "bar", "stack"] },
        //     restore: { show: true },
        //     saveAsImage: { show: true }
        //   }
        // },
        xAxis: [
          {
            type: "category",
            axisTick: { show: false },
            data: ["MR", "IMR", "BVEI", "SAEI"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "first day",
            type: "bar",
            barGap: 0,
            // label: labelOption,
            // emphasis: {
            //   focus: "series"
            // },
            // showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#83bff6" },
                { offset: 0.5, color: "#188df0" },
                { offset: 1, color: "#188df0" }
              ])
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#2378f7" },
                  { offset: 0.7, color: "#2378f7" },
                  { offset: 1, color: "#83bff6" }
                ])
              }
            },
            data: [85,15, 6, 7.2]
          },
          {
            name: "second day",
            type: "bar",
            // label: labelOption,
            // emphasis: {
            //   focus: "series"
            // },
            data: [87, 15, 6, 7.7]
          },
          {
            name: "third day",
            type: "bar",
            // label: labelOption,
            // emphasis: {
            //   focus: "series"
            // },
            data: [91, 16, 6.4, 6.7]
          }
        ]
      };

      option && myChart.setOption(option);
    },
    six() {
      var app = {};

      var chartDom = document.getElementById("main8");
      var myChart = echarts.init(chartDom);
      var option;

      const posList = [
        "left",
        "right",
        "top",
        "bottom",
        "inside",
        "insideTop",
        "insideLeft",
        "insideRight",
        "insideBottom",
        "insideTopLeft",
        "insideTopRight",
        "insideBottomLeft",
        "insideBottomRight"
      ];
      app.configParameters = {
        rotate: {
          min: -90,
          max: 90
        },
        align: {
          options: {
            left: "left",
            center: "center",
            right: "right"
          }
        },
        verticalAlign: {
          options: {
            top: "top",
            middle: "middle",
            bottom: "bottom"
          }
        },
        position: {
          options: posList.reduce(function(map, pos) {
            map[pos] = pos;
            return map;
          }, {})
        },
        distance: {
          min: 0,
          max: 100
        }
      };
      app.config = {
        rotate: 90,
        align: "left",
        verticalAlign: "middle",
        position: "insideBottom",
        distance: 15,
        onChange: function() {
          //   const labelOption = {
          //     rotate: app.config.rotate,
          //     align: app.config.align,
          //     verticalAlign: app.config.verticalAlign,
          //     position: app.config.position,
          //     distance: app.config.distance
          //   };
          myChart.setOption({
            series: [
              {
                label: labelOption
              },
              {
                label: labelOption
              },
              {
                label: labelOption
              },
              {
                label: labelOption
              }
            ]
          });
        }
      };
      const labelOption = {
        show: true,
        position: app.config.position,
        distance: app.config.distance,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        rotate: app.config.rotate,
        formatter: "{c}  {name|{a}}",
        fontSize: 16,
        rich: {
          name: {}
        }
      };
      option = {
        title: {
          text: "Cardio3",
          left: "center",
          top: "bottom"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["first day", "second day", "third day"]
        },
        // toolbox: {
        //   show: true,
        //   orient: "vertical",
        //   left: "right",
        //   top: "center",
        //   feature: {
        //     mark: { show: true },
        //     dataView: { show: true, readOnly: false },
        //     magicType: { show: true, type: ["line", "bar", "stack"] },
        //     restore: { show: true },
        //     saveAsImage: { show: true }
        //   }
        // },
        xAxis: [
          {
            type: "category",
            axisTick: { show: false },
            data: ["STI", "IPA", "LVET", "TC", "HDL", "LDL"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "first day",
            type: "bar",
            barGap: 0,
            // label: labelOption,
            // emphasis: {
            //   focus: "series"
            // },
            // showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#83bff6" },
                { offset: 0.5, color: "#188df0" },
                { offset: 1, color: "#188df0" }
              ])
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#2378f7" },
                  { offset: 0.7, color: "#2378f7" },
                  { offset: 1, color: "#83bff6" }
                ])
              }
            },
            data: [80, 0.43, 0.35, 175, 51, 85]
          },
          {
            name: "second day",
            type: "bar",
            // label: labelOption,
            // emphasis: {
            //   focus: "series"
            // },
            data: [85, 0.49, 0.37, 160, 52, 90]
          },
          {
            name: "third day",
            type: "bar",
            // label: labelOption,
            // emphasis: {
            //   focus: "series"
            // },
            data: [90, 0.47, 0.39, 185, 55, 80]
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
.bib1 {
  position: relative;
}
.bt1 {
  /* width: 50px;
  height: 50px;
  background-color: pink; */
  position: absolute;
  bottom: 0;
  right: 20px;
}
</style>