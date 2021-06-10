<!--
  解决方案
-->
<template>
  <div class="solution">
    <div class="banner">
      <div class="bannerDesc wow fadeInRight" data-wow-delay="0.5s">
        <p>{{ $t("Solution.bannerText") }}</p>
      </div>
    </div>

    <div class="main">
      <div class="mainWrap">
        <p class="bigTitle">{{ $t("Solution.bigTitle") }}</p>
        <div class="solution-imgs">
          <div class="solution-imgs-layout clearfix">
            <div
              class="solution-common solution-imgs-row solution-imgs-layout-top clearfix"
            >
              <div
                class="item"
                v-for="(item, index) in itemArrs.top"
                :key="index"
                @mouseenter="mouseenterHandle(item)"
                @mouseleave="mouseleaveHandle(item)"
              >
                <img :src="iconArr[item].iconUrl" alt="" />
                <span>{{ $t("Solution.content")[item].smallTitle }}</span>
              </div>
            </div>

            <div
              class="solution-common solution-imgs-row solution-imgs-layout-left"
            >
              <div
                class="item"
                v-for="(item, index) in itemArrs.left"
                :key="index"
                @mouseenter="mouseenterHandle(item)"
                @mouseleave="mouseleaveHandle(item)"
              >
                <img :src="iconArr[item].iconUrl" alt="" />
                <span>{{ $t("Solution.content")[item].smallTitle }}</span>
              </div>
            </div>

            <div class="solution-imgs-layout-center">
              <div class="item-active">
                <span>{{ $t("Solution.content")[activeIdx].smallTitle }}</span>
                <span>{{ $t("Solution.content")[activeIdx].desc }}</span>
              </div>
            </div>

            <div
              class="solution-common solution-imgs-row solution-imgs-layout-right"
            >
              <div
                class="item"
                v-for="(item, index) in itemArrs.right"
                :key="index"
                @mouseenter="mouseenterHandle(item)"
                @mouseleave="mouseleaveHandle(item)"
              >
                <img :src="iconArr[item].iconUrl" alt="" />
                <span>{{ $t("Solution.content")[item].smallTitle }}</span>
              </div>
            </div>

            <div class="solution-common solution-imgs-layout-bottom clearfix">
              <div
                class="item"
                v-for="(item, index) in itemArrs.bottom"
                :key="index"
                @mouseenter="mouseenterHandle(item)"
                @mouseleave="mouseleaveHandle(item)"
              >
                <img :src="iconArr[item].iconUrl" alt="" />
                <span>{{ $t("Solution.content")[item].smallTitle }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- <ul>
          <li
            :class="{
              itemLeft: index == itemLeft,
              itemTop: index == itemTop,
              itemCenter: index == itemCenter,
              itemRight: index == itemRight,
              itemBottom: index == itemBottom,
            }"
            v-for="(item, index) in infoData.content"
            :key="index"
            @mouseenter="mouseenterHandle(index)"
            @mouseleave="mouseleaveHandle(index)"
          >
            <div class="item" :class="{ active: activeIdx == index }">
              <img :src="item.iconUrl" alt="" />
              <span>{{ item.smallTitle }}</span>
            </div>
            
          </li>
        </ul> -->
      </div>
    </div>
  </div>
</template>

