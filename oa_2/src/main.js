// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import axios from 'axios';
Vue.prototype.$axios = axios;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; 

Vue.use(ElementUI);
// 未登录页面拦截
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
     let username = localStorage.getItem('ms_username');
     if(username){
      console.log('已登录');
      next()
     }else{
      next({
        path: '/login',
        //query: { redirect: to.fullPath }
      })
     }
  } else {
    next() // 确保一定要调用 next()
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
