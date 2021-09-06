<template>
  <div class='page --home'>
    <MainContainer>
      <LibHeading class='page-heading' variant='h1'>
        История СМС
      </LibHeading>

      <div class='row'>
        <HistoryFilter :selected='filter' @filter='onFilter' />

        <div class='col'>
          <HistorySearch @search='onSearch' />

          <ClientOnly>
            <HistoryList
              :initial-page='initialPage'
              :list='filteredHistory'
              @pageChanged='onPageChange'
            />
          </ClientOnly>
        </div>
      </div>

    </MainContainer>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, onBeforeMount } from '@nuxtjs/composition-api';
import LibHeading from '~/components/lib/lib-heading/LibHeading.vue';
import MainContainer from '~/components/containers/main-container/MainContainer.vue';
import { useBaseStore } from '~/store';
import HistoryFilter from '~/components/pages/history/history-filter/HistoryFilter.vue';
import HistorySearch from '~/components/pages/history/history-search/HistorySearch.vue';
import HistoryList from '~/components/pages/history/history-list/HistoryList.vue';
import { OperationType } from '~/store/types';

export default defineComponent({
  components: { HistoryList, HistorySearch, HistoryFilter, MainContainer, LibHeading },
  layout: 'Default',
  setup() {
    const store = useBaseStore();
    const filteredHistory = computed(() => store.getters.filteredHistory);
    const filter = computed(() => store.getters.operationType);
    const initialPage = computed(() => store.getters.initialPage);

    onBeforeMount(() => {
      store.dispatch('loadHistory');
    });

    const onSearch = (newString: string) => {
      store.commit('SET_SEARCH_STRING', newString);
      store.commit('SET_INITIAL_PAGE', 1);
    };

    const onFilter = (type: OperationType) => {
      store.commit('SET_FILTER', type);
      store.commit('SET_INITIAL_PAGE', 1);
    };

    const onPageChange = (page: number) => {
      store.commit('SET_INITIAL_PAGE', page);
    };

    store.subscribe(() => store.dispatch('saveToStorage'));

    return {
      filter,
      initialPage,
      filteredHistory,
      onSearch,
      onFilter,
      onPageChange,
    };
  },
});
</script>

<style lang='scss' scoped>
.page-heading {
  margin-bottom: 30px;
}

.page.--home {
  .row {
    align-items: flex-start;
    display: flex;
    margin: 0 -19px;

    & > * {
      margin: 0 19px;
    }
  }

  .col {
    flex: 1 1 72%;
  }

  .history-filter {
    flex: 1 1 28%;
    min-width: 375px;
  }

  .history-search {
    margin-bottom: 23px;
  }

  @include breakpoint('big') {
    .row {
      flex-direction: column;
    }

    .col,
    .row,
    .history-filter {
      width: 100%;
    }

    .history-filter {
      flex-basis: auto;
    }

    .history-search {
      margin: 30px 0;
    }
  }
}
</style>
