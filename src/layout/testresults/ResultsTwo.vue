<template>
  <div class="hospital">
    <el-row style="float:left;width:500px">
      <p style="float:left;display:inline-block;width:200px;line-height:normal; font-weight:700;">2021-10-5 11:00(am)</p>
    </el-row>
    <el-row style="float:right;margin-bottom:15px;width:250">
      
      <el-button type="primary" plain style="float:left; text-align: center;display:block;margin-left:5px" class="btntest2" :style="selfstyle">{{ $t("m.down") }}</el-button>
    </el-row>
    <el-table :data="tableData" border style="width: 100%">
      <!-- v-for="(item,index) in tableData" :key="index" -->
      <el-table-column label="GROUP1">
        <el-table-column prop="name" :label="$t('m.parametername')" width="170"></el-table-column>
        <el-table-column prop="num" :label="$t('m.parameterrange')" width="150"></el-table-column>

        <el-table-column prop="num1" :label="$t('m.parametervalue')" width="150">
          <template slot-scope="scope">
            <el-button
              size="mini"
              v-if="scope.row.result==='Great'"
              style="color:black;"
              type="success"
              disable-transitions
            >{{scope.row.num1}}</el-button>
            <el-button
              size="mini"
              v-if="scope.row.result==='Good'"
              style="background:yellow;color:black; border:1px solid white;"
              disable-transitions
            >{{scope.row.num1}}</el-button>
            <el-button
              size="mini"
              v-if="scope.row.result==='Bad'"
              style="color:black;"
              type="warning"
              disable-transitions
            >{{scope.row.num1}}</el-button>
            <el-button
              size="mini"
              v-if="scope.row.result==='Very Bad'"
              style="color:black;"
              type="danger"
              disable-transitions
            >{{scope.row.num1}}</el-button>
          </template>
        </el-table-column>

        <el-table-column prop="string" :label="$t('m.arameterdescription')" width="350"></el-table-column>

        <el-table-column prop="result" :label="$t('m.parameterresults')"></el-table-column>
      </el-table-column>
    </el-table>

    <el-table :data="tableData1" border style="width: 100%;margin-top:30px">
      <!-- v-for="(item,index) in tableData" :key="index" -->
      <el-table-column label="GROUP2">
        <el-table-column prop="name" :label="$t('m.parametername')" width="170"></el-table-column>
        <el-table-column prop="num" :label="$t('m.parameterrange')" width="150"></el-table-column>

        <el-table-column prop="num1" :label="$t('m.parametervalue')" width="150">
          <template slot-scope="scope">
            <el-button
              size="mini"
              v-if="scope.row.result==='Great'"
              type="success"
              disable-transitions
            >{{scope.row.num1}}</el-button>
            <el-button
              size="mini"
              v-if="scope.row.result==='Good'"
              style="background:yellow;color:black; border:1px solid white;"
              disable-transitions
            >{{scope.row.num1}}</el-button>

            <el-button
              size="mini"
              v-if="scope.row.result==='Bad'"
              type="warning"
              disable-transitions
            >{{scope.row.num1}}</el-button>
            <el-button
              size="mini"
              v-if="scope.row.result==='Very Bad'"
              type="danger"
              disable-transitions
            >{{scope.row.num1}}</el-button>
          </template>
        </el-table-column>

        <el-table-column prop="string" :label="$t('m.arameterdescription')" width="350"></el-table-column>

        <el-table-column prop="result" :label="$t('m.parameterresults')"></el-table-column>
      </el-table-column>
    </el-table>

    <el-table :data="tableData2" border style="width: 100%;margin-top:30px">
      <!-- v-for="(item,index) in tableData" :key="index" -->
      <el-table-column label="GROUP3">
        <el-table-column prop="name" :label="$t('m.parametername')" width="170"></el-table-column>
        <el-table-column prop="num" :label="$t('m.parameterrange')" width="150"></el-table-column>

        <el-table-column prop="num1" :label="$t('m.parametervalue')" width="150">
          <template slot-scope="scope">
            <el-button
              size="mini"
              v-if="scope.row.result==='Great'"
              type="success"
              disable-transitions
            >{{scope.row.num1}}</el-button>
            <el-button
              size="mini"
              v-if="scope.row.result==='Good'"
              style="background:yellow;color:black; border:1px solid white;"
              disable-transitions
            >{{scope.row.num1}}</el-button>

            <el-button
              size="mini"
              v-if="scope.row.result==='Bad'"
              type="warning"
              disable-transitions
            >{{scope.row.num1}}</el-button>
            <el-button
              size="mini"
              v-if="scope.row.result==='Very Bad'"
              type="danger"
              disable-transitions
            >{{scope.row.num1}}</el-button>
          </template>
        </el-table-column>

        <el-table-column prop="string" :label="$t('m.arameterdescription')" width="350"></el-table-column>

        <el-table-column prop="result" :label="$t('m.parameterresults')"></el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
       selfstyle: {
					color: "white",
          width:'100px',
          height:'40px',
          backgroundColor: "#eb5350",
          border:'none'
				},
      // dd:'dcd0',
      tableData: [
        {
          date: 1,
          name: "HR",
          num: "[60,100]",
          num1: "60",
          result: "Good",
          string:
            "Heart Rate(HR),The number of contractions of the cardiac ventricles per unit of time (usually per..."
        },
        {
          date: 2,
          name: "SP",
          num: "[100,120]",
          num1: "110",
          result: "Great",

          string:
            "The Systolic Blood Pressure(SP) is the highest arterial blood pressure of a cardiac cycle..."
        },
        {
          date: 3,
          name: "DP",
          num: "[60,70]",
          num1: "60",
          result: "Good",

          string:
            "The Diastolic Blood Pressure(DP) definition refers to the least or lowest pressure exerted on..."
        },
        {
          date: 4,
          name: "SPO2",
          num: "[0.2,0.4]",
          num1: "0.1",
          result: "Bad",

          string:
            "Blood Oxygen Saturation(SpO2)refers to the percentage amount of oxygen in the blood..."
        },
        {
          date: 5,
          name: "PWV",
          num: "[5,10]",
          num1: "4",
          result: "Bad",

          string:
            "Pulse wave velocity (PWV) is the Velocity at which the blood pressure pulse propagates..."
        },
        {
          date: 6,
          name: "PI",
          num: "[60,70]",
          num1: "55",
          result: "Very Bad",

          string:
            "The Diastolic Blood Pressure(DP) definition refers to the least or lowest pressure exerted on..."
        },
        {
          date: 7,
          name: "PPT",
          num: "[0.2,0.4]",
          num1: "0.3",
          result: "Great",

          string:
            "Pulse Transit Time(PTT) is a measurement of the time it takes for the heart pulse wave to travel..."
        },
        {
          date: 8,
          name: "AIC",
          num: "[100,120]",
          num1: "115",
          result: "Bad",

          string:
            "The Systolic Blood Pressure(SP) is the highest arterial blood pressure of a cardiac cycle..."
        },
        {
          date: 9,
          name: "SI",
          num: "[4,6]",
          num1: "5.8",
          result: "Great",

          string:
            "Arterial Stiffness Index(SI)is the conduction time difference and vascular tone of small arteries .The..."
        },
        {
          date: 10,
          name: "MAP",
          num: "[60,70]",
          num1: "70",
          result: "Good",

          string:
            "Mean arterial pressure(MAP)is an indication of global perfusion pressure necessary for organ..."
        }
      ],
      tableData1: [
        {
          date: 1,
          name: "PTT",
          num: "[0.2,0.4]",
          num1: "0.25",
          result: "Great",
          string:
            "Pulse Translt Time(PTT) is a measurement of the time it takes for the heart pulse wave to travel..."
        },
        {
          date: 2,
          name: "RI",
          num: "[0.2,0.6]",
          num1: "0.5",
          result: "Great",

          string:
            "Reflection Index(RI)indicates peripheral arterial stiffness and vascular tone of small arteries.The..."
        },
        {
          date: 3,
          name: "AGI",
          num: "[-0.7,0.3]",
          num1: "-1.9",
          result: "Very Bad",

          string:
            "Ageing Index(AGI)Values represents the 'vascular age',iearterial stiffness.The lower.."
        },
        {
          date: 4,
          name: "b/a index",
          num: "[-2,-1.35]",
          num1: "-1.35",
          result: "Good",
          string:
            "This index indicates the risk of occurrence of atherosclerosis and other cardiovascular diseases"
        },
        {
          date: 5,
          name: "EAA",
          num: "[5,10]",
          num1: "4",
          result: "Bad",

          string:
            "Estimated Arterial Age(EAA)glves an estimate of the age of the cardiovascular vessels based on..."
        },
        {
          date: 6,
          name: "VI",
          num: "[0.4462,1.848]",
          num1: "0.3",
          result: "Very Bad",

          string: "Vascular Index(VI)is a marker of arterial stiffness"
        },
        {
          date: 7,
          name: "CVD",
          num: "[0.2,0.4]",
          num1: "0.3",
          result: "Great",

          string:
            "Pulse Transit Time(PTT) is a measurement of the time it takes for the heart pulse wave to travel..."
        },
        {
          date: 8,
          name: "EVA",
          num: "[100,120]",
          num1: "115",
          result: "Bad",

          string:
            "The Systolic Blood Pressure(SP) is the highest arterial blood pressure of a cardiac cycle..."
        },
        {
          date: 9,
          name: "ADS",
          num: "[4,6]",
          num1: "5.8",
          result: "Great",

          string:
            "Arterial Stiffness Index(SI)is the conduction time difference and vascular tone of small arteries .The..."
        },
        {
          date: 10,
          name: "EVA",
          num: "[60,70]",
          num1: "70",
          result: "Good",

          string:
            "Mean arterial pressure(MAP)is an indication of global perfusion pressure necessary for organ..."
        },

        {
          date: 11,
          name: "BCA",
          num: "[0.2,0.4]",
          num1: "0.3",
          result: "Great",

          string:
            "Pulse Transit Time(PTT) is a measurement of the time it takes for the heart pulse wave to travel..."
        },
        {
          date: 12,
          name: "AEI",
          num: "[100,120]",
          num1: "115",
          result: "Bad",

          string:
            "The Systolic Blood Pressure(SP) is the highest arterial blood pressure of a cardiac cycle..."
        },
        {
          date: 13,
          name: "ETC",
          num: "[4,6]",
          num1: "5.8",
          result: "Great",

          string:
            "Arterial Stiffness Index(SI)is the conduction time difference and vascular tone of small arteries .The..."
        },
        {
          date: 14,
          name: "AIX",
          num: "[60,70]",
          num1: "70",
          result: "Good",

          string:
            "Mean arterial pressure(MAP)is an indication of global perfusion pressure necessary for organ..."
        },
        {
          date: 15,
          name: "AI",
          num: "[4,6]",
          num1: "5.8",
          result: "Great",

          string:
            "Arterial Stiffness Index(SI)is the conduction time difference and vascular tone of small arteries .The..."
        },
        {
          date: 15,
          name: "AASI",
          num: "[60,70]",
          num1: "70",
          result: "Good",

          string:
            "Mean arterial pressure(MAP)is an indication of global perfusion pressure necessary for organ..."
        }
      ],
      tableData2: [
        {
          date: 1,
          name: "ADS",
          num: "[60,100]",
          num1: "60",
          result: "Good",
          string:
            "Heart Rate(HR),The number of contractions of the cardiac ventricles per unit of time (usually per..."
        },
        {
          date: 2,
          name: "SV",
          num: "[0.06,0.12]",
          num1: "0.08",
          result: "Great",

          string:
            "Stroke volume(SV)is the volume of blood pumped from one ventrice of the heart with each beat."
        },
        {
          date: 3,
          name: "CO",
          num: "[4,8]",
          num1: "4",
          result: "Good",

          string:
            "The normal cardiac output(CO)consists of the amount of blood that pumps the heart per minute..."
        },
        {
          date: 4,
          name: "IMR",
          num: "[14,24]",
          num1: "10",
          result: "Bad",

          string:
            "Index of Microvascular Resistance(IMR)is a mesure of the degree of resistance encountered during flow in smaller arteries..."
        },
        {
          date: 5,
          name: "BVEI",
          num: "[0,8]",
          num1: "10",
          result: "Bad",

          string:
            "Blood vessel elastic index(BVEI)is a measure of how the blood vesseis respond to pulse pressure,and it is used as an..."
        },
        {
          date: 6,
          name: "SAEI",
          num: "[5.7,10.7]",
          num1: "4",
          result: "Very Bad",

          string:
            "Small artery elasticity index(SAEI)is a measure of the elasticity of small vessels in the body..."
        },
        {
          date: 7,
          name: "TPR",
          num: "[13.13,17.5]",
          num1: "0.3",
          result: "Great",

          string:
            "Total peripheral resistance(TPR)is defined as the total resistance to flow of blood in the systemic circulation."
        },
        {
          date: 8,
          name: "ACIMT",
          num: "[0.47,1.29]",
          num1: "0.2",
          result: "Bad",

          string:
            "Average Coronary Carotid Intima-Media Thicknesaids(A-CIMT)the classification between soft and..."
        },
        {
          date: 9,
          name: "PPGF",
          num: "[0.4,0.53]",
          num1: "0.48",
          result: "Great",

          string:
            "The PPG fitness index(PPGF)as an index of vascular risk and vascular aging is based upon a..."
        },
        {
          date: 10,
          name: "CHD",
          num: "[0.1,0.4]",
          num1: "0.1",
          result: "Good",

          string:
            "Coronary Heart Disease risk factor(CHD)is an index used to predict the prevalence or occurrence..."
        },
        {
          date: 11,
          name: "LCIMT",
          num: "[0.47,1.29]",
          num1: "1",
          result: "Great",

          string:
            "Left Coronary Carotid Intima-Media Thickness charactersises(L-CIMT)the readings from the left..."
        },
        {
          date: 12,
          name: "RCIMT",
          num: "[0.47,1.29]",
          num1: "1.29",
          result: "Good",

          string:
            "Right Coronary Carotid Intima-Media Thickness characterises(R-CIMT)the readings from the right..."
        }
      ]
    };
  }
};
</script>

<style>
.personal {
  width: 75%;
}
btntest2{
       color: white !important;
  /* border:none !important; */
  /* border:1px solid #999 !important; */
  border:1px solid #f5a9a8 !important;

  background-color: #f5a9a8 !important;
}
/* .el-main{
    line-height: 0px;
}
.el-pagination.is-background .el-pager li:not(.disabled).active{
  background-color: #14a17e;
} */
/* .el-table td.el-table__cell div{
    text-align: left !important;
} */
</style>