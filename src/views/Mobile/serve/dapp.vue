<!--
 * @Author: wangshengxian
 * @Date: 2020-08-19 10:06:48
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-18 11:21:11
 * @Desc: DAPP落地
-->
<template>
  <div class="dAppDevelop">
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
  name: "",
  mixins: [wowMixins],
  data() {
    return {
      iconAndPathList: [
        {
          path: "dappDevelop",
          iconUrl: require("@/assets/images/pc/applicationIcon7.png"),
        },
      ],
    };
  },
  computed: {
    i18nData() {
      return this.$t("Service").dApp;
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
      console.log("-infoData-", obj);
      return obj;
    },
  },
  created() {},
  mounted() {},
  methods: {},
  components: { banner, mainComp },
};
</script>

<style lang="scss" scoped>
.dAppDevelop {
  .main {
    display: flex;
    background: #f5f6f8;
  }
}
</style>
