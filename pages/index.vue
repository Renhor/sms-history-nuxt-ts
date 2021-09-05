<template>
  <div class='page --home'>
    <MainContainer>
      <LibHeading class='page-heading' variant='h1'>
        История СМС
      </LibHeading>

      <div class='row'>
        <HistoryFilter />

        <div class='col'>
          <HistorySearch @search='onSearch' />

          <HistoryList :list='filteredHistory' />
        </div>
      </div>

    </MainContainer>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, computed } from '@nuxtjs/composition-api';
import LibHeading from '~/components/lib/lib-heading/LibHeading.vue';
import MainContainer from '~/components/containers/main-container/MainContainer.vue';
import { useBaseStore } from '~/store';
import HistoryFilter from '~/components/pages/history/history-filter/HistoryFilter.vue';
import HistorySearch from '~/components/pages/history/history-search/HistorySearch.vue';
import HistoryList from '~/components/pages/history/history-list/HistoryList.vue';

export default defineComponent({
  components: { HistoryList, HistorySearch, HistoryFilter, MainContainer, LibHeading },
  layout: 'Default',
  setup() {
    const store = useBaseStore();
    const filteredHistory = computed(() => store.getters.filteredHistory);

    onBeforeMount(() => {
      store.dispatch('loadHistory');
    });

    const onSearch = (newString: string) => {
      store.commit('SET_SEARCH_STRING', newString);
    };

    return {
      filteredHistory,
      onSearch
    };
  }
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
