<template>
	<view>
		<uni-popup ref="message" type="message" @change="changePopup" class="messagePopBoxMore">
			<uni-popup-message type="success" :duration="2000">
				<div class="moreBox">
					<image :src="CopySuccess" alt="" class="img" />
					<p class="text">{{ props.text }}</p>
				</div>
			</uni-popup-message>
		</uni-popup>
	</view>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue';
import CopySuccess from '@/static/copySuccess.png';
const message = ref();
const props = defineProps({
	isShow: Boolean,
	change: Function,
	text: String
});

const changePopup = (e) => {
	if (e.show) {
		setTimeout(() => {
			message.value.close();
			props.change();
		}, 2000);
	} else {
		props.change();
	}
};

// 监听响应式变量
watch(
	() => props.isShow,
	(oldValue, _) => {
		if (oldValue) {
			message.value.open('center');
		}
	}
);
</script>

<style lang="scss">
@import url('./index.scss');
</style>
