<template>
  <main class='layout-main'>
    <slot />
  </main>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'DefaultLayoutMain'
});
</script>

<style>

</style>
