<template>
	<view>
		<Password status="trade" />
	</view>
</template>

<script setup>
import { onPullDownRefresh } from '@dcloudio/uni-app';
import Password from './components/password.vue';

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

<style></style>
