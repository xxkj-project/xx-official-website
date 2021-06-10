/*
 * @Author: wangshengxian
 * @Date: 2020-09-15 17:08:33
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-21 11:02:55
 * @Desc: wowjs -- mixins ==> vue3.0 通过Composition API重构 (mixins有副作用)
 */
import { WOW } from "wowjs";
export default {
  data: () => {},
  mounted() {
    // console.log("-wowjs-mixins-", new WOW());
    new WOW().init();
  },
};
