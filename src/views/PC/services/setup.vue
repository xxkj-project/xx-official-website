<!--
 * @Author: wangshengxian
 * @Date: 2020-08-19 10:06:48
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-18 16:36:36
 * @Desc: 交易所系统
-->
<template>
  <div class="setup">
    <bannerComp :descList="bannerData" />
    <div class="main">
      <mainComp :infoData="infoData" />
    </div>
  </div>
</template>

<script>
import bannerComp from "./components/bannerComp";
import mainComp from "./components/mainComp";
import wowMixins from "@/mixins/wowMixins";
export default {
  name: "",
  mixins: [wowMixins],
  data() {
    return {
      iconAndPathList: [
        {
          path: "/tradingSystem",
          iconUrl: require("@/assets/images/pc/setupIcon1.png"),
        },
        {
          path: "/curbTrading",
          iconUrl: require("@/assets/images/pc/setupIcon2.png"),
        },
        {
          path: "/contractTrading",
          iconUrl: require("@/assets/images/pc/setupIcon3.png"),
        },
        {
          path: "/quantitativeTrading",
          iconUrl: require("@/assets/images/pc/setupIcon4.png"),
        },
      ],
    };
  },
  computed: {
    i18nData() {
      return this.$t("Service").setup;
    },
    bannerData() {
      let bannerDesc1 = this.i18nData.bannerText1;
      let bannerDesc2 = this.i18nData.bannerText2;
      console.log([bannerDesc1, bannerDesc2]);
      return [bannerDesc1, bannerDesc2];
    },
    infoData() {
      let obj = this.i18nData;
      obj.content.map((val, index) => {
        obj.content[index] = { ...val, ...this.iconAndPathList[index] };
      });
      console.log("-infoData-", obj);
      return obj;
    },
    testData() {
      let obj = this.$t("Service").dApp;
      obj.content.map((val, index) => {
        obj.content[index] = { ...val, ...this.iconAndPathList[index] };
      });
      console.log("-infoData-", obj);
      return obj;
    },
  },
  created() {},
  mounted() {},
  methods: {},
  components: { bannerComp, mainComp },
};
</script>

<style lang="scss" scoped>
.setup {
  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #f5f6f8;
  }
}
</style>
