import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 路由懒加载
// views下文件
const Login = () => import(/* webpackChunkName: "Login_Home_Welcome" */ '../views/Login.vue')
const Home = () => import(/* webpackChunkName: "Login_Home_Welcome" */ '../views/Home.vue')

// views/single下文件
const Welcome = () => import(/* webpackChunkName: "Login_Home_Welcome" */ '../views/single/Welcome.vue')
const Center = () => import(/* webpackChunkName: "Login_Home_Welcome" */ '../views/single/Center.vue')

// views/coexist下文件
const Conexist = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../views/coexist/index.vue')
// 用户管理部分
const UsersList = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../views/coexist/user/List.vue')
// 权限管理部分
const Rights = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../views/coexist/power/Rights.vue')
const Roles = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../views/coexist/power/Roles.vue')
// 商品管理部分
const Cate = () => import(/* webpackChunkName: "Cate_Params" */ '../views/coexist/goods/Cate.vue')
const Params = () => import(/* webpackChunkName: "Cate_Params" */ '../views/coexist/goods/Params.vue')
const GoodsList = () => import(/* webpackChunkName: "GoodsList_Add" */ '../views/coexist/goods/List.vue')
const Add = () => import(/* webpackChunkName: "GoodsList_Add" */ '../views/coexist/goods/Add.vue')
// 订单管理部分
const Order = () => import(/* webpackChunkName: "Order_Report" */ '../views/coexist/order/Order.vue')
// 数据统计部分
const Report = () => import(/* webpackChunkName: "Order_Report" */ '../views/coexist/report/Report.vue')

const routes = [
  { 
    path: '/', 
    redirect: '/login' 
  },
  { 
    path: '/login', 
    component: Login 
  },
  { 
    path: '/home',
    component: Home,
    redirect: '/welcome',
    meta: { title: '首页' },
    children: [
      { 
        path: '/welcome', 
        component: Welcome,
        meta: { title: '欢迎页' } 
      },
      { 
        path: '/users', 
        component: Conexist,
        redirect: '/users/list',
        meta: { title: '用户管理' },
        children: [
          {
            path: '/users/list', 
            component: UsersList,
            meta: { title: '用户列表' }
          }
        ]
      },
      { 
        path: '/power', 
        component: Conexist,
        redirect: '/power/roles',
        meta: { title: '权限管理' },
        children: [
          {
            path: '/power/roles', 
            component: Roles,
            meta: { title: '角色列表' }
          },
          { 
            path: '/power/rights', 
            component: Rights,
            meta: { title: '权限列表' }
          }
        ]
      },
      { 
        path: '/goods', 
        component: Conexist,
        redirect: '/goods/list',
        meta: { title: '商品管理' },
        children: [
          {
            path: '/goods/categories', 
            component: Cate,
            meta: { title: '商品分类' }
          },
          { 
            path: '/goods/params', 
            component: Params,
            meta: { title: '分类参数' }
          },
          { 
            path: '/goods/list', 
            component: GoodsList,
            meta: { title: '商品列表' }
          },
          { 
            path: '/goods/add', 
            component: Add,
            meta: { title: '添加商品' }
          },
        ]
      },
      { 
        path: '/orders', 
        component: Conexist,
        redirect: '/orders/list',
        meta: { title: '订单管理' },
        children: [
          {
            path: '/orders/list', 
            component: Order,
            meta: { title: '订单列表' },
          }
        ]
      },
      { 
        path: '/reports', 
        component: Conexist,
        redirect: '/reports/report1',
        meta: { title: '数据统计' },
        children: [
          {
            path: '/reports/report1', 
            component: Report,
            meta: { title: '数据统计1' },
          }
        ]
      },
      { 
        path: '/center', 
        component: Center,
        meta: { title: '个人中心' }
      }
    ] }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// 挂载路由导航守卫,to表示将要访问的路径，from表示从哪里来，next是下一个要做的操作 next('/login')强制跳转login
router.beforeEach((to, from, next) => {
  // 访问登录页，放行
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  // 没有token, 强制跳转到登录页
  if (!tokenStr) return next('/login')
  next()
})

export default router
