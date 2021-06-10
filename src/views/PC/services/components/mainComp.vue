<!--
 * @Author: wangshengxian
 * @Date: 2020-09-04 10:08:33
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-18 16:39:53
 * @Desc: 产品服务 -- 公共的main组件
-->
<template>
  <div class="mainWrap">
    <!-- <p class="bigTitle">{{ infoData.bigTitle }}</p>
        <p class="desc">{{ infoData.desc }}</p> -->
    <div class="content">
      <ul class="listBox">
        <li
          class="item"
          v-for="(items, index) in infoList"
          :key="index"
          @click="onDetails(items)"
        >
          <img
            class="wow fadeIn"
            data-wow-delay="0.3s"
            :src="items.iconUrl"
            alt=""
          />

          <div class="explain">
            <div class="explainTitle">{{ items.smallTitle }}</div>
            <div>
              <p v-for="(item, idx) in items.explainTexts" :key="idx">
                {{ item }}
              </p>
            </div>
          </div>
        </li>
      </ul>
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
      default() {
        return {};
      },
    },
  },
  computed: {
    infoList() {
      let result = this.infoData.content;
      return result;
    },
  },
  created() {},
  mounted() {},
  methods: {
    onDetails(item) {
      console.log("-item-", item);
      const { path } = item;
      const linkObj = this.$router.resolve({ path });
      window.open(linkObj.href, "_blank"); // 重新打开一个新页面
      // this.$router.push({ path });
    },
  },
  components: {},
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
$contentWidth: 1320px;
.mainWrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  font-size: 22px;
  color: #222;
  margin: 70px 0;
  // padding-bottom: 78px;
  // padding-top: 70px;

  // p {
  //   text-align: center;

  //   &.bigTitle {
  //     font-size: 40px;
  //     padding: 70px 0 23px 0;
  //     text-align: center;
  //   }

  //   &.desc {
  //     font-size: 20px;
  //     color: #777;
  //     margin-bottom: 78px;
  //   }
  // }

  .listBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: $contentWidth;
    margin: 0 auto;

    .item {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 315px;
      background: #fff;
      align-items: center;
      cursor: pointer;

      img {
        width: 315px;
        height: 220px;
      }

      .smallTitle {
        width: 100%;
        line-height: 80px;
        text-align: center;
      }

      .explain {
        width: 100%;
        background: #fff;
        color: #222;
        font-size: 22px;
        transition: opacity 0.5s ease;

        p {
          text-align: left;
          font-size: 14px;
          line-height: 28px;
          padding: 0 22px;
        }

        p:nth-child(1) {
          font-size: 18px;
          padding-bottom: 16px;
        }

        p:last-child {
          margin-bottom: 26px;
        }

        .explainTitle {
          text-align: left;
          padding: 20px 0 29px 22px;
        }
      }

      &:hover {
        .explain {
          opacity: 1;
        }
      }
    }
  }
}
</style>
