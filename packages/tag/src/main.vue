<template>
  <span class="zl-tag">
    <slot name="default"></slot>
  </span>
</template>
<script>
export default {
  name: 'FyTag'
}
</script>
<script setup></script>
<style scoped lang="scss">
.zl-tag {
  padding: 10px;
  color: red;
}
</style>
