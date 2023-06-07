<template>
  {{ counter }}
  <lp-Button @click="handleClick">Add</lp-Button>
  <lp-tag @click="handleClick">Tag</lp-tag>
</template>
<script setup>
import { userStore } from '@/store/user'
import { storeToRefs } from 'pinia'
const store = userStore()
const { counter } = storeToRefs(store)
const handleClick = () => {
  store.$patch({
    msg: 'pinia good!',
    counter: counter.value + 1
  })
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
