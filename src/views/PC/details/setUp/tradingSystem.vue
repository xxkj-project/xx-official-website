<!--
 * @Author: wangshengxian
 * @Date: 2020-08-31 14:11:25
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-17 18:17:10
 * @Desc: 区块链搭建 - 交易系统5.0
-->
<template>
  <div class="trading">
    <bannerComp :infoData="bannerData">
      <span>交易系统5.0</span>
    </bannerComp>
    <div class="main">
      <div class="container">
        <div class="frame-container">
          <div class="frameIntroWrap">
            <div class="blockTitleBox">
              <h2 class="bigTitle">{{ frameIntroData.bigTitle }}</h2>
              <p class="smallTitle">{{ frameIntroData.smallTitle }}</p>
            </div>
            <div class="commonContent introContent">
              <div class="leftBox">
                <span class="leftIcon"></span>
              </div>
              <ul class="rightBox">
                <li
                  class="infoList"
                  :class="'li' + '_' + index"
                  v-for="(items, index) in frameIntroData.infoList"
                  :key="index"
                >
                  <div>
                    <div class="itemTitle">
                      {{ items.title }}
                    </div>
                    <div
                      class="itemTxt"
                      v-for="(item, idx) in items.list"
                      :key="idx"
                    >
                      {{ item }}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="systemcore-container">
          <div class="code-one-container">
            <div class="codeWrap">
              <div class="blockTitleBox">
                <h2 class="bigTitle">{{ systemCodeData.bigTitle }}</h2>
              </div>
              <div class="commonContent oneContent">
                <ul class="descBox commonDescBox">
                  <li
                    class="item"
                    v-for="(item, index) in systemCodeData.oneInfoList"
                    :key="index"
                  >
                    <p class="itemTitle" :class="'title' + '_' + index">
                      {{ item.title }}
                    </p>
                    <p class="itemDesc">{{ item.desc }}</p>
                  </li>
                </ul>
                <div class="iconBox">
                  <span class="icon"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="code-two-container">
            <div class="codeWrap">
              <div class="commonContent twoContent">
                <div class="iconBox">
                  <span class="icon"></span>
                </div>
                <ul class="descBox commonDescBox">
                  <li
                    class="item"
                    v-for="(item, index) in systemCodeData.twoInfoList"
                    :key="index"
                  >
                    <p class="itemTitle" :class="'title' + '_' + index">
                      {{ item.title }}
                    </p>
                    <p class="itemDesc">{{ item.desc }}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="code-three-container">
            <div class="codeWrap">
              <div class="commonContent threeContent">
                <ul class="descBox commonDescBox">
                  <li
                    class="item"
                    v-for="(item, index) in systemCodeData.threeInfoList"
                    :key="index"
                  >
                    <p class="itemTitle" :class="'title' + '_' + index">
                      {{ item.title }}
                    </p>
                    <p class="itemDesc">{{ item.desc }}</p>
                  </li>
                </ul>
                <div class="iconBox">
                  <span class="icon"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="systemfeature-container">
          <div class="featureWrap">
            <div class="blockTitleBox">
              <h2 class="bigTitle">{{ systemFeatureData.bigTitle }}</h2>
            </div>
            <div class="featureContent">
              <div class="iconBox"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bannerComp from "@/views/PC/components/banner";

