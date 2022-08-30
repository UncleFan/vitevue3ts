<template>
  <div class="content">
    <div class="swiper">
      <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in images" :key="image">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="grid-ads"></div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const images = reactive([
  "https://img.yzcdn.cn/vant/apple-1.jpg",
  "https://img.yzcdn.cn/vant/apple-2.jpg",
]);
</script>

<style lang="less" scoped>
.content {
  width: 100vw;
  height: calc(100vh - 50px - 46px);
  overflow-y: scroll;
  .swiper {
    width: 100%;
    height: auto;
    img {
      width: 100vw;
    }
  }
}
</style>
