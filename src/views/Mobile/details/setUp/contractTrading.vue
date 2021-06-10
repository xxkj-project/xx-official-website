<!--
 * @Author: wangshengxian
 * @Date: 2020-08-31 14:14:34
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-23 18:12:41
 * @Desc: 区块链搭建 - 合约交易5.1
-->
<template>
  <div class="contract">
    <banner type="system">
      <div class="bannerTxtBox">
        <span class="bannerTitle">合约交易5.1</span>
      </div>
    </banner>
    <div class="main">
      <div class="contractOneWrap">
        <h2>{{ contractOneData.title }}</h2>
        <div class="content">
          <div class="centerBox">
            <span class="bg"></span>
          </div>
          <ul class="listBox leftBox">
            <li
              class="item"
              v-for="(items, index) in contractOneData.leftList"
              :key="index"
            >
              <p class="itemTitle">{{ items.title }}</p>
              <p
                class="descTxt"
                v-for="(item, idx) in items.descList"
                :key="idx"
              >
                {{ item }}
              </p>
            </li>
          </ul>
          <ul class="listBox rightBox">
            <li
              class="item"
              v-for="(items, index) in contractOneData.rightList"
              :key="index"
            >
              <p class="itemTitle">{{ items.title }}</p>
              <p
                class="descTxt"
                v-for="(item, idx) in items.descList"
                :key="idx"
              >
                {{ item }}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div class="contractTwoWrap">
        <h2>{{ twoData.title }}</h2>
        <div class="content">
          <ul class="listBox">
            <li
              class="item"
              v-for="(items, index) in twoData.list"
              :key="index"
            >
              <p class="itemTitle">{{ items.title }}</p>
              <p
                class="descTxt"
                v-for="(item, idx) in items.descList"
                :key="idx"
              >
                {{ item }}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div class="contractThreeWrap">
        <h2>{{ threeData.title }}</h2>
        <div class="content">
          <ul class="listBox topBox">
            <li
              class="item"
              :class="'top-item' + '_' + index"
              v-for="(itemObj, index) in threeData.topList"
              :key="index"
            >
              <p class="itemTitle">{{ itemObj.title }}</p>
              <p
                class="descTxt"
                v-for="(item, idx) in itemObj.descList"
                :key="idx"
              >
                {{ item }}
              </p>
            </li>
          </ul>
          <ul class="listBox bottomBox">
            <li
              class="item"
              :class="'bottom-item' + '_' + index"
              v-for="(itemObj, index) in threeData.bottomList"
              :key="index"
            >
              <p class="itemTitle">{{ itemObj.title }}</p>
              <p
                class="descTxt"
                v-for="(item, idx) in itemObj.descList"
                :key="idx"
              >
                {{ item }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner from "@/views/Mobile/components/banner";
export default {
  name: "",
  data() {
    return {
      infoData: {
        imgUrl: require("@/assets/images/pc/contract/banner_04.jpg"),
      },
      contractOneData: {
        title: "行业领先的合约交易解决方案",
        leftList: [
          {
            title: "产品功能全面，配置项目丰富，自由度高",
            descList: [
              "合约币种自由配置，支持平台币发布合约自定义高杠杆——最高500倍",
              "支持全仓、逐仓保证金模式，支持双向持仓多种下单模式",
            ],
          },
          {
            title: "智能价格系统，确保市场稳定",
            descList: [
              "主流交易所价格指数接入",
              "多源行情加权配置，排除单一数据源风险",
              "智能算法锚定价格，确保市价不会大幅偏离",
              "科学的合理价格机制，抵抗瞬时大单冲击，防止恶意砸盘",
            ],
          },
        ],
        rightList: [
          {
            title: "智能多重风控，抵御穿仓风险",
            descList: [
              "维持保证金制度与强平制度",
              "保险基金制度",
              "自动减仓机制",
              "全面多重防穿仓，平台风险为0",
            ],
          },

          {
            title: "高效稳定的系统性能",
            descList: [
              "独立部署，支持横向扩展",
              "工业级撮合方案，轻松处理高并发撮合请求",
              "数据处理稳定，更安全，更可靠",
            ],
          },
        ],
      },
      twoData: {
        title: "一站式合约交易系统解决方案",
        list: [
          {
            title: "交易客户端",
            descList: ["功能完善", "设计可定制", "多端支持"],
          },
          {
            title: "后台管理系统",
            descList: ["配置项全面丰富", "专业的财务系统", "丰富的数据报表"],
          },
          {
            title: "高性能服务端",
            descList: ["性能稳定高效", "异步多线程", "DB主从分离，实时备份"],
          },
          {
            title: "智能机器人做市",
            descList: [
              "遵从系统指数配置",
              "灵活设置做市模式",
              "促活市场，降低系统性风险",
            ],
          },
        ],
      },
      threeData: {
        title: "选择我们——专业、高效、业界领先的合作伙伴",
        topList: [
          {
            title: "专业研发团队",
            descList: ["深耕区块链行业五年", "行业经验丰富"],
          },
          {
            title: "银行级安全体系",
            descList: [
              "离线冷存储，云端加密，SSL，多重加密等银行级安全技术",
              "资产多级划分，线上资产独享私密安全网络",
            ],
          },
        ],
        bottomList: [
          {
            title: "快速部署",
            descList: [
              "全程专业技术团队跟进",
              "功能可配置，可定制",
              "提供成熟解决方案，快速部署",
            ],
          },
          {
            title: "国际化服务",
            descList: [
              "支持多语言系统版本",
              "支持多种主流法定货币接入",
              "不同国家地区本地化优化",
            ],
          },
          {
            title: "优质的客户服务",
            descList: [
              "一对一专属客服",
              "7*24人工在线支持，即时响应",
              "售前、售中、售后360°全方位支持",
            ],
          },
        ],
      },
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  components: { banner },
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
$imgUrl: "~@/assets/images/pc/contract/";

.bannerTxtBox {
  display: flex;
  flex-direction: column;

  .bannerTitle {
    font-size: 32px;
    margin-bottom: 32px;
  }

  .bannerDesc {
    font-size: 25px;
  }
}

.contract {
  .main {
    h2 {
      font-size: 24px;
      color: #333;
      text-align: center;
      padding: 20px 10px;
    }
  }
}

.contractOneWrap,
.contractThreeWrap {
  background: #fff;
}

.contractTwoWrap {
  background: #efefef;
}

.itemTitle {
  font-weight: 600;
  font-size: 16px;
  line-height: 30px;
  color: #333;
  padding-bottom: 16px;
}

.descTxt {
  font-size: 14px;
  color: #888;
  padding-bottom: 16px;
}

// 行业领先的合约交易解决方案
.contractOneWrap {
  padding: 0 20px;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;

    .listBox {
      width: 100%;

      .item {
        // padding-bottom: 20px;
      }
    }

    .centerBox {
      padding: 10px;

      .bg {
        display: block;
        width: 0.6 * 500px;
        height: 0.6 * 588px;
        background: url("#{$imgUrl}hy2.jpg") no-repeat center / cover;
      }
    }
  }
}

// 一站式合约交易系统解决方案
.contractTwoWrap {
  padding: 10px 0;

  .content {
    .listBox {
      display: flex;
      flex-wrap: wrap;
      width: 100%;

      .item {
        display: flex;
        flex-direction: column;
        width: 50%;
        text-align: center;
        padding: 6px;
      }
    }
  }
}

// 选择我们——专业、高效、业界领先的合作伙伴
.contractThreeWrap {
  // background: url("#{$imgUrl}hy3.jpg") no-repeat right 170px;
  // padding-bottom: 40px;
  padding: 20px;

  .content {
    .listBox {
      display: flex;
      padding-top: 10px;

      .item {
        // width: 30%;
        margin-right: 10px;

        &:last-child {
          margin-right: 0;
        }

        &:before {
          display: block;
          content: "";
          width: 48px;
          height: 45px;
          background: url("#{$imgUrl}spriteIcon.png") no-repeat;
          margin-bottom: 4px;
        }
      }

      // 正式服图片上移20px
      .top-item_0:before {
        background-position: 0 -480px;
      }
      // 正式服图片上移20px
      .top-item_1:before {
        background-position: 0 -525px;
      }
      // 正式服图片上移25px
      .bottom-item_0:before {
        background-position: 0 -575px;
      }
      // 正式服图片上移25px
      .bottom-item_1:before {
        background-position: 0 -618px;
      }
      // 正式服图片上移25px
      .bottom-item_2:before {
        background-position: 0 -663px;
      }
    }

    .topBox {
      .item:first-child {
        width: 40%;
      }
      .item:last-child {
        width: 60%;
      }
    }
  }
}
</style>
