<template>
  <div class='history-search'>
    <input v-model='searchString' type='text'>

    <lib-button @click='emitEvent'>
      Найти
    </lib-button>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from '@nuxtjs/composition-api';
import LibButton from '~/components/lib/lib-button/LibButton.vue';

export default defineComponent({
  name: 'HistorySearch',
  components: { LibButton },
  setup(_, { emit }) {
    const searchString = ref('');
    const emitEvent = () => emit('search', searchString.value);

    return {
      searchString,
      emitEvent,
    };
  }
});
</script>

<style lang='scss' scoped>
.history-search {
  display: flex;

  input {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }

  .lib-button {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
}
</style>
