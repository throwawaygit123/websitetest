<template>
<!-- 角色管理 Role management-->
  <div class="role">
    <el-row style="float:left">
      <router-link to="/roleadd" style="text-decoration: none; color: white">
        <el-button type="primary" class="btnrole1" :style="selfstyle" plain style="float: left; text-align: center;">{{ $t("m.add") }} Role</el-button>
      </router-link>
    </el-row>
    <el-input
      v-model="search"
      size="mini"
      style="width:20%;float:right"
      :placeholder="$t('m.ekts')"
    />
    <el-table :data="tableData" border style="width: 100%" >
      <el-table-column prop="num" :label="$t('m.userid')" width="150"></el-table-column>
      <!-- <el-table-column prop="username" :label="$t('m.username')" width="250"></el-table-column> -->
      <el-table-column prop="rolename" :label="$t('m.rolename')" width="250"></el-table-column>

     

     <el-table-column prop="address" :label="$t('m.operation')">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
            {{
            $t("m.edit")
            }}
          </el-button>
          <el-button
            size="mini"
            type="success"
            @click="handleEdit(scope.$index, scope.row)"
          >{{ $t("m.examine") }}</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >{{ $t("m.delete") }}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>



<script>
export default {
  data() {
    return {
       selfstyle: {
					color: "white",
          width:'94px',
          height:'40px',
          backgroundColor: "#eb5350",
          border:'none'
				},
      tableData: [
        {
          num: 1,
          username: "Ada",
          rolename: "Global Role"
        },
        {
          num: 2,
          username: "Carry",
          rolename: "Global Role"
        },
        {
          num: 3,
          username: "Amy",
          rolename: "Global Role"
        },
        {
          num: 4,
          username: "Angela",
          rolename: "Global Role"
        },
        {
          num: 5,
          username: "Cindy",
          rolename: "Nurse Role"
        },
        {
          num: 6,
          username: "Albert",
          rolename: "Hospital Role"
        },
        {
          num: 7,
          username: "Andy",
          rolename: "Hospital Role"
        },
        {
          num: 8,
          username: "Edward",
          rolename: "Patient Role"
        },
        {
          num: 9,
          username: "Edwin",
          rolename: "Doctor Role"
        }
      ]
    };
  }
};
</script>

<style scoped>
.role {
  width: 100%;
  /* background-color: white; */
  /* padding: 5px 5px ; */
}
.btnrole1:hover{
 color: white !important;
  /* border:none !important; */
  /* border:1px solid #999 !important; */
  border:1px solid #f5a9a8 !important;

  background-color: #f5a9a8 !important;
}
/* .el-table .el-table__cell{
  text-align: center !important;
} */
/* .el-table .cell{
  text-align: center !important;

} */
/* .el-main {
  line-height: 10px;
}
.el-tag {
  background-color: #14a17e;
  color: white;
}
.el-button--success.is-plain {
  background-color: #14a17e;

  color: white;
}
.el-button--success {
  background-color: #14a17e;
} */

</style>