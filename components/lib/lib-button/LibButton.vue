<template>
  <button :class='className' @click='$emit("click")'>
    <slot />
  </button>
</template>

<script lang='ts'>
import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'LibButton',
  props: {
    variant: {
      type: String,
      validate: (prop: string) => ['primary'].includes(prop),
      default: 'primary'
    },
    size: {
      type: String,
      validate: (prop: string) => ['wide', 'slim'].includes(prop),
      default: 'wide'
    }
  },
  setup(props) {
    const { variant, size } = toRefs(props)
    const className = computed(() => [
      'lib-button',
      `--${variant.value}`,
      `--${size.value}`
    ])

    return {
      className
    }
  }
})
</script>

<style lang='scss'>

</style>
