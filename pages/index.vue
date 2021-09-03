<template>
  <div class='page --home'>
    <MainContainer>
      <LibHeading variant='h1'>
        История СМС
      </LibHeading>
    </MainContainer>
  </div>
</template>

<script lang="ts">
import { defineComponent, useStore, onBeforeMount, computed } from '@nuxtjs/composition-api'
import { rootKey } from '~/store'
import LibHeading from '~/components/lib/lib-heading/LibHeading.vue'
import MainContainer from '~/components/containers/main-container/MainContainer.vue'

export default defineComponent({
  components: { MainContainer, LibHeading },
  layout: 'Default',
  setup() {
    const store = useStore(rootKey)
    const history = computed(() => store.getters.history)

    onBeforeMount(() => {
      store.dispatch('loadHistory')
    })

    return {
      history,
    }
  }
})
</script>
