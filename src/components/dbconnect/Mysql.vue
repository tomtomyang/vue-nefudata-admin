<template>
  <div class="conn-container">
    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4145006031,3649469315&fm=26&gp=0.jpg" alt="" class="conn-img">
    <el-form label-width="80px" label-position="left" class="conn-form" ref="mysqlConn-form" :rules="rules" status-icon :model="connInfo">
        <el-form-item label="用户名" prop="username">
            <el-input v-model="connInfo.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="connInfo.password"></el-input>
        </el-form-item>
        <el-form-item label="IP地址" prop="ip">
            <el-input v-model="connInfo.ip"></el-input>
        </el-form-item>
        <el-form-item label="端口号" prop="port">
            <el-input v-model="connInfo.port"></el-input>
        </el-form-item>
        <el-form-item label="数据库名" prop="dbname">
            <el-select v-model="connInfo.dbname" placeholder="请选择数据库名" style="width:100%">
                <el-option label="test02" value="test02"></el-option>
                <el-option label="数据库2" value="2"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('mysqlConn-form')" size="small" :loading="btnLoading">{{btnText}}</el-button>
            <el-button @click="resetForm('mysqlConn-form')" size="small">重置</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mysqlConn } from '../../api/dbmanage_api'

export default {
  data () {
    return {
        // mysql连接参数
        connInfo: {
            username:'root',
            password:'521125hhh',
            ip:'127.0.0.1',
            port:'3306',
            dbname:'test02'
        },
        // 表单校验规则
        rules: {
          username: [
            { required: true, message: '请输入用户名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          ip: [
            { required: true, message: '请输入ip地址', trigger: 'blur' }
          ],
          port: [
            { required: true, message: '请输入端口号', trigger: 'blur' }
          ],
          dbname: [
            { required: true, message: '请选择数据库名', trigger: 'blur' }
          ]
        },
        // 点击后按钮显示连接中
        btnLoading: false,
        btnText: '确定'
    }
  },
  created () {
    
  },
  methods: {
    // 重置表单
    resetForm( formName ) {
        this.$refs[formName].resetFields()
    },
    // 提交表单
     submitForm( formName ) {
        this.$refs[formName].validate((valid) => {
            this.btnLoading = true
            this.btnText = '连接中'
            if (valid) {
                var that = this
                mysqlConn(that.connInfo).then(res => {
                    that.$message.success(res.data.Meta.Msg) 
                    that.btnLoading = false
                    that.btnText = '确定'
                }).catch(error => {
                  console.log(error)
                    that.$message.error('网络错误')
                    that.btnLoading = false
                    that.btnText = '确定'
                })
            } 
            else {
                this.$message.error('表单填写错误')
                this.btnLoading = false
                this.btnText = '确定'
                return false;
            }
        });
    }
  }
}
</script>
<style lang="less" scoped>
.conn-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.conn-form {
    width: 500px;
}
.conn-img {
    height: 150px;
    margin-bottom: 10px;
}
</style>
