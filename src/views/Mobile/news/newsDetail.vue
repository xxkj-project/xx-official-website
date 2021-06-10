<template>
  <div class="newsDetail_wrap">
    <div class="newsContent">
      <div class="title">
        <p class="crticle">{{ infoData.title }}</p>
      </div>
      <div class="authorOrTime">
        <span class="author" v-html="infoData.author">
          {{ infoData.author }}
        </span>
        <span class="time">{{ infoData.time }}</span>
      </div>
      <div class="content" id="contentBox">
        <!-- <p class="testBox">
          <img
            src="https://s2.bqiapp.com/news/20200908/2D110BE7DDF6BAE5C845E8A50E71075D.jpg"
            alt=""
          />
        </p> -->
        <div
          class="itemBox"
          v-for="(item, index) in infoData.content"
          :key="index"
        >
          <div class="item" v-html="item"></div>
        </div>
      </div>
      <div class="explainWrap">
        <p>{{ i18nData.title }}</p>
        <p>
          {{ i18nData.desc1 }}
        </p>
        <p>
          {{ i18nData.desc2 }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import wowMixins from "@/mixins/wowMixins";
import { getNewsDetail } from "@/api";

export default {
  mixins: [wowMixins],
  data() {
    return {
      infoData: {
        title: "",
        author: "",
        time: "",
        content: [],
      },
    };
  },
  computed: {
    i18nData() {
      return this.$t("NewsDetail");
    },
  },
  created() {
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === "development") {
      this.getTestData();
    } else {
      this.getData();
    }
  },
  mounted() {},
  updated() {
    console.log("-updated-");
    let contentEl = document.getElementById("contentBox");
    let pEls = contentEl.getElementsByTagName("p");
    let imgEls = contentEl.getElementsByTagName("img");
    console.log("-p-", pEls, "-img-", imgEls);
    for (let i = 0; i < pEls.length; i++) {
      pEls[i].style.lineHeight = "24px";
      pEls[i].style.textIndent = "2em";
      pEls[i].style.padding = "10px";
    }
    for (let i = 0; i < imgEls.length; i++) {
      imgEls[i].style.display = "block";
      imgEls[i].style.width = "auto";
      imgEls[i].style.height = "auto";
      imgEls[i].style.maxWidth = "250px";
      imgEls[i].style.margin = "30px auto";
    }
  },
  methods: {
    getTestData() {
      let res = {
        code: "200",
        msg: "返回成功",
        data: {
          newsId: 9372400,
          title: "【重要】三大交易所 流动性挖矿与上币挖矿收益对比-非小号",
          author: "<!----> <span>非小号官方</span>",
          newsTime: "2020年09月08日 11:08",
          content:
            '<p>自从9月4日币安宣布推出币安挖矿后，火币和OKEX相继推出了流动性挖矿产品，以下是三大交易所的流动性挖矿产品对比：</p> \n<p style="text-align: center;"><img src="https://s2.bqiapp.com/news/20200908/0639FFBA7ECE42C59157C7D502345002.png"></p> \n<p> </p> \n<p>其中，币安推出的BUSD和USDT挖矿项目已于9月4日17:00开启，无锁仓可随时赎回，个人购买上限是30万BUSD或30万USDT。</p> \n<p> </p> \n<p>火币推出的HT和HPT锁仓挖矿CRV项目已于9月7日16:00开启，挖矿周期为14日，需锁仓到期后自动解锁，个人购买上限是5000 HT或400万HPT。</p> \n<p> </p> \n<p>OKEX于9月7日22:40宣布接入Compound协议，支持用户通过将BAT、DAI、ETH、USDC、USDT、ZRX存入Compound链上协议，获得利息收益，部分代币可获得COMP挖矿奖励。无需锁仓，并支持随时赎回，无存币数额限制。</p> \n<p> </p> \n<p>三大交易所相继推出流动性挖矿产品，支持普通用户一键参与市面热门挖矿项目，盈亏视池内收益而定。此外，滑点低、速度快，无Gas费用，降低用户进入DeFi挖矿门槛，以此在下跌行情中又拉起“牛回头”行情。</p> \n<p> </p> \n<p>除推出流动性挖矿外，9月6日，币安推出新币挖矿产品，将币安平台币BNB、稳定币BUSD及其他币种直接引入 DeFi 挖矿，即锁仓平台币+新币种挖矿模式。9月7日，火币宣布推出上线ACH并开启“锁仓HT参与新币挖矿”活动，同日，OKEX官方微博宣布“锁仓OKB挖矿上币即将开启”。</p> \n<p> </p> \n<p>以下是小号君整理的挖矿上币项目数据：</p> \n<p style="text-align: center;"><img src="https://s2.bqiapp.com/news/20200908/71318D97F8E23ACAB7FA9C35274E835A.png"></p> \n<p>其中，火币已于9月7日20:00上线ACH并开启“锁仓HT参与新币挖矿”活动，活动将提供 1亿枚ACH 代币用户挖矿奖励。锁仓周期为14日，用户锁仓后第5日开始支持解锁，个人最低锁仓100 HT，最高锁仓5000 HT。</p> \n<p> </p> \n<p>币安将于9月9日上午8:00(HKT)起，支持用户在BNB、BUSD、ARPA挖矿池中挖BEL代币，共计可挖矿30天，挖矿总量为500万BEL。BNB挖矿池可挖90% BEL，BUSD挖矿池占9%，ARPA挖矿池占1%。无锁仓限制可随时赎回。</p> \n<p> </p> \n<p>新币挖矿玩法，使得用户同时享有免费新币、活期代币利息和客户权益三重权益，高收益，无申购上线，没有亏损风险，甚至无需锁仓，随存随取，极大地普惠用户。至发稿时，OKEX还未推出“锁仓OKB挖矿上币”的具体公告，但交易所新模式的出现影响市场变化仍值得期待，此外，BNB和HT已验证一推出新玩法平台币大涨的模式，不得不说，OKB是否还会再次验证，同样值得期待。</p> \n<p> </p>',
        },
      };
      const { data } = res;
      let content = this.setContentData(data.content);
      this.infoData.title = data.title;
      this.infoData.author = data.author;
      this.infoData.time = data.newsTime;
      this.infoData.content = content;
    },
    getData() {
      const { id } = this.$route.query;
      console.log(id);
      getNewsDetail(id).then((res) => {
        console.log(res);
        const { data } = res;
        let content = this.setContentData(data.content);
        this.infoData.title = data.title;
        this.infoData.author = data.author;
        this.infoData.time = data.newsTime;
        this.infoData.content = content;
      });
    },
    setContentData(data) {
      // console.log(data);
      let result = data.split(" \n");
      result = result.filter((val) => val != "<p> </p>");
      // console.log(result);
      return result;
    },
  },
};
</script>
<style lang="scss" scoped>
.newsDetail_wrap {
  background: #fff;
  padding: 30px 0;

  .newsContent {
    background: #fff;
    padding: 0 12px;

    .testBox {
      img {
        display: block;
        width: auto;
        height: auto;
        max-width: 300px;
        margin: 0 auto 30px;
      }
    }

    .title {
      font-size: 20px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: rgba(27, 28, 29, 1);
      text-align: center;
    }

    .authorOrTime {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      padding: 10px 0;
      border-bottom: 1px solid rgba(238, 238, 238, 1);
    }

    .explainWrap {
      padding-top: 20px;
      font-size: 12px;
      line-height: 18px;
      color: #666;
    }
  }
}
</style>
