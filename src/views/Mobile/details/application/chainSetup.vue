<!--
 * @Author: wangshengxian
 * @Date: 2020-09-04 10:05:53
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-18 10:56:00
 * @Desc: DAPP落地 - 公、私链搭建详情
-->
<template>
  <div class="chainSetup">
    <banner type="product">
      <div class="bannerTxtBox">
        <span class="bannerTitle wow fadeInLeft" data-wow-delay="0.5s">{{
          infoData.bannerDesc
        }}</span>
      </div>
    </banner>
    <div class="main">
      <ul class="chain-container">
        <li
          class="itemOptions"
          v-for="(itemOptions, index) in infoData.content"
          :key="index"
        >
          <h2 class="bigTitle">
            {{ itemOptions.bigTitle }}
          </h2>
          <p class="smallTitle">
            {{ itemOptions.smallTitle }}
          </p>
          <div class="content">
            <div class="imgWrap">
              <span class="img" :class="'img' + '_' + index"></span>
            </div>
            <div class="commonTxtBox descBox">
              <p
                class="txt descTxt"
                v-for="(item, idx) in itemOptions.explainContent.descList"
                :key="idx"
              >
                {{ item }}
              </p>
            </div>

            <div class="commonTxtBox featureBox">
              <p
                class="txt featureTxt"
                :class="{ title: idx === 0 }"
                v-for="(item, idx) in itemOptions.explainContent.featureList"
                :key="idx"
              >
                {{ item }}
              </p>
            </div>
          </div>
        </li>
      </ul>
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
      infoData: {
        bannerDesc: "公私链搭建",
        content: [
          {
            bigTitle: "公有链",
            smallTitle:
              "公有链简称公链，是指全世界任何人都可读取的、任何人都能发送交易且交易能获得有效确认的、任何人都能参与竞争记账的区块链。",
            explainContent: {
              descList: [
                "公有链一般会通过代币奖励机制来鼓励参与者竞争记账，来确保数据的安全性。比特币、以太坊都是典型的公有链。",
                "绝大多数的DAPP，都是基于公有链的，比如Iron Throne就是基于以太坊的",
              ],
              featureList: [
                "公有链特点",
                "保护用户免受开发者的影响",
                "访问门槛低",
                "所有数据默认公开",
              ],
            },
          },
          {
            bigTitle: "私有链",
            smallTitle:
              "私有链简称私链，是指其写入权限由某个组织和机构控制的区块链，参与节点的资格会被严格限制。",
            explainContent: {
              descList: [
                "有链是指其写入权限仅在一个组织手里的区块链，目的是对读取权限或者对外开放权限进行限制。",
              ],
              featureList: [
                "私有链特点",
                "交易速度非常快",
                "为隐私提供更好的保障",
                "交易成本大幅降低甚至为零",
                "有助于保护其基本的产品不被破坏",
              ],
            },
          },
          {
            bigTitle: "其他的链(联盟链)",
            smallTitle:
              "联盟链只针对某个特定群体的成员和有限的第三方，其内部指定多个预选节点为记账人，每个块的生成由所有的预选节点共同决定。",
            explainContent: {
              descList: [
                "联盟链本质上仍然是一种私有链，只不过它比单个小组织开发的私有链更大，却又没有公有链这么大的规模，可以理解为它是介于私有链和公有链之间的一种区块链。",
              ],
              featureList: [
                "联盟链特点",
                "部分去中心化",
                "可控性较强",
                "数据不会默认公开",
                "交易速度很快",
              ],
            },
          },
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
$imgUrl: "~@/assets/images/pc/";

.main {
  .bigTitle {
    font-size: 24px;
    line-height: 56px;
    text-align: center;
  }

  .smallTitle {
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    color: #9e9e9e;
    padding: 0 20px 10px;
  }
  .content {
    padding: 0 20px 20px;

    .imgWrap {
      display: flex;
      justify-content: center;
      padding: 10px 0;

      .img {
        width: 0.5 * 600px;

        &.img_0 {
          height: 0.5 * 396px;
          background: url("#{$imgUrl}gyl.png") no-repeat center / cover;
        }
        &.img_1 {
          height: 0.5 * 375px;
          background: url("#{$imgUrl}syl.png") no-repeat center / cover;
        }
        &.img_2 {
          height: 0.5 * 360px;
          background: url("#{$imgUrl}tml.png") no-repeat center / cover;
        }
      }
    }

    .commonTxtBox {
      font-size: 16px;
      line-height: 32px;

      .title {
        font-weight: 600;
        font-size: 20px;
        margin: 15px 0 10px;
      }
    }
  }
}
</style>
