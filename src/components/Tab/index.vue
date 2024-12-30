<template>
	<view class="tabBox">
		<div class="item" v-for="item in option" :key="item.key" @click="active(item.key)" :style="{ color: selectOption === item.key ? 'white' : 'rgba(255,255,255,0.4)' }">
			{{ item.name }}
		</div>
	</view>
</template>

<script setup>
import { defineProps, ref } from 'vue';
const { option, selectOption, active } = defineProps({
	option: Array,
	active: Function,
	selectOption: String
});
</script>

<style lang="scss">
@import url('./index.scss');
</style>