<script>
import wowMixins from "@/mixins/wowMixins";
export default {
  name: "",
  mixins: [wowMixins],
  data() {
    return {
      activeIdx: 0,
      // itemArrs: [[0], [1, 2], [3, 4, 5]],
      itemArrs: {
        left: [],
        top: [],
        center: [0],
        right: [1, 2],
        bottom: [3, 4, 5],
      },
      itemSites: [],
      nextHoverSize: "", // 下一个hover的选项的位置
      //   // 产品服务模块type: solution/application,默认为setup
      //   serviceType: "setup",
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
  computed: {},
  created() {
    // let params = this.$route.params;
    // console.log("-params-", params);
  },
  mounted() {
    // console.log(this.i18n);
  },
  methods: {
    mouseenterHandle(idx) {
      this.activeIdx = idx;
      console.log(
        "-active-index-",
        this.activeIdx,
        this.itemArrs,
        this.itemArrs.right.indexOf(idx)
      );
      if (this.itemArrs.left.indexOf(idx) > -1) {
        // 左边
        console.log("left");
        this.nextHoverSize = "left";
        this.itemArrs = this.setItemLeftSite(idx);
        return;
      }
      if (this.itemArrs.right.indexOf(idx) > -1) {
        // 右边
        console.log("right");
        this.nextHoverSize = "right";
        this.itemArrs = this.setItemRightSite(idx);
        return;
      }
      if (this.itemArrs.top.indexOf(idx) > -1) {
        // 右边
        console.log("top");
        this.nextHoverSize = "top";
        this.itemArrs = this.setItemTopSite(idx);
        return;
      }
      if (this.itemArrs.bottom.indexOf(idx) > -1) {
        // 右边
        console.log("bottom");
        this.nextHoverSize = "bottom";
        this.itemArrs = this.setItemBottomSite(idx);
        return;
      }
    },
    mouseleaveHandle(idx) {
      console.log(idx);
    },
    setItemLeftSite(idx) {
      console.log("left", idx);
      let midArr = {};
      if (idx == 0) {
        midArr = {
          left: [],
          top: [],
          center: [0],
          right: [1, 2],
          bottom: [3, 4, 5],
        };
      }
      if (idx == 1) {
        midArr = {
          left: [],
          top: [],
          center: [1],
          right: [0, 2],
          bottom: [3, 4, 5],
        };
      }
      if (idx == 2) {
        midArr = {
          left: [],
          top: [],
          center: [2],
          right: [0, 1],
          bottom: [3, 4, 5],
        };
      }
      if (idx == 3) {
        midArr = {
          left: [],
          top: [0, 1, 2],
          center: [3],
          right: [4, 5],
          bottom: [],
        };
      }
      if (idx == 4) {
        midArr = {
          left: [],
          top: [0, 1, 2],
          center: [4],
          right: [3, 5],
          bottom: [],
        };
      }
      if (idx == 5) {
        midArr = {
          left: [],
          top: [0, 1, 2],
          center: [5],
          right: [3, 4],
          bottom: [],
        };
      }
      return midArr;
    },
    setItemRightSite(idx) {
      console.log("right", idx);
      let midArr = {};
      if (idx == 0) {
        midArr = {
          left: [1, 2],
          top: [],
          center: [0],
          right: [],
          bottom: [3, 4, 5],
        };
      }
      if (idx == 1) {
        midArr = {
          left: [0, 2],
          top: [],
          center: [1],
          right: [],
          bottom: [3, 4, 5],
        };
      }
      if (idx == 2) {
        midArr = {
          left: [0, 1],
          top: [],
          center: [2],
          right: [],
          bottom: [3, 4, 5],
        };
      }
      if (idx == 3) {
        midArr = {
          left: [4, 5],
          top: [0, 1, 2],
          center: [3],
          right: [],
          bottom: [],
        };
      }
      if (idx == 4) {
        midArr = {
          left: [3, 5],
          top: [0, 1, 2],
          center: [4],
          right: [],
          bottom: [],
        };
      }
      if (idx == 5) {
        midArr = {
          left: [3, 4],
          top: [0, 1, 2],
          center: [5],
          right: [],
          bottom: [],
        };
      }
      return midArr;
    },
    setItemTopSite(idx) {
      // 0,1,2
      console.log("-itemArrs-1-", this.itemArrs);
      let midArr = {};
      if (idx == 0) {
        midArr = {
          left: [],
          top: [],
          center: [0],
          right: [1, 2],
          bottom: [3, 4, 5],
        };
      }
      if (idx == 1) {
        midArr = {
          left: [],
          top: [],
          center: [1],
          right: [0, 2],
          bottom: [3, 4, 5],
        };
      }
      if (idx == 2) {
        midArr = {
          left: [0, 1],
          top: [],
          center: [2],
          right: [],
          bottom: [3, 4, 5],
        };
      }
      return midArr;
    },
    setItemBottomSite(idx) {
      // 0,1,2 当前选中的是在左边还是右边，
      console.log("-itemArrs-1-", this.itemArrs);
      let midArr = {};
      if (idx == 3) {
        midArr = {
          left: [],
          top: [0, 1, 2],
          center: [2],
          right: [4, 5],
          bottom: [],
        };
      }
      if (idx == 4) {
        midArr = {
          left: [],
          top: [0, 1, 2],
          center: [4],
          right: [3, 5],
          bottom: [],
        };
      }
      if (idx == 5) {
        midArr = {
          left: [3, 4],
          top: [0, 1, 2],
          center: [5],
          right: [],
          bottom: [],
        };
      }
      return midArr;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index";
</style>
