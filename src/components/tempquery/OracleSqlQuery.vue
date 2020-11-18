<template>
  <div>
    <el-form label-width="70px" label-position="left" class="oracle-sqlform">
        <el-form-item label="SQL语句">
            <el-input v-model="oracleSqlQuery" type="textarea" autosize placeholder="请输入oracle的sql语句"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" size="small" @click="submitSqlQuery()">确定</el-button>
            <el-button size="small">重置</el-button>
        </el-form-item>
    </el-form>
    <div>
      {{queryResult}}
    </div>
  </div>
</template>

<script>
import { oracleSQLTempSelect } from '../../api/dbmanage_api'

export default {
  data () {
    return {
      oracleSqlQuery: 'select USER_NAME from VIEW_COMM_USER where ROWNUM<10',
      queryResult: []
    }
  },
  created () {
  },
  methods: {
    submitSqlQuery() {
      oracleSQLTempSelect({'sqlString':this.oracleSqlQuery}).then( res => {
        console.log(res.data.Data)
        // 如果状态码为1 说明查询成功 提示并展示信息
        if (res.data.Meta.Status == 1) {
          this.$message.success(res.data.Meta.Msg)
          this.queryResult = res.data.Data
        }
        // 如果状态码为0 说明未登录数据库 提示并跳转登录数据库页面
        else if (res.data.Meta.Status == 0) {
          this.$message.error(res.data.Meta.Msg)
          this.$router.push('/dbManage/dbConnect/oracleConn')
        }
        // 如果状态码为其他 提示错误信息
        else {
          this.$message.error(res.data.Meta.Msg)
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.oracle-sqlform {
    width: 500px;
}
</style>
