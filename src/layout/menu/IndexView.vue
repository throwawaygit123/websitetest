<template>
  <div class="menu">
    <el-row>
      <router-link to="/menuadd" style="text-decoration: none; color: white">
        <el-button type="primary" plain style="float: left; text-align: center"
          >{{ $t("m.add") }}
        </el-button>
      </router-link>
    </el-row>
    <el-table
      :data="tableData"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="date" :label="$t('m.name')" width="350">
      </el-table-column>
      <el-table-column :label="$t('m.icon')" width="100">
        <template>
          <i class="el-icon-setting"></i>
        </template>
      </el-table-column>
      <el-table-column :label="$t('m.type')" width="180">
        <template>
          <el-tag type="success">{{ $t("m.catalogue") }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column :label="$t('m.operation')">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">{{
            $t("m.edit")
          }}</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >{{ $t("m.delete") }}</el-button
          >
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
          id: 1,
          date: this.$t("m.systemsettings"),
          children: [
            {
              id: 31,
              date: this.$t("m.menumanagement"),
            },
            {
              id: 32,
              date: this.$t("m.rolemanagement"),
            },
            {
              id: 33,
              date: this.$t("m.administratormanagement"),
            },
          ],
        },
        {
          id: 2,
          date: this.$t("m.hospiatalmanagement"),
          children: [
            {
              id: 34,
              date: this.$t("m.patientinformation"),
            },
            {
              id: 35,
              date: this.$t("m.option2"),
            },
            {
              id: 36,
              date: this.$t("m.option3"),
            },
          ],
        },
        {
          id: 3,
          date: this.$t("m.othermanagement"),
          children: [
            {
              id: 37,
              date: this.$t("m.option1"),
              
            },
            {
              id: 38,
              date: this.$t("m.option2"),
            },
            {
              id: 39,
              date: this.$t("m.option3"),
            },
          ],
        },
      ],
    };
  },

};
</script>

<style>
.menu {
  width: 80%;
}
</style>