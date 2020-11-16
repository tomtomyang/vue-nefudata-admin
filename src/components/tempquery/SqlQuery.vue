<template>
  <div>
    <el-form label-width="70px" label-position="left" class="link-form">
        <el-form-item label="SQL语句">
            <el-input v-model="sqlQuery" type="textarea" autosize placeholder="请输入sql语句"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary">确定</el-button>
            <el-button>重置</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
        sqlQuery:''
    }
  }
}
</script>
<style lang="less" scoped>
.link-form {
    width: 500px;
}
</style>
