<template>
	<view class="payMoreBox">
		<div class="topBox">
			<TopBack text="收款方式" url="/pages/contract/components/account" />
		</div>
		<div class="contentBox">
			<div class="scrollBox">
				<div class="payItem">
					<div class="item" v-for="i in payList" :key="i.key">
						<div class="left">
							<image :src="i.img" alt="" class="img" />
							<p class="text">{{ i.text }}</p>
						</div>
						<image :src="AddBack" alt="" class="img" @click="add(i.key)" />
					</div>
				</div>
				<div class="accountItem">
					<div class="item" v-for="(i, index) in informationList" :key="index">
						<p class="title">{{ i.title }}</p>
						<div class="contentList">
							<div class="content" v-for="(item, ind) in i.data" :key="ind">
								<div class="left">
									<p class="name">
										<image :src="i.img" class="img" alt="" />
										<span>{{ item.text }}</span>
									</p>
									<p class="num">{{ item.num }}</p>
								</div>
								<image :src="DelBack" class="img" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</view>
</template>

<script setup>
import { onPullDownRefresh } from '@dcloudio/uni-app';
import TopBack from '/components/TopBack/index.vue';
import UnionPay from '@/static/WeChat.png';
import Alipay from '@/static/Alipay.png';
import DelBack from '@/static/del.png';
import AddBack from '@/static/add.png';
const payList = [
	{ img: UnionPay, text: '银行卡', key: 'UnionPay' },
	{ img: Alipay, text: '支付宝', key: 'Alipay' }
];

const informationList = [
	{
		title: '银行卡',
		img: UnionPay,
		data: [
			{ text: '中国银行', num: '1239 808858851200' }
			// { text: '中国银行', num: '1239 808858851200' },
			// { text: '中国银行', num: '1239 808858851200' },
			// { text: '中国银行', num: '1239 808858851200' },
			// { text: '中国银行', num: '1239 808858851200' },
			// { text: '中国银行', num: '1239 808858851200' }
		]
	},
	{
		title: '支付宝',
		img: Alipay,
		data: [
			{ text: '张三', num: '13789092789' },
			{ text: '张三11111', num: '13789092539' }
			// { text: '张三11111', num: '13789092539' },
			// { text: '张三11111', num: '13789092539' },
			// { text: '张三11111', num: '13789092539' },
			// { text: '张三11111', num: '13789092539' },
			// { text: '张三11111', num: '13789092539' },
			// { text: '张三11111', num: '13789092539' },
			// { text: '张三11111', num: '13789092539' },
			// { text: '张三11111', num: '13789092539' },
			// { text: '张三11111', num: '13789092539' }
		]
	}
];

const add = (key) => {
	if (key === 'UnionPay') {
		uni.navigateTo({
			url: '/pages/contract/components/addPay/addUnionPay'
		});
	} else {
		uni.navigateTo({
			url: '/pages/contract/components/addPay/addAlipay'
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
