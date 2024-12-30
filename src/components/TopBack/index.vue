<template>
	<view class="topBox">
		<image :src="Back" @click="goBack" alt="" class="img" />
		<span class="text">{{ text }}</span>
		<span>{{ right }}</span>
	</view>
</template>
<script setup>
import Back from '@/static/goBack.png';
import { defineProps } from 'vue';
const { text, url, right, isTabbar } = defineProps({
	text: String,
	url: String,
	right: '',
	isTabbar: false
});
const goBack = () => {
	if (isTabbar) {
		uni.reLaunch({
			url: url
		});
	} else {
		uni.navigateTo({
			url: url
		});
	}
};
</script>

<style lang="scss">
@import url('./index.scss');
</style>
