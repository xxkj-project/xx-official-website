<!-- 
   解决方案
-->
<template>
  <div class="solution">
    <banner type="solution">
      <div class="bannerTxtBox">
        <p class="bannerMainTitle wow fadeInLeft" data-wow-delay="0.5s">
          {{ bannerMainTitle }}
        </p>
      </div>
    </banner>
    <div class="main">
      <h4 class="wow slideInLeft" data-wow-delay="0.3s">
        {{ $t("Solution.bigTitle") }}
      </h4>
      <ul class="content">
        <li
          class="liBox"
          v-for="(items, index) in applicationList"
          :key="index"
        >
          <div class="itemBox">
            <div
              class="item"
              v-for="(item, i) in items"
              :key="i"
              @click="openDescHandle(index, i)"
              :class="{
                itemActive:
                  (index == 0 && i == 1) ||
                  (index == 1 && i == 0) ||
                  (index == 2 && i == 1),
              }"
            >
              <img
                class="wow fadeIn"
                data-wow-delay="0.3s"
                :src="item.iconUrl"
                alt=""
              />
              <span class="wow fadeIn" data-wow-delay="0.6s">{{
                item.smallTitle
              }}</span>
            </div>
          </div>
          <div class="desc" v-show="isShowDesc && parentItemIndex == index">
            <h6>{{ items[childItemIndex].smallTitle }}</h6>
            <p>{{ items[childItemIndex].desc }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import wowMixins from "@/mixins/wowMixins";
import tools from "@/utils/tools";
import banner from "@/views/Mobile/components/banner";
export default {
  name: "",
  mixins: [wowMixins],
  data() {
    return {
      isShowDesc: false,
      parentItemIndex: "0",
      childItemIndex: "0",
      iconArr: [
        { iconUrl: require("@/assets/images/home/solutionIcon1.png") },
        { iconUrl: require("@/assets/images/home/solutionIcon2.png") },
        { iconUrl: require("@/assets/images/home/solutionIcon3.png") },
        { iconUrl: require("@/assets/images/home/solutionIcon4.png") },
        { iconUrl: require("@/assets/images/home/solutionIcon5.png") },
        { iconUrl: require("@/assets/images/home/solutionIcon6.png") },
      ],
    };
  },
  mounted() {},
  methods: {
    openDescHandle(parentIndex, childIndex) {
      console.log(parentIndex, childIndex);
      if (!this.isShowDesc) {
        this.isShowDesc = true;
        this.parentItemIndex = parentIndex;
        this.childItemIndex = childIndex;
        return;
      }
      if (
        this.parentItemIndex == parentIndex &&
        this.childItemIndex == childIndex
      ) {
        this.isShowDesc = false;
        return;
      }
      this.parentItemIndex = parentIndex;
      this.childItemIndex = childIndex;
    },
  },
  computed: {
    i18nData() {
      return this.$t("Solution");
    },
    bannerMainTitle() {
      let bannerTitle = this.i18nData.bannerText;
      return bannerTitle;
    },
    applicationList() {
      // console.log(this.$t("Solution.content"), this.iconArr);
      let contentList = this.i18nData.content;
      let midList = [];
      this.iconArr.map((val, index) => {
        let mid = {};
        mid = { ...val, ...contentList[index] };
        val = mid;
        midList[index] = val;
      });
      midList = tools.arrTrans(midList);
      // console.log(midList);
      return midList;
    },
  },
  components: { banner },
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.solution {
  .main {
    h4 {
      font-size: 18px;
      color: #222222;
      line-height: 50px;
      text-align: center;
    }

    .content {
      display: flex;
      flex-wrap: wrap;
      padding: 0 12px 25px;
      .liBox {
        width: 100%;
        .itemBox {
          display: flex;
          width: 100%;
          .item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 50%;
            height: 132px;
            background: #f6f9ff;

            img {
              width: 57px;
              height: 65px;
            }

            span {
              font-size: 15px;
              color: #1b1c1d;
              padding-top: 12px;
            }
          }
          .itemActive {
            background: #f2f5fb;
          }
        }
        .desc {
          background: #21bdff;
          color: #fff;
          font-size: 13px;
          line-height: 20px;
          letter-spacing: 2px;
          padding: 10px 10px;
          h6 {
            font-size: 15px;
            text-align: center;
            padding: 6px 0;
          }
          p {
            text-indent: 2em;
          }
        }
      }

      // .item:nth-child(1),
      // .item:nth-child(4),
      // .item:nth-child(5) {
      //   background: #f2f5fb;
      // }
    }
  }
}
</style>
