/*
 * @Author: wangshengxian
 * @Date: 2020-08-19 10:06:48
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-17 18:15:09
 * @Desc:
 */
module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-plugin-px2rem": {
      rootValue: 37.5,
      unitPrecision: 5,
      propWhiteList: [],
      propBlackList: [],
      exclude: false,
      selectorBlackList: ["noRem"],
      ignoreIdentifier: false,
      replace: true,
      mediaQuery: false,
      minPixelValue: 2,
    },
  },
};
