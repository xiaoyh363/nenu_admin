import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/',
    children: [{
      path: '',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/user',
    component: Layout,
    redirect: '/user/table',
    name: '用户管理',
    meta: { title: '用户管理', icon: 'user' },
    children: [
      {
        path: 'table',
        name: '用户列表',
        component: () => import('@/views/user/list'),
        meta: { title: '用户列表', icon: 'table' }
      },
      {
        path: 'save',
        name: '添加用户',
        component: () => import('@/views/user/save'),
        meta: { title: '添加用户', icon: 'tree' }
      },
      {
        path: 'edit/:id',
        name: '编辑用户',
        component: () => import('@/views/user/save'),
        meta: { title: '编辑用户', noCache: true },
        hidden: true
      }
    ]
  },

  {
    path: '/lab',
    component: Layout,
    redirect: '/lab/table',
    name: '实验室管理',
    meta: { title: '实验室管理', icon: 'example' },
    children: [
      {
        path: 'table',
        name: '实验室列表',
        component: () => import('@/views/lab/list'),
        meta: { title: '实验室列表', icon: 'table' }
      },
      {
        path: 'save',
        name: '添加实验室',
        component: () => import('@/views/lab/save'),
        meta: { title: '添加实验室', icon: 'tree' }
      },
      {
        path: 'edit/:id',
        name: '编辑实验室',
        component: () => import('@/views/lab/save'),
        meta: { title: '编辑实验室', noCache: true },
        hidden: true
      }
    ]
  },

  {
    path: '/sensor',
    component: Layout,
    redirect: '/sensor/table',
    name: '传感器管理',
    meta: { title: '传感器管理', icon: 'guide' },
    children: [
      {
        path: 'table',
        name: '传感器列表',
        component: () => import('@/views/sensor/list'),
        meta: { title: '传感器列表', icon: 'table' }
      },
      {
        path: 'save',
        name: '添加传感器',
        component: () => import('@/views/sensor/save'),
        meta: { title: '添加传感器', icon: 'tree' }
      },
      {
        path: 'edit/:id',
        name: '编辑传感器',
        component: () => import('@/views/sensor/save'),
        meta: { title: '编辑传感器', noCache: true },
        hidden: true
      }
    ]
  },

  {
    path: '/chart',
    component: Layout,
    redirect: '/chart',
    children: [{
      path: '',
      name: '数据查询',
      component: () => import('@/views/chart/index'),
      meta: { title: '数据查询', icon: 'chart' }
    }]
  },

  {
    path: '/',
    component: Layout,
    redirect: '/',
    children: [{
      path: '',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '系统管理', icon: 'documentation' }
    }]
  },

  {
    path: '/',
    component: Layout,
    redirect: '/',
    children: [{
      path: '',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '关于我们', icon: 'link' }
    }]
  },

  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       name: 'Menu2',
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: '外部链接', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // browserHistory 模式在生产环境下需要配置 nginx
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
