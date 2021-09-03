<template>
  <div class='page --error'>
    404
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Error',
  layout: 'error'
})
</script>

<style scoped lang='scss'>
.page {
  font-size: 100px;
  color: $color-primary;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
}
</style>
