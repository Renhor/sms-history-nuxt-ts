<template>
  <div class='phone-number'>
    <img src='~assets/images/icons/russia.png' alt='Russia ico'>
    <span>{{ formatted }}</span>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api';
import { formatPhoneNumber } from '~/utils';

export default defineComponent({
  name: 'PhoneNumber',
  props: {
    number: {
      type: Number,
      required: true,
    }
  },
  setup(props) {
    const { number } = toRefs(props);
    const formatted = computed(() => formatPhoneNumber(`+${number.value}`));

    return {
      formatted,
    };
  }
});
</script>

<style lang='scss' scoped>
.phone-number {
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
  }
}
</style>
