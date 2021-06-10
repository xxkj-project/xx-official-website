<!--
 * @Author: wangshengxian
 * @Date: 2020-08-31 14:31:57
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-16 16:35:28
 * @Desc: 区块链应用 - 1v1视频
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
        { imgUrl: require("@/assets/images/pc/live/oneToOneItem1.jpg") },
        { imgUrl: require("@/assets/images/pc/live/oneToOneItem2.jpg") },
      ],
      caseList: [
        {
          imgUrl: require("@/assets/images/pc/live/case1.jpg"),
        },

        {
          imgUrl: require("@/assets/images/pc/live/case4.jpg"),
        },
      ],
      infoData: {
        bannerMainTitle: "1v1视频",
        mainTitle: "1v1视频",
        descTxt:
          " “usee” 是杭州辛鑫科技有限公司旗下的1v1视频产品。该产品提供语音聊天、短视频上传、视频聊天、付费连麦、礼物打赏等功能服务。",
        content: [
          {
            title: "系统功能：",
            list: [
              {
                title: "聊天方式",
                desc:
                  "用户可选择发起语音视频聊天，主播开播自由选择语音聊天或视频聊天",
                iconUrl: require("@/assets/images/pc/live/zb1.png"),
              },
              {
                title: "主播筛选",
                desc: "用户根据聊天对象性别、聊天方式、付费价格，搜索主播",
                iconUrl: require("@/assets/images/pc/live/zb2.png"),
              },
              {
                title: "圈子动态",
                desc:
                  "主播用户，柯发布语音、文字、图片等个人动态，支持用户点赞评论回复",
                iconUrl: require("@/assets/images/pc/live/zb3.png"),
              },
              {
                title: "附近聊天",
                desc:
                  "LBS定位功能，发现附近的一对一直播聊天对象，发起一键聊天请求",
                iconUrl: require("@/assets/images/pc/live/zb4.png"),
              },
              {
                title: "付费连麦",
                desc:
                  "按分钟及时付费方式，结合语音或视频连麦，保障主播和平台收益",
                iconUrl: require("@/assets/images/pc/live/zb5.png"),
              },
              {
                title: "礼物打赏",
                desc: "用户可对喜欢的主播进行礼物打赏，礼物系统支持定制",
                iconUrl: require("@/assets/images/pc/live/zb6.png"),
              },
              {
                title: "私信预约",
                desc: "私信预约一对一聊天",
                iconUrl: require("@/assets/images/pc/live/zb7.png"),
              },
              {
                title: "视频互动",
                desc:
                  "主播柯拍摄上传小视频，用户柯进行视频互动分享，发起一对一直播请求",
                iconUrl: require("@/assets/images/pc/live/zb8.png"),
              },
              {
                title: "三级分销系统",
                desc: "支持分销代理模式，让用户快速上涨，收益日日提升",
                iconUrl: require("@/assets/images/pc/live/zb9.png"),
              },
            ],
          },
          {
            title: "系统优势：",
            list: [
              {
                title: "稳定开发",
                desc:
                  "成熟的直播开发团队，拥有流媒体数据处理多项专利，能提供完整的视频直播应用的网络部署架构",
                iconUrl: require("@/assets/images/pc/live/zb1.png"),
              },
              {
                title: "独立部署",
                desc:
                  "支持独立部署，不依赖于阿里云、腾讯云，拥有自己的直播服务，运营更安心",
                iconUrl: require("@/assets/images/pc/live/zb2.png"),
              },
              {
                title: "运营支持",
                desc: "主播资源，运营方案，全方位主力您的运营",
                iconUrl: require("@/assets/images/pc/live/zb3.png"),
              },
              {
                title: "可扩展",
                desc:
                  "公司的区块链、游戏产品可与视频直播应用进行对接，更有故事可讲",
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
