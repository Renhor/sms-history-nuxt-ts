<template>
  <LibBlock class='history-list'>
    <HistoryRowHeader />

    <HistoryListItem
      v-for='item in list'
      :key='itemHash(item)'
      :item='item'
    />
  </LibBlock>
</template>

<script lang='ts'>
import { defineComponent, PropType } from '@nuxtjs/composition-api';
import LibBlock from '~/components/lib/lib-block/LibBlock.vue';
import { IHistory, IHistoryItem } from '~/store/types';
import HistoryRowHeader from '~/components/pages/history/history-list/HistoryRowHeader.vue';
import HistoryListItem from '~/components/pages/history/history-list/HistoryListItem.vue';

export default defineComponent({
  name: 'HistoryList',
  components: { HistoryListItem, HistoryRowHeader, LibBlock },
  props: {
    list: {
      type: Array as PropType<IHistory>,
      default: () => []
    }
  },
  setup() {
    const itemHash = (item: IHistoryItem): string => {
      return item.number + '' + item.date;
    };

    return {
      itemHash
    };
  }
});
</script>

<style lang='scss'>
.history-list {
  @include breakpoint('small') {
    padding-top: 0;
    margin: 0 -20px;

    .history-row.--header {
      display: none;
    }
  }
}
</style>
