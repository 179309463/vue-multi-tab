import  "babel-polyfill";   // 兼容IE

import Vue from 'vue'
import store from '@/Store/index'
import index from './MainFraim.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import TabRoute from '@/Router/TabRoute'
import RouterMethods from '@/Router/RouterMethods'

Vue.use(TabRoute)
Vue.use(RouterMethods)
Vue.use(ElementUI);

new Vue({
    el: '#app',
    store,
    render: v => v(index)
})