<template>
  <div :class='className'>
    <SvgLogo />
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api';
import SvgLogo from '~/assets/images/svg/logo.svg?inline';

export default defineComponent({
  name: 'AppLogo',
  components: { SvgLogo },
  props: {
    size: {
      type: String,
      validate: (prop: string) => ['big', 'medium'].includes(prop),
      default: 'medium',
    }
  },
  setup(props) {
    const { size } = toRefs(props);
    const className = computed(() => [
      'app-logo',
      `--${size.value}`
    ]);

    return {
      className
    };
  }
});
</script>

<style scoped lang='scss'>
.app-logo {
  &.--big {
    svg {
      width: 169px;
      height: 40px;
    }
  }
}
</style>
