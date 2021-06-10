<!--
 * @Author: wangshengxian
 * @Date: 2020-08-19 10:06:48
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-18 11:21:57
 * @Desc: 
-->
<template>
  <div class="application">
    <banner type="product">
      <div class="bannerTxtBox">
        <p
          class="bannerTitle wow fadeInLeft"
          data-wow-delay="0.5s"
          v-for="(item, index) in bannerData"
          :key="index"
        >
          {{ item }}
        </p>
      </div>
    </banner>
    <div class="main">
      <mainComp :infoData="infoData" />
    </div>
  </div>
</template>

<script>
import banner from "@/views/Mobile/components/banner";
import mainComp from "./components/mainComp";
import wowMixins from "@/mixins/wowMixins";
export default {
  name: "service",
  mixins: [wowMixins],
  data() {
    return {
      iconAndPathList: [
        {
          path: "farm",
          iconUrl: require("@/assets/images/pc/applicationIcon2.png"),
        },
        {
          path: "wallet",
          iconUrl: require("@/assets/images/pc/applicationIcon3.png"),
        },
        {
          path: "virtualCurrency",
          iconUrl: require("@/assets/images/pc/applicationIcon7.png"),
        },
        {
          path: "chainSetup",
          iconUrl: require("@/assets/images/pc/applicationIcon8.png"),
        },
      ],
    };
  },
  computed: {
    i18nData() {
      return this.$t("Service").application;
    },
    bannerData() {
      let bannerDesc = this.i18nData.bannerText1;
      return [bannerDesc];
    },
    infoData() {
      let obj = this.i18nData;
      obj.content.map((val, index) => {
        obj.content[index] = { ...val, ...this.iconAndPathList[index] };
      });
      console.log("-application-infoData-", obj);
      return obj;
    },
  },
  mounted() {},
  components: { banner, mainComp },
};
</script>

<style lang="scss" scoped>
.application {
  &.en {
    // 英文版，部分样式单独设置，可以通过类名前加 /deep/ 重置子组件的css样式
    /deep/ .bannerWrap {
      p {
        // color: #000;
      }
    }
  }
}

.application {
  .main {
    display: flex;
    background: #f5f6f8;
  }
}
</style>
