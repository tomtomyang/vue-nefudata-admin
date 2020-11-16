import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 路由懒加载
// views下文件
const Login = () => import('../views/Login.vue')
const Home = () => import('../views/Home.vue')

// views/single下文件
const Welcome = () => import('../views/single/Welcome.vue')
const Center = () => import('../views/single/Center.vue')

// views/coexist下文件
const Conexist = () => import('../views/coexist/index.vue')
// 用户管理部分
const UsersList = () => import('../views/coexist/user/List.vue')
// 权限管理部分
const Rights = () => import('../views/coexist/power/Rights.vue')
const Roles = () => import('../views/coexist/power/Roles.vue')
// 商品管理部分
const Cate = () => import('../views/coexist/goods/Cate.vue')
const Params = () => import('../views/coexist/goods/Params.vue')
const GoodsList = () => import('../views/coexist/goods/List.vue')
const Add = () => import('../views/coexist/goods/Add.vue')
// 订单管理部分
const Order = () => import('../views/coexist/order/Order.vue')
// 数据统计部分
const Report = () => import('../views/coexist/report/Report.vue')
// 数据库管理部分
const DataSourse = () => import('../views/coexist/database/DataSourse.vue')
const TempQuery = () => import('../views/coexist/database/TempQuery.vue')
const LinkOracle = () => import('../components/datasourse/Oracle.vue')
const OracleView = () => import('../components/datasourse/View.vue')
const DsIndex = () => import('../components/datasourse/index.vue')
const TqIndex = () => import('../components/tempquery/index.vue')
const LinkMysql = () => import('../components/tempquery/Mysql.vue')
const VisualQuery = () => import('../components/tempquery/VisualQuery.vue')
const SqlQuery = () => import('../components/tempquery/SqlQuery.vue')

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
          },
        ]
      },
      { 
        path: '/database', 
        component: Conexist,
        redirect: '/database/dataSourse',
        meta: { title: '数据库管理' },
        children: [
          {
            path: '/database/dataSourse', 
            component: DataSourse,
            redirect: '/database/dataSourse/index',
            meta: { title: '数据源' },
            children: [
              {
                path: '/database/dataSourse/index', 
                component: DsIndex,
                meta: { title: '首页' },
              },
              {
                path: '/database/dataSourse/linkOracle', 
                component: LinkOracle,
                meta: { title: '连接orcale' },
              },
              {
                path: '/database/dataSourse/oracleView', 
                component: OracleView,
                meta: { title: 'oracle视图' },
              }
            ]
          },
          {
            path: '/database/tempQuery', 
            component: TempQuery,
            redirect: '/database/tempQuery/index',
            meta: { title: '临时查询' },
            children: [
              {
                path: '/database/tempQuery/index', 
                component: TqIndex,
                meta: { title: '首页' },
              },
              {
                path: '/database/tempQuery/linkMysql', 
                component: LinkMysql,
                meta: { title: '连接mysql' },
              },
              {
                path: '/database/tempQuery/visualQuery', 
                component: VisualQuery,
                meta: { title: '可视化查询' },
              },
              {
                path: '/database/tempQuery/sqlQuery', 
                component: SqlQuery,
                meta: { title: 'sql查询' },
              }
            ]
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
