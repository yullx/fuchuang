import Vue from 'vue'
import App from './App.vue'
import ElementUI, { Message, MessageBox } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './less/index.less'


import router from '../router'
import store from '../store'
import http from 'axios'
import '../api/mock.js'
import BaiduMap from 'vue-baidu-map'
import {request} from "../api/axios";

// import Video from 'video.js'
// import 'video.js/dist/video-js.css'
// import VideoPlayer from 'vue-video-player'	

// Vue.prototype.$video = Video
// Vue.use(VideoPlayer);
// // 第一个是videoJs的样式，后一个是vue-video-player的样式，因为考虑到我其他业务组件可能也会用到视频播放，所以就放在了main.js内

// require('vue-video-player/src/custom-theme.css')

// require('videojs-contrib-hls/dist/videojs-contrib-hls');


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$request = request;
Vue.prototype.$comfirm = MessageBox.confirm
Vue.prototype.$message = Message

Vue.use(BaiduMap, {
  ak: 'TQ7jDUQT0RXkeNUsbfPpND7BdfIE1DYe'  //这个地方是官方提供的ak密钥
})


Vue.prototype.$http =http

new Vue({
  el:'#app',
  store,
  router,

  render: h => h(App)
  
})
