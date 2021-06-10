<!--
 * @Author: wangshengxian
 * @Date: 2020-08-31 14:11:25
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-16 15:29:37
 * @Desc: 区块链搭建 - 交易系统5.0
-->
<template>
  <div class="curbTrading">
    <banner type="system">
      <div class="bannerTxtBox">
        <span class="bannerTitle">交易系统5.0</span>
        <span class="bannerDesc">独立部署，支持横向扩展</span>
      </div>
    </banner>

    <div class="main">
      <div class="frameIntroWrap">
        <div class="blockTitleBox">
          <h2 class="bigTitle">{{ frameIntroData.bigTitle }}</h2>
          <p class="smallTitle">{{ frameIntroData.smallTitle }}</p>
        </div>
        <div class="introContent">
          <div class="topBox">
            <span class="icon"></span>
          </div>
          <ul class="bottomBox">
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
                  <p class="txt">{{ item }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="systemWrap">
        <div class="blockTitleBox">
          <h2 class="bigTitle">{{ systemData.bigTitle }}</h2>
        </div>
        <div class="systemContent">
          <div
            :class="'content' + '_' + index"
            v-for="(itemOptions, index) in systemData.list"
            :key="index"
          >
            <div class="systemTopBox">
              <span class="icon"></span>
            </div>
            <ul class="systemBottomBox commonDescBox">
              <li class="item" v-for="(item, idx) in itemOptions" :key="idx">
                <p class="itemTitle" :class="'title' + '_' + idx">
                  {{ item.title }}
                </p>
                <p class="itemDesc">{{ item.desc }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="featureWrap">
        <div class="blockTitleBox">
          <h2 class="bigTitle">{{ systemFeatureData.bigTitle }}</h2>
        </div>
        <div class="featureContent">
          <div class="systemTopBox"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner from "@/views/Mobile/components/banner";

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
      systemFeatureData: {
        bigTitle: "系统特性",
      },
    };
  },
  computed: {
    systemData() {
      let result = {
        bigTitle: "系统核心功能",
        list: [this.oneSystemData, this.twoSystemData, this.threeSystemData],
      };
      return result;
    },
    oneSystemData() {
      let result = [
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
      ];
      return result;
    },
    twoSystemData() {
      let result = [
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
      ];
      return result;
    },
    threeSystemData() {
      let result = [
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
      ];
      return result;
    },
  },
  created() {},
  mounted() {},
  methods: {},
  components: { banner },
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
$imgUrl: "~@/assets/images/pc/trading/";
$comColor: #555;

.bannerTxtBox {
  display: flex;
  flex-direction: column;

  .bannerTitle {
    font-size: 32px;
    margin-bottom: 32px;
  }

  .bannerDesc {
    font-size: 25px;
  }
}

.curbTrading {
  .main {
    // width: 100%;
    background: #fff;
    color: $comColor;
  }
}

.systemContent {
  .commonDescBox {
    .item {
      padding-bottom: 30px;

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

.frameIntroWrap {
  .introContent {
    padding: 0 20px;
    .topBox {
      display: flex;
      justify-content: center;
      padding: 20px 10px;
      .icon {
        display: block;
        width: 0.4 * 720px;
        height: 0.4 * 434px;
        // width: 100%;
        // height: 230px;
        background: url("#{$imgUrl}jy1.jpg") no-repeat center / cover;
      }
    }

    .bottomBox {
      .infoList {
        display: flex;
        padding-left: 70px;
        padding-bottom: 25px;
        margin-bottom: 25px;
        border-bottom: 1px solid #eaeaea;

        &.li_0 {
          background: url("#{$imgUrl}jy2.png") no-repeat;
        }

        &.li_1 {
          background: url("#{$imgUrl}jy3.png") no-repeat;
        }

        &.li_2 {
          background: url("#{$imgUrl}jy4.png") no-repeat;
        }

        .itemTitle {
          font-weight: 600;
          font-size: 15px;
          color: rgba(51, 51, 51, 1);
          margin-bottom: 6px;
        }

        .itemTxt {
          display: flex;
          font-size: 12px;
          line-height: 24px;

          &:before {
            content: "";
            display: inline-block;
            width: 6px;
            height: 6px;
            background: rgba(209, 209, 209, 1);
            border-radius: 50%;
            margin-right: 5px;
            margin-top: 9px;
          }

          .txt {
            flex: 1;
          }
        }
      }
    }
  }
}

.systemWrap {
  .blockTitleBox {
    background: rgba(0, 0, 255, 0.726);
    padding-bottom: 40px;

    .bigTitle {
      color: #fff;
    }
  }

  .systemContent {
    padding: 0 20px;

    .systemTopBox {
      display: flex;
      justify-content: center;
      padding: 20px 0;
    }
  }
}

.content_0 {
  background: #fff;

  .icon {
    width: 0.75 * 460px;
    height: 0.75 * 360px;
    // width: 345px;
    // height: 270px;
    background: url("#{$imgUrl}jy9.png") no-repeat center / cover;
  }

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
}

.content_1 {
  .icon {
    display: block;
    width: 0.8 * 390px;
    height: 0.8 * 370px;
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

.content_2 {
  .icon {
    display: block;
    width: 0.7 * 440px;
    height: 0.7 * 440px;
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

// 系统特性
.featureWrap {
  .featureContent {
    padding: 40px 0;
    .systemTopBox {
      width: 100%;
      height: 538px;
      background: url("#{$imgUrl}jy19.png") no-repeat center / cover;
      margin: 0 auto;
    }
  }
}
</style>
