<template>
  <div class='main-container'>
    <slot />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'MainContainer'
})
</script>

<style lang='scss'>
.main-container {
  width: 100%;
  margin: 0 auto;

  @media all and (max-width: $container-breakpoint) {
    margin: 0 $container-max-width-padding;
    width: auto;
  }

  @include breakpoint('medium') {
    max-width: $container-max-width;
  }
}
</style>
