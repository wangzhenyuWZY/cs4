<template>
	<view class="inviteBoxMore">
		<div class="topBox">
			<TopBack text="邀请码" url="/pages/contract/index" isTabbar="true" />
		</div>
		<div class="contentBox">
			<div class="content">
				<image :src="InviteCode" alt="" class="avatarCode" />
				<p class="text">邀请码</p>
				<p class="code">NKQ9032</p>

				<div class="lineBox">
					<p class="yuan yuanOne"></p>
					<p class="line"></p>
					<p class="yuan yuanTwo"></p>
				</div>

				<image :src="InviteCode" alt="" class="inviteCodeImg" />
				<div class="enter">
					<p class="copyCode" @click="change('code')">复制邀请码</p>
					<p class="copyLink" @click="change('link')">复制邀请链接</p>
				</div>
			</div>
		</div>
		<!-- copy -->
		<CopyHook :isShow="isShow" :change="goCopy" :text="showStatus === 'code' ? '邀请码复制成功' : '邀请链接复制成功'" />
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { onPullDownRefresh } from '@dcloudio/uni-app';
import TopBack from '/components/TopBack/index.vue';
import InviteBack from '@/static/inviteBack.png';
import InviteCode from '@/static/inviteCode.png';
import CopyHook from '/components/Copy/index.vue';

const isShow = ref(false);
const showStatus = ref('');

const change = (key) => {
	showStatus.value = key;
	isShow.value = true;
};

const goCopy = () => {
	showStatus.value = '';
	isShow.value = false;
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
