<template>
  <div class='vendor-site'>
    <img src='~assets/images/icons/avito.png' alt='Avito ico'>
    <span> {{ formattedName }} </span>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, PropType, toRefs } from '@nuxtjs/composition-api';
import { Sites } from '~/types';

export default defineComponent({
  name: 'VendorSite',
  props: {
    vendorName: {
      type: String as PropType<Sites>,
      required: true,
    }
  },
  setup(props) {
    const { vendorName } = toRefs(props);
    const formattedName = computed(() => {
      switch (vendorName.value) {
        case 'avito': return 'Avito';
        case 'OK': return 'Одноклкассники';
        case 'yandex': return 'Яндекс';
      }
    });

    return {
      formattedName
    };
  }
});
</script>

<style lang='scss'>
.vendor-site {
  display: flex;
  align-items: center;

  span {
    margin-left: 7px;
  }
}
</style>
