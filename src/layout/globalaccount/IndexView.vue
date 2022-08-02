<template>
<!-- 全局账号管理 Global account management  -->
  <div class="hospital">
    <el-row style="float:left">
      <router-link to="/globalaccountadd" style="text-decoration: none; color: white">
        <el-button type="primary" class="btnglo1" :style="selfstyle" plain style="float: left; text-align: center;"
          >{{ $t("m.add") }} Account
        </el-button>
      </router-link>
    </el-row>
     <el-input
          v-model="search"
          size="mini"
          style="width:20%;float:right"
          :placeholder="$t('m.ekts')"/>
    <!-- <template>
  <el-select v-model="value" filterable placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template> -->

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" :label="$t('m.accountid')" width="100">

      </el-table-column><el-table-column prop="admin" :label='$t("m.rolename")'  width="200">
          <template slot-scope="scope">
            <el-tag >{{scope.row.role}}</el-tag>
          </template>
      </el-table-column>
      <el-table-column prop="admin" :label='$t("m.username")'  width="200">
      </el-table-column>
      
      <el-table-column prop="name" :label='$t("m.email")' width="200">
        
      </el-table-column>

      <el-table-column prop="pas" :label='$t("m.password")' width="200">
        
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
      search:'',
      selfstyle: {
					color: "white",
          width:'120px',
          height:'40px',
          backgroundColor: "#eb5350",
          border:'none'
        },
      
      tableData: [
        {
          date: "1",
          name: "coconut@outlook.com",
          admin: "Ada ",
          role:'Global Role',
          pas:'*********'
        },
        {
          date: "2",
          name: "smithereens@outlook.com",
          admin: "Carry ",
          role:'Global Role',
          pas:'*********'
        },
        {
          date: "3",
          name: "zing@outlook.com",
          admin: " Amy ",
          role:'Hospital Role',
          pas:'*********'
        },
        {
          date: "4",
          name: "gazebo@outlook.com",
          admin: " Angela ",
          role:'Hospital Role',
          pas:'*********'
        },
        {
          date: "5",
         name: "umbrella@outlook.com",
          admin: " Cindy ",
          role:'Doctor Role',
          pas:'*********'
        },
         {
          date: "6",
          name: "bubble @outlook.com",
          role:'Nurse Role',
          admin: "Lrene ",
          pas:'*********'
        },
        {
          date: "7",
          name: "destiny@outlook.com",
          role:'Doctor Role',
          admin: "Edith ",
          pas:'*********'
        },
        {
          date: "8",
          name: "galaxy@outlook.com",
          role:'Paitent Role',
          admin: " Mandy ",
          pas:'*********'
        },
        {
          date: "9",
          name: " grace@outlook.com",
          role:'Paitent Role',
          admin: " Susan ",
          pas:'*********'
        }
      ],
    };
  },
};
</script>

<style scopted>
.personal { 
  width: 75%;
}
.btnglo1:hover{
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