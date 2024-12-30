<template>
	<view class="teamBoxMore">
		<div class="topBox">
			<TopBack text="我的团队" url="/pages/contract/index" isTabbar="true" />
		</div>

		<div class="contentBox">
			<div class="top">
				<p class="text">团队长 章三</p>
				<p class="num">团队人数 12</p>
				<div class="content">
					<div class="item" v-for="i in teamInfo" :key="i.key">
						<p class="text">{{ i.text }}</p>
						<p class="num">{{ i.num }}</p>
					</div>
				</div>
			</div>
			<div class="textPo">
				<p class="ch">团队列表</p>
				<p class="en">team list</p>
			</div>
			<div class="teamList">
				<div class="item" v-for="(i, index) in memberList" :key="index">
					<div class="left">
						<p class="name">{{ i.name }}</p>
						<p class="phone">{{ i.phone }}</p>
					</div>
					<div class="right">
						<p class="num">{{ i.num }}</p>
						<p class="text">联络官等级</p>
					</div>
				</div>
			</div>
		</div>
	</view>
</template>

<script setup>
import { onPullDownRefresh } from '@dcloudio/uni-app';
import TopBack from '/components/TopBack/index.vue';

const teamInfo = [
	{ text: '联络官等级', num: '2', key: '1' },
	{ text: '我的收益CNY', num: '12909.90', key: '2' },
	{ text: '我的提成CNY', num: '1909.90', key: '3' }
];

const memberList = [
	{ phone: '189 0918 8911', name: '里斯', num: '2' },
	{ phone: '189 0918 8911', name: '里斯', num: '2' },
	{ phone: '189 0918 8911', name: '里斯', num: '2' },
	{ phone: '189 0918 8911', name: '里斯', num: '2' },
	{ phone: '189 0918 8911', name: '里斯', num: '2' },
	{ phone: '189 0918 8911', name: '里斯', num: '2' },
	{ phone: '189 0918 8911', name: '里斯', num: '2' }
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
