<template>
  <view class="homeContent">
    <div class="top">
      <image :src="TopBack" alt="" class="topBack" />
      <div class="content">
        <div class="top">
          <image src="/static/welcome.png" alt="" class="text1" />
          <image src="/static/person.png" alt="" class="text2" />
        </div>
        <!-- <image :src="NameLogo" alt="" class="name" /> -->
        <image :src="TextBack" alt="" class="text" />
      </div>
    </div>
    <div class="contentBox">
      <!-- 公告 -->
      <div class="announcement">
        <image :src="Announcement" alt="" class="img" />
        <p class="line"></p>
        <p class="text" @click="goAnnouncement">
          GE智能医疗全新3D检测仪理财产品上市...
        </p>
      </div>
      <!-- 操作 -->
      <div class="operate">
        <div class="item" v-for="i in listOperate" :key="i.key">
          <image :src="i.img" alt="" class="img" />
          <p class="text">{{ i.name }}</p>
        </div>
      </div>
      <!-- 交易对 -->
      <div class="tradingPair">
        <!-- { name: '名称', newPrice: '最新价', increase: '涨跌幅' }, -->
        <p class="title">交易对</p>
        <div class="box">
          <div class="item tabs">
            <div class="text">名称</div>
            <div class="right">
              <p class="text flex">最新价</p>
              <p class="text wid flex">涨跌幅</p>
            </div>
          </div>
          <div
            :style="{ marginBottom: index === tabs.length - 1 ? '0' : '20px' }"
            class="item"
            v-for="(i, index) in tabs"
            :key="index"
          >
            <div class="left">
              <image :src="i.name.img" class="img" />
              <div class="name">
                <p class="top">{{ i.name.enName }}</p>
                <p class="bot">{{ i.name.name }}</p>
              </div>
            </div>
            <div class="right">
              <p class="price flex">{{ i.price }}</p>
              <div class="increase flex">
                <p
                  :style="{
                    backgroundColor:
                      Number(i.increase) > 0 ? '#1EA266' : '#CF3F48'
                  }"
                >
                  {{ i.increase }}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <uni-popup ref="popup" class="popupBoxMore" background-color="#fff">
      <view class="popup-content">
        <p class="tittle">沙盒计划项目组致用户</p>
        <p class="text">
          截至目前，数据恢复工作仍在持续进行中，每当我们修复一项数据时，美西方等反华势力便会趁机制造新的混乱。经过近几日与上级及网信办的沟通，我们决定从根本上解决数据丢失的问题，为每位CIPS会员提供节点修复包。通过节点修复包累计提现15次，验证每一位会员的账户信息。
        </p>
        <p class="text">
          同时，我们与中国人民银行进行了会议，决定为每位会员额外补贴3000元到签到参会补贴钱包。此外，三款节点修复包也为所有会员进行了调整，争取到了终身收益。请各位团队长相互转告，确保落实每位会员的权益，实现共同富裕。
        </p>
        <p class="know" @click="close">已知悉</p>
      </view>
    </uni-popup>
  </view>
  <TarbarMenu />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { onPullDownRefresh } from '@dcloudio/uni-app'
import { orderList } from '@/utils/type.js'
import TopBack from '@/static/topBack.png'
import NameLogo from '@/static/nameLogo.png'
import TextBack from '@/static/textBack.png'
import Robot from '@/static/robot.png'
import Back from '@/static/back.png'
import New from '@/static/new.png'
import NewBack from '@/static/newBack.png'
import Announcement from '@/static/announcement.png'
import ModalBack from '@/static/modalBack.png'
import { useDataStore } from '@/stores/data'
import { getUserInfo } from '@/request/api'
const popup = ref()
const useData = useDataStore()
cons isShowr1321 = ref(false)
const close = () => {
  popup.value.close()
}
const listOperate = [
  { img: '/static/invite.png', name: '邀请', key: 'invite' },
  { img: '/static/Certification.png', name: '认证', key: 'certification' },
  { img: '/static/c2c.png', name: 'C2C', key: 'c2c' },
  { img: '/static/topup.png', name: '充值', key: 'topup' },
  { img: '/static/service.png', name: '客服', key: 'service' }
]

