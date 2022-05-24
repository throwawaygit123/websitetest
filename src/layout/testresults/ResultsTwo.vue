<template>
  <div class="hospital">
   
    <el-table :data="tableData" border style="width: 100%">
        

      <el-table-column prop="name" :label="$t('m.parametername')" width="170">
      </el-table-column>
      <!-- <el-table-column prop="name" label="Role(角色)" width="200"> </el-table-column> -->
      <el-table-column prop="num" :label="$t('m.parameterrange')" width="150">
      </el-table-column>
      <el-table-column prop="num1" :label="$t('m.parametervalue')" width="150">
        
      </el-table-column>
       <el-table-column prop="string" :label="$t('m.arameterdescription')" width="350" >
        
      </el-table-column>

   <el-table-column prop="result" :label="$t('m.parameterresults')"  >
        
      </el-table-column>

      <!-- <el-table-column prop="address" :label="$t('m.operation')" >
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >{{
            $t("m.edit")
          }}</el-button
          >
          <el-button size="mini" type="success" @click="handleEdit(scope.$index, scope.row)"
            >{{ $t("m.examine") }}</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >{{ $t("m.delete") }}</el-button
          >
        </template>
      </el-table-column> -->
    </el-table>


  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "1",
          name: "PWV",
          num: "[5,10]",
          num1:'8',
          result:'good',
          string:'Pulse wave velocity (PWV) is the Velocity at which the blood pressure pulse propagates...'
        },
        {
          date: "2",
          name: "PPI",
          num: "[0.5038,0.4]",
          num1:'0.47',
          result:'good',

          string:'Pressure Pulse Index (PPI) is a substitute marker of pulse pressure, and an assessment of...'


        },
        {
          date: "3",
          name: "HR",
         num: "[100,60]",
          num1:'80',
          result:'good',

          string:'Heart Rate(HR),The number of contractions of the cardiac ventricles per unit of time (usually per...'


        },
        {
          date: "4",
          name: "PTT",
          num: "[0.4,0.2]",
          num1:'0.3',
          result:'good',

          string:'Pulse Transit Time(PTT) is a measurement of the time it takes for the heart pulse wave to travel...'


        },
        {
          date: "5",
          name: "SP",
         num: "[120,100]",
          num1:'110',
          result:'good',

          string:'The Systolic Blood Pressure(SP) is the highest arterial blood pressure of a cardiac cycle...'


        },
        {
          date: "6",
          name: "DP",
          num: "[70,60]",
          num1:'65',
          result:'good',

          string:'The Diastolic Blood Pressure(DP) definition refers to the least or lowest pressure exerted on...'       }
      ],
    };
  },
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