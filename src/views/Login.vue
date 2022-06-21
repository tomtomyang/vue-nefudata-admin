<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像 -->
      <!-- <div class="avatar_box">
        <img src="../assets/imgs/NEFU_logo.png"
             alt="avatar" />
      </div> -->

      <!-- 登录表单 -->
      <div>
        <div class="txt">汪世兴门店管理系统</div>
        <el-form ref="loginFormRef"
                 :model="loginForm"
                 :rules="loginFormRules"
                 label-width="80px"
                 class="login_form">
          <el-form-item label="邮箱"
                        prop="username">
            <el-input v-model="loginForm.username"
                      prefix-icon="iconfont icon-user"></el-input>
          </el-form-item>
          <el-form-item label="密码"
                        prop="password">
            <el-input v-model="loginForm.password"
                      type="password"
                      prefix-icon="iconfont icon-3702mima"></el-input>
          </el-form-item>
          <el-form-item label="确认密码"
                        prop="password">
            <el-input v-model="loginForm.password"
                      type="password"
                      prefix-icon="iconfont icon-3702mima"></el-input>
          </el-form-item>
          <div class="btns">
            <el-button type="primary"
                       @click="login">登录</el-button>
            <el-button type="info"
                       @click="resetLoginForm">重置</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import { getTest } from '../api/test_api.js'
export default {
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 表单验证
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入用户密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    // console.log(this.$store.state.count)
    this.increment()
    // api独立管理测试
    // getTest( this.loginForm ).then(res => {
    //   console.log(res)
    // })
    this.doChangeLogin()
    // console.log(this.loginState)
  },
  methods: {
    // vuex测试
    ...mapActions(['addAsync']),
    ...mapActions('test', ['doChangeLogin']),
    ...mapMutations(['add2']),
    increment () {
      this.$store.commit('add')
      console.log(this.$store.state.count)
    },
    // 表单重置按钮
    resetLoginForm () {
      // resetFields：element-ui提供的表单方法
      this.$refs.loginFormRef.resetFields()
      console.log(this.loginState)
    },
    login () {
      // 表单预验证
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return false
        // this.$http.post('login', this.loginForm): 返回值为promise
        // const { data: res } = await this.$http.post('login', this.loginForm)
        // if (res.meta.status !== 200) {
        //   return this.$message.error('登录失败')
        // }
        // this.$message.success('登录成功')
        // 1、将登陆成功之后的token, 保存到客户端的sessionStorage中
        //   1.1 项目中出现了登录之外的其他API接口，必须在登陆之后才能访问
        //   1.2 token 只应在当前网站打开期间生效，所以将token保存在sessionStorage中
        // window.sessionStorage.setItem('token', res.data.token)
        // 2、跳转到后台主页, 路由地址为：/home
        this.$router.push('/home')
      })
    }
  },
  computed: {
    // 将全局数据映射为计算属性
    ...mapState(['count']),
    ...mapGetters(['showCount']),
    ...mapState('test', ['loginState'])
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #93c5fd;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login_box {
  width: 450px;
  height: 360px;
  background-color: #fff;
  border-radius: 3px;
  background-color: #fff;
  .avatar_box {
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.login_form {
  margin-top: 30px;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: center;
}
.info {
  font-size: 13px;
  margin: 10px 15px;
}
.txt {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  padding: 20px 0;
  font-weight: 1000;
}
</style>
