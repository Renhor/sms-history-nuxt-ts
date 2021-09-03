<template>
  <span v-if='shouldShow' class='notification-counter'>
    {{ amount }}
  </span>
</template>

<script lang='ts'>
import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'NotificationCounter',
  props: {
    amount: {
      type: Number,
      required: true
    },
    showOnZero: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    const { amount, showOnZero } = toRefs(props)
    const shouldShow = computed(() => {
      return showOnZero ? true : Boolean(amount)
    })

    return {
      shouldShow
    }
  }
})
</script>

<style scoped lang='scss'>
.notification-counter {
  background: $color-red;
  color: $color-text--white;
  border-radius: $radius-block--default;
  text-decoration: none;
  padding: 1px 9px 1px 7px;
}
</style>
