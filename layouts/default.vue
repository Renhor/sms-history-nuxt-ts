<template>
  <div class='layout --default'>
    <AppSidebar />

    <AppTopMenu />

    <DefaultLayoutMain>
      <Nuxt />
    </DefaultLayoutMain>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api';
import DefaultLayoutMain from '~/components/layout/default/DefaultLayoutMain.vue';
import AppSidebar from '~/components/app/app-sidebar/AppSidebar.vue';
import AppTopMenu from '~/components/app/app-top-menu/AppTopMenu.vue';

export default defineComponent({
  name: 'Default',
  components: { AppTopMenu, AppSidebar, DefaultLayoutMain }
});
</script>

<style scoped lang='scss'>
.layout.--default {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;

  .app-top-menu {
    display: none;
  }

  @include breakpoint('medium') {
    display: block;
    overflow: auto;

    .app-sidebar {
      display: none;
    }

    .app-top-menu {
      display: block;
    }
  }
}
</style>
