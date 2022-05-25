import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      {
        path: '/index',
        name: 'index',
        // meta:{title:'首页'},
        component: () => import("../layout/index/IndexView.vue")
      },
      {
        path: 'personalinformation',
        name: 'personalinformation',
        meta: { title: "Personal Information" },
        component: () => import('@/layout/Personal/IndexView.vue')
      },
      {
        path:'role',
        name:'role',
        meta:{title:'Role Management'},
        component: () => import('@/layout/role/IndexView.vue')
      },
      {
        path:'roleadd',
        name:'roleadd',
        meta:{title:'RoleAdd'},
        component: () => import('@/layout/role/RoleAdd.vue')
      },
      {
        path: 'historymedical',
        name: 'historymedical',
        meta: { title: "History Medical" },
        component: () => import('@/layout/Personal/AddView3.vue')
      },
      {
        path: 'addv1',
        name: 'addv1',
        meta: { title: "Personal Add" },
        component: () => import('@/layout/Personal/AddView1.vue')

      }
      ,
      {
        path: 'addv2',
        name: 'addv2',
        meta: { title: "Hospital Add" },
        component: () => import('@/layout/Personal/AddView2.vue')

      }
      ,
      {
        path: 'hospital',
        name: 'hospital',
        meta: { title: "Hospital" },
        component: () => import('@/layout/hospital/IndexView.vue')

      }
      ,
      {
        path: 'globalaccount',
        name: 'globalaccount',
        meta: { title: "Global Account" },
        component: () => import('@/layout/globalaccount/IndexView.vue')

      },
      {
        path: 'globalaccountadd',
        name: 'globalaccountadd',
        meta: { title: "Global Account Add" },
        component: () => import('@/layout/globalaccount/GlobalaccountAdd.vue')
      },

      {
        path: 'hospitalaccount',
        name: 'hospitalaccount',
        meta: { title: "Hospital Account" },
        component: () => import('@/layout/hospitalaccount/IndexView.vue')
      },
      {
        path: 'hospitalaccountadd',
        name: 'hospitalaccountadd',
        meta: { title: "Hospital Account Add" },
        component: () => import('@/layout/hospitalaccount/HospitalaccountAdd.vue')
      },
      {
        path: 'doctoraccount',
        name: 'doctoraccount',
        meta: { title: "Doctor Account" },
        component: () => import('@/layout/doctoraccount/IndexView.vue')
      },
      {
        path: 'doctoraccountadd',
        name: 'doctoraccountadd',
        meta: { title: "Doctor Account Add" },
        component: () => import('@/layout/doctoraccount/DoctoraccountAdd.vue')
      },
      {
        path: 'device',
        name: 'device',
        meta: { title: "Device" },
        component: () => import('@/layout/device/IndexView.vue')
      }, {
        path: 'deviceadd',
        name: 'deviceadd',
        meta: { title: "DeviceAdd" },
        component: () => import('@/layout/device/DeviceAdd.vue')
      },{
        path:'results',
        name:'results',
        meta:{title:'Results'},
        component: () => import('@/layout/testresults/IndexView.vue')

      }
      ,{
        path:'result2',
        name:'result2',
        meta:{title:'Results'},
        component: () => import('@/layout/testresults/Results2View.vue')

      }
      // ,{
      //   path:'testone',
      //   name:'testone',
      //   meta:{title:'Testone'},
      //   component: () => import('@/layout/testresults/TestoneView.vue')

      // }
      ,{
        path:'resultso',
        name:'resultso',
        meta:{title:'Results One'},
        component: () => import('@/layout/testresults/ResultsView.vue')

      },
      {
        path:'resultw',
        name:'resultw',
        meta:{title:'Results Two'},
        component: () => import('@/layout/testresults/ResultsTwo.vue')

      },
      {
        path:'resultw1',
        name:'resultw1',
        meta:{title:'Results Two'},
        component: () => import('@/layout/testresults/ResultsTwo1.vue')

      },
      {
        path:'resultw2',
        name:'resultw2',
        meta:{title:'Results Two'},
        component: () => import('@/layout/testresults/ResultsTwo2.vue')

      },
      {
        path:'resultw3',
        name:'resultw3',
        meta:{title:'Results Two'},
        component: () => import('@/layout/testresults/ResultsTwo3.vue')

      },
      {
        path:'resultw4',
        name:'resultw4',
        meta:{title:'Results Two'},
        component: () => import('@/layout/testresults/ResultsTwo4.vue')
      },
      {
        path:'resultw5',
        name:'resultw5',
        meta:{title:'Results Two'},
        component: () => import('@/layout/testresults/ResultsTwo5.vue')

      },
      // {
      //   path:'resultw6',
      //   name:'resultw6',
      //   meta:{title:'Results Two'},
      //   component: () => import('@/layout/testresults/ResultsTwo6.vue')

      // },
      // {
      //   path:'resultw7',
      //   name:'resultw7',
      //   meta:{title:'Results Two'},
      //   component: () => import('@/layout/testresults/ResultsTwo7.vue')
      // },
      {
        path:'historytest',
        name:'historytest',
        meta:{title:'History Test'},
        component: () => import('@/layout/historytest/HistoryTest.vue')

      }
    ]
  },
  
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')

  },{
    path: '/*',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  document.title="Quan Bio";
  next()
})
export default router
