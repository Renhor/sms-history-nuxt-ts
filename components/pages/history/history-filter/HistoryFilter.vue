<template>
  <LibBlock class='history-filter'>
    <LibHeading variant='h3'>
      Фильтры
    </LibHeading>

    <p>Тип операции:</p>

    <select @change='onChange'>
      <option
        v-for='option in options'
        :key='option.value'
        :value='option.value'
        :selected='value === option.value'
      >
        {{ option.text }}
      </option>
    </select>
  </LibBlock>
</template>

<script lang='ts'>
import { computed, defineComponent, PropType, ref, toRefs } from '@nuxtjs/composition-api';
import LibBlock from '~/components/lib/lib-block/LibBlock.vue';
import LibHeading from '~/components/lib/lib-heading/LibHeading.vue';
import { OperationType } from '~/store/types';

export default defineComponent({
  name: 'HistoryFilter',
  components: { LibHeading, LibBlock },
  props: {
    selected: {
      type: String as PropType<OperationType>,
      default: 'all',
    },
  },
  setup(props, { emit }) {
    const { selected } = toRefs(props);
    const innerValue = ref(selected.value);
    const value = computed(() =>  selected.value || innerValue.value);

    const options = makeSelectOptions();
    const onChange = (e: Event) => {
      innerValue.value = e.target.value;

      emit('filter', e.target.value);
    };

    return {
      value,
      options,
      onChange,
    };
  },
});

function makeSelectOptions(): { value: OperationType, text: string }[] {
  return [
    {
      value: 'all',
      text: 'Все операции',
    },
    {
      value: 'message',
      text: 'Сообщения',
    },
    {
      value: 'not-message',
      text: 'Не сообщения',
    },
  ];
}
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
