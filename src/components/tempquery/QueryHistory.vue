<template>
  <div>
    <el-table :data="queryHistorylist" style="width: 100%"  stripe border>
      <el-table-column label="日期" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.createtime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="sql语句">
        <template slot-scope="scope">
          <span>{{ scope.row.sqlstring }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">运行</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { queryHistory } from '../../api/dbmanage_api'


import { tableClassAdd } from '../../api/dbmanage_api'
import { tableClassSelect } from '../../api/dbmanage_api'
import { tableClassDelete } from '../../api/dbmanage_api'
import { tableClassUpdate } from '../../api/dbmanage_api'


export default {
  data () {
    return {
      queryHistorylist: []
    }
  },
  created () {
      queryHistory().then(res => {
        // console.log(res.data.Data)
        // 如果状态码为1 说明查询成功 提示并展示信息
        if (res.data.Meta.Status == 1) {
          this.$message.success(res.data.Meta.Msg)
          this.queryHistorylist = res.data.Data
        }
        // 如果状态码为0 说明未登录数据库 提示并跳转登录数据库页面
        else if (res.data.Meta.Status == 0) {
          this.$message.error(res.data.Meta.Msg)
          this.$router.push('/dbManage/dbConnect/mysqlConn')
        }
        // 如果状态码为其他 提示错误信息
        else {
          this.$message.error(res.data.Meta.Msg)
        }
      }).catch(error => {
        // console.log(error)
        this.$message.error('网络错误')
      })
    //   tableClassAdd({'inf':'haha数据层','name':'ypz'}).then( res => {
    //         console.log(res)
    //         tableClassSelect().then( res => {
    //         console.log(res)
    //   })
    //   })
    //   tableClassSelect().then( res => {
    //       console.log(res)
    //   })
    //   tableThemeDelete({'id':'5'}).then( res => {
    //       console.log(res)
    //   })
    //   tableThemeUpdate({'id':'1','name':'student','owner':'ypz'}).then( res => {
    //       console.log(res)
    //       tableThemeSelect().then( res => {
    //       console.log(res)
    //   })
    //   })
  },
   methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
}
</script>
<style lang="less" scoped>
</style>