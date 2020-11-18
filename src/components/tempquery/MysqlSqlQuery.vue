<template>
  <div>
    <div class="codeEditor-container">
      <div class="codeEditor-menu">
          <el-button type="info" icon="el-icon-check" size="small" @click="submitSqlQuery()" :loading="btnLoading">{{btnText}}</el-button>
          <el-button type="info" icon="el-icon-close" size="small">暂停</el-button>
          <el-button type="info" icon="el-icon-delete" size="small" @click="sqlFormat()">格式化</el-button>
      </div>
      <codemirror ref="editQuerySQL" v-model="mysqlSqlQuery" :options="codemirrorOptions" class="codeEditor-main"></codemirror>
    </div>
    <div>
      <el-table :data="queryResult" style="width: 100%" class="queryResult-table" border height="460">
        <el-table-column v-for="(item, index) in queryHeader" :prop="item" :label="item" :key="index" ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { codemirror } from "vue-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/idea.css";
import "codemirror/theme/panda-syntax.css";
import "codemirror/addon/hint/show-hint.css";
require("codemirror/lib/codemirror");
require("codemirror/mode/sql/sql");
require("codemirror/addon/hint/show-hint");
require("codemirror/addon/hint/sql-hint");

import sqlFormatter from 'sql-formatter'

import { mysqlSQLTempSelect } from '../../api/dbmanage_api'

export default {
  components: {
    codemirror
  },
  data () {
    return {
      // 代码编辑器配置
      codemirrorOptions: {
        height: 100,
        tabSize: 4,
        // 行号
        lineNumbers: true,
        // 使用tab缩进
        indentWithTabs: true,
        // 智能缩进
        smartIndent: true,
        // 是否在初始化时自动获取焦点
        autofocus: false,
        // 代码补全模式
        mode: "text/x-mysql",
        // 主题
        theme: "idea",
        // 自动补全快捷键
        extraKeys: {'Ctrl': 'autocomplete'},
        // 代码补全选项
        hintOptions: {
            completeSingle: false,
            // 自定义提示项
            tables: {
            }
        }
      },
      // 运行按钮样式
      btnLoading: false,
      btnText: '运行',
      // mysql查询语句
      mysqlSqlQuery:'select * from shangpin',
      // 返回数据的所有字段
      queryHeader: [],
      // 返回的所有数据
      queryResult: []
    }
  },
  created () {
  },
  methods: {
    // sql格式化
    sqlFormat() {
      this.mysqlSqlQuery=sqlFormatter.format(this.mysqlSqlQuery)
    },
    // 提交sql到后台
    submitSqlQuery() {
      this.btnLoading = true
      this.btnText = '运行中'
      mysqlSQLTempSelect({'sqlString':this.mysqlSqlQuery}).then( res => {
        // 如果状态码为1 说明查询成功 提示并展示信息
        if (res.data.Meta.Status == 1) {
          this.$message.success(res.data.Meta.Msg)
          this.getHeader(res.data.Data[0])
          this.queryResult = res.data.Data
          this.btnLoading = false
          this.btnText = '运行'
        }
        // 如果状态码为0 说明未登录数据库 提示并跳转登录数据库页面
        else if (res.data.Meta.Status == 0) {
          this.$message.error(res.data.Meta.Msg)
          this.$router.push('/dbManage/dbConnect/mysqlConn')
        }
        // 如果状态码为其他 提示错误信息
        else {
          this.$message.error(res.data.Meta.Msg)
          this.btnLoading = false
          this.btnText = '运行'
        }
      }).catch( error => {
        this.$message.error('网络错误')
        this.btnLoading = false
        this.btnText = '运行'
      })
    },
    // 将返回的json数据的key值存进queryHeader中
    getHeader( data ) {
        this.queryHeader = Object.keys(data)
    }
  }
}
</script>
<style lang="less" scoped>
.CodeMirror-hints {
  z-index: 9999 !important;
}
.codeEditor-menu {
  margin-bottom: 10px;
}
.codeEditor-main {
  border: 1px solid rgb(235, 238, 245);
  height: 100px;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-bottom: 20px;
}
.queryResult-table {
  margin-top: 0;
}
</style>
