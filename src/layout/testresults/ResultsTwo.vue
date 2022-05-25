<template>
  <div class="hospital">
    <el-table :data="tableData" border style="width: 100%">
      <!-- v-for="(item,index) in tableData" :key="index" -->
      <el-table-column prop="name" :label="$t('m.parametername')" width="170"></el-table-column>
      <el-table-column prop="num" :label="$t('m.parameterrange')" width="150"></el-table-column>

      <el-table-column prop="num1" :label="$t('m.parametervalue')" width="150">

        <template slot-scope="scope">
          <el-tag v-if="scope.row.result==='Good'" type="success" disable-transitions>{{scope.row.num1}}</el-tag>
          <el-tag v-if="scope.row.result==='Great'" type="primary" disable-transitions>{{scope.row.num1}}</el-tag>
          <el-tag v-if="scope.row.result==='Bad'" type="danger" disable-transitions>{{scope.row.num1}}</el-tag>
          <el-tag v-if="scope.row.result==='Very Bad'" type="warning" disable-transitions>{{scope.row.num1}}</el-tag>
         
        </template>
      </el-table-column>

      <el-table-column prop="string" :label="$t('m.arameterdescription')" width="350"></el-table-column>

      <el-table-column prop="result" :label="$t('m.parameterresults')"></el-table-column>
    </el-table>

     <el-table :data="tableData" border style="width: 100%;margin-top:30px">
      <!-- v-for="(item,index) in tableData" :key="index" -->
      <el-table-column prop="name" :label="$t('m.parametername')" width="170"></el-table-column>
      <el-table-column prop="num" :label="$t('m.parameterrange')" width="150"></el-table-column>

      <el-table-column prop="num1" :label="$t('m.parametervalue')" width="150">

        <template slot-scope="scope">
          <el-tag v-if="scope.row.result==='Good'" type="success" disable-transitions>{{scope.row.num1}}</el-tag>
          <el-tag v-if="scope.row.result==='Great'" type="primary" disable-transitions>{{scope.row.num1}}</el-tag>
          <el-tag v-if="scope.row.result==='Bad'" type="danger" disable-transitions>{{scope.row.num1}}</el-tag>
          <el-tag v-if="scope.row.result==='Very Bad'" type="warning" disable-transitions>{{scope.row.num1}}</el-tag>
         
        </template>
      </el-table-column>

      <el-table-column prop="string" :label="$t('m.arameterdescription')" width="350"></el-table-column>

      <el-table-column prop="result" :label="$t('m.parameterresults')"></el-table-column>
    </el-table>

    <el-table :data="tableData" border style="width: 100%;margin-top:30px">
      <!-- v-for="(item,index) in tableData" :key="index" -->
      <el-table-column prop="name" :label="$t('m.parametername')" width="170"></el-table-column>
      <el-table-column prop="num" :label="$t('m.parameterrange')" width="150"></el-table-column>

      <el-table-column prop="num1" :label="$t('m.parametervalue')" width="150">

        <template slot-scope="scope">
          <el-tag v-if="scope.row.result==='Good'" type="success" disable-transitions>{{scope.row.num1}}</el-tag>
          <el-tag v-if="scope.row.result==='Great'" type="primary" disable-transitions>{{scope.row.num1}}</el-tag>
          <el-tag v-if="scope.row.result==='Bad'" type="danger" disable-transitions>{{scope.row.num1}}</el-tag>
          <el-tag v-if="scope.row.result==='Very Bad'" type="warning" disable-transitions>{{scope.row.num1}}</el-tag>
         
        </template>
      </el-table-column>

      <el-table-column prop="string" :label="$t('m.arameterdescription')" width="350"></el-table-column>

      <el-table-column prop="result" :label="$t('m.parameterresults')"></el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  data() {
    return {
      // dd:'dcd0',
      tableData: [
        {
          date: 1,
          name: "HR",
          num: "[100,60]",
          num1: "65",
          result: "Good",
          string:
            "Heart Rate(HR),The number of contractions of the cardiac ventricles per unit of time (usually per..."
        },
        {
          date: 2,
          name: "SP",
          num: "[120,100]",
          num1: "110",
          result: "Great",

          string:
            "The Systolic Blood Pressure(SP) is the highest arterial blood pressure of a cardiac cycle..."
        },
        {
          date: 3,
          name: "DP",
          num: "[70,60]",
          num1: "60",
          result: "Good",

          string:
            "The Diastolic Blood Pressure(DP) definition refers to the least or lowest pressure exerted on..."
        },
        {
          date: 4,
          name: "SPO2",
          num: "[0.4,0.2]",
          num1: "0.3",
          result: "Bad",

          string:
            "Blood Oxygen Saturation(SpO2)refers to the percentage amount of oxygen in the blood..."
        },
        {
          date: 5,
          name: "PWV",
          num: "[5,10]",
          num1: "3",
          result: "Bad",

          string:
            "Pulse wave velocity (PWV) is the Velocity at which the blood pressure pulse propagates..."
        },
        {
          date: 6,
          name: "PI",
          num: "[70,60]",
          num1: "65",
          result: "Very Bad",

          string:
            "The Diastolic Blood Pressure(DP) definition refers to the least or lowest pressure exerted on..."
        }
        ,
        {
          date: 7,
          name: "PPT",
          num: "[0.4,0.2]",
          num1: "0.3",
          result: "Great",

          string:
            "Pulse Transit Time(PTT) is a measurement of the time it takes for the heart pulse wave to travel..."
        },
        {
          date: 8,
          name: "AIC",
          num: "[120,100]",
          num1: "110",
          result: "Bad",

          string:
            "The Systolic Blood Pressure(SP) is the highest arterial blood pressure of a cardiac cycle..."
        },
        {
          date: 9,
          name: "SI",
          num: "[70,60]",
          num1: "65",
          result: "Very Bad",

          string:
            "The Diastolic Blood Pressure(DP) definition refers to the least or lowest pressure exerted on..."
        },
        {
          date: 10,
          name: "MAP",
          num: "[70,60]",
          num1: "65",
          result: "Good",

          string:
            "Mean arterial pressure(MAP)is an indication of global perfusion pressure necessary for organ..."
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