<template>
  <div class="hospital">
    <!-- <el-row style="float:left">
      <router-link to="/addv2" style="text-decoration: none; color: white">
        <el-button type="primary" plain style="float: left; text-align: center;">{{ $t("m.add") }}</el-button>
      </router-link>
    </el-row> -->
    <el-input
      v-model="search"
      size="mini"
      style="width:20%;float:right"
      :placeholder="$t('m.ekts')"
    />
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" :label="$t('m.date')" width="170"></el-table-column>
      <!-- <el-table-column prop="name" label="Role(角色)" width="200"> </el-table-column> -->
      <el-table-column prop="name" :label="$t('m.patientidname')" width="300"></el-table-column>
      <el-table-column prop="name" :label="$t('m.results')" width="200">
        <router-link to="resultso">
          <template>
            <el-tag type="success">{{ $t("m.clicktoview") }}</el-tag>
          </template>
        </router-link>
      </el-table-column>

      <el-table-column prop="address" :label="$t('m.operation')">
        <template slot-scope="scope">
          
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
          date: "2021-9-6",
          name: "Cora",
          admin: "First Affiliated Hospital"
        },
        {
          date: "2021-9-6",
          name: "Debbie",
          admin: "Second Affiliated Hospital"
        },
        {
          date: "2021-9-6",
          name: "Bonnie",
          admin: "The Third Affiliated Hospital"
        },
        {
          date: "2021-9-6",
          name: "Candice",
          admin: "The Fourth Affiliated Hospital"
        },
        {
          date: "2021-9-6",
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