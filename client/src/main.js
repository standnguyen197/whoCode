import Vue from 'vue'
import App from './App'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import VueRouter from 'vue-router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import '@/assets/custom-less/index.less';
import locale from 'iview/dist/locale/vi-VN';
import { Button, Table , Icon , Switch , Sider} from 'iview';
import FBSdk from './services/configFBSdk';
import FBSignInButton from 'vue-facebook-signin-button'
import VueCookies from 'vue-cookies';
import VueLocalStorage from 'vue-localstorage'
import VueSession from 'vue-session'
import VueTyperPlugin from 'vue-typer'
import vueHeadful from 'vue-headful';
import VueMoment from 'vue-moment';
import moment from 'moment-timezone'
require('moment/locale/vi')

Vue.use(VueMoment, {
  moment,
})
Vue.component('vue-headful', vueHeadful);
Vue.use(VueTyperPlugin);
Vue.use(VueSession);
Vue.use(VueLocalStorage);
Vue.use(VueCookies);
Vue.use(FBSignInButton);
Vue.component('Button', Button);
Vue.component('Table', Table);
Vue.component('Icon', Icon);
Vue.component('Sider', Sider);
Vue.use(FBSdk);
Vue.use(VueRouter);
Vue.use(iView,{locale});
Vue.use(VueSweetalert2);
Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
