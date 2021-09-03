<template>
  <main class='layout-main'>
    <slot />
  </main>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'DefaultLayoutMain'
})
</script>

<style scoped>
.layout-main {
  flex: 1 1 300px;
  height: 100%;
  overflow-y: scroll;
}
</style>
