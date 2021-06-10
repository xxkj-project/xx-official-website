<!--
 * @Author: wangshengxian
 * @Date: 2020-08-19 10:06:48
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-18 11:19:27
 * @Desc: 交易所系统
-->
<template>
  <div class="setup">
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
import { mapState } from "vuex";
export default {
  name: "service",
  mixins: [wowMixins],
  data() {
    return {
      iconAndPathList: [
        {
          path: "tradingSystem",
          iconUrl: require("@/assets/images/pc/setupIcon1.png"),
        },
        {
          path: "curbTrading",
          iconUrl: require("@/assets/images/pc/setupIcon2.png"),
        },
        {
          path: "contractTrading",
          iconUrl: require("@/assets/images/pc/setupIcon3.png"),
        },
        {
          path: "quantitativeTrading",
          iconUrl: require("@/assets/images/pc/setupIcon4.png"),
        },
      ],
    };
  },
  computed: {
    ...mapState("global", {
      activeRouter: "activeRouter",
    }),
    i18nData() {
      return this.$t("Service").setup;
    },
    bannerData() {
      let bannerDesc1 = this.i18nData.bannerText1;
      let bannerDesc2 = this.i18nData.bannerText2;
      return [bannerDesc1, bannerDesc2];
    },
    infoData() {
      let obj = this.i18nData;
      obj.content.map((val, index) => {
        obj.content[index] = { ...val, ...this.iconAndPathList[index] };
      });
      console.log("-setup-infoData-", obj);
      return obj;
    },
  },
  mounted() {},
  methods: {},
  components: { banner, mainComp },
};
</script>

<style lang="scss" scoped>
.setup {
  .main {
    display: flex;
    background: #f5f6f8;
  }
}
</style>
