<template>
  <component :is='variant' class='lib-heading'>
    <slot />
  </component>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'LibHeading',
  props: {
    variant: {
      type: String,
      validation: (prop: string) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(prop),
      default: 'h2'
    }
  },
  setup() {
    return {

    }
  }
})
</script>

<style lang='scss'>

</style>
