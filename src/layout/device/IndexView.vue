<template>
  <div class="hospital">
    <el-row style="float:left">
      <router-link to="/deviceadd" style="text-decoration: none; color: white">
        <el-button :style="selfstyle" class="btndev" type="primary" plain style="float: left; text-align: center;"
          >{{ $t("m.add") }}
        </el-button>
      </router-link>
    </el-row>
          <el-input
          v-model="search"
          size="mini"
          style="width:20%;float:right"
          :placeholder="$t('m.ekts')"/>
    <el-table :data="tableData" border style="width: 100%">
        

      <el-table-column prop="date" :label="$t('m.deviceid')" width="170">
      </el-table-column>
      <!-- <el-table-column prop="name" label="Role(角色)" width="200"> </el-table-column> -->
      <el-table-column prop="admin" :label="$t('m.devicename')" width="300">
      </el-table-column>
      <el-table-column prop="num" :label="$t('m.portnumber')" width="200">
        
      </el-table-column>

   

      <el-table-column prop="address" :label="$t('m.operation')" >
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
      </el-table-column>
    </el-table>

    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      style="margin-top:20px;float:left"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selfstyle: {
					color: "white",
          width:'67px',
          height:'40px',
          backgroundColor: "#eb5350",
          border:'none'
				},
      tableData: [
        {
          date: "1",
          num: "000000010",
          admin: "Oxygen machine",
        },
        {
          date: "2",
          num: "000000012",
          admin: "thermometer",
        },
        {
          date: "3",
          num: "000000013",
          admin: "Sphygmomanometer",
        },
        {
          date: "4",
         num: "000000014",
          admin: "Blood glucose machine",
        },
        {
          date: "5",
         num: "000000015",
          admin: "Percutaneous detector",
        }
      ],
    };
  },
};
</script>

<style scoped>
.personal { 
  width: 75%;
}
/* .el-main{
    line-height: 0px;
}
.el-pagination.is-background .el-pager li:not(.disabled).active{
  background-color: #14a17e;
} */
.btndev:hover{
   color: white !important;
  /* border:none !important; */
  /* border:1px solid #999 !important; */
  border:1px solid #f5a9a8 !important;

  background-color: #f5a9a8 !important;
}
.el-pagination.is-background .el-pager li:not(.disabled).active{

  background-color: #eb5350 !important;
}
.el-pager li:hover{
  color:#f5a9a8 !important;
}
</style>