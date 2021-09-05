<template>
  <HistoryRow class='--header'>
    <template #site>
      Сайты/Приложения
    </template>

    <template #number>
      Номер
    </template>

    <template #message>
      Текст сообщения
    </template>

    <template #date>
      Дата
    </template>
  </HistoryRow>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api';
import HistoryRow from '~/components/pages/history/history-list/HistoryRow.vue';

export default defineComponent({
  name: 'HistoryRowHeader',
  components: { HistoryRow },
});
</script>

<style lang='scss' >
.history-row.--header  {
  border-bottom: none;

  .history-row_cell {
    &.--message,
    &.--date {
      color: $color-text--default !important;
    }
  }
}
</style>
