<!--
 * @Author: wangshengxian
 * @Date: 2020-09-02 18:14:47
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-17 13:43:51
 * @Desc: 图文组件，上面位图下面为文字说明
-->
<template>
  <div class="imgTxtWrap">
    <div class="imgBox">
      <img
        :style="{
          width: imgStyleObj.width + 'px',
          height: imgStyleObj.height + 'px',
        }"
        :src="imgUrl"
        alt=""
      />
    </div>
    <ul class="descBox">
      <li class="descItem">
        <p class="title">{{ title }}</p>
      </li>
      <li class="descItem" v-for="(item, index) in list" :key="index">
        <p class="txt">{{ item }}</p>
      </li>
    </ul>

    <!-- <div class="imgBox" v-if="renderType === 'img'">
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
    </div> -->
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
    imgStyleObj() {
      return this.infoData.imgStyleObj;
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
  width: 100%;
  padding: 20px;

  .imgBox {
    display: flex;
    justify-content: center;
    img {
      width: 300px;
      height: 300px;
    }
  }

  .descBox {
    .descItem {
      display: flex;
      align-items: center;

      .title {
        line-height: 44px;
        font-size: 18px;
        color: rgb(51, 51, 51);
        padding-top: 20px;
      }

      .txt {
        font-size: 14px;
        color: rgb(81, 81, 81);
        line-height: 34px;

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
}
</style>
