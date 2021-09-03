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
import { defineComponent, onBeforeMount, computed } from '@nuxtjs/composition-api'
import LibHeading from '~/components/lib/lib-heading/LibHeading.vue'
import MainContainer from '~/components/containers/main-container/MainContainer.vue'
import { useBaseStore } from '~/store'

export default defineComponent({
  components: { MainContainer, LibHeading },
  layout: 'Default',
  setup() {
    const store = useBaseStore()
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
