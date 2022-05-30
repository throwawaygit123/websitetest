<template>
  <div class="hospital">
    <el-row style="float:left">
      <router-link to="/globalaccountadd" style="text-decoration: none; color: white">
        <el-button type="primary" plain style="float: left; text-align: center;"
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
      <el-table-column prop="date" :label="$t('m.accountid')" width="100">

      </el-table-column><el-table-column prop="admin" :label='$t("m.rolename")'  width="200">
          <template slot-scope="scope">
            <el-tag>{{scope.row.role}}</el-tag>
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
</style>