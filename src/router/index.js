import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import main from '@/components/main'
import userList from '@/components/userList'
import feedbackList from '@/components/feedbackList'
import reply from '@/components/reply'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },{
      path: '/userList',
      name: 'userList',
      component: userList
    },{
      path: '/feedbackList',
      name: 'feedbackList',
      component: feedbackList
    },{
      path: '/reply/:openId',
      name: 'reply',
      component: reply
    }
  ]
})
