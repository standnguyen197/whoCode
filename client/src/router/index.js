import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
// Index authFacebook
import authFacebook from '@/components/authPage/'

// ServicePage
import servicePage from '@/components/sitePage/servicePage/'

// ServiceSuccessPage
import serviceSuccessPage from '@/components/sitePage/servicePage/serviceSuccess'

// WelcomePage
import WelcomePage from '@/components/sitePage/welcomePage/'

// CustomerPage
import customerPage from '@/components/customerPage/'


// CustomerServicePage

import indexCustomerServicePage from '@/components/customerServicePage/indexPage/'

// Setting

import settingCustomerServicePage from '@/components/customerServicePage/settingPage/'

// liveSettings

import liveSettingCustomerServicePage from '@/components/customerServicePage/settingPage/liveSettings/'

// Analytic

import analyticCustomerServicePage from '@/components/customerServicePage/analyticPage/'

// Open Live 

import openLiveCustomerServicePage from '@/components/customerServicePage/livePage/'

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
    },
    {
      path: '/welcome',
      component: WelcomePage,
      name: 'WelcomePage'
    },
    {
      path: '/dashboard',
      component: customerPage,
      name: 'customerPage'
    },
    // APP FOR CUSTOMER SERVICE
    {
      path: '/app',
      component: indexCustomerServicePage,
      name: 'indexCustomerServicePage'
    },
    {
      path: '/app/settings',
      component: settingCustomerServicePage,
      name: 'settingCustomerServicePage'
    },
    {
      path: '/app/settings/liveSettings',
      component: liveSettingCustomerServicePage,
      name: 'liveSettingCustomerServicePage'
    },
    {
      path: '/app/analytics',
      component: analyticCustomerServicePage,
      name: 'analyticCustomerServicePage'
    },
    // OPEN LIVE
    {
      path: '/app/OpenLive/:typeLive/:id',
      component: openLiveCustomerServicePage,
      name: 'openLiveCustomerServicePage'
    }
  ]
})
