import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { HttpGet, HttpPost } from './utils/request';
import { dateFormat, dayFormat, dateFormatNow } from './utils/moment';

// element UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 公共样式
import './styles/index.scss';

// 阻止启动生产消息
Vue.config.productionTip = false;

// 接口请求
Vue.prototype.HttpGet = HttpGet;
Vue.prototype.HttpPost = HttpPost;

// 时间转换
Vue.filter('formatDate', dateFormat);
Vue.filter('dayFormat', dayFormat);
Vue.filter('formatNow', dateFormatNow);
Vue.prototype.formatDate = dateFormat;
Vue.prototype.formatNow = dateFormatNow;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
