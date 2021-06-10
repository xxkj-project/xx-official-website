/*
 * @Author: wangshengxian
 * @Date: 2020-08-19 10:06:48
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-11 11:38:44
 * @Desc: store全局状态模块
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import app from "./modules/app";
import global from "./modules/global";

export default new Vuex.Store({
  modules: {
    app,
    global,
  },
});
