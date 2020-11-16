<template>
  <div class="link-container">
    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605271172884&di=a4149dc4eaf866b435a6a4a0942b8f3d&imgtype=0&src=http%3A%2F%2Fwww.esjhxxkj.com%2Fwp-content%2Fuploads%2F2018%2F01%2Fjh-oracle.jpg" alt="" class="link-img">
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
        <el-form-item label="实例名">
            <el-select v-model="linkInfo.instance" placeholder="请选择实例名" style="width:100%">
                <el-option label="实例1" value="1"></el-option>
                <el-option label="实例2" value="2"></el-option>
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
    margin-bottom: 20px;
}
</style>
