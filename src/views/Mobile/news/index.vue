<template>
  <div class="news">
    <banner type="news">
      <div class="bannerTxtBox">
        <p class="bannerMainTitle wow fadeInLeft" data-wow-delay="0.5s">
          {{ i18nData.word1 }}
        </p>
      </div>
    </banner>

    <div class="container">
      <ul class="newsMain wow fadeInUp" data-wow-delay="0.3s">
        <li class="item" v-for="(item, index) in infoList" :key="index">
          <div class="newsItem">
            <div class="newsLeft">
              <img :src="item.coverurl" alt="" />
            </div>
            <div class="newsRight">
              <div class="content">
                <h4 class="title two-txt-cut">
                  {{ item.title }}
                </h4>
                <p class="descTxt one-txt-cut">
                  {{ item.summary }}
                </p>
              </div>
            </div>
          </div>
          <div class="time">
            <span>{{ i18nData.word2 }}：{{ item.issuetime | filterTime }}</span>
            <span class="findDetail" @click="findDetail(item)"
              >{{ i18nData.word3 }}>></span
            >
          </div>
        </li>
      </ul>

      <div class="btnWrap" v-if="pagination.total > 10">
        <span class="moreBtn" @click="onNextPage">{{ i18nData.word4 }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import banner from "@/views/Mobile/components/banner";
import wowMixins from "@/mixins/wowMixins";
import tools from "@/utils/tools";
import { getNewsList } from "@/api/news";

export default {
  mixins: [wowMixins],
  data() {
    return {
      pagination: {
        page: 1,
        per_page: 10,
        webp: 1,
      },
      infoList: [],
    };
  },
  computed: {
    i18nData() {
      return this.$t("News");
    },
  },
  filters: {
    filterTime(val) {
      return tools.formatDate(val);
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    findDetail(item) {
      console.log("-news-item-", item);
      const { id } = item;
      this.$router.push({
        path: "newsDetail",
        query: { id },
      });
    },
    onNextPage() {
      this.getData(false);
    },
    getData(isInit = true) {
      let params = this.pagination;
      console.log(params);
      getNewsList(params).then((res) => {
        // console.log("-res-", res);
        const { data } = res;
        // console.log("-news-data-", data);
        let list = data.list;
        let result = [];
        list.map((val) => {
          let mid = { ...val };
          mid.coverurl = mid.coverurl.split("?")[0];
          result.push(mid);
        });
        if (isInit) {
          this.infoList = result;
        } else {
          this.infoList = [...this.infoList, ...result];
        }
        // console.log(this.infoList);
        this.pagination.page++;
        this.pagination.total = data.total_count;
        // data.total_pages 总共多少页
      });
    },
  },
  components: { banner },
};
</script>
<style lang="scss" scoped>
// $imgUrl: "~@/assets/images/mobile/";

// 英文版样式重置
.en {
  .news {
    .bannerMainTitle {
      letter-spacing: 0;
    }
  }
}

.container {
  .btnWrap {
    display: flex;
    justify-content: center;
    padding-bottom: 20px;

    .moreBtn {
      background: #21bdff;
      text-align: center;
      font-size: 15px;
      color: #fff;
      border-radius: 2px;
      padding: 6px 8px;
      letter-spacing: 1px;
      // transition: all 0.25s ease;

      &:after {
        content: "》";
        padding-left: 10px;
      }
    }
  }
}

.news {
  background: rgba(255, 255, 255, 1);

  .newsMain {
    margin: 15px 12px;

    .item {
      // height: 134px;
      padding: 13px 10px 17px;
      background: #f2f5fb;
      font-size: 12px;
      line-height: 12px;
      margin-bottom: 10px;

      .newsItem {
        display: flex;

        .newsLeft {
          width: 126px;
          height: 78px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .newsRight {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 190px;
          padding-left: 15px;

          .content {
            font-family: Microsoft YaHei;
            color: rgba(27, 28, 29, 1);
            padding-top: 6px;

            h4 {
              font-size: 15px;
              font-weight: bold;
              line-height: 20px;
              // padding: 6px 0 15px 0;
            }

            .descTxt {
              color: rgba(153, 153, 153, 1);
              padding-top: 15px;
            }
          }
        }
      }

      .time {
        display: flex;
        justify-content: space-between;
        font-family: Microsoft YaHei;
        color: rgba(153, 153, 153, 1);
        padding-top: 15px;

        .findDetail {
          color: rgba(33, 189, 255, 1);
        }
      }
    }
  }
}
</style>
