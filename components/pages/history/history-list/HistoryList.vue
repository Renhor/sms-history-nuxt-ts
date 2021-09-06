<template>
  <LibBlock class='history-list'>
    <HistoryRowHeader />

    <HistoryListItem
      v-for='item in currentList'
      :key='item.id'
      :item='item'
    />

    <LibPagination
      v-if='list.length'
      :initial-page='initialPage'
      :total-pages='totalPages'
      @changePage='setPage'
    />
  </LibBlock>
</template>

<script lang='ts'>
import { defineComponent, PropType, toRefs } from '@nuxtjs/composition-api';
import LibBlock from '~/components/lib/lib-block/LibBlock.vue';
import { IHistory } from '~/store/types';
import HistoryRowHeader from '~/components/pages/history/history-list/HistoryRowHeader.vue';
import HistoryListItem from '~/components/pages/history/history-list/HistoryListItem.vue';
import LibPagination from '~/components/lib/lib-pagination/LibPagination.vue';
import { usePagination } from '~/components/lib/lib-pagination/usePagination';

export default defineComponent({
  name: 'HistoryList',
  components: { LibPagination, HistoryListItem, HistoryRowHeader, LibBlock },
  props: {
    list: {
      type: Array as PropType<IHistory>,
      default: () => []
    }
  },
  setup(props) {
    const { list } = toRefs(props);
    const initialPage = 1;

    const { currentList, totalPages, setPage } = usePagination<IHistory>({
      initialPage,
      perPage: 5,
      list,
    });

    return {
      initialPage,
      currentList,
      totalPages,
      setPage,
    };
  }
});
</script>

<style lang='scss'>
.history-list {
  display: flex;
  flex-direction: column;

  @include breakpoint('small') {
    padding-top: 0;
    margin: 0 -20px;

    .history-row.--header {
      display: none;
    }
  }

  .lib-pagination {
    margin: 25px auto 0;
  }
}
</style>
