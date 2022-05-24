<template>
  <div class="role">
    <el-row style="float:left">
      <router-link to="/roleadd" style="text-decoration: none; color: white">
        <el-button type="primary" plain style="float: left; text-align: center;">{{ $t("m.add") }}</el-button>
      </router-link>
    </el-row>
    <el-input
      v-model="search"
      size="mini"
      style="width:20%;float:right"
      :placeholder="$t('m.ekts')"
    />
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="num" :label="$t('m.userid')" width="100"></el-table-column>
      <el-table-column prop="username" :label="$t('m.username')" width="200"></el-table-column>
      <el-table-column prop="rolename" :label="$t('m.rolename')" width="200"></el-table-column>

      <el-table-column prop="type" :label="$t('m.state')" width="250">
        <template>
          <el-tag type="success">{{ $t("m.enable") }}</el-tag>
        </template>
      </el-table-column>
      <!-- <el-table-column prop="address" width="300" label="地址">
      </el-table-column>-->

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
      tableData: [
        {
          num: 1,
          username: "Ada",
          rolename: "Global Account"
        },
        {
          num: 2,
          username: "Carry",
          rolename: "Global Account"
        },
        {
          num: 3,
          username: "Amy",
          rolename: "Global Account"
        },
        {
          num: 4,
          username: "Angela",
          rolename: "Global Account"
        },
        {
          num: 5,
          username: "Cindy",
          rolename: "Global Account"
        },
        {
          num: 6,
          username: "Albert",
          rolename: "Hospital Account"
        },
        {
          num: 7,
          username: "Andy",
          rolename: "Hospital Account"
        },
        {
          num: 8,
          username: "Edward",
          rolename: "Doctor Account"
        },
        {
          num: 9,
          username: "Edwin",
          rolename: "Doctor Account"
        }
      ]
    };
  }
};
</script>

<style>
.role {
  width: 100%;
}
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