<!--
 * @Author: wangshengxian
 * @Date: 2020-09-11 17:23:35
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-17 15:10:26
 * @Desc: 
-->
<!-- 
   banner
-->
<template>
  <div class="banner">
    <div class="bannerWrap">
      <img class="bannerImg" :src="bannerList[`${type}`].imgUrl" alt="" />
      <!-- <p
        class="title wow"
        :class="index % 2 == 1 ? 'fadeInUp' : 'fadeInDown'"
        :data-wow-delay="index % 2 == 1 ? '0.3s' : '0.1s'"
        v-for="(item, index) in bannerTextList"
        :key="index"
      >
        {{ item }}
      </p> -->
      <div class="slotBox">
        <slot></slot>
      </div>
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
      },
    };
  },
  props: {
    type: {
      type: String,
      default: "",
    },
    bannerTextList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {},
  mounted() {
    this.$nextTick(() => {
      console.log("-type-", this.type);
    });
  },
  methods: {},
  components: {},
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.banner {
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
    // .title {
    //   position: relative;
    //   z-index: 20;
    //   text-align: center;
    //   color: #fff;
    //   font-size: 25px;
    //   letter-spacing: 2px;
    //   margin-bottom: 32px;
    //   padding: 0 15px;
    //   &:first-of-type {
    //     font-size: 32px;
    //     padding-top: 52px;
    //   }
    // }
    .slotBox {
      position: relative;
      z-index: 20;
      width: 100%;
    }
  }
}
</style>
