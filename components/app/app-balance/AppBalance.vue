<template>
  <div class='app-balance'>
    <p class='app-balance_balance'>
      <strong class='app-balance_balance-actual'>
        Баланс: {{ formattedBalance.actual }}
      </strong>

      <span class='app-balance_balance-frozen'>
        Заморожено: {{ formattedBalance.frozen }}
      </span>
    </p>

    <LibButton size='slim'>
      Пополнить
    </LibButton>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, PropType, toRefs } from '@nuxtjs/composition-api'
import { IAppBalance } from '~/components/app/app-balance/types'
import LibButton from '~/components/lib/lib-button/LibButton.vue'
import { formatNumber } from '~/utils'

export default defineComponent({
  name: 'AppBalance',
  components: { LibButton },
  props: {
    balance: {
      type: Object as PropType<IAppBalance>,
      default: () => ({ actual: 0, frozen: 0 })
    },
  },
  setup(props) {
    const { balance } = toRefs(props)
    const formattedBalance = computed(() => ({
      actual: formatNumber(balance.value.actual),
      frozen: formatNumber(balance.value.frozen),
    }))

    return {
      formattedBalance
    }
  }
})
</script>

<style scoped lang='scss'>
.app-balance {
  display: flex;
  justify-content: space-between;

  .button {
    flex-shrink: 0;
  }
}

.app-balance_balance {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: $color-text--white;
  margin-right: 15px;
}

.app-balance_balance-actual {
  font-size: $font-size--bigger;
  font-weight: 700;
}
</style>
