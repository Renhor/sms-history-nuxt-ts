<template>
  <li class='lib-pagination_row-item'>
    <LibButton
      size='slim'
      :class='className'
      :variant='variant'
      :text='text'
      @click='emitClick'
    />
  </li>
</template>

<script lang='ts'>
import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api';
import LibButton from '~/components/lib/lib-button/LibButton.vue';

export default defineComponent({
  name: 'LibPaginationItem',
  components: { LibButton },
  props: {
    page: {
      type: Number,
      default: null,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    const { page, currentPage } = toRefs(props);

    const variant = computed(() => currentPage.value === page.value ? 'primary' : 'secondary');

    const emitClick = () => emit('click', page.value);

    const text = computed(() => {
      return page.value ?? '...';
    });
    const className = computed(() => {
      return page.value ? '' : '--pagination-null';
    });

    return {
      emitClick,
      variant,
      className,
      text,
    };
  },
});
</script>

<style lang='scss'>

</style>
