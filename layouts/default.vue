<template>
  <div class='layout --default'>
    <AppSidebar />

    <DefaultLayoutMain>
      <Nuxt />
    </DefaultLayoutMain>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api';
import DefaultLayoutMain from '~/components/layout/default/DefaultLayoutMain.vue';
import AppSidebar from '~/components/app/app-sidebar/AppSidebar.vue';

export default defineComponent({
  name: 'Default',
  components: { AppSidebar, DefaultLayoutMain }
});
</script>

<style>

</style>
