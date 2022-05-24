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
          name: "b/a Index",
          num: "[-2,-1.35]",
          num1:'-1.35',
          result:'good',
          string:'This index indecates the risk of occurrence of atheroscis and other cardiovascular diseases...'
        },
        {
          date: "2",
          name: "HbA1C",
          num: "[4.6,5.7]",
          num1:'4.8',
          result:'good',

          string:'HbA1c is the average blood glucose(sugar) levels usually within a period between the last three months,Also know as glycated haemeglobin,it give the probability of the...'


        },
        {
          date: "3",
          name: "mPAD1",
         num: "[1,1.4]",
          num1:'1.3',
          result:'good',
          string:'The Modified PAD Index 1 (mPAD1)is a measure of the degree to which peripheral arterries(ankie-brachial)are in good health condition'
        },
        {
          date: "4",
          name: "mPAD2",
          num: "[0.7,1.4]",
          num1:'0.8',
          result:'good',
          string:'The Modified PAD Index 2 is a measure of the degree to which peripheral arteries(toe-brachial) are in good health condition'


        },
        // {
        //   date: "5",
        //   name: "SP",
        //  num: "[120,100]",
        //   num1:'110',
        //   result:'good',

        //   string:'The Systolic Blood Pressure(SP) is the highest arterial blood pressure of a cardiac cycle...'


        // },
        // {
        //   date: "6",
        //   name: "DP",
        //   num: "[70,60]",
        //   num1:'65',
        //   result:'good',

        //   string:'The Diastolic Blood Pressure(DP) definition refers to the least or lowest pressure exerted on...'       }
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