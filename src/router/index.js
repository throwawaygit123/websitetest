import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import state from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/',
        redirect: '/index'
      },
      // 首页 home page
      {
        path: '/index',
        name: 'index',
        component: () => import("../layout/index/IndexView.vue")
      },
      // 角色 role management
      {
        path: 'role',
        name: 'role',
        meta: { title: 'Role Management' },
        component: () => import('@/layout/role/IndexView.vue')
      },
      // 添加角色 role add
      {
        path: 'roleadd',
        name: 'roleadd',
        meta: { title: 'Add Role' },
        component: () => import('@/layout/role/RoleAdd.vue')
      }, 
      // 全局账户管理 global account mangement
      {
        path: 'globalaccount',
        name: 'globalaccount',
        meta: { title: "Account Management" },
        component: () => import('@/layout/globalaccount/IndexView.vue')
      },
      // 全局账户添加 add account
      {
        path: 'globalaccountadd',
        name: 'globalaccountadd',
        meta: { title: "Add Account" },
        component: () => import('@/layout/globalaccount/GlobalaccountAdd.vue')
      },
      // 医院管理 hospital management
      {
        path: 'hospital',
        name: 'hospital',
        meta: { title: "Hospital Management" },
        component: () => import('@/layout/hospital/IndexView.vue')
      },
      // 医院添加 hospital add
      {
        path: 'hospitaladd',
        name: 'hospitaladd',
        meta: { title: " Add Hospital" },
        component: () => import('@/layout/hospital/HospitalAdd.vue')
      },
      // 医院订阅 subscription
      {
        path: 'subscription',
        name: 'subscription',
        meta: { title: "Hospital Subscription" },
        component: () => import('@/layout/hospital/HospitalSubscription.vue')
      },
      // 设备管理 device management
      {
        path: 'device',
        name: 'device',
        meta: { title: "Device Management" },
        component: () => import('@/layout/device/IndexView.vue')
      },
      // 设备添加 add deviceadd
      {
        path: 'deviceadd',
        name: 'deviceadd',
        meta: { title: "Add Device" },
        component: () => import('@/layout/device/DeviceAdd.vue')
      }, 
      // 病人管理 patient management
      {
        path: 'patient',
        name: 'patient',
        meta: { title: "Patient Management" },
        component: () => import('@/layout/Personal/IndexView.vue')
      },
      // 历史病例 history mdedical
      {
        path: 'historymedical',
        name: 'historymedical',
        meta: { title: "History Medical" },
        component: () => import('@/layout/Personal/HistoryMedical.vue')
      },
      // 添加病人页1 patientadd
      {
        path: 'patientaddv1',
        name: 'patientaddv1',
        meta: { title: "Add Patient" },
        component: () => import('@/layout/Personal/PatientAdd1.vue')
      },
      // 病人测试结果 test result 
      {
        path: 'testresult',
        name: 'testresult',
        meta: { title: 'Results' },
        component: () => import('@/layout/testresults/TestResult.vue')
      },
      // 病人测试详情页 test details
      {
        path: 'testdetails',
        name: 'testdetails',
        meta: { title: '2021-10-5' },
        component: () => import('@/layout/testresults/TestDetails.vue')
      },
      // 历史测试 history test
      {
        path: 'historytest',
        name: 'historytest',
        meta: { title: 'History Test' },
        component: () => import('@/layout/testresults/HistoryTest.vue')
      }
    ]
  },
  // 登录 login
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  // 页面丢失 pagemiss
  {
    path: '/*',
    name: 'pagemiss',
    component: () => import(/* webpackChunkName: "about" */ '../views/PageMiss.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
import store from "../store"
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    next()
  } else {
    let token = localStorage.getItem('token')
    console.log(store.getters.token, '222');
    if (token === null || token === "") {
      next('/login')
    } else {
      next()
    }
  }
  document.title = "QuanCardio";
  next()
})
export default router
