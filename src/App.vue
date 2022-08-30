<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { defineComponent, ref, watch } from 'vue'
import router from './router'
export default defineComponent({
  setup() {
    // 下部导航栏tabbar
    const tabs = [
      {
        name: 'home',
        text: '首页',
        icon: 'home-o'
      },
      {
        name: 'search',
        text: '搜索',
        icon: 'search'
      },
      {
        name: 'friends',
        text: '朋友',
        icon: 'friends-o'
      },
      {
        name: 'setting',
        text: '设置',
        icon: 'setting-o'
      }
    ]
    // 当前显示的tabbar索引
    const active = ref(0)
    // 是否显示导航信息
    const showTabs = ref(true)

    // 导航点击返回按钮
    const onClickLeft = (e) => {
      router.go(-1)
    }

    // 页面title
    const routeName = ref('')

    watch(
      () => router.currentRoute.value,
      (val) => {
        const routes = ['Home', 'Search', 'Friends', 'Setting']
        const currentIndex = routes.findIndex(item => item === val.name)
        routeName.value = router.currentRoute.value.meta.title
        active.value = currentIndex
        showTabs.value = currentIndex !== -1
      }
    )

    // tabbar点击切换时的监听
    const changeTabbar = (e) => {
      const routes = ['Home', 'Search', 'Friends', 'Setting']
      router.push({name: routes[e]})
    }

    return {
      tabs,
      showTabs,
      active,
      onClickLeft,
      changeTabbar,
      routeName
    }
  }
})
</script>

<template>
  <van-nav-bar :title="routeName" @click-left="onClickLeft" :left-arrow="!showTabs"/>
  <router-view />
  <van-tabbar v-model="active" @change="changeTabbar" v-show="showTabs">
    <van-tabbar-item v-for="tab in tabs" :key="tab.name" :icon="tab.icon">{{ tab.text }}</van-tabbar-item>
  </van-tabbar>
</template>

<style>
#app {
  width: 100vw;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
