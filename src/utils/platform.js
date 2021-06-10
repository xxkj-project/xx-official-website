/*
 * @Author: wangshengxian
 * @Date: 2020-08-19 10:06:48
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-01 14:08:49
 * @Desc:
 */
/**
 * 判断运行平台
 */
const reg = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i;
// const ua = window.navigator.userAgent.toLowerCase();
const uam = window.navigator.userAgent.match(reg);
// console.log(uam);

const isPC = () => {
  return uam ? false : true;
};
// console.log(isPC());

export default {
  isPC,
};
