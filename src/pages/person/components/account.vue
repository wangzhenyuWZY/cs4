<template>
	<view class="accountBoxMore">
		<div class="topBox">
			<TopBack text="我的账户" url="/pages/contract/index" isTabbar="true" />
		</div>
		<div class="contentBox">
			<!-- 账号 -->
			<div class="itemBox" v-for="(i, index) in list" :key="index">
				<!--  -->
				<div :class="{ item: true, line: i.data.length > 1 ? true : false }" v-for="(item, ind) in i.data" :key="ind">
					<span class="text">{{ item.text }}</span>
					<image :src="MyRight" alt="" class="img" v-if="item.img" @click="goUrl(item.key)" />
					<span class="show" v-else-if="item.show">{{ item.textRight }}</span>
					<div class="copy" v-else-if="item.copy">
						<span>{{ item.num }}</span>
						<image :src="Copy" alt="" class="img" @click="goCopy" />
					</div>
					<span class="textRight" v-else>{{ item.textRight }}</span>
				</div>
			</div>
		</div>
		<!-- copy -->
		<CopyHook :isShow="isShow" :change="goCopy" text="ID复制成功" />
	</view>
</template>

<script setup>
import { onPullDownRefresh } from '@dcloudio/uni-app';
import { ref } from 'vue';
import TopBack from '/components/TopBack/index.vue';
import MyRight from '@/static/myRight.png';
import Copy from '@/static/copy.png';
import CopySuccess from '@/static/copySuccess.png';
import CopyHook from '/components/Copy/index.vue';
const list = [
	{ data: [{ text: '账户ID', num: '902983', copy: true }] },
	{
		data: [
			{ text: '姓名', textRight: '张三' },
			{ text: '电话号码', textRight: '137 9090 7810' },
			{ text: '身份证号码', textRight: '34899028948120' }
		]
	},
	{ data: [{ text: '收款方式', img: MyRight, key: 'pay' }] },
	{
		data: [
			{ text: '交易密码', textRight: '已启用', show: true },
			{ text: '更改密码', img: MyRight, key: 'account' },
			{ text: '更改交易密码', img: MyRight, key: 'trade' }
		]
	}
];
const isShow = ref(false);
const goCopy = () => {
	isShow.value = !isShow.value;
};

const goUrl = (key) => {
	console.log(key);
	if (key === 'trade') {
		uni.navigateTo({
			url: '/pages/contract/components/password/tradePassword'
		});
	} else if (key === 'account') {
		uni.navigateTo({
			url: '/pages/contract/components/password/accountPassword'
		});
	} else if (key === 'pay') {
		console.log(1111111111111);
		uni.navigateTo({
			url: '/pages/contract/components/pay'
		});
	}
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
