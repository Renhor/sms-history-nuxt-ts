<template>
  <div>
    123
  </div>
</template>

<script lang="ts">
import { defineComponent, useStore, onBeforeMount, computed } from '@nuxtjs/composition-api';
import { rootKey } from '~/store';

export default defineComponent({
  layout: 'Default',
  setup() {
    const store = useStore(rootKey);
    const history = computed(() => store.getters.history);

    onBeforeMount(() => {
      store.dispatch('loadHistory');
    });

    return {
      history,
    };
  }
});
</script>
