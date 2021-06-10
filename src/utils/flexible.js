/*
 * @Author: wangshengxian
 * @Date: 2020-08-19 10:06:48
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-18 15:46:02
 * @Desc: 适配方案
 */
import platform from "@/utils/platform";
(function(window, document) {
  // console.log(platform.isPC());
  var docEl = document.documentElement;
  var bodyEl = document.querySelector("body");

  setUnit();
  window.addEventListener("resize", setUnit, false);
  window.addEventListener("pageshow", function(e) {
    // console.log("-pageShow-", e);
    if (e.persisted) setUnit();
  });

  function setUnit() {
    // docEl.clientWidth > 1024
    if (platform.isPC()) {
      docEl.style.fontSize = 37.5 + "px";
      // docEl.style.fontSize = 100 + "px";
    } else {
      let sizeUI = 750;
      let remBase = 75;
      console.log(docEl.clientWidth);
      let docFontSize = (docEl.clientWidth / sizeUI) * remBase;
      // docEl.style.fontSize = docEl.clientWidth / (750 / 100) + "px";
      docEl.style.fontSize = docFontSize + "px";
      bodyEl.style.fontSize = 16 / docFontSize + "rem";
    }

    toggleClassName();
  }

  function toggleClassName() {
    var containerDom = document.getElementById("app");
    if (platform.isPC()) {
      containerDom.className = "";
      document.body.className = "";
    } else {
      containerDom.className = "mobile";
      document.body.className = "mobile";
    }
  }
})(window, document);

// ;(function(window, document) {
//   // var sizeUI = 750 // 定义设计图尺寸
//   // var remBase = 75 // 定义基准值
//   var sizeUI = 375 // 定义设计图尺寸
//   var remBase = 37.5 // 定义基准值
//   var docEl = document.documentElement
//   var bodyEl = document.querySelector('body')

//   setRemUnit()
//   window.addEventListener('resize', setRemUnit)
//   window.addEventListener('pageshow', function(e) {
//     if (e.persisted) setRemUnit()
//   })
//   function setRemUnit() {
//     var docFontSize = (docEl.clientWidth / sizeUI) * remBase
//     docEl.style.fontSize = docFontSize + 'px'
//     bodyEl.style.fontSize = 16 / docFontSize + 'rem'
//   }
// })(window, document)
