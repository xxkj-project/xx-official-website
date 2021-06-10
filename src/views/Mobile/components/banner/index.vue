<!--
 * @Author: wangshengxian
 * @Date: 2020-09-14 15:21:16
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-23 16:00:35
 * @Desc: 移动端 - banner
-->
<template>
  <div class="bannerWrap">
    <img class="bannerImg" :src="bannerList[`${type}`].imgUrl" alt="" />

    <div class="slotBox">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      bannerList: {
        home: {
          imgUrl: require("@/assets/images/mobile/banner/homeTopBg.png"),
        },
        product: {
          imgUrl: require("@/assets/images/mobile/banner/productTopBg.png"),
        },
        farm: {
          imgUrl: require("@/assets/images/mobile/banner/farmBg.png"),
        },
        live: {
          imgUrl: require("@/assets/images/mobile/banner/liveBg.png"),
        },
        system: {
          imgUrl: require("@/assets/images/mobile/banner/systemBg.png"),
        },
        wallet: {
          imgUrl: require("@/assets/images/mobile/banner/walletBg.png"),
        },
        solution: {
          imgUrl: require("@/assets/images/mobile/banner/solutionTopBg.png"),
        },
        news: {
          imgUrl: require("@/assets/images/mobile/banner/newsTopBg.png"),
        },
        aboutUs: {
          imgUrl: require("@/assets/images/mobile/banner/aboutUsTopBg.png"),
        },
      },
    };
  },
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {},
  mounted() {
    this.$nextTick(() => {
      // console.log("-banner-type-", this.type);
    });
  },
  methods: {},
  components: {},
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.bannerWrap {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 403px;

  .bannerImg {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .slotBox {
    position: relative;
    z-index: 20;
    text-align: center;
    color: #fff;
    font-size: 25px;
    line-height: 25px;
    letter-spacing: 2px;
    padding: 52px 10px 0;
  }
}
</style>
