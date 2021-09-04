<template>
  <ul class='sidebar-menu'>
    <SidebarMenuItem to='/' text='История СМС'>
      <template #prefix>
        <SvgCalendar />
      </template>
    </SidebarMenuItem>

    <SidebarMenuItem to='/notifications' text='Уведомления'>
      <template #prefix>
        <SvgBell />
      </template>

      <template #postfix>
        <NotificationCounter :amount='15' />
      </template>
    </SidebarMenuItem>
  </ul>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api';
import SidebarMenuItem from '~/components/app/app-sidebar/SidebarMenuItem.vue';
import NotificationCounter from '~/components/app/notifications/NotificationCounter.vue';
import SvgBell from '~/assets/images/svg/bell.svg?inline';
import SvgCalendar from '~/assets/images/svg/calendar.svg?inline';

export default defineComponent({
  name: 'SidebarMenu',
  components: { NotificationCounter, SidebarMenuItem, SvgBell, SvgCalendar }
});
</script>

<style scoped lang='scss'>
.sidebar-menu {
  margin: 0 (-$sidebar-padding--horizontal);
  padding: 0 $sidebar-padding--horizontal;
  overflow: hidden;

  .notification-counter {
    margin-left: 15px;
  }
}
</style>
