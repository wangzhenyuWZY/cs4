<template>
	<view class="passwordBox">
		<!-- status------trade   account -->
		<div class="topBox">
			<TopBack :text="status === 'trade' ? '更改交易密码' : '更改密码'" url="/pages/contract/components/account" />
		</div>
		<div class="contentBox">
			<div class="item" v-for="i in inputList" :key="i.key">
				<p class="text">{{ i.text }}</p>
				<input type="password" @input="(e) => changeInput(e, i.key)" class="input" :placeholder="i.pl" placeholder-class="placeholderClass" />
			</div>
		</div>

		<p class="enter" @click="enter">确认更改</p>
	</view>
</template>

<script setup>
import TopBack from '/components/TopBack/index.vue';
import { defineProps, ref } from 'vue';

const inputList = [
	{ pl: '输入当前密码', text: '当前密码', key: 'now' },
	{ pl: '输入新密码', text: '新密码', key: 'newPassword' },
	{ pl: '再次输入新密码', text: '确认新密码', key: 'newOne' }
];
const params = ref({ now: '', newPassword: '', newOne: '' });
const { status } = defineProps({
	status: String
});

const changeInput = (e, key) => {
	params.value = { ...params.value, [key]: e.detail.value };
};

const enter = () => {
	const { now, newPassword, newOne } = params.value;
	if (now && newPassword && newOne && newPassword === newOne) {
		console.log(params.value);
	}
};
</script>

<style lang="scss">
@import url('./index.scss');
</style>
