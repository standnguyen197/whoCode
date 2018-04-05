import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
// Index authFacebook
import authFacebook from '@/components/authPage/'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/dang-nhap',
      component: authFacebook,
      name: 'authFacebook'
    }
  ]
})