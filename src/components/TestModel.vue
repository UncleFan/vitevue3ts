<template>
  <div>测试</div>
  <input type="text" :value="name" @input="changeName"/>
  <input type="number" :value="age" @input="changeAge"/>
</template>

<script setup lang="ts">
defineProps({
  name: String,
  age: Number
})

const emit = defineEmits(['update:name', 'update:age'])
const changeName = (e) => {
  emit('update:name', e.target.value)
}

const changeAge = (e) => {
  console.log(typeof e.target.value)
  emit('update:age', +e.target.value)
}
</script>