const tabs = [
  {
    name: { img: '/static/invite.png', name: '比特币', enName: 'TON' },
    price: '$89,390.2',
    increase: '+2.18'
  },
  {
    name: { img: '/static/invite.png', name: '以太坊', enName: 'ETH' },
    price: '$390.2',
    increase: '+2.18'
  },
  {
    name: { img: '/static/invite.png', name: '以太坊', enName: 'ETH' },
    price: '$390.2',
    increase: '+2.18'
  },
  {
    name: { img: '/static/invite.png', name: '以太坊', enName: 'ETH' },
    price: '$390.2',
    increase: '+2.18'
  },
  {
    name: { img: '/static/invite.png', name: '以太坊', enName: 'ETH' },
    price: '$390.2',
    increase: '+2.18'
  },
  {
    name: { img: '/static/invite.png', name: '以太坊', enName: 'ETH' },
    price: '$390.2',
    increase: '+2.18'
  },
  {
    name: { img: '/static/invite.png', name: '以太坊', enName: 'ETH' },
    price: '$390.2',
    increase: '+2.18'
  },
  {
    name: { img: '/static/invite.png', name: '以太坊', enName: 'ETH' },
    price: '$390.2',
    increase: '+2.18'
  },
  {
    name: { img: '/static/invite.png', name: '以太坊', enName: 'ETH' },
    price: '$390.2',
    increase: '+2.18'
  },
  {
    name: { img: '/static/invite.png', name: '以太坊', enName: 'ETH' },
    price: '$390.2',
    increase: '+2.18'
  },
  {
    name: { img: '/static/invite.png', name: '以太坊', enName: 'ETH' },
    price: '$390.2',
    increase: '+2.18'
  },
  {
    name: { img: '/static/invite.png', name: '以太坊', enName: 'ETH' },
    price: '$390.2',
    increase: '+2.18'
  },
  {
    name: { img: '/static/invite.png', name: '以太坊', enName: 'ETH' },
    price: '$390.2',
    increase: '+2.18'
  },
  {
    name: { img: '/static/invite.png', name: '以太坊', enName: 'ETH' },
    price: '$390.2',
    increase: '+2.18'
  },
  {
    name: { img: '/static/invite.png', name: '以太坊', enName: 'ETH' },
    price: '$390.2',
    increase: '+2.18'
  },
  {
    name: { img: '/static/invite.png', name: '以太坊', enName: 'ETH' },
    price: '$390.2',
    increase: '+2.18'
  },
  {
    name: { img: '/static/invite.png', name: '以太坊', enName: 'ETH' },
    price: '$390.2',
    increase: '+2.18'
  },
  {
    name: { img: '/static/invite.png', name: '以太坊', enName: 'ETH' },
    price: '$390.2',
    increase: '+2.18'
  },
  {
    name: { img: '/static/invite.png', name: '以太坊', enName: 'ETH' },
    price: '$390.2',
    increase: '+2.18'
  },
  {
    name: { img: '/static/invite.png', name: '比特币', enName: 'TON' },
    price: '$890.2',
    increase: '-2.18'
  }
]

const goAnnouncement = () => {
  uni.navigateTo({
    url: '/pages/index/components/announcement'
  })
}
// 下拉刷新逻辑
onPullDownRefresh(() => {
  setTimeout(() => {
    // 停止下拉刷新动画
    uni.stopPullDownRefresh()
  }, 2000) // 模拟延迟 1.5 秒
})

onMounted(() => {
  if (!useData.isHomeModalShow) {
    setTimeout(() => {
      useData.updateHomeModalShow()
      popup.value.open('center')
    }, 1000)
  }

  if (uni.getStorageSync('token')) {
  }
})
</script>

<style lang="scss">
@import url('./index.scss');
</style>
