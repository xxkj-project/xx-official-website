/*
 * @Author: wangshengxian
 * @Date: 2020-09-10 16:14:28
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-10-16 13:53:09
 * @Desc: 全局状态
 */
import Cookies from "js-cookie";

const state = {
  isOpenedI18n: false, // 是否开启国际化，默认为false
  activeRouter: sessionStorage.activeRouter || "",
  locale: "zh", //国际化
  // locale: Cookies.get("locale") || "zh", //国际化
};

const getters = {};

const mutations = {
  //设置当前路由
  setActiveRouter(state, router) {
    // console.log("-curr-router-", state, router);
    state.activeRouter = router;
    sessionStorage.setItem("activeRouter", state.activeRouter);
  },
  //设置语言
  setLanguage(state, language) {
    state.locale = language;
    Cookies.set("locale", language);
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
