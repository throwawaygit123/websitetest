<template>
  <div class="hospital">
    <el-row style="float:left">
      <router-link to="/hospitaladd" style="text-decoration: none; color: white">
        <el-button type="primary" :style="selfstyle" class="btnhos1" plain style="float: left; text-align: center;"
          >{{ $t("m.add") }} Hospital
        </el-button>
      </router-link>
    </el-row>
          <el-input
          v-model="search"
          size="mini"
          style="width:20%;float:right"
          :placeholder="$t('m.ekts')"/>
    <el-table :data="tableData" border style="width: 100%">
        
      <el-table-column prop="date" :label="$t('m.hospitalid')" width="130">
      </el-table-column>
      <el-table-column prop="num" :label="$t('m.hospitalnumber')" width="150">
      </el-table-column>
      <!-- <el-table-column prop="name" label="Role(角色)" width="200"> </el-table-column> -->
      <el-table-column prop="admin" :label="$t('m.hospitalname')" width="250">
      </el-table-column>
      <el-table-column prop="name" :label="$t('m.address')" width="180">
        
      </el-table-column>
       <el-table-column prop="payment" :label="$t('m.subscription')" width="200">
        <router-link to="addv2">
          <template>
            <el-tag type="success">{{ $t("m.clicktoview") }}</el-tag>
          </template>
        </router-link>
          
        
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
          width:'120px',
          height:'40px',
          backgroundColor: "#eb5350",
          border:'none'
				},
      tableData: [
        {
          num:'77524258',
          date: "1",
          name: "75 Huanghe Road",
          admin: "First Affiliated Hospital",
        },
        {
          num:'9823547',
          date: "2",
          name: "34 Jinji Road",
          admin: "Second Affiliated Hospital",
        },
        {
          num:'5157558',
          date: "3",
          name: "265 Jinsha Lake",
          admin: "The Third Affiliated Hospital",
        },
        {
          num:'96424258',
          date: "4",
          name: "63 Jucai Road",
          admin: "The Fourth Affiliated Hospital",
        },
        {
          num:'77511458',
          date: "5",
          name: "586 Yingbin Road",
          admin: "The Fourth Affiliated Hospital",
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
.btnhos1:hover{
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
/* .el-main{
    line-height: 0px;
}
.el-pagination.is-background .el-pager li:not(.disabled).active{
  background-color: #14a17e;
} */
</style>