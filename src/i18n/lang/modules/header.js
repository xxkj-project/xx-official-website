/*
 * @Author: wangshengxian
 * @Date: 2020-09-10 18:07:13
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-30 16:56:15
 * @Desc: 顶部nav -- i18n
 */
const zhCnPcHeader = {
  oneMenus: ["首页", "产品服务", "解决方案", "新闻资讯", "关于我们"],
  secondMenuObj: {
    product: ["交易所系统", "区块链应用", "互联网应用", "DAPP落地"],
    about: ["关于我们", "联系我们"],
  },
};

const enPcHeader = {
  oneMenus: [
    "Home", //首 页
    "Product", //服 务
    // "Product service", //服 务
    "Solutions", //解決方案
    "News", //新闻资讯
    "About us", //关于我们
  ],
  secondMenuObj: {
    product: [
      "Trading System", // 交易所系统
      "Blockchain application", // 区块链应用
      "Internet application", // 互联网应用
      "DAPP landing", // DAPP落地
    ],
    about: [
      "About us", //关于我们
      "Contact us", //联系我们
    ],
  },
};

// TODO 未完待修改
const zhCnMobileHeader = {
  content: [
    "首 页", //首 页
    "交易所系统",
    "区块链应用",
    "互联网应用",
    "DAPP落地",
    "解决方案", //解决方案
    "新闻资讯", //新闻资讯
    "关于我们", //关于我们
    "联系我们", //联系我们
  ],
};

const enMobileHeader = {
  content: [
    "Home", //首 页
    "Trading System", // 交易所系统
    "Blockchain application", // 区块链应用
    "Internet application", // 互联网应用
    "DAPP landing", // DAPP落地
    "Solutions", //解決方案
    "News", //新闻资讯
    "About us", //关于我们
    "Contact us", //联系我们
    "X-Club", //关于我们
  ],
};

export { zhCnPcHeader, enPcHeader, zhCnMobileHeader, enMobileHeader };
