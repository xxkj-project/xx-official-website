<!--
 * @Author: wangshengxian
 * @Date: 2020-09-04 10:05:53
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-30 17:45:08
 * @Desc: DAPP落地 - 跨链钱包详情
-->
<template>
  <div class="wallet">
    <banner type="wallet">
      <div class="bannerTxtBox">
        <p class="bannerMainTitle wow fadeInLeft" data-wow-delay="0.5s">
          {{ infoData.bannerMainTitle }}
        </p>
        <p class="bannerSubTitle wow fadeInLeft" data-wow-delay="0.5s">
          {{ infoData.bannerSubTitle }}
        </p>
      </div>
    </banner>

    <div class="main">
      <div class="one-content">
        <div class="imgBox">
          <img class="img" src="@/assets/images/wallet/kualian.jpg" alt="" />
        </div>
        <div class="txtBox">
          <p class="txt" v-for="(item, index) in oneInfoList" :key="index">
            {{ item }}
          </p>
        </div>
      </div>

      <div class="two-content">
        <h2 class="contentTitle">
          {{ twoInfoData.title }}
        </h2>
        <div
          class="sceneWrap"
          v-for="(itemOptions, index) in twoInfoData.content"
          :key="index"
        >
          <div class="imgBox">
            <span class="img" :class="'scene-img_' + index"></span>
          </div>
          <ul class="txtBox">
            <li
              class="txt"
              :class="{ sceneTitle: idx === 0 }"
              v-for="(item, idx) in itemOptions.list"
              :key="idx"
            >
              <p>{{ item }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="three-content">
        <div class="contentTitle">
          {{ threeInfoData.title }}
        </div>
        <ul class="listWrap">
          <li
            class="item"
            v-for="(item, index) in threeInfoData.list"
            :key="index"
          >
            <div class="imgBox">
              <img class="img" :src="imgList[index]" alt="" />
            </div>
            <div class="txtBox">
              <p class="txt">{{ item.txt }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import wowMixins from "@/mixins/wowMixins";
import banner from "@/views/Mobile/components/banner";
export default {
  name: "",
  mixins: [wowMixins],
  data() {
    return {
      imgList: [
        require("@/assets/images/pc/change4.png"),
        require("@/assets/images/pc/change1.png"),
        require("@/assets/images/pc/change2.png"),
        require("@/assets/images/pc/change3.png"),
      ],
      bannerData: {
        imgUrl: require("@/assets/images/pc/wallet.jpg"),
      },
      infoData: {
        bannerMainTitle: "即时透明，坐享收益",
        bannerSubTitle: "去中心化理财，收益实时获取",
      },
      oneInfoList: [
        "跨链是信息的传输",
        "跨链是信息流背后的需要被精确记账的价值",
      ],
      twoInfoData: {
        title: "跨链的应用场景",
        content: [
          {
            list: [
              "分布式交易",
              "分布式交易所",
              "分布式场外交易",
              "中心化竞价撮合与分布式清结算混合模式的交易所",
            ],
          },
          {
            list: [
              "数字金融创新",
              "金融衍生品或者类金融合约应用，也是智能合约可以发挥最大价值的应用场景之一",
            ],
          },
          {
            list: [
              "打通两个平行世界",
              "跨链能力是推动基于区块链的数字经济全面发展和融合的技术驱动力",
            ],
          },
        ],
      },
      threeInfoData: {
        title: "跨链机制的四大改进和创新",
        list: [
          { txt: "跨链签名算法的升级" },
          { txt: "MPC模块化，提供多方签名解决方案" },
          { txt: "通用化HTLC跨链合约，真正的一链跨万链的跨链平台" },
          { txt: "释放storemanGroup锁定资金账户的角色，让跨链更加去中心化" },
        ],
      },
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  components: { banner },
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
$imgUrl: "~@/assets/images/wallet/";

.main {
  .contentTitle {
    background: #fff;
    font-size: 24px;
    line-height: 56px;
    text-align: center;
  }
}

.one-content {
  display: flex;
  align-items: center;
  background: #fff;
  padding: 0 20px;

  .imgBox {
    padding: 20px 0;

    .img {
      width: 0.4 * 355px;
      height: 0.4 * 300px;
    }
  }

  .txtBox {
    font-size: 14px;
    line-height: 36px;
    padding-left: 20px;
  }
}

.two-content {
  .sceneWrap {
    background: #fff;
    padding: 0 20px 20px;

    .imgBox {
      display: flex;
      justify-content: center;
      padding: 20px;

      .scene-img_0 {
        width: 0.4 * 680px;
        height: 0.4 * 250px;
        background: url("#{$imgUrl}scene1.png") no-repeat center / cover;
      }
      .scene-img_1 {
        width: 0.7 * 450px;
        height: 0.7 * 340px;
        background: url("#{$imgUrl}scene2.png") no-repeat center / cover;
      }
      .scene-img_2 {
        width: 0.7 * 436px;
        height: 0.7 * 360px;
        background: url("#{$imgUrl}scene3.png") no-repeat center / cover;
      }
    }

    .txtBox {
      .txt {
        font-size: 14px;
        line-height: 40px;
        // list-style-type: disc;

        &.sceneTitle {
          // list-style-type: none;
          font-size: 20px;
          line-height: 48px;
          font-weight: 800;
        }
      }
    }
  }
}

.three-content {
  .listWrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #fff;
    padding: 20px 20px 10px;

    .item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 48%; // 不兼容calc时，优雅降级设置当前元素的宽度
      width: calc(50% - 5px);
      height: 220px;
      background: rgba(#0483f8, 0.8);
      border-radius: 6px;
      margin-bottom: 10px;
      padding: 30px 10px 10px;

      .imgBox {
        display: flex;
        justify-content: center;
      }

      .txtBox {
        height: 110px;
        padding-top: 20px;

        .txt {
          font-size: 14px;
          line-height: 24px;
          color: white;
          text-align: center;
          word-break: break-all;
        }
      }
    }
  }
}
</style>
