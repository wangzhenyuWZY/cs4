<template>
	<view class="historyOrderBox">
		<div class="topBackMore">
			<TopBack text="历史订单" url="/pages/trade/index" isTabbar="true" />
		</div>
		<div class="orderListBox">
			<OrderList :orderParams="orderParams" height="calc(100% - 110px)" status="node" />
		</div>
	</view>
</template>

<script setup>
import { onPullDownRefresh } from '@dcloudio/uni-app';
import TopBack from '/components/TopBack/index.vue';
import OrderList from '/components/Order/index.vue';
const orderParams = [
	{ status: true, start: '2024-08-30', end: '', price: '0', get: '230' },
	{ status: true, start: '2024-08-30', end: '', price: '0', get: '230' },
	{ status: false, start: '', end: '2024-08-30', price: '0', get: '230' },
	{ status: true, start: '2024-08-30', end: '', price: '0', get: '230' },
	{ status: true, start: '2024-08-30', end: '2024-08-30', price: '0', get: '230' }
];
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
@import url('./index.scss');
</style>
