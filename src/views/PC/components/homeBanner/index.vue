<!--
 * @Author: wangshengxian
 * @Date: 2020-09-04 11:41:40
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-30 18:18:57
 * @Desc: pc首页banner组件 
-->
<template>
  <div class="bannerWrap">
    <div class="canvasWrap">
      <div class="content">
        <div class="left">
          <h2>
            {{ infoData.title1 }} <br />
            {{ infoData.title2 }}
          </h2>
          <div class="itemBox">
            <div
              class="item"
              v-for="(item, index) in infoData.content"
              :key="index"
            >
              <span class="txt" @click="onOpenPage(index)">
                {{ item }}
              </span>
            </div>
          </div>
        </div>
        <img class="right" src="@/assets/images/pc/bannerImg.png" alt="" />
      </div>
      <canvas class="canvas" ref="bannerRef"></canvas>
    </div>
  </div>
</template>

<script>
import particleAni from "@/utils/particleAni";

export default {
  name: "",
  data() {
    return {
      pathList: ["setup", "application", "internetApp", "dAppDevelop"],
    };
  },
  computed: {
    infoData() {
      let result = this.$t("Index").banner;
      return result;
    },
  },
  mounted() {
    particleAni.initAni(this.$refs.bannerRef);
  },
  destroyed() {
    // particleAni.stopAni();
  },
  methods: {
    onOpenPage(index) {
      // console.log(index);
      let path = this.pathList[index];
      this.$router.push({ path: `${path}` });
    },
  },
  components: {},
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
$contentWidth: 1320px;

.bannerWrap {
  height: 600px;

  .canvasWrap {
    position: relative;
    min-width: $contentWidth;

    .content {
      position: absolute;
      top: 30px;
      left: 50%;
      transform: translate(-50%, 0);
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-width: $contentWidth;
      color: #fff;
      font-size: 18px;

      .left {
        flex: 1;

        h2 {
          font-size: 60px;
          margin-bottom: 60px;
        }

        .itemBox {
          display: flex;
          flex-wrap: wrap;
          align-items: center;

          .item {
            display: flex;
            align-items: center;
            width: 50%;
            margin-bottom: 30px;

            .txt {
              display: flex;
              align-items: center;
              cursor: pointer;

              &:before {
                content: "";
                display: inline-block;
                width: 2px;
                height: 18px;
                background: #fff;
                margin-right: 8px;
              }

              &:nth-child(3),
              &:nth-child(4) {
                margin-bottom: 0;
              }
            }
          }
        }
      }

      .right {
        width: 648px;
        height: 470px;
      }
    }

    .canvas {
      width: 100%;
      height: 600px;
    }
  }
}
</style>
