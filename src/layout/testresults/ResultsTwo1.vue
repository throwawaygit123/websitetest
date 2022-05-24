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
          name: "AGI",
          num: "[-0.7,0.3]",
          num1:'0.3',
          result:'good',
          string:'Ageing Index(AGI)Values represents the "Vasular age";arterial stiffness.The lower...'
        },
        {
          date: "2",
          name: "SI",
          num: "[4,6]",
          num1:'6',
          result:'good',

          string:'Arterial Stiffhess Index(SI)is the conduction time difference between the incedent wave and the...'


        },
        {
          date: "3",
          name: "RI",
         num: "[0.2,0.6]",
          num1:'0.4',
          result:'good',

          string:'Refiection Index(RI)indicates peripheral arterial stiffness and vascular tonde of smail arteries. The...'


        },
        {
          date: "4",
          name: "BD",
          num: "[0.1,0.5]",
          num1:'0.3',
          result:'good',

          string:'Distensibility(BD)measures the ability of the arteries to expand as a response to pulse...'


        },
        {
          date: "5",
          name: "CAC",
         num: "[-10,400]",
          num1:'110',
          result:'good',
          string:'Coronary artery caiclum score(CAC)is an atheroscierosis imaging test used to screen...'


        },
        {
          date: "6",
          name: "VI",
          num: "[0.4462,1.848]",
          num1:'0.8',
          result:'good',

          string:'Vascular Index(VI)is a maker of arterial stiffness...'       }
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