export default {
  name: "",
  data() {
    return {
      bannerData: {
        imgUrl: require("@/assets/images/pc/trading/banner_05.jpg"),
      },
      frameIntroData: {
        bigTitle: "系统架构简介",
        smallTitle: "系统组网核心有3个部分：钱包引擎、撮合引擎、系统服务",
        infoList: [
          {
            title: "钱包",
            list: [
              "冷热隔离，热钱包处理充币和实时提币需求，冷钱包离线存储平台核心资产。",
              "多级划分，对热钱包进行多级划分，通过AI算法，将闲置资做隔离隐藏。",
              "私密网络，热钱包独享私密安全网络，让线上资产绝对安全。",
              "多级备份，自动化运维，防止节点故障。",
            ],
          },
          {
            title: "撮合引擎",
            list: [
              "独立部署，支持横向扩展",
              "异步多线程",
              "全内存+数据锁+MQ队列",
              "撮合效率1万笔/秒",
            ],
          },
          {
            title: "系统服务",
            list: [
              "面向服务，支持并行横向热扩展",
              "网络线路冗余，1机4网口确保网络稳定",
              "DB主从分离，实时备份，支持异备",
            ],
          },
        ],
      },
      systemCodeData: {
        bigTitle: "系统核心功能",
        oneInfoList: [
          { title: "交易挖矿", desc: "交易手续费返还，持币分红，参数自定义" },
          { title: "K线行情", desc: "清爽普通版+专业指标 PRO版，满足不同需求" },
          {
            title: "场外交易",
            desc: "基础版+升级版，满足平台代币，主流大币的场外交易",
          },
          {
            title: "APP系统",
            desc: "原生app，多终端支持， 操作便捷，随时交易",
          },
        ],
        twoInfoList: [
          {
            title: "财务系统",
            desc:
              "应收应付，资产对账，异 常账目处理，数据报表， 10年财务软件产品经理， 倾力设计",
          },
          { title: "保险柜系统", desc: "分级保险柜，代管理财， 私密呈现" },
          {
            title: "钱包管理",
            desc: "冷热隔离，多级划分，私密网络",
          },
        ],
        threeInfoList: [
          {
            title: "风控系统",
            desc: "自动化运维体系，异常警报，操作溯源，预防风险保障资产安全",
          },
          {
            title: "API系统",
            desc: "除了行情／交易／等常规 API，还支持代理渠道接入API",
          },
          {
            title: "撮合引擎",
            desc: "异步多线程，内存+MQ 机制+事物锁，快人一步",
          },
          {
            title: "机器人",
            desc: "同步大盘数据交易+内部 自定义规则交易，降低交易风险",
          },
        ],
      },
      systemFeatureData: {
        bigTitle: "系统特性",
      },
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  components: { bannerComp },
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
$imgUrl: "~@/assets/images/pc/trading/";
$contentWidth: 1320px;
$comColor: #555;
/deep/ .bannerWrap {
  height: 600px;
}
.trading {
  .main {
    .container {
      .frame-container,
      .systemcore-container,
      .systemfeature-container {
        width: 100%;
        background: #fff;
      }
    }
  }
}

// common 属性
.blockTitleBox {
  text-align: center;
  padding-top: 40px;

  .bigTitle {
    font-size: 22px;
    color: #333;
    line-height: 40px;
  }

  .smallTitle {
    font-size: 14px;
    color: rgba(136, 136, 136, 1);
  }
}

.commonContent {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #555;
  padding: 40px 110px;
  // border-bottom: 1px solid #ccc;
}

.commonDescBox {
  padding-top: 20px;

  .item {
    margin-bottom: 30px;

    .itemTitle {
      font-size: 16px;
      line-height: 40px;
      padding-left: 30px;
    }

    .itemDesc {
      font-size: 14px;
      line-height: 20px;
    }
  }
}

.frameIntroWrap {
  width: $contentWidth;
  margin: 0 auto;
  padding: 0 20px;

  .introContent {
    padding: 40px 0;

    .leftBox {
      .leftIcon {
        display: block;
        width: 720px;
        height: 434px;
        background: url("#{$imgUrl}jy1.jpg") no-repeat center / cover;
      }
    }

    .rightBox {
      .infoList {
        display: flex;
        padding-bottom: 25px;
        margin-bottom: 25px;
        border-bottom: 1px solid #eaeaea;

        &:before {
          content: "";
          display: inline-block;
          width: 35px;
          height: 35px;
          margin-right: 20px;
        }

        &.li_0:before {
          background: url("#{$imgUrl}jy2.png") no-repeat center / cover;
        }

        &.li_1:before {
          background: url("#{$imgUrl}jy3.png") no-repeat center / cover;
        }

        &.li_2:before {
          background: url("#{$imgUrl}jy4.png") no-repeat center / cover;
        }

        .itemTitle {
          font-weight: 600;
          font-size: 15px;
          color: rgba(51, 51, 51, 1);
          margin-bottom: 6px;
        }

        .itemTxt {
          display: flex;
          align-items: center;
          font-size: 14px;
          line-height: 20px;

          &:before {
            content: "";
            display: inline-block;
            width: 6px;
            height: 6px;
            background: rgba(209, 209, 209, 1);
            border-radius: 50%;
            margin-right: 5px;
          }
        }
      }
    }
  }
}

.code-one-container {
  width: 100%;
  height: 580px;
  background: url("#{$imgUrl}bg1.jpg") no-repeat center / cover;
  margin-bottom: 30px;
}
.codeWrap {
  width: $contentWidth;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.code-one-container {
  .blockTitleBox {
    padding-bottom: 40px;
    .bigTitle {
      color: #fff;
    }
  }
  .oneContent {
    background: #fff;
    // padding: 40px 110px;

    .title_0 {
      background: url("#{$imgUrl}jy5.png") no-repeat left;
      background-size: 24px;
    }
    .title_1 {
      background: url("#{$imgUrl}jy6.png") no-repeat left;
      background-size: 24px;
    }
    .title_2 {
      background: url("#{$imgUrl}jy7.png") no-repeat left;
      background-size: 24px;
    }
    .title_3 {
      background: url("#{$imgUrl}jy8.png") no-repeat left;
      background-size: 24px;
    }

    .icon {
      display: block;
      width: 460px;
      height: 360px;
      background: url("#{$imgUrl}jy9.png") no-repeat center / cover;
    }
  }
}

.code-two-container {
  .twoContent {
    .icon {
      display: block;
      width: 390px;
      height: 370px;
      background: url("#{$imgUrl}jy10.png") no-repeat center / cover;
    }
    .title_0 {
      background: url("#{$imgUrl}jy11.png") no-repeat left;
      background-size: 24px;
    }
    .title_1 {
      background: url("#{$imgUrl}jy12.png") no-repeat left;
      background-size: 24px;
    }
    .title_2 {
      background: url("#{$imgUrl}jy13.png") no-repeat left;
      background-size: 24px;
    }
  }
}

.code-three-container {
  .threeContent {
    .icon {
      display: block;
      width: 438px;
      height: 438px;
      background: url("#{$imgUrl}jy18.png") no-repeat center / cover;
    }
    .title_0 {
      background: url("#{$imgUrl}jy14.png") no-repeat left;
      background-size: 24px;
    }
    .title_1 {
      background: url("#{$imgUrl}jy15.png") no-repeat left;
      background-size: 24px;
    }
    .title_2 {
      background: url("#{$imgUrl}jy16.png") no-repeat left;
      background-size: 24px;
    }
    .title_3 {
      background: url("#{$imgUrl}jy17.png") no-repeat left;
      background-size: 24px;
    }
  }
}

// 系统特性
.featureWrap {
  width: $contentWidth;
  margin: 0 auto;
  .featureContent {
    padding: 40px 0;
    .iconBox {
      width: 1200px;
      // width: 100%;
      height: 538px;
      background: url("#{$imgUrl}jy19.png") no-repeat center / cover;
      margin: 0 auto;
    }
  }
}
</style>
