import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({  
  routes: [ 
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: resolve => require(['../components/page/login.vue'], resolve)
    
    }, 
    {
      path: '/home',
      component: resolve => require(['../components/common/home.vue'], resolve),
      meta: { requiresAuth: true },
      children:[
          {
              path: '/',
              component: resolve => require(['../components/page/attendance.vue'], resolve)
          },
          {
            path: '/attendance',
            component: resolve => require(['../components/page/attendance.vue'], resolve)
        },
          {
            path: '/readme',
            component: resolve => require(['../components/page/readme.vue'], resolve)
          },
          {
            path: '/daily',
            component: resolve => require(['../components/page/report/daily_report.vue'], resolve)
          },
          {
            path: '/dailylist',
            component: resolve => require(['../components/page/report/daily_report_list.vue'], resolve)
          },
          {
            path: '/monthly',
            component: resolve => require(['../components/page/report/monthly_report.vue'], resolve)
          },
          {
            path: '/weekly',
            component: resolve => require(['../components/page/report/weekly_report.vue'], resolve)
          }
          ,
          {
            path: '/leave',
            component: resolve => require(['../components/page/leave.vue'], resolve)
           },
           {
            path: '/test',
            component: resolve => require(['../components/page/test.vue'], resolve)
           }
      ]
    }, 
      {
        path: '*',
        component: resolve => require(['../components/common/error.vue'], resolve)
       } 
  
  ]
})
