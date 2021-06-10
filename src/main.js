/*
 * @Author: wangshengxian
 * @Date: 2020-08-19 10:06:48
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-29 16:18:53
 * @Desc: 入口文件
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n/i18n";
import Toast from "@/components/toast";
import "./assets/css/base.scss";
import "./assets/iconfont/iconfont.css";
// wowjs动画样式css
import "wowjs/css/libs/animate.css";
// rem适配
import "@/utils/flexible";
// 全局路由守卫
import "@/utils/routerGuards";
import BaiduMap from "vue-baidu-map";

Vue.use(Toast);
Vue.use(BaiduMap, {
  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
  ak: "aeb15CoLYMQjHLyqGrjoqq8yHhSoBfSK",
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
  //预渲染,这里的render-event和vue.config.js里面的renderAfterDocumentEvent配置名称一致
  mounted() {
    document.dispatchEvent(new Event("render-event"));
  },
}).$mount("#app");
