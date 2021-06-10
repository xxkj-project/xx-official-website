<!--
 * @Author: wangshengxian
 * @Date: 2020-09-04 10:05:53
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-15 17:21:10
 * @Desc: DAPP落地 - DAPP开发详情
-->
<template>
  <div class="dapp-develop">
    <div class="banner">
      <div class="banner-container wow fadeInLeft" data-wow-delay="0.5s">
        <p>去中心化应用DAPP</p>
      </div>
    </div>
    <div class="main">
      <div class="container">
        DAPP
      </div>
      <p class="secondTitle">
        DAPP是Decentralized
        Application的缩写，即去中心化应用，也有人称为分布式应用，它被认为开启了区块链3.0时代
      </p>
      <div class="dappInfo">
        <div class="content">
          <img src="@/assets/images/pc/dapp1.webp" alt="" />
          <div class="list">
            <div class="list_item">
              <div class="listTitle">
                <!-- <img src="@/assets/images/pc/condition.png" alt="" /> -->
                <span>DAPP满足条件</span>
              </div>
              <ul>
                <li>运行在分布式网络上</li>
                <li>参与者信息被安全存储，隐私得到很好的保护</li>
                <li>通过网络节点去中心化操作</li>
              </ul>
            </div>
            <div class="list_item">
              <div class="listTitle">
                <!-- <img src="@/assets/images/pc/condition.png" alt="" /> -->
                <span>DAPP的特点</span>
              </div>
              <ul>
                <li>DAPP通过网络节点去中心化操作</li>
                <li>DAPP运行在对等网络</li>
                <li>DAPP数据加密后存储在区块链上</li>
                <li>DAPP参与者信息被安全储存</li>
                <li>DAPP必须开源、自治</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="dappIntro">
        <div class="content">
          <div class="list_item">
            <div class="listTitle">
              <span>DAPP与智能合约、区块链的关系</span>
            </div>
            <p>
              DAPP就是基于P2P对等网络而运行在智能合约之上的分布式应用程序，区块链则为其提供可信的数据记录
            </p>
          </div>
          <div class="img">
            <h2>区块链架构演变</h2>
            <img src="@/assets/images/pc/dapp3.png" alt="" />
          </div>
        </div>
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
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  components: {},
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
$imgUrl: "~@/assets/images/pc/";
$contentWidth: 1320px;
.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 600px;
  background: url("#{$imgUrl}setupBannerBg.png") no-repeat center / cover;

  .banner-container {
    width: $contentWidth;
    font-size: 60px;
    line-height: 90px;
    color: #fff;

    p {
      width: 60%;
    }
  }
}

.main {
  .container {
    height: 68px;
    font-size: 36px;
    text-align: center;
    line-height: 68px;
    margin: 40px auto 0px;
  }
  .secondTitle {
    text-align: center;
    line-height: 30px;
    font-size: 16px;
  }
  .dappInfo {
    width: 1320px;
    margin: 30px auto;
    .content {
      display: flex;
      justify-content: space-between;
      img {
        width: 800px;
      }
      .list {
        width: 480px;
        height: 500px;
        .list_item {
          margin-bottom: 60px;
          margin-top: 40px;
          .listTitle {
            display: flex;
            line-height: 25px;
            // img {
            //   width: 35px;
            //   margin-right: 10px;
            // }
            span {
              font-weight: 600;
              // padding-top: 10px;
              font-size: 15px;
              color: #333;
              margin-bottom: 6px;
            }
          }
          ul {
            margin-left: 50px;
            li {
              font-size: 16px;
              line-height: 37px;
              list-style-type: disc;
            }
          }
        }
        // background: red;
      }
    }
  }
  .dappIntro {
    background: white;
    width: 100%;
    .content {
      width: 1320px;
      margin: 0px auto;
      padding-top: 50px;
      display: flex;
      justify-content: space-between;
      .list_item {
        text-align: right;
        width: 490px;
        padding: 90px 0px 0px 100px;
        .listTitle {
          font-weight: 600;
          // padding-top: 10px;
          font-size: 15px;
          color: #333;
          margin-bottom: 6px;
        }
        p {
          line-height: 30px;
          margin-top: 30px;
          font-size: 15px;
        }
      }
      .img {
        img {
          height: 300px;
        }
        h2 {
          text-align: center;
          font-weight: 600;
          font-size: 17px;
          color: #333;
          margin-bottom: 6px;
        }
      }
    }
  }
}
</style>
