<!--
 * @Author: wangshengxian
 * @Date: 2020-08-31 14:18:15
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-16 15:36:58
 * @Desc: 区块链应用 - 虚拟币支付3.0
-->
<template>
  <div class="virtualCurrency">
    <banner type="wallet">
      <div class="bannerTxtBox">
        <p class="bannerTitle wow fadeInLeft" data-wow-delay="0.5s">
          {{ infoData.bannerMainTitle }}
        </p>
      </div>
    </banner>

    <div class="main">
      <div class="payOneWrap">
        <div class="titleBox">
          <h2 class="bigTitle">{{ payDiffData.bigTitle }}</h2>
          <p class="smallTitle">{{ payDiffData.smallTitle }}</p>
        </div>
        <div class="contentWrap">
          <div class="leftBox">
            <ul class="pay">
              <li class="payTitle item">
                {{ payDiffData.oldPayInfo.title }}
              </li>
              <li
                class="oldPayItem item"
                v-for="(item, index) in payDiffData.oldPayInfo.list"
                :key="index"
              >
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="leftBox">
            <ul class="pay">
              <li class="payTitle item">
                {{ payDiffData.newPayInfo.title }}
              </li>
              <li
                class="oldPayItem item"
                v-for="(item, index) in payDiffData.newPayInfo.list"
                :key="index"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="payTwoWrap">
        <div class="titleBox">
          <h2 class="bigTitle">{{ payTwoData.bigTitle }}</h2>
        </div>
        <div class="content payTwo">
          <ul class="listBox">
            <li
              class="itemBox"
              v-for="(item, index) in payTwoData.list"
              :key="index"
            >
              <div class="item" :class="'item' + '_' + index">
                <p class="txt top">
                  <span>{{ item.title1 }}</span>
                  <span>{{ item.title2 }}</span>
                </p>
                <p class="txt bottom">
                  <span>{{ item.desc1 }}</span>
                  <span>{{ item.desc2 }}</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="payThreeWrap">
        <div class="titleBox">
          <h2 class="bigTitle">{{ payThreeData.bigTitle }}</h2>
          <p class="smallTitle">{{ payThreeData.smallTitle }}</p>
        </div>
        <div class="payThreeContent">
          <div class="imgBox">
            <span class="bg"></span>
          </div>
        </div>
      </div>

      <div class="payFourWrap">
        <div class="payFourcontent payFour">
          <div class="leftBox">
            <img :src="payFourData.imgUrl" alt="" />
          </div>
          <div class="rightBox">
            <ul class="listBox">
              <li
                class="item"
                v-for="(items, index) in payFourData.list"
                :key="index"
              >
                <div class="left">
                  <p class="itemTitle">{{ items.title }}</p>
                </div>
                <div class="right">
                  <div class="txtBox">
                    <p v-for="(item, idx) in items.expList" :key="idx">
                      {{ item }}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="payFiveWrap">
        <div class="titleBox">
          <h2 class="bigTitle">{{ payFiveData.bigTitle }}</h2>
          <p class="smallTitle">{{ payFiveData.smallTitle }}</p>
        </div>
        <div class="contentWrap">
          <div
            class="payFive"
            v-for="(item, index) in payFiveData.contentList"
            :key="index"
          >
            <div class="content contentItems">
              <imgTxt :infoData="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import wowMixins from "@/mixins/wowMixins";
