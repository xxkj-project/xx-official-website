<template>
  <div class="footer_wrapper">
    <footer>
      <div class="footer wow fadeInRight">
        <div class="level">
          <div class="leftBox">
            <div
              class="level_one server"
              v-for="(items, index) in infoList"
              :key="index"
            >
              <p class="title">{{ items.title }}</p>
              <div class="level_two">
                <div class="level_three">
                  <p
                    class="item"
                    v-for="(item, idx) in items.descList"
                    :key="idx"
                    @click="onOpenPage(item)"
                  >
                    {{ item.descTxt }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="rightBox">
            <div class="level_one ewm">
              <p class="title">{{ otherInfoData.wx }}</p>
              <qrCode />
            </div>
          </div>
        </div>

        <div class="remarkWrap">
          <span class="address">{{ otherInfoData.address }}.</span>
          <a class="icpCode" href="http://beian.miit.gov.cn" target="_blank">{{
            otherInfoData.icpCode
          }}</a>

          <p>Copyright 2018-2019 xinxin All Rrserved</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import qrCode from "@/components/qrCode";
export default {
  name: "",
  data() {
    return {
      pathList: {
        dealSystem: [
          "/tradingSystem",
          "/curbTrading",
          "/contractTrading",
          "/quantitativeTrading",
        ],
        blockchainApp: ["/farm", "/wallet", "/virtualCurrency", "/chainSetup"],
        internetApp: [
          "/liveVideo",
          "/oneToOne",
          "/socialDirsir",
          "/shortVideo",
        ],
        dApp: ["/dAppDevelop"],
        solution: [
          "/solution",
          "/solution",
          "/solution",
          "/solution",
          "/solution",
          "/solution",
        ],
        news: ["/news", "/news"],
        about: ["/aboutUs", "/contactUs"],
      },
    };
  },
  computed: {
    infoData() {
      return this.$t("Footer");
    },
    infoList() {
      return [
        this.dealSystem,
        this.blockchainApp,
        this.internetApp,
        this.dApp,
        this.solution,
        this.news,
        this.about,
      ];
    },
    dealSystem() {
      const { title, descList } = this.infoData.dealSystem;
      return this.setListData("dealSystem", title, descList);
    },
    blockchainApp() {
      const { title, descList } = this.infoData.blockchainApp;
      return this.setListData("blockchainApp", title, descList);
    },
    internetApp() {
      const { title, descList } = this.infoData.internetApp;
      return this.setListData("internetApp", title, descList);
    },
    dApp() {
      const { title, descList } = this.infoData.dApp;
      return this.setListData("dApp", title, descList);
    },
    solution() {
      const { title, descList } = this.infoData.solution;
      return this.setListData("solution", title, descList);
    },
    news() {
      const { title, descList } = this.infoData.news;
      return this.setListData("news", title, descList);
    },
    about() {
      const { title, descList } = this.infoData.about;
      return this.setListData("about", title, descList);
    },
    otherInfoData() {
      return this.infoData.other;
    },
  },
  methods: {
    setListData(type, title, list) {
      // console.log(title, list);
      let result = {
        title,
        descList: [],
      };
      list.map((val, index) => {
        let mid = {};
        mid.path = this.pathList[type][index];
        mid.descTxt = val;
        result.descList.push(mid);
      });
      return result;
    },
    onOpenPage(item) {
      console.log("-item-", item, "-route-path-", this.$route.path);
      const { path } = item;
      if (path === this.$route.path) return;
      const linkObj = this.$router.resolve({ path });
      window.open(linkObj.href, "_blanck");
      // this.$router.push({ path });
    },
  },
  components: { qrCode },
};
</script>

<style lang="scss" scope>
$contentWidth: 1320px;
.footer_wrapper {
  footer {
    width: 100%;
    // background-color: #1b1c1d;
    background: #222c3a;
    position: relative;
    z-index: 99;

    .footer {
      width: $contentWidth;
      margin: 0 auto;
      height: 500px;
      padding-top: 89px;
    }
  }
}

.level {
  display: flex;
  justify-content: space-between;
  .leftBox {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }
  .rightBox {
    display: flex;
    justify-content: center;
    width: 20%;

    .level_one {
      height: 310px;

      .title {
        font-size: 14px;
        font-family: Microsoft YaHei;
        color: #fff;
        margin-bottom: 30px;
      }

      &.ewm {
        text-align: center;
        img {
          width: 100px;
          // margin-left: 30px;
        }
      }
    }
  }
}

.level {
  .level_one {
    height: 310px;

    .title {
      font-size: 14px;
      font-family: Microsoft YaHei;
      color: #fff;
      margin-bottom: 30px;
    }

    .item {
      font-size: 14px;
      font-family: Microsoft YaHei;
      color: #999;
      line-height: 36px;
      cursor: pointer;

      &:hover {
        color: #fff;
      }
    }
  }

  .server {
    .level_two {
      display: flex;
      justify-content: space-between;
    }
  }
  .level_three {
    height: 100%;
  }
}

.remarkWrap {
  font-size: 14px;
  text-align: center;
  font-family: Microsoft YaHei;
  color: #fff;
  line-height: 30px;
  margin-top: 30px;

  .icpCode {
    padding-left: 10px;
  }
}
</style>
