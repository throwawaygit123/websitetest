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
          name: "SV",
          num: "[0.06,0.12]",
          num1:'0.67',
          result:'good',
          string:'Stroke volume(SV)is the volume of blood pumped from one ventricle of the heart with each beat'
        },
        {
          date: "2",
          name: "CO",
          num: "[4,8]",
          num1:'5',
          result:'good',

          string:'The normal cardiac output (CO)consists of the amount of blood that pumps the heart per minute...'


        },
        {
          date: "3",
          name: "PPGF",
         num: "[0.4,0.53]",
          num1:'0.2',
          result:'good',
          string:'The PPG fiftness index (PPGF)as an index of vascular risk and vascular aging is based upon...'
        },
        {
          date: "4",
          name: "CHD",
          num: "[0.1,0.4]",
          num1:'0.2',
          result:'good',
          string:'Coronary Heart Disease risk factor (CHD)is an index used to predict the prevalence or occurrence...'


        },
        {
          date: "5",
          name: "TPR",
          num: "[13.13,17.5]",
          num1:'15',
          result:'good',
          string:'Total peripheral resistance (TPR)is defined as the total resistance to flow of blood in the systemic circulation...'


        },
        {
          date: "6",
          name: "A-CIMT",
         num: "[0.47,1.29]",
          num1:'1',
          result:'good',
          string:'Average Coronary Carotid Intima-Media Thickness aids(A-CIMT)the classification between soft and...'
        },

       
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