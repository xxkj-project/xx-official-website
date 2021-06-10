/*
 * @Author: wangshengxian
 * @Date: 2020-08-19 10:06:48
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-09 10:30:16
 * @Desc: 工具文件
 */

/**
 * 日期时间格式化
 * @param {date} time js的date类型或时间戳
 * @param {string} format 自定义时间格式，选填，默认为'{y}-{m}-{d} {h}:{i}:{s}'
 * @return {string} 默认格式 2018-09-01 10:55:00
 */
function formatDate(time, format) {
  time = time || new Date();
  format = format || "{y}-{m}-{d} {h}:{i}:{s}";
  let date = time;
  if (typeof time !== "object") {
    if (("" + time).length === 10) time = +time * 1000;
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    if (key === "a")
      return ["一", "二", "三", "四", "五", "六", "日"][value - 1];
    if (result.length > 0 && value < 10) {
      value = "0" + value;
    }
    return value || 0;
  });
  return timeStr;
}

/**
 * 日期格式转时间戳
 * @param {date} date date类型 2019-05-24 14:22:17
 * @return {string} 1558678937000
 */
function getTimestamp(date) {
  if (!date) {
    return new Date().getTime();
  }
  if (typeof date === "string") {
    date = date.replace(/-/g, "/");
  }
  return new Date(date).getTime();
}

// /**
//  * 一维数组转化成二维数组
//  * @param list 数据源
//  * @param childLen 子数组的length,默认为2
//  */
// export function changeArrayFunc(list, childLen = 2) {
//   // console.log(list);
//   let resultArr = []; // 结果
//   let midArr = []; // 中间过渡数组
//   list.map((val, index) => {
//     // console.log(val, index);
//     midArr.push(val);
//     if (midArr.length === childLen) {
//       resultArr.push(midArr);
//       midArr = [];
//     }
//     if (index === list.length - 1 && midArr.length != 0) {
//       // console.log("-last-", midArr);
//       resultArr.push(midArr);
//     }
//   });
//   // console.log(resultArr);
//   return resultArr;
// }

/**
 * 一维数组转换二维数组
 */
function arrTrans(list, childLen = 2) {
  let len = list.length;
  let lineNum =
    len % childLen === 0 ? len / childLen : Math.floor(len / childLen + 1);
  let resultArr = [];
  for (let i = 0; i < lineNum; i++) {
    // slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
    let temp = list.slice(i * childLen, i * childLen + childLen);
    // console.log(isExistObject(temp));
    if (isExistObject(temp)) {
      console.log("-object-");
      resultArr.push(deepClone(temp));
    } else {
      console.log("-array-");
      resultArr.push(temp);
    }
  }
  console.log(resultArr);
  return resultArr;
}

/**
 * 两个数组对象合并
 * @param {Array} arr1 源数组一
 * @param {Array} arr2 源数组二
 * @param 注意：当两个对象中都有相同属性的话，后者会覆盖前者对应属性的值
 * @return {Array} [{obj1:1},{obj2:2}]
 */
function objectArrayMerge(arr1, arr2) {
  // 方法一
  let midArr = [];
  arr1.map((val, index) => {
    let mid = {};
    mid = { ...val, ...arr2[index] };
    midArr.push(mid);
  });
  return midArr;

  // 方法二
  // arr1.map((val, index) => {
  //   midArr.push(Object.assign({}, val, arr2[index]));
  // });
  // return midArr;
}

/**
 * 多个对象合并 调用=》multipleObjectMerge(obj1,obj2,...)
 * @param agrs 参数对象的数组集合，参数个数不限，类型为对象类型
 * @return {object} 返回一个全新对象，(属于对象的深拷贝)
 */
function multipleObjectMerge(...agrs) {
  return Object.assign({}, ...agrs);
}

/**
 * 深拷贝
 * @param {object|array} source 数据源
 * @return {object|array}
 */
function deepClone(source) {
  return JSON.parse(JSON.stringify(source));
}

/**
 * 判断是否为数组
 * @param data 数据源
 */
function isArray(data) {
  return Object.prototype.toString.call(data) == "[object Array]";
}

/**
 * 判断是否为对象
 * @param data 数据源
 */
function isObject(data) {
  return Object.prototype.toString.call(data) == "[object Object]";
}

/**
 * 判断数组中是否包含对象类型的元素
 * @param {Array} list 数据源
 */
function isExistObject(list) {
  for (let i = 0; i < list.length; i++) {
    if (isObject(list[i])) {
      // console.log("-object-");
      return true;
    }
  }
  return false;
}

/**
 * 判断数组中是否包含对象
 * @param {Array} source 数据源
 * @return {Boolean}
 */
function isArrayObject(source) {
  // console.log(source);
  let reg = RegExp(/{/);
  let mid = reg.test(JSON.stringify(source));
  return mid;
}

/**
 * 获取数据类型
 * @param {any} data 数据
 * @return {string} 'array','object','null','number','string','undefined'
 */
function getDataType(data) {
  const str = Object.prototype.toString.call(data);
  console.log(str.match(/\s(\w*)/));
  return str.match(/\s(\w*)\]/)[1].toLowerCase();
}

export default {
  formatDate,
  getTimestamp,
  arrTrans,
  objectArrayMerge,
  multipleObjectMerge,
  isArrayObject,
  isArray,
  isObject,
  getDataType,
};
