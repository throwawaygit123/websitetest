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
          name: "MR",
          num: "[79,100]",
          num1:'88',
          result:'good',
          string:'Microcirculation(MR) is a manifestation of vasular elasticity,and vascular elastictity is an important charaacteristic to maintain...'
        },
        {
          date: "2",
          name: "IMR",
          num: "[14,24]",
          num1:'20',
          result:'good',

          string:'Index of Microvascular Resistance(IMR)is a mesure of the degree of resistance encountered during flow in smaller arteries...'


        },
        {
          date: "3",
          name: "BVEI",
         num: "[0,8]",
          num1:'3',
          result:'good',

          string:'Blood vessel elastice index(BVEI)is a measure of how the blood vesseis resppond to pulse pressure ,and it is used as an...'


        },
        {
          date: "4",
          name: "SAEI",
          num: "[5.7,10.7]",
          num1:'3',
          result:'good',

          string:'Small at=rtery elasticity index(SAEI)is a measure of the elastictity of small vessels in the body...'


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