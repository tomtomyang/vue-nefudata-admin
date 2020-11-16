<template>
  <div class="link-container">
    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4145006031,3649469315&fm=26&gp=0.jpg" alt="" class="link-img">
    <el-form label-width="70px" label-position="left" class="link-form">
        <el-form-item label="用户名">
            <el-input v-model="linkInfo.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="linkInfo.password"></el-input>
        </el-form-item>
        <el-form-item label="IP地址">
            <el-input v-model="linkInfo.ip"></el-input>
        </el-form-item>
        <el-form-item label="端口号">
            <el-input v-model="linkInfo.port"></el-input>
        </el-form-item>
        <el-form-item label="数据库名">
            <el-select v-model="linkInfo.instance" placeholder="请选择数据库名" style="width:100%">
                <el-option label="数据库1" value="1"></el-option>
                <el-option label="数据库2" value="2"></el-option>
            </el-select>
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
        linkInfo: {
            username:'',
            password:'',
            ip:'',
            port:'',
            instance:''
        }
    }
  },
}
</script>
<style lang="less" scoped>
.link-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.link-form {
    width: 500px;
}
.link-img {
    height: 150px;
    margin-bottom: 10px;
}
</style>
