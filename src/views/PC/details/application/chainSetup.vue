<!--
 * @Author: wangshengxian
 * @Date: 2020-09-04 10:05:53
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-15 17:20:29
 * @Desc: DAPP落地 - 公、私链搭建详情
-->
<template>
  <div class="chainSetup">
    <div class="banner">
      <div class="banner-container wow fadeInLeft" data-wow-delay="0.5s">
        <p>公、私链搭建</p>
      </div>
    </div>
    <div class="main">
      <div class="container">
        公有链
      </div>
      <p class="secondTitle">
        公有链简称公链，是指全世界任何人都可读取的、任何人都能发送交易且交易能获得有效确认的、任何人都能参与竞争记账的区块链。
      </p>
      <div class="gylDiv">
        <div class="gylContent">
          <img src="@/assets/images/pc/gyl.png" alt="" />
          <ul>
            <li class="content">
              公有链一般会通过代币奖励机制来鼓励参与者竞争记账，来确保数据的安全性。比特币、以太坊都是典型的公有链。
            </li>
            <li class="content">
              绝大多数的DAPP，都是基于公有链的，比如Iron Throne就是基于以太坊的
            </li>
            <li class="title">公有链特点</li>
            <li>保护用户免受开发者的影响</li>
            <li>访问门槛低</li>
            <li>所有数据默认公开</li>
          </ul>
        </div>
      </div>
      <div class="container syl">
        私有链
      </div>
      <p class="secondTitle sylTitle">
        私有链简称私链，是指其写入权限由某个组织和机构控制的区块链，参与节点的资格会被严格限制。
      </p>
      <div class="gylDiv sylDiv">
        <div class="gylContent">
          <ul>
            <li class="content">
              有链是指其写入权限仅在一个组织手里的区块链，目的是对读取权限或者对外开放权限进行限制。
            </li>
            <li class="title">私有链特点</li>
            <li>交易速度非常快</li>
            <li>为隐私提供更好的保障</li>
            <li>交易成本大幅降低甚至为零</li>
            <li>有助于保护其基本的产品不被破坏</li>
          </ul>
          <img src="@/assets/images/pc/syl.png" alt="" />
        </div>
      </div>
      <div class="container">
        其他的链(联盟链)
      </div>
      <p class="secondTitle">
        联盟链只针对某个特定群体的成员和有限的第三方，其内部指定多个预选节点为记账人，每个块的生成由所有的预选节点共同决定。
      </p>
      <div class="gylDiv">
        <div class="gylContent">
          <img src="@/assets/images/pc/tml.png" alt="" />
          <ul>
            <li class="content">
              联盟链本质上仍然是一种私有链，只不过它比单个小组织开发的私有链更大，却又没有公有链这么大的规模，可以理解为它是介于私有链和公有链之间的一种区块链。
            </li>
            <li class="title">联盟链特点</li>
            <li>部分去中心化</li>
            <li>可控性较强</li>
            <li>数据不会默认公开</li>
            <li>交易速度很快</li>
          </ul>
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
    // line-height: 80px;
    p {
      width: 60%;
    }
  }
}

.main {
  .container {
    height: 70px;
    font-size: 36px;
    text-align: center;
    margin: 0 auto;
    line-height: 70px;
    margin-top: 15px;
  }
  .syl,
  .sylTitle {
    background: white;
  }
  .syl {
    padding-top: 18px;
    height: 90px;
  }
  .secondTitle {
    text-align: center;
    font-size: 16px;
    padding-bottom: 30px;
    color: #9e9e9e;
  }
  .gylDiv {
    // background: white;
    height: 400px;

    .gylContent {
      display: flex;
      width: 1320px;
      margin: 0px auto;
      justify-content: space-between;
      img {
        width: 600px;
      }
      ul {
        padding: 60px 0px;
        li {
          line-height: 30px;
        }
        .content {
          font-size: 16px;
          margin-bottom: 4px;
          list-style-type: none;
        }
        .title {
          font-weight: 600;
          font-size: 20px;
          line-height: 30px;
          color: #333;
          // padding-bottom: 16px;
          margin: 15px 0px 10px;
          list-style-type: none;
        }
        li {
          list-style-type: disc;
        }
      }
    }
  }
  .sylDiv {
    background: white;
    .gylContent {
      width: 1000px;
    }
  }
}
</style>
