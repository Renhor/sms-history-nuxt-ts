<template>
  <section class='lib-block'>
    <slot />
  </section>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'LibBlock'
});
</script>

<style lang='scss'>

</style>
