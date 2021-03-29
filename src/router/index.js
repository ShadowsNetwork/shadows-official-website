import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/views/dashboard/index'),
    hidden: true
  },
  {
    path: '/features',
    component: () => import('@/views/features/index'),
    hidden: true
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
