<template>
  <LibBlock class='history-filter'>
    <LibHeading variant='h3'>
      Фильтры
    </LibHeading>

    <p>Тип операции:</p>

    <select>
      <option>
        Все операции
      </option>
    </select>
  </LibBlock>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api';
import LibBlock from '~/components/lib/lib-block/LibBlock.vue';
import LibHeading from '~/components/lib/lib-heading/LibHeading.vue';

export default defineComponent({
  name: 'HistoryFilter',
  components: { LibHeading, LibBlock }
});
</script>

<style lang='scss'>
.history-filter {
  .lib-heading {
    display: none;
    margin-bottom: 20px;

    @include breakpoint('small') {
      display: block;
    }
  }

  p {
    margin-bottom: 15px;
  }
}
</style>
