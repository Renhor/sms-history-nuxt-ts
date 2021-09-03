<template>
  <main class='layout-main --default'>
    <slot />
  </main>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'DefaultLayoutMain'
})
</script>

<style scoped lang='scss'>
.layout-main.--default {
  flex: 1 1 300px;
  height: 100%;
  overflow-y: scroll;
  padding: 50px;

  @include breakpoint('medium') {
    width: 100%;
    padding: 40px 0 0;
    overflow: hidden;
    height: auto;
  }
}
</style>
