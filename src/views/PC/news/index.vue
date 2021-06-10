<!--
 * @Author: wangshengxian
 * @Date: 2020-08-19 10:06:48
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-18 16:40:27
 * @Desc: 
-->
<template>
  <div class="news_wrap">
    <div class="news_header">
      <div class="herder_text wow fadeInDown" data-wow-delay="0.1s">
        {{ $t("News.word1") }}
      </div>
    </div>
    <div class="container">
      <ul class="newsMain wow fadeInUp" data-wow-delay="0.3s">
        <li class="item" v-for="(item, index) in infoList" :key="index">
          <div class="news newsLeft">
            <img :src="item.coverurl" alt="" />
          </div>
          <div class="news newsRight">
            <div class="content">
              <h1 class="title" @click="onOpenDetail(item)">
                {{ item.title }}
              </h1>
              <p class="descTxt" @click="onOpenDetail(item)">
                {{ item.summary }}
              </p>
            </div>
            <div class="time">
              <span
                ><span>{{ $t("News.word2") }}：</span
                >{{ item.issuetime | filterTime }}</span
              >
              <span class="findDetail" @click="onOpenDetail(item)"
                >{{ $t("News.word3") }}>></span
              >
            </div>
          </div>
        </li>
      </ul>
      <div class="btnWrap" v-if="pagination.total > 10">
        <span class="moreBtn iconfont iconmesage" @click="onNextPage"
          >查看更多</span
        >
      </div>
    </div>
  </div>
</template>
<script>
import wowMixins from "@/mixins/wowMixins";
import { getNewsList } from "@/api/news";
import tools from "@/utils/tools";
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
  computed: {},
  filters: {
    filterTime(val) {
      return tools.formatDate(val);
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    onOpenDetail(item) {
      console.log("-item-data-", item.id);
      const { id } = item;
      // window.open(`https://www.feixiaohao.com/news/${id}.html`);
      const linkObj = this.$router.resolve({
        path: "/newsDetail",
        query: { id },
      });
      window.open(linkObj.href, "_blank");

      // this.$router.push({
      //   path: "newsDetail",
      //   query: { id },
      // });
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
};
</script>
<style lang="scss" scoped>
@import "./index";
</style>
