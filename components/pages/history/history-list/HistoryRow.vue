<template>
  <div class='history-row'>
    <div class='history-row_cell --sites'>
      <slot name='site' />
    </div>

    <div class='history-row_cell --number'>
      <slot name='number' />
    </div>

    <div class='history-row_cell --message'>
      <slot name='message' />
    </div>

    <div class='history-row_cell --date'>
      <slot name='date' />
    </div>

    <div class='history-row_cell --copy'>
      <slot name='copy' />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'HistoryRow',
});
</script>

<style lang='scss'>
.history-row {
  display: flex;
  padding: 20px;
  border-bottom: 1px solid $color-border;
  position: relative;

  @include breakpoint('small') {
    flex-direction: column;
    padding-right: 65px;
  }
}

.history-row_cell {
  font-size: $font-size--default;
  padding-right: 25px;
  line-height: 16px;

  @include breakpoint('small') {
    width: 100% !important;
    padding: 0 0 15px;
  }

  &.--sites {
    width: 20%;
  }

  &.--number {
    width: 20%;

    @include breakpoint('small') {
      order: -1;
    }
  }

  &.--message {
    width: 47%;
    color: $color-text--secondary;
  }

  &.--date {
    width: 13%;
    color: $color-text--minor;

    @include breakpoint('small') {
      padding-bottom: 0;
    }
  }

  &.--copy {
    width: 20px;
    min-width: 20px;

    @include breakpoint('small') {
      position: absolute;
      top: 88px;
      right: 15px;
      width: 20px !important;
      height: 20px;
      padding: 0;
    }
  }
}
</style>
