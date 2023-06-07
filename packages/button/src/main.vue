<!-- eslint-disable-next-line vue/multi-word-component-names -->
<template>
  <button>
    <slot name="default"></slot>
  </button>
</template>
<script>
export default {
  name: 'FyButton'
}
</script>
<script setup>
// import { defineProps } from 'vue'
// const props = defineProps({})
</script>
<style scoped lang="scss"></style>
