<template>
	<view class="DetailBox">
		<TopBack text="公告" url="/pages/index/components/announcement" />
		<p class="text">
			2.0已经上线，请前往升级吧！消息文字两行展示文字两行展示消息文字超过两行全部省约号展示2.0已经上线，请前往升级吧！消息文字两行展示文字两行展示消息文字超过两行全部省约号展示...2.0已经上线，请前往升级吧！消息文字两行展示文字两行展示消息文字超过两行全部省约号展示。
		</p>
		<p class="time">2024-08-30 12:09:00</p>
	</view>
</template>

<script setup>
import { onPullDownRefresh } from '@dcloudio/uni-app';
import TopBack from '/components/TopBack/index.vue';

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
