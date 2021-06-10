<!--
 * @Author: wangshengxian
 * @Date: 2020-09-01 14:11:24
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-03 16:55:06
 * @Desc: pc公共banner组件
-->
<template>
  <div class="bannerWrap" :style="bannerBg">
    <div class="bannerTitle">
      <slot></slot>
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
    infoData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    bannerBg() {
      return {
        background: `url(${this.infoData.imgUrl}) no-repeat center / cover`,
      };
    },
  },
  created() {},
  mounted() {},
  methods: {},
  components: {},
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
$contentWidth: 1320px;
.bannerWrap {
  // height: 728px;
  // overflow: hidden;
  height: 600px;
  display: flex;
  align-items: center;

  .bannerTitle {
    width: $contentWidth;
    font-size: 60px;
    color: #fff;
    margin: 0 auto;
  }
}
</style>
