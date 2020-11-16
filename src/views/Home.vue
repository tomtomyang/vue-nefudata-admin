<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <div>
        <img src="../assets/imgs/NEFU_logo.png" alt />
        <span>数据东林</span>
      </div>
      <div>
        <el-button type="info" @click="goHome" size="small">首页</el-button>
        <el-button type="info" @click="logout" size="small">退出</el-button>
        <el-button type="info" @click="goCenter" size="small">个人中心</el-button>
      </div>
    </el-header>
    <!-- 主体 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '60px' : '200px'">
        <!-- 隐藏菜单按钮 -->
        <div class="toggle-button" @click="togleCollapse"></div>
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
                <i class="el-icon-menu"></i>
                <span>{{ subItem.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 内容主体 -->
      <el-main>
        <transition name="fade-transform" mode="out-in">
          <router-view></router-view>
        </transition> 
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { getMenuList } from '../api/test'
export default {
  data () {
    return {
      // 左侧菜单数据
      menuList: [
        { 
          "id":125,
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
          "id":103,
          "authName":"权限管理",
          "path":"power",
          "children":[
            {
              "id":111,
              "authName":"角色列表",
              "path":"power/roles",
              "children":[],
              "order":null
            },
            {
              "id":112,
              "authName":"权限列表",
              "path":"power/rights",
              "children":[],
              "order":null
            }
          ],
          "order":2
        },
        {
          "id":101,
          "authName":"商品管理",
          "path":"goods",
          "children":[
            {
              "id":104,
              "authName":"商品列表",
              "path":"goods/list",
              "children":[],
              "order":1
            },
            {
              "id":115,
              "authName":"分类参数",
              "path":"goods/params",
              "children":[],
              "order":2
            },
            {
              "id":121,
              "authName":"商品分类",
              "path":"goods/categories",
              "children":[],
              "order":3
            }
          ],
          "order":3
        },
        {
          "id":102,
          "authName":"订单管理",
          "path":"orders",
          "children":[
            {
              "id":107,
              "authName":"订单列表",
              "path":"orders/list",
              "children":[],
              "order":null
            }
          ],
          "order":4
        },
        {
          "id":145,
          "authName":"数据统计",
          "path":"reports",
          "children":[
            {
              "id":146,
              "authName":"数据报表",
              "path":"reports/report1",
              "children":[],
              "order":null
            }
          ],
          "order":5
        },
        {
          "id":146,
          "authName":"数据库管理",
          "path":"database",
          "children":[
            {
              "id":147,
              "authName":"数据源",
              "path":"database/dataSourse",
              "children":[],
              "order":null
            },
            {
              "id":148,
              "authName":"临时查询",
              "path":"database/tempQuery",
              "children":[],
              "order":null
            },
          ],
          "order":6
        }
      ],
      iconObj: {
        '125': 'iconfont icon-user',
        '103': 'iconfont icon-tijikongjian',
        '101': 'iconfont icon-shangpin',
        '102': 'iconfont icon-danju',
        '145': 'iconfont icon-baobiao',
        '146': 'iconfont icon-baobiao'
      },
      // 默认不折叠
      isCollapse: false,
      // 被激活导航地址
      activePath: ''
    }
  },
  created () {
    // getMenuList().then(res => {
    //   console.log(res)
    // })
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    goHome () {
      this.$router.push('/home')
      this.activePath = '/home'
    },
    logout () {
      // 清空token
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    goCenter () {
      this.$router.push('/center')
      this.activePath = '/center'
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
  transition: all .5s;
  .el-menu {
    border: none;
  }
}
.el-main {
  background-color: #eaedf1;
}
.iconfont{
  margin-right: 10px;
}
.toggle-button {
  background-color: #4A5064;
  height: 24px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  // 鼠标放上去变成小手
  cursor: pointer;
}
</style>
