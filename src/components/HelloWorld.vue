<template>
    <button @click="changePersonName">改名字</button>
</template>

<script setup>
// import { defineProps, defineEmits } from 'vue'
// props声明
const props = defineProps({
  person: {
    type: Object,
    default() {
      return {}
    }
  }
})

// 声明事件
const emit = defineEmits(['update:person'])

const changePersonName = () => {
  props.person.name = "小红"
  // 执行
  emit('update:person', props.person)
}
</script>

<style></style>
