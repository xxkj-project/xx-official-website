<!--
 * @Author: wangshengxian
 * @Date: 2020-09-04 10:57:40
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-18 16:38:27
 * @Desc: 产品服务 -- banner组件
-->
<template>
  <div class="bannerWrap">
    <div class="bannerDesc wow fadeInLeft" data-wow-delay="0.5s">
      <p v-for="(item, index) in descList" :key="index">{{ item }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    descList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
  components: {},
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
$imgUrl: "~@/assets/images/pc/";
$contentWidth: 1320px;
.bannerWrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 600px;
  background: url("#{$imgUrl}setupBannerBg.png") no-repeat center / cover;

  .bannerDesc {
    width: $contentWidth;
    font-size: 60px;
    line-height: 90px;
    color: #fff;

    p {
      width: 60%;
    }
  }
}
</style>
