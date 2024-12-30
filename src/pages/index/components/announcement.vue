<template>
	<view class="announcementBox">
		<TopBack text="公告" url="/pages/index/index" isTabbar="true" />
		<div class="item" @click="goDetail(index)" v-for="(i, index) in announcementList" :key="index">
			<p class="text">{{ i.text }}</p>
			<p class="time">{{ i.time }}</p>
		</div>
	</view>
</template>

<script setup>
import { onPullDownRefresh } from '@dcloudio/uni-app';
import TopBack from '/components/TopBack/index.vue';
import { announcementList } from '/utils/type.js';
const goDetail = (index) => {
	console.log(index);
	uni.navigateTo({
		url: '/pages/index/components/announcementDetail'
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
@import url('./index.scss');
</style>
