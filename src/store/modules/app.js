/*
 * @Author: wangshengxian
 * @Date: 2020-08-19 10:06:48
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-14 14:20:15
 * @Desc:
 */
import Cookies from "js-cookie";

export default {
  state: {
    locale: Cookies.get("locale") || "zh", //国际化
  },
  mutations: {
    //切换语言
    setLanguage(state, language) {
      state.locale = language;
      Cookies.set("locale", language);
    },
  },
};
