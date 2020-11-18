<template>
  <div class="conn-container">
    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605271172884&di=a4149dc4eaf866b435a6a4a0942b8f3d&imgtype=0&src=http%3A%2F%2Fwww.esjhxxkj.com%2Fwp-content%2Fuploads%2F2018%2F01%2Fjh-oracle.jpg" alt="" class="conn-img">
    <el-form label-width="70px" label-position="left" class="conn-form" ref="oracleConn-form" :rules="rules" status-icon :model="connInfo">
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
        <el-form-item label="实例名" prop="instance">
            <el-select v-model="connInfo.instance" placeholder="请选择实例名" style="width:100%">
                <el-option label="icdc" value="icdc"></el-option>
                <el-option label="实例2" value="2"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('oracleConn-form')" size="small" :loading="btnLoading">{{btnText}}</el-button>
            <el-button @click="resetForm('oracleConn-form')" size="small">重置</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { oracleConn } from '../../api/dbmanage_api'

export default {
  data () {
    return {
        // oracle连接参数
        connInfo: {
            username:'dcp_data',
            password:'neusoft',
            ip:'172.16.15.5',
            port:'1521',
            instance:'icdc'
            // username:'',
            // password:'',
            // ip:'',
            // port:'',
            // instance:''
        },
        // 表单校验规则
        rules: {
          username: [
            { required: true, message: '请输入用户名称', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
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
          instance: [
            { required: true, message: '请选择实例名', trigger: 'blur' }
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
                oracleConn(that.connInfo).then(res => {
                    // console.log(res.data.Meta.Msg)  
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
    height: 100px;
    margin-bottom: 20px;
}
</style>
