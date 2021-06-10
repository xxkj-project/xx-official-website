<!--
 * @Author: wangshengxian
 * @Date: 2020-08-31 14:31:57
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-16 16:45:23
 * @Desc: 区块链应用 - 社交电商
-->
<template>
  <div class="liveVideo">
    <banner type="live">
      <div class="bannerTxtBox">
        <p class="bannerTitle wow fadeInLeft" data-wow-delay="0.5s">
          {{ bannerMainTitle }}
        </p>
      </div>
    </banner>

    <div class="main">
      <internetMain
        :title="mainTitle"
        :descTxt="descTxt"
        :swiperList="swiperList"
        :infoList="infoList"
        :caseList="caseList"
      />
    </div>
  </div>
</template>

<script>
import wowMixins from "@/mixins/wowMixins";
import banner from "@/views/Mobile/components/banner";
import internetMain from "@/views/Mobile/details/components/internetMain";

export default {
  name: "",
  mixins: [wowMixins],
  data() {
    return {
      swiperList: [
        { imgUrl: require("@/assets/images/pc/live/socialDirsirItem1.jpg") },
      ],
      caseList: [
        {
          imgUrl: require("@/assets/images/pc/live/case5.jpg"),
        },
        {
          imgUrl: require("@/assets/images/pc/live/case6.jpg"),
        },
      ],
      infoData: {
        bannerMainTitle: "社交电商",
        mainTitle: "社交电商",
        descTxt:
          "“鱼多多”是杭州辛鑫科技有限公司旗下的社交电商模块产品。该产品提供高品质的商品、最有社交氛围的社交圈子等功能服务。",
        content: [
          {
            title: "系统功能：",
            list: [
              {
                title: "商品分享",
                desc: "商品分享传播，通过社会化分享将商品直接对外传播。",
                iconUrl: require("@/assets/images/pc/live/zb1.png"),
              },
              {
                title: "圈子动态",
                desc:
                  "发布帖子关联商品，打造内容电商模式，通过社交功能体系，扩展平台的海量曝光入口。",
                iconUrl: require("@/assets/images/pc/live/zb2.png"),
              },
              {
                title: "多人拼团",
                desc: "购买商品的同时还能开个团邀请他人一起组个团，拼个单。",
                iconUrl: require("@/assets/images/pc/live/zb3.png"),
              },
              {
                title: "会员专属",
                desc: "会员都有属于自己的特权并可以折扣购买商品。",
                iconUrl: require("@/assets/images/pc/live/zb4.png"),
              },
              {
                title: "优惠卷营销",
                desc: "吸引用户关注，定期推送优惠券活动消息。",
                iconUrl: require("@/assets/images/pc/live/zb5.png"),
              },
            ],
          },
          {
            title: "系统优势：",
            list: [
              {
                title: "稳定开发",
                desc:
                  "强大的开发团队，拥有最先进的技术，可以提供完整的社交电商平台部署架构。",
                iconUrl: require("@/assets/images/pc/live/zb1.png"),
              },
              {
                title: "独立部署",
                desc: "支持独立部署，拥有自己的电商平台服务，运营更安心。",
                iconUrl: require("@/assets/images/pc/live/zb2.png"),
              },
              {
                title: "运营支持",
                desc: "一系列的推广方案、商家、商品资源，全方位助力您的运营。",
                iconUrl: require("@/assets/images/pc/live/zb3.png"),
              },
              {
                title: "可扩展",
                desc:
                  "公司的区块链、游戏产品可与社交电商应用进行对接，更有故事可讲",
                iconUrl: require("@/assets/images/pc/live/zb4.png"),
              },
            ],
          },
        ],
      },
    };
  },
  computed: {
    bannerMainTitle() {
      return this.infoData.bannerMainTitle;
    },
    mainTitle() {
      return this.infoData.mainTitle;
    },
    descTxt() {
      return this.infoData.descTxt;
    },
    infoList() {
      return this.infoData.content;
    },
  },
  created() {},
  mounted() {},
  methods: {},
  components: { banner, internetMain },
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
