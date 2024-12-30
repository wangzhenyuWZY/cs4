<template>
	<view class="swiperBox">
		<uni-swiper-dot class="swiperMore" :info="info" :current="current" :dots-styles="dotsStyles" field="content">
			<!-- @change="change" -->
			<swiper :style="{ height: swiperHeight + 'px' }" class="swiper-box">
				<swiper-item ref="swiperChildHeight" class="swiperItemBox" v-for="(item, index) in info" :key="item.key" @click="clickItem(item)">
					<div class="itemMore">
						<image :src="moreImg" alt="" class="img" />
						<div class="content">
							<p class="title">{{ item.title }}</p>
							<p class="text">{{ item.text }}</p>
							<div class="go">
								<p class="left">
									<span>{{ item.go }}</span>
								</p>
								<p class="right">{{ index + 1 }}/{{ info.length }}</p>
							</div>
						</div>
					</div>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
	</view>
</template>
<script setup>
import { ref, defineProps, onMounted } from 'vue';
const current = ref(0);
const swiperChildHeight = ref(null);
const swiperHeight = ref(0);
const dotsStyles = { display: 'none' };
const { info, clickItem, moreImg } = defineProps({
	clickItem: Function, // 定义要接收的参数
	info: Array,
	moreImg: String
});
const updateParentHeight = () => {
	if (swiperChildHeight.value) {
		uni.createSelectorQuery()
			.select('.swiperItemBox')
			.boundingClientRect((rect) => {
				swiperHeight.value = rect.height; // 获取高度
			})
			.exec();
		const box1 = document.querySelector('.uni-swiper-wrapper');
		const box2 = document.querySelector('.uni-swiper-slide-frame');
		const box3 = document.querySelector('.swiperItemBox');
		if (box1 && box2 && box3) {
			box1.style.height = '100%';
			box2.style.height = '100%';
			box3.style.height = '100%';
		}
	}
};
// 在组件挂载后执行
onMounted(() => {
	updateParentHeight(); // 页面加载时也获取子元素的高度
});
</script>

<style lang="scss">
@import url('./index.scss');
</style>