import banner from "@/views/Mobile/components/banner";
import imgTxt from "@/views/Mobile/details/components/imgTxt";
export default {
  name: "",
  mixins: [wowMixins],
  data() {
    return {
      bannerData: {
        imgUrl: require("@/assets/images/pc/payment/banner_06.jpg"),
      },
      infoData: {
        bannerMainTitle: "虚拟币支付3.0",
      },
      payDiffData: {
        bigTitle: "数字货币支付————移动支付的新曙光",
        smallTitle:
          "不受国界和行业的限制，极低的支付手续费，没有层层代理转手，及时到账",
        oldPayInfo: {
          title: "传统移动端支付",
          list: [
            "监管严格",
            "外汇管制",
            "高风险、易冻结",
            "手续费高",
            "到账慢",
          ],
        },
        newPayInfo: {
          title: "数字货币移动支付",
          list: [
            "不受严格监管",
            "不受外汇管制",
            "私密、安全",
            "手续费低",
            "到账快",
          ],
        },
      },
      payTwoData: {
        bigTitle: "MoPay————业内领先的数字货币支付系统开发方案",
        list: [
          {
            title1: "优秀的",
            title2: "移动支付体验",
            desc1: "会用支付宝/微信，就会用",
            desc2: "MoPay",
          },
          {
            title1: "真正的",
            title2: "多币种支持",
            desc1: "无需复杂换笔",
            desc2: "持有多种币种都能快速支付",
          },
          {
            title1: "简便的",
            title2: "跨境转账功能",
            desc1: "转账秒到账",
            desc2: "手续费低（可设置为免费）",
          },
          {
            title1: "快捷的",
            title2: "清算与结算",
            desc1: "流水清晰，往来清楚",
            desc2: "T+0高效结算",
          },
          {
            title1: "灵活的",
            title2: "后台管理模式",
            desc1: "功能细节均可配置",
            desc2: "简单设置即可满足个性需求",
          },
          {
            title1: "健全的",
            title2: "资金风控方案",
            desc1: "风格标准严格",
            desc2: "有效规避汇率波动风险",
          },
        ],
      },
      payThreeData: {
        bigTitle: "丰富的功能可供定制，助您打造最佳的用户体验",
        smallTitle:
          "经典的移动支付流程，符合用户日常使用习惯，完备的周边功能支持，打造完整支付生态",
        info: {
          title: "在线支付",
          desc1: "APP调用或者在线跳转，打开APP快速完成支付",
          desc2:
            "不需要传统的OTC流程，打开页面-确认支付-输入密码-支付完成，就是这么简单",
        },
      },
      payFourData: {
        imgUrl: require("@/assets/images/pc/payment/case9.png"),
        list: [
          {
            title: "转币转账",
            expList: ["支持跨境转账", "转账手续费低廉", "到账速度快，成功率高"],
          },
          {
            title: "转币转账",
            expList: ["支持跨境转账", "转账手续费低廉", "到账速度快，成功率高"],
          },
          {
            title: "转币转账",
            expList: ["支持跨境转账", "转账手续费低廉", "到账速度快，成功率高"],
          },
        ],
      },
    };
  },
  computed: {
    payFiveData() {
      let result = {
        bigTitle: "完美适配多种场景，业务发展的得力助手",
        smallTitle:
          "线上支付（移动端/网页端）与线下支付全覆盖。跨境的转账支付与境内转账支付无差别。",
      };
      result = {
        ...result,
        contentList: [
          this.sceneOneData,
          this.sceneTwoData,
          this.sceneThreeData,
        ],
      };
      // console.log("-payFiveData-", result);
      return result;
    },
    sceneOneData() {
      return {
        type: "img",
        imgStyleObj: { width: 0.8 * 383, height: 0.8 * 303 },
        title: "线上支付",
        list: [
          "支付过程中只有数字货币流转，没有资金监管风险，没有账号冻结风险",
          "用户持有任意币种，即可支付",
          "无需跨境费用，手续费低",
          "资金秒到，T+0结算",
        ],
        imgUrl: require("@/assets/images/pc/payment/case11.png"),
      };
    },
    sceneTwoData() {
      return {
        type: "txt",
        imgStyleObj: { width: 0.9 * 327, height: 0.9 * 324 },
        title: "跨境转账",
        list: [
          "转账仅需转币，没有法币流转，没有资金监管风险，没有限额限制",
          "转币币种灵活可选",
          "转币秒到，无需长时间等待",
          "在线一键操作，无需复杂手续，手续费低",
          "收到转账即可线下支付，无需兑换成法币",
        ],
        imgUrl: require("@/assets/images/pc/payment/case12.png"),
      };
    },
    sceneThreeData() {
      return {
        type: "img",
        imgStyleObj: { width: 0.9 * 321, height: 0.9 * 305 },
        title: "境外线下消费",
        list: [
          "出国无需换汇，汇率低，买买买更划算",
          "支付流程便捷，真正的移动支付体验",
          "支付过程无需OTC过程打断，从支付开始到支付成功，3秒搞定",
          "商家以法币或数字货币清算，以法币报价",
        ],
        imgUrl: require("@/assets/images/pc/payment/case13.png"),
      };
    },
  },

  created() {},
  mounted() {},
  methods: {},
  components: { banner, imgTxt },
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
$imgUrl: "~@/assets/images/pc/payment/";
$contentWidth: 1320px;
.virtualCurrency {
  .main {
    width: 100%;
    background: #fff;
  }
}

// 公共的属性
.content {
  display: flex;
  justify-content: space-between;
}

.titleBox {
  text-align: center;
  padding: 10px 20px;

  .bigTitle {
    font-size: 22px;
    color: #333;
    line-height: 40px;
  }

  .smallTitle {
    font-size: 14px;
    line-height: 20px;
    color: #888;
  }
}

// 数字货币支付——移动支付的新曙光
.payOneWrap {
  .contentWrap {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;

    .pay {
      font-size: 15px;
      color: #000;
      // padding-top: 40px;

      .item {
        line-height: 40px;
        display: flex;
        align-items: center;
      }

      .payTitle {
        font-size: 18px;
      }
    }

    .leftBox {
      // width: 40%;

      .oldPayItem {
        &:before {
          content: "";
          display: inline-block;
          width: 6px;
          height: 6px;
          background: rgb(209, 209, 209);
          border-radius: 50%;
          margin-right: 8px;
        }
      }
    }

    .payOne {
      // height: 315px;
      // background: url("#{$imgUrl}case1.jpg") no-repeat center / cover;
      // background: rgba(0, 0, 255, 0.63);
    }
  }
}

//
.payTwoWrap {
  width: 100%;
  height: 1210px;
  background: url("#{$imgUrl}bg1.jpg") no-repeat center / cover;

  .bigTitle {
    color: #fff;
  }

  .payTwo {
    .listBox {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;
      padding: 0 20px;

      .itemBox {
        width: 100%;
        background: #fff;
        margin-bottom: 20px;
        padding: 10px;

        .item {
          margin: 10px;

          &.item_0 {
            background: url("#{$imgUrl}case3.png") no-repeat right;
          }

          &.item_1 {
            background: url("#{$imgUrl}case4.png") no-repeat right;
          }

          &.item_2 {
            background: url("#{$imgUrl}case5.png") no-repeat right;
          }

          &.item_3 {
            background: url("#{$imgUrl}case6.png") no-repeat right;
          }

          &.item_4 {
            background: url("#{$imgUrl}case7.png") no-repeat right;
          }

          &.item_5 {
            background: url("#{$imgUrl}case8.png") no-repeat right;
          }

          .txt {
            display: flex;
            flex-direction: column;
            color: rgb(51, 51, 51);
            font-size: 14px;
            line-height: 24px;

            &.top {
              font-weight: 600;
              font-size: 18px;
              line-height: 28px;
              margin-bottom: 20px;
            }
          }
        }
      }
    }
  }
}

// 丰富的功能可供定制，助您打造最佳的用户体验
.payThreeWrap {
  .payThreeContent {
    .imgBox {
      display: flex;
      justify-content: center;
      padding: 20px 0;
      .bg {
        width: 0.3 * 1200px;
        height: 0.3 * 450px;
        background: url("#{$imgUrl}case14.jpg") no-repeat center / cover;
      }
    }
  }
}

// 转币转账
.payFourWrap {
  background: rgb(243, 243, 243);

  .payFour {
    // display: flex;
    // align-items: center;
    padding: 0 20px 20px;

    .leftBox {
      display: flex;
      justify-content: center;
      padding: 20px 0;

      img {
        width: 0.5 * 557px;
        height: 0.5 * 268px;
      }
    }

    .rightBox {
      .item {
        display: flex;
        background: #fff;
        margin-bottom: 15px;
        padding: 15px;

        &:nth-child(3) {
          margin-bottom: 0;
        }

        .left {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 40%;
          padding: 10px;
          border-right: 1px solid rgb(209, 209, 209);

          &:before {
            display: block;
            content: "";
            width: 37px;
            height: 40px;
            background: url("#{$imgUrl}case10.png") no-repeat center / cover;
          }

          .itemTitle {
            font-size: 18px;
            line-height: 18px;
            padding-top: 16px;
          }
        }

        .right {
          flex: 1;
          display: flex;
          justify-content: center;

          .txtBox {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            font-size: 14px;
            line-height: 14px;
          }
        }
      }
    }
  }
}

// 完美适配多种场景，业务发展的得力助手
.payFiveWrap {
  .payFive:nth-child(2) {
    background: rgb(246, 246, 246);
  }
}
</style>
