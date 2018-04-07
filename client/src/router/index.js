import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
// Index authFacebook
import authFacebook from '@/components/authPage/'

// ServicePage
import servicePage from '@/components/sitePage/servicePage/'

// ServiceSuccessPage
import serviceSuccessPage from '@/components/sitePage/servicePage/serviceSuccess'

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
    },
    {
      path: '/dich-vu',
      component: servicePage,
      name: 'servicePage'
    },
    {
      path: '/dich-vu/thanh-cong',
      component: serviceSuccessPage,
      name: 'serviceSuccessPage'
    }
  ]
})
