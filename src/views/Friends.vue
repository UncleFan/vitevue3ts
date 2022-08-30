<template>
    <div>{{`${person.name}今年${person.age}岁`}}</div>
    <HelloWorld :person="person"></HelloWorld>
</template>

<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import { reactive } from 'vue'
const person = reactive({
    name: '小明',
    age: 18
})
</script>

<style></style>
