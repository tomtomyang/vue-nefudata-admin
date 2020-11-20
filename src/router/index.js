import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 路由懒加载
// views下文件
const Login = () => import('../views/Login.vue')
const Layout = () => import('../views/Layout.vue')

// views/home下文件
const Welcome = () => import('../views/home/Welcome.vue')
const Center = () => import('../views/center/index.vue')
const Setting = () => import('../views/setting/index.vue')

// views/error下文件
const Error401 = () => import('../views/error/401.vue')
const Error404 = () => import('../views/error/404.vue')

// 用户管理部分
const UsersList = () => import('../views/user/List.vue')
// 权限管理部分
const Rights = () => import('../views/power/Rights.vue')
const Roles = () => import('../views/power/Roles.vue')
// 商品管理部分
const Cate = () => import('../views/goods/Cate.vue')
const Params = () => import('../views/goods/Params.vue')
const GoodsList = () => import('../views/goods/List.vue')
const Add = () => import('../views/goods/Add.vue')
// 订单管理部分
const Order = () => import('../views/order/Order.vue')
// 数据统计部分
const Report = () => import('../views/report/Report.vue')
// 数据库管理部分
const DataSourse = () => import('../views/dbmanage/DataSourse.vue')
const TempQuery = () => import('../views/dbmanage/TempQuery.vue')
const DbConnect = () => import('../views/dbmanage/DbConnect.vue')
const DcIndex = () => import('../components/dbconnect/index.vue')
const OracleConn = () => import('../components/dbconnect/Oracle.vue')
const MysqlConn = () => import('../components/dbconnect/Mysql.vue')
const OracleView = () => import('../components/datasourse/View.vue')
const DsIndex = () => import('../components/datasourse/index.vue')
const TqIndex = () => import('../components/tempquery/index.vue')
const VisualQuery = () => import('../components/tempquery/VisualQuery.vue')
const QueryHistory = () => import('../components/tempquery/QueryHistory.vue')
const MysqlSqlQuery = () => import('../components/tempquery/MysqlSqlQuery.vue')
const OracleSqlQuery = () => import('../components/tempquery/OracleSqlQuery.vue')

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
    component: Layout,
    redirect: '/welcome',
    meta: { title: '首页' },
    children: [
      {
        path: '/welcome',
        component: Welcome,
      },
      {
        path: '/center',
        component: Center,
        meta: { title: '个人中心' }
      },
      {
        path: '/setting',
        component: Setting,
        meta: { title: '设置' }
      },
      {
        path: '/401',
        component: Error401,
        meta: { title: '401' }
      },
      {
        path: '/404',
        component: Error404,
        meta: { title: '404' }
      }
    ]
  },
  {
    path: '/users',
    component: Layout,
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
    component: Layout,
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
    component: Layout,
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
    component: Layout,
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
    component: Layout,
    redirect: '/reports/report1',
    meta: { title: '数据统计' },
    children: [
      {
        path: '/reports/report1',
        component: Report,
        meta: { title: '数据统计1' },
      },
    ]
  },
  {
    path: '/dbManage',
    component: Layout,
    redirect: '/dbManage/dataSourse',
    meta: { title: '数据库管理' },
    children: [
      {
        path: '/dbManage/dbConnect',
        component: DbConnect,
        redirect: '/dbManage/dbConnect/index',
        meta: { title: '连接数据库' },
        children: [
          {
            path: '/dbManage/dbConnect/index',
            component: DcIndex,
            meta: { title: '首页' },
          },
          {
            path: '/dbManage/dbConnect/oracleConn',
            component: OracleConn,
            meta: { title: '连接orcale' },
          },
          {
            path: '/dbManage/dbConnect/MysqlConn',
            component: MysqlConn,
            meta: { title: '连接mysql' },
          }
        ]
      },
      {
        path: '/dbManage/dataSourse',
        component: DataSourse,
        redirect: '/dbManage/dataSourse/index',
        meta: { title: '数据源' },
        children: [
          {
            path: '/dbManage/dataSourse/index',
            component: DsIndex,
            meta: { title: '首页' },
          },
          {
            path: '/dbManage/dataSourse/oracleView',
            component: OracleView,
            meta: { title: 'oracle视图' },
          }
        ]
      },
      {
        path: '/dbManage/tempQuery',
        component: TempQuery,
        redirect: '/dbManage/tempQuery/index',
        meta: { title: '临时查询' },
        children: [
          {
            path: '/dbManage/tempQuery/index',
            component: TqIndex,
            meta: { title: '首页' },
          },
          {
            path: '/dbManage/tempQuery/visualQuery',
            component: VisualQuery,
            meta: { title: '可视化查询' },
          },
          {
            path: '/dbManage/tempQuery/mysqlSqlQuery',
            component: MysqlSqlQuery,
            meta: { title: 'Mysql sql查询' },
          },
          {
            path: '/dbManage/tempQuery/oracleSqlQuery',
            component: OracleSqlQuery,
            meta: { title: 'Oracle sql查询' },
          },
          {
            path: '/dbManage/tempQuery/queryHistory',
            component: QueryHistory,
            meta: { title: '历史记录' },
          }
        ]
      }
    ]
  },
  


]

const router = new VueRouter({
  mode: 'history',
  routes
})

// 挂载路由导航守卫,to表示将要访问的路径，from表示从哪里来，next是下一个要做的操作 next('/login')强制跳转login
// router.beforeEach((to, from, next) => {
//   // 访问登录页，放行
//   if (to.path === '/login') return next()
//   // 获取token
//   const tokenStr = window.sessionStorage.getItem('token')
//   // 没有token, 强制跳转到登录页
//   if (!tokenStr) return next('/login')
//   next()
// })

export default router

