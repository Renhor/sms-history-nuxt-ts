<template>
  <div class='lib-pagination'>
    <ul class='lib-pagination_row'>
      <LibPaginationItem
        :page='1'
        :current-page='currentPage'
        @click='changePage'
      />

      <LibPaginationItem
        v-for='page in middlePages'
        :key='page.page'
        :page='page.page'
        :current-page='currentPage'
        @click='changePage'
      />

      <LibPaginationItem
        v-if='totalPages > 1'
        :page='totalPages'
        :current-page='currentPage'
        @click='changePage'
      />
    </ul>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, ref, toRefs, watch } from '@nuxtjs/composition-api';
import LibPaginationItem from '~/components/lib/lib-pagination/LibPaginationItem.vue';
import { makeRange, rangeFromLength } from '~/utils';

type Page = { page: number | null };

export default defineComponent({
  name: 'LibPagination',
  components: { LibPaginationItem },
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    initialPage: {
      type: Number,
      default: 1,
    }
  },
  setup(props, { emit }) {
    const { totalPages, initialPage } = toRefs(props);
    const currentPage = ref(initialPage.value);

    const changePage = (newPage: number | null) => {
      if (!newPage) return;

      currentPage.value = newPage;

      emit('changePage', newPage);
    };

    const middlePages = computed(() => {
      const pages: Page[] = [];
      const maxButtons = 5; // 1 (.. 4 5 6 ..) 9 - middle buttons inside brackets

      const leftVisible = currentPage.value < maxButtons;
      const rightVisible = totalPages.value - currentPage.value < maxButtons - 1;

      const range = rangeFromLength(maxButtons);

      if (totalPages.value <= 2) {
        return [];
      } else if (totalPages.value > 2 && totalPages.value <= maxButtons + 2) {
        return makeRange(2, totalPages.value - 1).map((val) => ({ page: val }));
      }

      if (leftVisible || rightVisible) {
        for (let i = 1; i <= maxButtons; i++) {
          pages.push({
            page: leftVisible
              ? i + 1
              : totalPages.value - maxButtons - 1 + i,
          });
        }

        if (leftVisible) {
          pages[pages.length - 1].page = null;
        } else {
          pages[0].page = null;
        }
      } else {
        pages.push(...range.map((number, idx, items) => {
          const isFirst = idx === 0;
          const isLast = idx + 1 === items.length;

          return {
            page: isFirst || isLast ? null : currentPage.value + number,
          };
        }));
      }

      return pages;
    });

    watch(totalPages, () => {
      currentPage.value = initialPage.value;
    });

    return {
      middlePages,
      currentPage,
      changePage,
    };
  },
});
</script>

<style lang='scss'>

</style>
