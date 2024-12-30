<template>
  <view class="nodeContent">
    <div class="top">
      <image :src="NodeTopBack" alt="" class="img" />
      <div class="contentBox">
        <p class="text">计算机余额</p>
        <p class="num">7980</p>
        <div class="bot">
          <image :src="Next" alt="" class="goImg" />
          <div class="history">
            <span class="text" @click="history">历史订单</span>
            <image :src="WhiteBack" alt="" class="img" />
          </div>
        </div>
      </div>
    </div>
    <div class="nodeBox" v-for="(i, index) in nodeList" :key="index">
      <div class="top">
        <p class="node">计算机节点</p>
        <image :src="Clock" alt="" class="img" />
      </div>
      <image :src="NodeTopBack" alt="" class="img" />
      <div class="data">
        <div class="item">
          <p class="text">金额</p>
          <p class="num">{{ i.amount }}CNY</p>
        </div>
        <div class="item">
          <p class="text">7天释放</p>
          <p class="num">{{ i.getAmount }}CNY</p>
        </div>
        <div class="item">
          <p class="text">释放倍数</p>
          <p class="num">{{ i.multiple }}倍</p>
        </div>
        <div class="item">
          <p class="text">周期</p>
          <p class="num">{{ i.date }}天</p>
        </div>
      </div>
      <p class="order" @click="placeAnOrder(index)">下单</p>
    </div>
  </view>
  <TarbarMenu />
</template>

<script setup>
import { onPullDownRefresh } from "@dcloudio/uni-app";
import NodeTopBack from "@/static/nodeTopBack.png";
import WhiteBack from "@/static/whiteBack.png";
import Next from "@/static/next.png";
import Clock from "@/static/clock.png";

const nodeList = [
  { amount: "90", getAmount: "100", multiple: "55", date: "33" },
  { amount: "90", getAmount: "100", multiple: "55", date: "33" },
  { amount: "90", getAmount: "100", multiple: "55", date: "33" },
  { amount: "90", getAmount: "100", multiple: "55", date: "33" },
  { amount: "90", getAmount: "100", multiple: "55", date: "33" },
  { amount: "90", getAmount: "100", multiple: "55", date: "33" },
  { amount: "90", getAmount: "100", multiple: "55", date: "33" },
];
const placeAnOrder = (i) => {
  uni.navigateTo({
    url: "/pages/trade/components/PlaceAnOrder",
  });
};
const history = () => {
  uni.navigateTo({
    url: "/pages/trade/components/historyOrder",
  });
};
// 下拉刷新逻辑
onPullDownRefresh(() => {
  setTimeout(() => {
    // 停止下拉刷新动画
    uni.stopPullDownRefresh();
  }, 2000); // 模拟延迟 1.5 秒
});
</script>

<style lang="scss">
@import url("./index.scss");
</style>
