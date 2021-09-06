<template>
  <HistoryRow class='--item'>
    <template #site>
      <VendorSite :vendor-name='item.site' />
    </template>

    <template #number>
      <PhoneNumber :number='item.number' />
    </template>

    <template #message>
      {{ croppedMessage }}
    </template>

    <template #date>
      {{ item.date }}
    </template>

    <template #copy>
      <SvgCopy class='copy-btn' @click='copyMessage' />
    </template>
  </HistoryRow>
</template>

<script lang='ts'>
import { computed, defineComponent, PropType, toRefs } from '@nuxtjs/composition-api';
import { IHistoryItem } from '~/store/types';
import HistoryRow from '~/components/pages/history/history-list/HistoryRow.vue';
import PhoneNumber from '~/components/app/phone-number/PhoneNumber.vue';
import VendorSite from '~/components/app/vendor-site/VendorSite.vue';
import { copyToBuffer, cropString } from '~/utils';
import SvgCopy from '~/assets/images/svg/edit.svg?inline';

export default defineComponent({
  name: 'HistoryListItem',
  components: { VendorSite, PhoneNumber, HistoryRow, SvgCopy },
  props: {
    item: {
      type: Object as PropType<IHistoryItem>,
      required: true,
    },
  },
  setup(props) {
    const { item } = toRefs(props);
    const croppedMessage = computed(() => cropString(item.value.message, 150));

    const copyMessage = () => copyToBuffer(item.value.message);

    return {
      croppedMessage,
      copyMessage,
    };
  },
});
</script>

<style lang='scss'>
.history-row.--item {
  svg {
    cursor: pointer;
  }

  .phone-number_number {
    @include breakpoint('small') {
      font-size: $font-size--big;
      font-weight: bold;
    }
  }
}
</style>
