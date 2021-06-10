<!--
 * @Author: wangshengxian
 * @Date: 2020-09-10 16:45:45
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-10-16 14:12:37
 * @Desc: 二维码
-->
<template>
  <div class="qrcode-img">
    <img class="img" src="@/assets/images/common/icon-qrcode.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  components: {},
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.qrcode-img {
  display: flex;
  justify-content: center;
  .img {
    width: 100px;
    height: 100px;
  }
}
</style>
