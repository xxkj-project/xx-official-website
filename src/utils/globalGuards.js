/*
 * @Author: wangshengxian
 * @Date: 2020-09-18 16:55:11
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-28 18:00:41
 * @Desc: 全局守卫
 */
import store from "@/store";

// 设置标题
function setDocumentTitle(to, from) {
  console.log(to, from);
  const { locale } = store.state.global;
  // console.log(locale);
  if (locale === "zh") {
    document.title =
      to.meta && to.meta.zh_title
        ? to.meta.zh_title + " - " + "杭州辛鑫科技"
        : "杭州辛鑫科技";
  } else {
    document.title =
      to.meta && to.meta.en_title
        ? to.meta.en_title + " - " + "Hangzhou Xinxin Technology"
        : "Hangzhou Xinxin Technology";
  }
}

export default {
  setDocumentTitle,
};
