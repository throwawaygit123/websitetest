<template>
  <div>
    <div class="box">
      <!-- <button style="float:right" @click="cli">11</button> -->
      <el-button type="primary" size="small" style="float:right;" @click="cli">{{$t("m.linechart")}}</el-button>
      <div v-show="this.dd">
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
              <template>
                <h2
                  @mouseenter="hov1"
                  @mouseout="out"
                  style="line-height:normal; margin:0 0;width:50px;"
                >HR</h2>
                <div class="hover" v-if="this.hov2">
                  <p>Heart Rate(HR),The number of contractions of the cardiac ventricles per unit of time (usually per...</p>
                </div>
              </template>
              <div class="foot-1" id="main1" v-show="this.clc1"></div>
              <div class="foot-1" id="ss" v-show="!this.clc1"></div>
              <template>
                <el-button
                  type="primary"
                  size="small"
                  class="bt1"
                  @click="clic1"
                >{{$t("m.linechart")}}</el-button>
              </template>
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
              <template>
                <h2
                  @mouseenter="two1"
                  @mouseout="out2"
                  style="line-height:normal; margin:0 0;width:50px;"
                >SP</h2>
                <div class="hover" v-if="this.xswl">
                  <p>The Systolic Blood Pressure(SP) is the highest arterial blood pressure of a cardiac cycle...</p>
                </div>
              </template>
              <div class="foot-1" id="main2" v-show="this.clc2"></div>
              <div class="foot-1" id="main12" v-show="!this.clc2"></div>

              <template>
                <el-button
                  type="primary"
                  size="small"
                  class="bt1"
                  @click="clic2"
                >{{$t("m.linechart")}}</el-button>
              </template>
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
              <template>
                <h2
                  @mouseenter="enter3"
                  @mouseout="out3"
                  style="line-height:normal; margin:0 0;width:50px;"
                >DP</h2>
                <div class="hover" v-if="this.hov3">
                  <p>The Diastolic Blood Pressure(DP) definition refers to the least or lowest pressure exerted on...</p>
                </div>
              </template>
              <div class="foot-1" id="main3" v-show="this.clc3"></div>
              <div class="foot-1" id="main13" v-show="!this.clc3"></div>

              <template>
                <el-button
                  type="primary"
                  size="small"
                  class="bt1"
                  @click="clic3"
                >{{$t("m.linechart")}}</el-button>
              </template>
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
              <template>
                <h2
                  @mouseenter="enter4"
                  @mouseout="out4"
                  style="line-height:normal; margin:0 0;width:50px;"
                >SPO2</h2>
                <div class="hover" v-if="this.hov4">
                  <p>Blood Oxygen Saturation(SpO2)refers to the percentage amount of oxygen in the blood...</p>
                </div>
              </template>
              <div class="foot-1" id="main4" v-show="this.clc4"></div>
              <div class="foot-1" id="main14" v-show="!this.clc4"></div>

              <template>
                <el-button
                  type="primary"
                  size="small"
                  class="bt1"
                  @click="clic4"
                >{{$t("m.linechart")}}</el-button>
              </template>
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
              <template>
                <h2
                  @mouseenter="enter5"
                  @mouseout="out5"
                  style="line-height:normal; margin:0 0;width:50px;"
                >PWV</h2>
                <div class="hover" v-if="this.hov5">
                  <p>Heart Rate(HR),The number of contractions of the cardiac ventricles per unit of time (usually per...</p>
                </div>
              </template>
              <div class="foot-1" id="main5" v-show="this.clc5"></div>
              <div class="foot-1" id="main15" v-show="!this.clc5"></div>

              <template>
                <el-button
                  type="primary"
                  size="small"
                  class="bt1"
                  @click="clic5"
                >{{$t("m.linechart")}}</el-button>
              </template>
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
              <template>
                <h2
                  @mouseenter="enter6"
                  @mouseout="out6"
                  style="line-height:normal; margin:0 0;width:50px;"
                >PI</h2>
                <div class="hover" v-if="this.hov6">
                  <p>The Diastolic Blood Pressure(DP) definition refers to the least or lowest pressure exerted on...</p>
                </div>
              </template>
              <div class="foot-1" id="main6" v-show="this.clc6"></div>
              <div class="foot-1" id="main16" v-show="!this.clc6"></div>

              <template>
                <el-button
                  type="primary"
                  size="small"
                  class="bt1"
                  @click="clic6"
                >{{$t("m.linechart")}}</el-button>
              </template>
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
              <template>
                <h2
                  @mouseenter="enter7"
                  @mouseout="out7"
                  style="line-height:normal; margin:0 0;width:50px;"
                >PPI</h2>
                <div class="hover" v-if="this.hov7">
                  <p>Heart Rate(HR),The number of contractions of the cardiac ventricles per unit of time (usually per...</p>
                </div>
              </template>
              <div class="foot-1" id="main7" v-show="this.clc7"></div>
              <div class="foot-1" id="main17" v-show="!this.clc7"></div>
              <template>
                <el-button
                  type="primary"
                  size="small"
                  class="bt1"
                  @click="clic7"
                >{{$t("m.linechart")}}</el-button>
              </template>
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
              <template>
                <h2
                  @mouseenter="enter8"
                  @mouseout="out8"
                  style="line-height:normal; margin:0 0;width:50px;"
                >SI</h2>
                <div class="hover" v-if="this.hov8">
                  <p>Arterial Stiffness Index(SI)is the conduction time difference and vascular tone of small arteries .The...</p>
                </div>
              </template>
              <div class="foot-1" id="main8" v-show="this.clc8"></div>
              <div class="foot-1" id="main18" v-show="!this.clc8"></div>
              <template>
                <el-button
                  type="primary"
                  size="small"
                  class="bt1"
                  @click="clic8"
                >{{$t("m.linechart")}}</el-button>
              </template>
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
              <template>
                <h2
                  @mouseenter="enter9"
                  @mouseout="out9"
                  style="line-height:normal; margin:0 0;width:50px;"
                >MAP</h2>
                <div class="hover" v-if="this.hov9">
                  <p>Mean arterial pressure(MAP)is an indication of global perfusion pressure necessary for organ...</p>
                </div>
              </template>
              <div class="foot-1" id="main9" v-show="this.clc9"></div>
              <div class="foot-1" id="main19" v-show="!this.clc9"></div>
              <template>
                <el-button
                  type="primary"
                  size="small"
                  class="bt1"
                  @click="clic9"
                >{{$t("m.linechart")}}</el-button>
              </template>
            </el-col>

            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="bib1">
              <div class="foot-1" id="main10"></div>
            </el-col>
          </el-row>
        </div>
      </div>

      <div v-show="!this.dd">
        <!-- <h2>aaa</h2> -->

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
              <template>
                <h2
                  @mouseenter="hov1"
                  @mouseout="out"
                  style="line-height:normal; margin:0 0;width:50px;"
                >HR</h2>
                <div class="hover" v-if="this.hov2">
                  <p>Heart Rate(HR),The number of contractions of the cardiac ventricles per unit of time (usually per...</p>
                </div>
              </template>
              <div class="foot-1" id="a1"></div>
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
              <template>
                <h2
                  @mouseenter="two1"
                  @mouseout="out2"
                  style="line-height:normal; margin:0 0;width:50px;"
                >SP</h2>
                <div class="hover" v-if="this.xswl">
                  <p>The Systolic Blood Pressure(SP) is the highest arterial blood pressure of a cardiac cycle...</p>
                </div>
              </template>
              <div class="foot-1" id="a2"></div>
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
              <template>
                <h2
                  @mouseenter="enter3"
                  @mouseout="out3"
                  style="line-height:normal; margin:0 0;width:50px;"
                >DP</h2>
                <div class="hover" v-if="this.hov3">
                  <p>The Diastolic Blood Pressure(DP) definition refers to the least or lowest pressure exerted on...</p>
                </div>
              </template>
              <div class="foot-1" id="a3"></div>
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
              <template>
                <h2
                  @mouseenter="enter4"
                  @mouseout="out4"
                  style="line-height:normal; margin:0 0;width:50px;"
                >SPO2</h2>
                <div class="hover" v-if="this.hov4">
                  <p>Blood Oxygen Saturation(SpO2)refers to the percentage amount of oxygen in the blood...</p>
                </div>
              </template>
              <div class="foot-1" id="a4"></div>
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
              <template>
                <h2
                  @mouseenter="enter5"
                  @mouseout="out5"
                  style="line-height:normal; margin:0 0;width:50px;"
                >PWV</h2>
                <div class="hover" v-if="this.hov5">
                  <p>Heart Rate(HR),The number of contractions of the cardiac ventricles per unit of time (usually per...</p>
                </div>
              </template>
              <div class="foot-1" id="a5"></div>
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
              <template>
                <h2
                  @mouseenter="enter6"
                  @mouseout="out6"
                  style="line-height:normal; margin:0 0;width:50px;"
                >PI</h2>
                <div class="hover" v-if="this.hov6">
                  <p>The Diastolic Blood Pressure(DP) definition refers to the least or lowest pressure exerted on...</p>
                </div>
              </template>
              <div class="foot-1" id="a6"></div>
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
              <template>
                <h2
                  @mouseenter="enter7"
                  @mouseout="out7"
                  style="line-height:normal; margin:0 0;width:50px;"
                >PPI</h2>
                <div class="hover" v-if="this.hov7">
                  <p>Heart Rate(HR),The number of contractions of the cardiac ventricles per unit of time (usually per...</p>
                </div>
              </template>
              <div class="foot-1" id="a7"></div>
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
              <template>
                <h2
                  @mouseenter="enter8"
                  @mouseout="out8"
                  style="line-height:normal; margin:0 0;width:50px;"
                >SI</h2>
                <div class="hover" v-if="this.hov8">
                  <p>Arterial Stiffness Index(SI)is the conduction time difference and vascular tone of small arteries .The...</p>
                </div>
              </template>
              <div class="foot-1" id="a8"></div>
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
              <template>
                <h2
                  @mouseenter="enter9"
                  @mouseout="out9"
                  style="line-height:normal; margin:0 0;width:50px;"
                >MAP</h2>
                <div class="hover" v-if="this.hov9">
                  <p>Mean arterial pressure(MAP)is an indication of global perfusion pressure necessary for organ...</p>
                </div>
              </template>
              <div class="foot-1" id="a9"></div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="bib1">
              <div class="foot-1" id="main20"></div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      dd: true,
      clc1: true,
      hov2: false,
      xswl: false,
      clc2: true,
      hov3: false,
      clc3: true,
      hov4: false,
      clc4: true,
      hov5: false,
      clc5: true,
      hov6: false,
      clc6: true,
      hov7: false,
      clc7: true,
      hov8: false,
      clc8: true,
      hov9: false,
      clc9: true
    };
  },
  methods: {
    hov1() {
      this.hov2 = true;
      // console.log(this.hov2)
    },
    out() {
      this.hov2 = false;
    },

    out3() {
      this.hov3 = false;
      // console.log(this.hov2)
    },
    two1() {
      this.xswl = true;
      // console.log(this.hov2)
    },
    enter3() {
      this.hov3 = true;
    },
    out2() {
      this.xswl = false;
    },
    enter4() {
      this.hov4 = true;
    },
    out4() {
      this.hov4 = false;
    },
    enter5() {
      this.hov5 = true;
    },
    out5() {
      this.hov5 = false;
    },
    enter6() {
      this.hov6 = true;
    },
    out6() {
      this.hov6 = false;
    },
    enter7() {
      this.hov7 = true;
    },
    out7() {
      this.hov7 = false;
    },
    enter8() {
      this.hov8 = true;
    },
    out8() {
      this.hov8 = false;
    },

    enter9() {
      this.hov9 = true;
    },
    out9() {
      this.hov9 = false;
    },
    cli() {
      this.dd = !this.dd;
      console.log(this.dd);
    },
    clic1() {
      this.clc1 = !this.clc1;
      console.log(this.clc1);
    },
    clic2() {
      this.clc2 = !this.clc2;
      console.log(this.clc1);
    },
    clic3() {
      console.log(11111111);
      this.clc3 = !this.clc3;
      console.log(this.clc3);
    },
    clic4() {
      console.log(11111111);
      this.clc4 = !this.clc4;
      console.log(this.clc3);
    },
    clic5() {
      console.log(11111111);
      this.clc5 = !this.clc5;
      console.log(this.clc5);
    },
    clic6() {
      console.log(11111111);
      this.clc6 = !this.clc6;
      console.log(this.clc6);
    },
    clic7() {
      console.log(11111111);
      this.clc7 = !this.clc7;
      console.log(this.clc7);
    },
    clic8() {
      console.log(11111111);
      this.clc8 = !this.clc8;
      console.log(this.clc8);
    },
    clic9() {
      console.log(11111111);
      this.clc9 = !this.clc9;
      console.log(this.clc9);
    },
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
          // text: "HR",
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
        // title: {
        //   text: "SP"
        //   //   subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom"
        // },
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
        // title: {
        //   text: "DP"
        //   //   subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom"
        // },
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
      var chartDom = document.getElementById("main10");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "SPO2",
          left: "left",
          top: "top"
        },
        tooltip: {
          trigger: "axis"
        },

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
        // title: {
        //   text: "PWV"
        //   //   subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom"
        // },
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
        // title: {
        //   text: "PI"
        //   //   subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom"
        // },
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
        // title: {
        //   text: "SPO2"
        //   //   subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom"
        // },
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
        // title: {
        //   text: "MAP"
        //   //   subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom"
        // },
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
    },

    eleven() {
      var chartDom = document.getElementById("ss");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        // title: {
        //   text: "HR",
        //   left: "left",
        //   top: "top"
        // },
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
        // legend: {
        //   data: ["test result", "highest value", "minimum value"]
        // },
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

            data: [65, 70, 68, 78, 70, 60, 80, 70, 70, 90]
          },
          {
            name: "Max",

            type: "line",
            color: "#ce2157",
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
          },
          {
            name: "Min",
            color: "#58595b",
            type: "line",
            data: [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
            markPoint: {}
          }
        ]
      };

      option && myChart.setOption(option);
    },
    tweven() {
      var chartDom = document.getElementById("main12");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        // title: {
        //   text: "SPO2",
        //   left: "left",
        //   top: "top"
        // },
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
        // legend: {
        //   data: ["test result", "highest value", "minimum value"]
        // },
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

            data: [100, 110, 108, 110, 115, 120, 123, 125, 135, 136]
          },
          {
            name: "Max",

            type: "line",
            color: "#ce2157",
            data: [120, 120, 120, 120, 120, 120, 120, 120, 120, 120]
          },
          {
            name: "Min",
            color: "#58595b",
            type: "line",
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
            markPoint: {}
          }
        ]
      };

      option && myChart.setOption(option);
    },
    thirteen() {
      var chartDom = document.getElementById("main13");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        // title: {
        //   text: "SPO2",
        //   left: "left",
        //   top: "top"
        // },
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
        // legend: {
        //   data: ["test result", "highest value", "minimum value"]
        // },
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

            data: [45, 48, 50, 52, 55, 61, 62, 64, 66, 66]
          },
          {
            name: "Max",

            type: "line",
            color: "#ce2157",
            data: [70, 70, 70, 70, 70, 70, 70, 70, 70, 70]
          },
          {
            name: "Min",
            color: "#58595b",
            type: "line",
            data: [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
            markPoint: {}
          }
        ]
      };

      option && myChart.setOption(option);
    },
    fourteen() {
      var chartDom = document.getElementById("main14");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        // title: {
        //   text: "SPO2",
        //   left: "left",
        //   top: "top"
        // },
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
        // legend: {
        //   data: ["test result", "highest value", "minimum value"]
        // },
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

            data: [0.158, 0.19, 0.25, 0.3, 0.4, 0.18, 0.56, 0.2, 0.34, 0.3]
          },
          {
            name: "Max",

            type: "line",
            color: "#ce2157",
            data: [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4]
          },
          {
            name: "Min",
            color: "#58595b",
            type: "line",
            data: [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
            markPoint: {}
          }
        ]
      };

      option && myChart.setOption(option);
    },
    fiveteen() {
      var chartDom = document.getElementById("main15");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        // title: {
        //   text: "SPO2",
        //   left: "left",
        //   top: "top"
        // },
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
        // legend: {
        //   data: ["test result", "highest value", "minimum value"]
        // },
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

            data: [7.5, 5, 6.8, 4.8, 8.4, 3, 6, 12, 10, 8]
          },
          {
            name: "Max",

            type: "line",
            color: "#ce2157",
            data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
          },
          {
            name: "Min",
            color: "#58595b",
            type: "line",
            data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            markPoint: {}
          }
        ]
      };

      option && myChart.setOption(option);
    },
    sixteen() {
      var chartDom = document.getElementById("main16");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        // title: {
        //   text: "SPO2",
        //   left: "left",
        //   top: "top"
        // },
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
        // legend: {
        //   data: ["test result", "highest value", "minimum value"]
        // },
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
    seventeen() {
      var chartDom = document.getElementById("main17");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
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
        // // },
        // legend: {
        //   data: ["test result", "highest value", "minimum value"]
        // },
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

            data: [0.45, 0.5038, 0.68, 0.48, 0.844, 0.3, 0.6, 0.2, 0.4, 0.5038]
          },
          {
            name: "Max",

            type: "line",
            color: "#ce2157",
            data: [
              0.5038,
              0.5038,
              0.5038,
              0.5038,
              0.5038,
              0.5038,
              0.5038,
              0.5038,
              0.5038,
              0.5038
            ]
          },
          {
            name: "Min",
            color: "#58595b",
            type: "line",
            data: [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4],
            markPoint: {}
          }
        ]
      };

      option && myChart.setOption(option);
    },
    eighteen() {
      var chartDom = document.getElementById("main18");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
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
            data: [4.6, 7.8, 5.9, 4.5, 7.4, 8, 5.6, 2.9, 3.8, 5.7]
          },
          {
            name: "Max",

            type: "line",
            color: "#ce2157",
            data: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
          },
          {
            name: "Min",
            color: "#58595b",
            type: "line",
            data: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            markPoint: {}
          }
        ]
      };

      option && myChart.setOption(option);
    },
    nineteen() {
      var chartDom = document.getElementById("main19");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        // title: {
        //   text: "SPO2",
        //   left: "left",
        //   top: "top"
        // },
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
        // legend: {
        //   data: ["test result", "highest value", "minimum value"]
        // },
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

            data: [70, 75, 68, 80, 105, 120, 110, 70, 80, 60]
          },
          {
            name: "Max",

            type: "line",
            color: "#ce2157",
            data: [105, 105, 105, 105, 105, 105, 105, 105, 105, 105]
          },
          {
            name: "Min",
            color: "#58595b",
            type: "line",
            data: [70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70],
            markPoint: {}
          }
        ]
      };

      option && myChart.setOption(option);
    },
    twenty() {
      var chartDom = document.getElementById("main20");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "SPO2",
          left: "left",
          top: "top"
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

    a1() {
      var chartDom = document.getElementById("a1");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        // title: {
        //   text: "HR",
        //   left: "left",
        //   top: "top"
        // },
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
        // legend: {
        //   data: ["test result", "highest value", "minimum value"]
        // },
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

            data: [65, 70, 68, 78, 70, 60, 80, 70, 70, 90]
          },
          {
            name: "Max",

            type: "line",
            color: "#ce2157",
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
          },
          {
            name: "Min",
            color: "#58595b",
            type: "line",
            data: [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
            markPoint: {}
          }
        ]
      };

      option && myChart.setOption(option);
    },
    a2() {
      var chartDom = document.getElementById("a2");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        // title: {
        //   text: "SPO2",
        //   left: "left",
        //   top: "top"
        // },
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
        // legend: {
        //   data: ["test result", "highest value", "minimum value"]
        // },
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

            data: [100, 110, 108, 110, 115, 120, 123, 125, 135, 136]
          },
          {
            name: "Max",

            type: "line",
            color: "#ce2157",
            data: [120, 120, 120, 120, 120, 120, 120, 120, 120, 120]
          },
          {
            name: "Min",
            color: "#58595b",
            type: "line",
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
            markPoint: {}
          }
        ]
      };

      option && myChart.setOption(option);
    },
    a3() {
      var chartDom = document.getElementById("a3");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        // title: {
        //   text: "SPO2",
        //   left: "left",
        //   top: "top"
        // },
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
        // legend: {
        //   data: ["test result", "highest value", "minimum value"]
        // },
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

            data: [45, 48, 50, 52, 55, 61, 62, 64, 66, 66]
          },
          {
            name: "Max",

            type: "line",
            color: "#ce2157",
            data: [70, 70, 70, 70, 70, 70, 70, 70, 70, 70]
          },
          {
            name: "Min",
            color: "#58595b",
            type: "line",
            data: [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
            markPoint: {}
          }
        ]
      };

      option && myChart.setOption(option);
    },
    a4() {
      var chartDom = document.getElementById("a4");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        // title: {
        //   text: "SPO2",
        //   left: "left",
        //   top: "top"
        // },
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
        // legend: {
        //   data: ["test result", "highest value", "minimum value"]
        // },
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

            data: [0.158, 0.19, 0.25, 0.3, 0.4, 0.18, 0.56, 0.2, 0.34, 0.3]
          },
          {
            name: "Max",

            type: "line",
            color: "#ce2157",
            data: [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4]
          },
          {
            name: "Min",
            color: "#58595b",
            type: "line",
            data: [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2],
            markPoint: {}
          }
        ]
      };

      option && myChart.setOption(option);
    },
    a5() {
      var chartDom = document.getElementById("a5");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        // title: {
        //   text: "SPO2",
        //   left: "left",
        //   top: "top"
        // },
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
        // legend: {
        //   data: ["test result", "highest value", "minimum value"]
        // },
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

            data: [7.5, 5, 6.8, 4.8, 8.4, 3, 6, 12, 10, 8]
          },
          {
            name: "Max",

            type: "line",
            color: "#ce2157",
            data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
          },
          {
            name: "Min",
            color: "#58595b",
            type: "line",
            data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            markPoint: {}
          }
        ]
      };

      option && myChart.setOption(option);
    },
    a6() {
      var chartDom = document.getElementById("a6");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        // title: {
        //   text: "SPO2",
        //   left: "left",
        //   top: "top"
        // },
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
        // legend: {
        //   data: ["test result", "highest value", "minimum value"]
        // },
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
    a7() {
      var chartDom = document.getElementById("a7");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
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
        // // },
        // legend: {
        //   data: ["test result", "highest value", "minimum value"]
        // },
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

            data: [0.45, 0.5038, 0.68, 0.48, 0.844, 0.3, 0.6, 0.2, 0.4, 0.5038]
          },
          {
            name: "Max",

            type: "line",
            color: "#ce2157",
            data: [
              0.5038,
              0.5038,
              0.5038,
              0.5038,
              0.5038,
              0.5038,
              0.5038,
              0.5038,
              0.5038,
              0.5038
            ]
          },
          {
            name: "Min",
            color: "#58595b",
            type: "line",
            data: [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4],
            markPoint: {}
          }
        ]
      };

      option && myChart.setOption(option);
    },
    a8() {
      var chartDom = document.getElementById("a8");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
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
            data: [4.6, 7.8, 5.9, 4.5, 7.4, 8, 5.6, 2.9, 3.8, 5.7]
          },
          {
            name: "Max",

            type: "line",
            color: "#ce2157",
            data: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
          },
          {
            name: "Min",
            color: "#58595b",
            type: "line",
            data: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            markPoint: {}
          }
        ]
      };

      option && myChart.setOption(option);
    },
    a9() {
      var chartDom = document.getElementById("a9");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        // title: {
        //   text: "SPO2",
        //   left: "left",
        //   top: "top"
        // },
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
        // legend: {
        //   data: ["test result", "highest value", "minimum value"]
        // },
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

            data: [70, 75, 68, 80, 105, 120, 110, 70, 80, 60]
          },
          {
            name: "Max",

            type: "line",
            color: "#ce2157",
            data: [105, 105, 105, 105, 105, 105, 105, 105, 105, 105]
          },
          {
            name: "Min",
            color: "#58595b",
            type: "line",
            data: [70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70],
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
    // this.four();
    this.five();
    this.six();
    this.seven();
    this.eight();
    this.nine();
    this.ten();
    // this.eleven();
    this.eleven();
    this.tweven();
    this.thirteen();
    this.fourteen();
    this.fiveteen();
    this.sixteen();
    this.seventeen();
    this.eighteen();
    this.nineteen();
    // this.twenty();
    this.a1();
    this.a2();
    this.a3();
    this.a4();
    this.a5();
    this.a6();
    this.a7();
    this.a8();
    this.a9();
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
  height: 30px;
  margin-left: 15px;
}
.foot-1 {
  height: 310px;
}
#ss,
#main11,
#main12,
#main13,
#main14,
#main15,
#main16,
#main17,
#main18,
#main19 {
  height: 310px;
  width: 614px;
}
#a1,
#a2,
#a3,
#a4,
#a5,
#a6,
#a7,
#a8,
#a9 {
  height: 310px;
  width: 614px;
}
#main20 {
  height: 310px;
  width: 614px;
}
.hover {
  font-size: 14px;
  width: 610px;
  /* display: none; */
  line-height: 14px;
  background: #e9eef3;
  position: absolute;
  top: 30px;
}
.bib1 {
  position: relative;
}
.bt1 {
  position: absolute;
  bottom: 5px;
  right: 20px;
}
</style>