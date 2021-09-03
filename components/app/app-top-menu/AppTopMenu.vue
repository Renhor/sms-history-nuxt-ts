<template>
  <div class='app-top-menu'>
    <MainContainer>
      <HamburgerButton />

      <AppLogo size='medium' />

      <AppBalance :balance='balance' />

      <strong class='app-top-menu_balance'>
        {{ formattedBalance }}
      </strong>
    </MainContainer>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent } from '@nuxtjs/composition-api'
import AppBalance from '~/components/app/app-balance/AppBalance.vue'
import AppLogo from '~/components/app/app-logo/AppLogo.vue'
import MainContainer from '~/components/containers/main-container/MainContainer.vue'
import { formatNumber } from '~/utils'
import HamburgerButton from '~/components/app/app-top-menu/HamburgerButton.vue'
import { useBaseStore } from '~/store'

export default defineComponent({
  name: 'AppTopMenu',
  components: { HamburgerButton, MainContainer, AppLogo, AppBalance },
  setup() {
    const store = useBaseStore()
    const balance = computed(() => store.getters.balance)
    const formattedBalance = computed(() => formatNumber(store.getters.balance.actual))

    return {
      balance,
      formattedBalance
    }
  }
})
</script>

<style scoped lang='scss'>
.app-top-menu {
  background-color: $color-primary;
  padding: 20px 0;
  width: 100%;

  .main-container {
    position: relative;
    display: flex;
    align-items: center;
  }

  .app-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .app-balance {
    margin-left: auto;

    @include breakpoint('small') {
      display: none;
    }
  }

  .hamburger-button {
    margin-right: auto;
  }
}

.app-top-menu_balance {
  display: none;
  margin-left: auto;
  font-weight: bold;
  font-size: $font-size--bigger;
  color: $color-text--white;

  @include breakpoint('small') {
    display: block;
  }
}
</style>
