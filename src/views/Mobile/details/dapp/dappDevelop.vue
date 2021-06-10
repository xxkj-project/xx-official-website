<!--
 * @Author: wangshengxian
 * @Date: 2020-09-04 10:05:53
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-17 11:23:56
 * @Desc: DAPP落地 - DAPP开发详情
-->
<template>
  <div class="dapp-develop">
    <banner type="system">
      <div class="bannerTxtBox">
        <p class="bannerMainTitle wow fadeInLeft" data-wow-delay="0.5s">
          {{ infoData.bannerMainTitle }}
        </p>
      </div>
    </banner>
    <div class="main">
      <div class="oneWrap">
        <h2 class="title">
          {{ infoData.title }}
        </h2>
        <p class="descTxt">
          {{ infoData.descTxt }}
        </p>
        <div class="imgBox">
          <img class="img" src="@/assets/images/pc/dapp1.webp" alt="" />
        </div>
        <div class="content">
          <div
            class="itemWrap"
            v-for="(itemOptions, index) in infoData.content.one"
            :key="index"
          >
            <div class="titleBox">
              <p>{{ itemOptions.title }}</p>
            </div>

            <div
              class="descBox"
              v-for="(item, idx) in itemOptions.list"
              :key="idx"
            >
              <p>{{ item }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="twoWrap">
        <h2 class="title">
          {{ twoData.bigTitle }}
        </h2>
        <div class="imgBox">
          <img src="@/assets/images/pc/dapp3.png" alt="" class="img" />
        </div>
        <div class="content">
          <h4 class="contentTitle">
            {{ twoData.smallTitle }}
          </h4>
          <p class="contentDesc">
            {{ twoData.descTxt }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import wowMixins from "@/mixins/wowMixins";
import banner from "@/views/Mobile/components/banner";
export default {
  name: "",
  mixins: [wowMixins],
  data() {
    return {
      infoData: {
        bannerMainTitle: "去中心化应用DAPP",
        title: "DAPP",
        descTxt:
          "DAPP是DecentralizedApplication的缩写，即去中心化应用，也有人称为分布式应用，它被认为开启了区块链3.0时代",
        content: {
          one: [
            {
              title: "DAPP满足条件",
              list: [
                "运行在分布式网络上",
                "参与者信息被安全存储，隐私得到很好的保护",
                "通过网络节点去中心化操作",
              ],
            },
            {
              title: "DAPP的特点",
              list: [
                "DAPP通过网络节点去中心化操作",
                "DAPP运行在对等网络",
                "DAPP数据加密后存储在区块链上",
                "DAPP参与者信息被安全储存",
                "DAPP必须开源、自治",
              ],
            },
          ],
          two: {
            bigTitle: "区块链架构演进",
            smallTitle: "DAPP与智能合约、区块链的关系",
            descTxt:
              "DAPP就是基于P2P对等网络而运行在智能合约之上的分布式应用程序，区块链则为其提供可信的数据记录",
          },
        },
      },
    };
  },
  computed: {
    twoData() {
      return this.infoData.content.two;
    },
  },
  created() {},
  mounted() {},
  methods: {},
  components: { banner },
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
$imgUrl: "~@/assets/images/pc/";

.main {
  background: #fff;

  .title {
    font-size: 24px;
    text-align: center;
    line-height: 56px;
    padding-top: 4px;
  }
  .descTxt {
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    padding: 0 40px;
  }
}

.oneWrap {
  .imgBox {
    display: flex;
    justify-content: center;
    padding: 20px 0;

    .img {
      width: 0.4 * 800px;
      height: 0.4 * 500px;
    }
  }
  .itemWrap {
    padding-bottom: 30px;
    padding-left: 40px;

    .titleBox {
      font-weight: 600;
      font-size: 16px;
      color: #333;
      margin-bottom: 10px;
    }

    .descBox {
      font-size: 14px;
      line-height: 36px;
    }
  }
}

.twoWrap {
  .imgBox {
    display: flex;
    justify-content: center;
    padding: 10px;

    .img {
      width: 0.4 * 768px;
      height: 0.4 * 300px;
    }
  }

  .content {
    padding: 0 40px 30px;

    .contentTitle {
      font-weight: 600;
      font-size: 16px;
      color: #333;
      margin-bottom: 10px;
    }

    .contentDesc {
      font-size: 14px;
      line-height: 36px;
    }
  }
}
</style>
