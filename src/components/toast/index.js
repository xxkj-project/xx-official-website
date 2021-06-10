/*
 * @Author: wangshengxian
 * @Date: 2020-08-19 10:06:48
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-21 09:54:45
 * @Desc: 全局toast组件
 */
import ToastComp from "./index.vue";

let $vm;

export default {
  install: function(Vue, options) {
    // 当$vm不存在的时候，需要创建一个实例
    console.log("-toast-options-", options);
    if (!$vm) {
      const ToastPlugin = Vue.extend(ToastComp);
      $vm = new ToastPlugin({ el: document.createElement("div") });
      // console.log($vm)
      document.body.appendChild($vm.$el);
    }
    const toast = {
      // 显示loading, text:文字描述（可选）,duration时长
      show({ text, duration = 2000 }) {
        console.log(text);
        $vm.isShow = true;
        $vm.text = text;
        setTimeout(this.hide, duration);
      },
      // 关闭loading
      hide() {
        $vm.isShow = false;
        $vm.text = "";
      },
    };
    // 给vue实例注册loading
    Vue.prototype.$toast = toast;
    return Vue;
  },
};
