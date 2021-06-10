<!--
 * @Author: wangshengxian
 * @Date: 2020-09-02 18:14:47
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-03 11:01:46
 * @Desc: 图文组件（左边图，右边说明，或者左边说明，右边图）,默认为左图，右说明 
-->
<template>
  <div class="imgTxtWrap">
    <div class="imgBox" v-if="renderType === 'img'">
      <img :src="imgUrl" alt="" />
    </div>
    <ul class="descBox">
      <li class="title">{{ title }}</li>
      <li class="descItem" v-for="(item, index) in list" :key="index">
        {{ item }}
      </li>
    </ul>
    <div class="imgBox" v-if="renderType !== 'img'">
      <img :src="imgUrl" alt="" />
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
    // 默认为img
    renderType() {
      return this.infoData.type || "img";
    },
    imgUrl() {
      return this.infoData.imgUrl;
    },
    title() {
      return this.infoData.title;
    },
    list() {
      return this.infoData.list;
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
.imgTxtWrap {
  display: flex;
  justify-content: space-between;
  width: 100%;
  // background: #fff;
  padding: 50px 140px;

  .imgBox {
  }

  .descBox {
    line-height: 34px;
    font-size: 14px;
    color: rgb(81, 81, 81);

    .title {
      line-height: 44px;
      font-size: 18px;
      color: rgb(51, 51, 51);
      padding-top: 40px;
    }

    .descItem {
      display: flex;
      align-items: center;

      &:before {
        display: inline-block;
        content: "";
        width: 6px;
        height: 6px;
        background: rgb(190, 190, 190);
        border-radius: 50%;
        margin-right: 6px;
      }
    }
  }
}
</style>
