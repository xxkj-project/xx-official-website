<template>
  <div class="footer_wrapper_mobile">
    <footer>
      <div class="footer">
        <div class="footer_content">
          <ul class="listBox">
            <li
              class="item"
              v-for="(itemOption, index) in infoList"
              :key="index"
            >
              <div class="titleBox">
                <h4>{{ itemOption.title }}</h4>
                <img
                  src="@/assets/images/mobile/add.png"
                  v-show="!statusList[index]"
                  @click="onChangeStatus('open', index)"
                  alt=""
                />
                <img
                  src="@/assets/images/mobile/delete.png"
                  v-show="statusList[index]"
                  @click="onChangeStatus('close', index)"
                  alt=""
                />
              </div>

              <div
                class="optionsBox"
                v-show="isShowOptions && activeIdx === index"
              >
                <p
                  class="txt"
                  v-for="(item, idx) in itemOption.descList"
                  :key="idx"
                  @click="onOpenPage(item)"
                >
                  {{ item.descTxt }}
                </p>
              </div>
            </li>
          </ul>
          <div class="ewm">
            <div>
              <img src="@/assets/images/common/icon-qrcode.png" alt="" />
              <p>更多咨询</p>
            </div>
            <div>
              <img src="@/assets/images/common/icon-qrcode.png" alt="" />
              <p>微信号</p>
            </div>
          </div>

          <div class="remarkWrap">
            <p class="address">{{ otherInfoData.address }}</p>
            <a class="icpCode" href="http://beian.miit.gov.cn">{{
              otherInfoData.icpCode
            }}</a>

            <p>Copyright 2018-2019 xinxin All Rrserved</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "publicFooter",
  data() {
    return {
      isShowOptions: false,
      activeIdx: -1,
      statusList: [false, false, false, false, false, false, false],
      pathList: {
        dealSystem: [
          "tradingSystem",
          "curbTrading",
          "contractTrading",
          "quantitativeTrading",
        ],
        blockchainApp: ["farm", "wallet", "virtualCurrency", "chainSetup"],
        internetApp: ["liveVideo", "oneToOne", "socialDirsir", "shortVideo"],
        dApp: ["dAppDevelop"],
        solution: [
          "solution",
          "solution",
          "solution",
          "solution",
          "solution",
          "solution",
        ],
        news: ["news", "news"],
        about: ["about", "contact"],
      },
    };
  },
  computed: {
    ...mapState("global", {
      currentPath: "activeRouter",
    }),
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
        this.newsData,
        this.aboutData,
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
    newsData() {
      const { title, descList } = this.infoData.news;
      return this.setListData("news", title, descList);
    },
    aboutData() {
      const { title, descList } = this.infoData.about;
      return this.setListData("about", title, descList);
    },
    otherInfoData() {
      return this.infoData.other;
    },
  },
  mounted() {},
  methods: {
    init() {
      this.statusList[this.activeIdx] = false;
      this.isShowOptions = false;
      this.activeIdx = -1;
    },
    onChangeStatus(type, index) {
      console.log("-type-", type, index, this.activeIdx);
      if (type === "open") {
        this.statusList[index] = true;
        this.isShowOptions = true;
        if (this.activeIdx !== -1 && this.activeIdx !== index) {
          this.statusList[this.activeIdx] = false;
        }
      } else {
        this.statusList[index] = false;
        this.isShowOptions = false;
      }
      this.activeIdx = index;
      // console.log(this.activeIdx);
    },
    onOpenPage(item) {
      console.log(item, this.currentPath);
      const { path } = item;
      if (this.currentPath === path) return;
      this.$store.commit("global/setActiveRouter", path);
      this.$router.push({ path });
    },
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
  },
};
</script>

<style lang="scss" scoped>
.footer_wrapper_mobile {
  footer {
    width: 100%;
    background-color: #1b1c1d;
    position: relative;
    z-index: 99;
    padding: 25px 12px 0;
    .footer {
      .footer_content {
        .listBox {
          // display: inline-block;
          color: #fff;
          letter-spacing: 2px;
          line-height: 36px;

          .item {
            .titleBox {
              display: flex;
              justify-content: space-between;
              align-items: center;
              // line-height: 36px;

              h4 {
                font-size: 18px;
                font-family: PingFang SC;
                font-weight: 500;
                color: rgba(255, 255, 255, 1);
              }
              img {
                width: 19px;
                height: 19px;
              }
            }

            .optionsBox {
              color: #c6c6c7;
            }
          }
        }
      }
      .ewm {
        display: flex;
        justify-content: space-between;
        margin-top: 24px;
        div {
          img {
            width: 160px;
            height: 160px;
          }
          p {
            width: 100%;
            text-align: center;
            font-size: 12px;
            line-height: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            padding: 13px 0 20px 0;
          }
        }
      }
      .footer_detail {
        font-size: 0.3rem;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        opacity: 0.7;
        p {
          line-height: 0.57rem;
        }
      }
    }
  }
}

.remarkWrap {
  font-size: 14px;
  text-align: center;
  font-family: Microsoft YaHei;
  color: #fff;
  line-height: 30px;
  padding-bottom: 20px;
  padding-top: 20px;

  .icpCode {
    padding-left: 10px;
  }
}
</style>
