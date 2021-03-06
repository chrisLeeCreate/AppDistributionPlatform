import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import DownLoadApk from '@/components/DownLoadApk'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/DownLoadApk',
      name: 'DownLoadApk',
      component: DownLoadApk
    }
  ]
})
