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
          name: "STI",
          num: "[40,150]",
          num1:'100',
          result:'good',
          string:'Stress Index(STI)reflects a degree of heart rhythm management...'
        },
        {
          date: "2",
          name: "IPA",
          num: "[0.1,0.5]",
          num1:'0.2',
          result:'good',

          string:'Left Vertricular Ejection Time(LVET)measures the period of blood flow across the aortic liplds...'


        },
        {
          date: "3",
          name: "LVET",
          num: "[0.27,0.43]",
          num1:'0.43',
          result:'good',
          string:'Left Ventricular Ejection Time(LVET)measures the period of blood flow across the aotic valve...'


        },
        {
          date: "4",
          name: "TC",
          num: "[150,200]",
          num1:'200',
          result:'good',
          string:'Total cholestrlo(TC)is measurement of your HDL and LDL cholesterol as well as other lipids...'


        },
        {
          date: "5",
          name: "HDL",
          num: "[40,60]",
          num1:'50',
          result:'good',
          string:'Higgh-density lipoprotein (HDL) is known as good cholesterol since it works as cholesterol...'


        },
        {
          date: "6",
          name: "LDL",
          num: "[70,130]",
          num1:'80',
          result:'good',
          string:'Low-denstity lipoprotein (LDL)is know as bad cholestrol since it works as cholesterol can...'       }
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