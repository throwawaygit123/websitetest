<template>
  <div class="result">
    <el-row style="float:left;width:500px">
      <p style="float:left;display:inline-block;width:200px;line-height:normal;font-weight:700;">Cora</p>
    </el-row>
    <el-row style="float:right;margin-bottom:15px;width:250">
      <router-link to="/historytest" style="text-decoration: none; color: white">
        <el-button type="primary" plain style="float:left; text-align: center;display:block;">{{ $t("m.historytest") }}</el-button>
      </router-link>
      <el-button type="primary" plain style="float:left; text-align: center;display:block;margin-left:5px">{{ $t("m.downall") }}</el-button>
    </el-row>
 

    <el-table :data="tableData" border style="width: 100%;">
      <el-table-column prop="date" :label="$t('m.date')" width="350"></el-table-column>
      <!-- <el-table-column prop="name" label="Role(角色)" width="200"> </el-table-column> -->
      <!-- <el-table-column prop="name" :label="$t('m.patientidname')" width="300"></el-table-column> -->
      <el-table-column prop="name" :label="$t('m.results')" width="350">
        <router-link to="resultw">
          <template>
            <el-tag type="success">{{ $t("m.viewdetails") }}</el-tag>
          </template>
        </router-link>
      </el-table-column>

      <el-table-column prop="address" :label="$t('m.operation')" >
        <template slot-scope="scope">
          <!-- <el-button
            size="mini"
            type="success"
            @click="handleEdit(scope.$index, scope.row)"
          >{{ $t("m.examine") }}</el-button> -->
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >{{ $t("m.delete") }}</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      style="margin-top:20px;float:left"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2021-10-5 11:00(am)",
          name: "Cora",
          admin: "First Affiliated Hospital"
        },
        {
          date: "2021-10-6 11:00(am)",
          name: "Debbie",
          admin: "Second Affiliated Hospital"
        },
        {
          date: "2021-10-7 11:00(am)",
          name: "Bonnie",
          admin: "The Third Affiliated Hospital"
        },
        {
          date: "2021-10-8 11:00(am)",
          name: "Candice",
          admin: "The Fourth Affiliated Hospital"
        },
        {
          date: "2021-10-9 11:00(am)",
          name: "Wesley",
          admin: "The Fourth Affiliated Hospital"
        },
        {
          date: "2021-10-11 11:00(am)",
          name: "Bonnie",
          admin: "The Third Affiliated Hospital"
        },
        {
          date: "2021-10-12 11:00(am)",
          name: "Candice",
          admin: "The Fourth Affiliated Hospital"
        },
        {
          date: "2021-10-13 11:00(am)",
          name: "Wesley",
          admin: "The Fourth Affiliated Hospital"
        }
      ]
    };
  }
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