<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <!-- 右侧logo -->
      <div>
        <img src="../assets/imgs/NEFU_logo.png" alt />
        <span>数据东林</span>
      </div>
      <!-- 面包屑导航 -->
      <breadcrumb class="breadcrumb-container" />
      <!-- 左侧按钮 -->
      <div>
        <el-button type="info" @click="go('/home')" size="small" icon="el-icon-house" circle></el-button>
        <el-button type="info" @click="logout" size="small" icon="el-icon-switch-button" circle></el-button>
        <el-button type="info" @click="go('/center')" size="small" icon="el-icon-user" circle></el-button>
        <el-button type="info" @click="go('/setting')" size="small" icon="el-icon-setting" circle></el-button>
      </div>
    </el-header>
    <!-- 主体 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '60px' : '200px'">
        <el-menu unique-opened :collapse="isCollapse" :collapse-transition="false" router :default-active="activePath" background-color="#333744" text-color="#fff" active-text-color="#409FFF">
          <!-- 一级菜单  -->
          <el-submenu :index="item.id+''" v-for="item in menuList" :key="item.id" >
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <i :class="iconObj[item.id]"></i>
              <span>{{ item.authName}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item :index="'/' + subItem.path" v-for="subItem in item.children" :key="subItem.id" @click="saveNavState('/' + subItem.path)">
              <!-- 二级菜单的模板区域 -->
              <template slot="title">
                <i :class="iconObj[subItem.id]"></i>
                <span>{{ subItem.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
        <!-- 隐藏菜单按钮 -->
        <div class="toggle-button" @click="togleCollapse"></div>
      </el-aside>
      <!-- 内容主体 -->
      <el-main>
        <!-- 动画 -->
        <transition name="fade-transform" mode="out-in">
          <!-- 占位符 -->
          <router-view></router-view>
        </transition> 
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import { getMenuList } from '../api/dbmanage_api'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import Breadcrumb from '../components/breadcrumb/Bread'

export default {
  components: {
    Breadcrumb,
  },
  data () {
    return {
      // 左侧菜单数据
      menuList: [
        { 
          "id":100,
          "authName":"用户管理",
          "path":"users",
          "children":[
            {
              "id":110,
              "authName":"用户列表",
              "path":"users/list",
              "children":[],
              "order":null
            }
          ],
          "order":1
        },
        {
          "id":200,
          "authName":"权限管理",
          "path":"power",
          "children":[
            {
              "id":210,
              "authName":"角色列表",
              "path":"power/roles",
              "children":[],
              "order":null
            },
            {
              "id":220,
              "authName":"权限列表",
              "path":"power/rights",
              "children":[],
              "order":null
            }
          ],
          "order":2
        },
        {
          "id":300,
          "authName":"商品管理",
          "path":"goods",
          "children":[
            {
              "id":310,
              "authName":"商品列表",
              "path":"goods/list",
              "children":[],
              "order":1
            },
            {
              "id":320,
              "authName":"分类参数",
              "path":"goods/params",
              "children":[],
              "order":2
            },
            {
              "id":330,
              "authName":"商品分类",
              "path":"goods/categories",
              "children":[],
              "order":3
            }
          ],
          "order":3
        },
        {
          "id":400,
          "authName":"订单管理",
          "path":"orders",
          "children":[
            {
              "id":410,
              "authName":"订单列表",
              "path":"orders/list",
              "children":[],
              "order":null
            }
          ],
          "order":4
        },
        {
          "id":500,
          "authName":"数据统计",
          "path":"reports",
          "children":[
            {
              "id":510,
              "authName":"数据报表",
              "path":"reports/report1",
              "children":[],
              "order":null
            }
          ],
          "order":5
        },
        {
          "id":600,
          "authName":"数据库管理",
          "path":"dbManage",
          "children":[
            {
              "id":610,
              "authName":"连接数据库",
              "path":"dbManage/dbConnect",
              "children":[],
              "order":null
            },
            {
              "id":620,
              "authName":"数据源",
              "path":"dbManage/dataSourse",
              "children":[],
              "order":null
            },
            {
              "id":630,
              "authName":"临时查询",
              "path":"dbManage/tempQuery",
              "children":[],
              "order":null
            },
          ],
          "order":6
        }
      ],
      // 菜单icon数据
      iconObj: {
        '100': 'iconfont icon-yonghu',
        '110': 'iconfont icon-liebiao',
        '200': 'iconfont icon-quanxian1',
        '210': 'iconfont icon-liebiao',
        '220': 'iconfont icon-liebiao',
        '300': 'iconfont icon-shangpin',
        '310': 'iconfont icon-liebiao',
        '320': 'iconfont icon-canshu',
        '330': 'iconfont icon-yingyong',
        '400': 'iconfont icon-dingdan',
        '410': 'iconfont icon-liebiao',
        '500': 'iconfont icon-shuju',
        '510': 'iconfont icon-forms',
        '600': 'iconfont icon-database',
        '610': 'iconfont icon-lianjie',
        '620': 'iconfont icon-shujuyuan',
        '630': 'iconfont icon-chaxun',
      },
      // 菜单折叠参数，默认不折叠
      isCollapse: false,
      // 被激活导航地址
      activePath: ''
    }
  },
  computed: {
    // 将全局数据映射为计算属性
    ...mapState(['count']),
    ...mapState('test_x',['test']),
    // ...mapState(['ActivePath'])
  },
  created () {
    // getMenuList().then(res => {
    //   console.log(res)
    // })
    console.log(this.count)
    console.log(this.test)
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    // 跳转页面
    go ( activePath ) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
      this.$router.push(activePath)
    },
    // 退出系统
    logout () {
      // 清空token
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    // 获取请求菜单
    // async getMenuList () {
    //   const { data: res } = await this.$http.get('menus')
    //   if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
    //   this.menuList = res.data
    //   console.log(res)
    // },
    // 菜单的折叠与展开
    togleCollapse () {
      this.isCollapse = !this.isCollapse
    },
    // 保存连接的激活地址
    saveNavState (activePath) {
      window.sessionStorage.setItem('activePath', activePath)
    }
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: @nefugreen;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    img {
      height: 40px;
    }
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #333744;
  overflow-x: hidden;
  position: relative;
  transition: all .5s;
  .el-menu {
    border: none;
  }
}
.el-main {
  background-color: #eaedf1;
}
.toggle-button {
  background-color: #4A5064;
  height: 24px;
  width: 100%;
  color: #fff;
  position: absolute;
  bottom: 0;
  // 鼠标放上去变成小手
  cursor: pointer;
}
</style>
