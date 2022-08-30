<template>
    <div>{{`${person.name}今年${person.age}岁, 明年${nextYearAge}岁`}}</div>
    <button @click="changeAge">加1岁</button>
</template>

<script setup>
import { computed, reactive, watch } from 'vue'
const person = reactive({
    name: '小明',
    age: 18
})

// 声明methods
const changeAge = () => {
    person.age += 1
}

// 声明methods方法
const nextYearAge = computed(() => {
    return person.age + 1
})

watch(
    // pointer函数，监听的是什么
    () => person.age,
    // change函数，监听值的变化
    (newV, oldV) => {
        console.log("当前值：" + person.age)
        console.log("变化前：" + oldV)
        console.log("变化后：" + newV)
    },
    {
      immediate: true, // 立即执行
      deep: true // 深度监听
    }
)
</script>

<style></style>
