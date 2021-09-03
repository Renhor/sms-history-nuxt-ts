<template>
  <div class='app-sidebar'>
    <AppLogo size='big' />

    <AppBalance :balance='balance' />

    <SidebarMenu />

    <SidebarCredentials user-id='1234567' username='Константин Александрович' />
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent } from '@nuxtjs/composition-api'
import AppLogo from '~/components/app/app-logo/AppLogo.vue'
import AppBalance from '~/components/app/app-balance/AppBalance.vue'
import SidebarMenu from '~/components/app/app-sidebar/SidebarMenu.vue'
import SidebarCredentials from '~/components/app/app-sidebar/SidebarCredentials.vue'
import { useBaseStore } from '~/store'

export default defineComponent({
  name: 'AppSidebar',
  components: { SidebarCredentials, SidebarMenu, AppBalance, AppLogo },
  setup() {
    const store = useBaseStore()
    const balance = computed(() => store.getters.balance)

    return {
      balance
    }
  }
})
</script>

<style scoped lang='scss'>
.app-sidebar {
  display: flex;
  flex-direction: column;
  flex: 0 0 310px;
  height: 100vh;
  background: $color-primary;
  padding: 40px $sidebar-padding--horizontal 80px;

  .app-logo {
    margin-bottom: 40px;
  }

  .app-balance {
    margin-bottom: 32px;
  }

  .sidebar-credentials {
    margin-top: auto;
  }
}
</style>
