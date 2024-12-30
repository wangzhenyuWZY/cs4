<template>
  <view class="assetsContent">
    <div class="topBox">
      <div class="content">
        <image :src="AssetsTitleBac" alt="" class="img" />
        <div class="data">
          <p class="title">
            <span class="name">我的资产</span>
            <span>充值记录</span>
          </p>
          <div class="content">
            <div class="top">
              <span>总资产(CNY)</span>
              <image :src="AssetsShowBack" alt="" class="img" />
            </div>
            <p class="assets">147330.78</p>
            <p class="num">
              <span>~$</span>
              <span>129.0000020</span>
            </p>
            <p class="topUp" @click="goTopUp">充值</p>
          </div>
        </div>
      </div>
    </div>

    <div class="assetsBox">
      <div class="title">资产列表</div>
      <div class="item" v-for="i in assetsList" :key="i.name">
        <div class="top">
          <div class="left">
            <image :src="i.img" alt="" class="img" />
            <span>{{ i.name }}</span>
          </div>
          <image :src="GoColor" alt="" class="img" />
        </div>
        <div class="content">
          <div class="more">
            <p class="name">可用余额</p>
            <p class="num">{{ i.balance }}</p>
          </div>
          <div class="more moreCenter">
            <p class="name">冻结余额</p>
            <p class="num">{{ i.lp }}</p>
          </div>
          <div class="more moreRight">
            <p class="name">折合(CNY)</p>
            <p class="num">{{ i.num }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="oprate">
      <p @click="goTopUp">充值</p>
      <p @click="withdrawCash">提现</p>
      <p class="wid" @click="transfer">转账</p>
    </div>
  </view>
  <TarbarMenu />
</template>

<script setup>
import { onPullDownRefresh } from "@dcloudio/uni-app";
import AssetsTopBack from "@/static/assetsTopBack.png";
import AmountBack from "@/static/amountBack.png";
import AssetsTopBackJian from "@/static/assetsTopBackJian.png";
import AssetsTitleBac from "@/static/assetsTitleBack1.png";
import AssetsShowBack from "@/static/assetsShowBack.png";
import GoColor from "@/static/goColor.png";

import CnyBack from "@/static/cnyBack.png";
import CipsBack from "@/static/cipsBack.png";
const assetsList = [
  { name: "CNY", img: CnyBack, balance: "1285.00", lp: "0.00", num: "10.00" },
  { name: "CIPS", img: CipsBack, balance: "1285.00", lp: "0.00", num: "20.00" },
];

const withdrawCash = () => {
  uni.navigateTo({
    url: "/pages/assets/components/withdrawCash",
  });
};

const transfer = () => {
  uni.navigateTo({
    url: "/pages/assets/components/transfer",
  });
};

const goTopUp = () => {
  uni.navigateTo({
    url: "/pages/assets/components/topUp",
  });
};

// 下拉刷新逻辑
onPullDownRefresh(() => {
  setTimeout(() => {
    console.log(1111111111111);
    // 停止下拉刷新动画
    uni.stopPullDownRefresh();
    console.log(222222222222);
  }, 2000); // 模拟延迟 1.5 秒
});
</script>

<style lang="scss">
@import url("./index.scss");
</style>
