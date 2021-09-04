<template>
  <div class='hamburger-button'>
    <span class='hamburger-button_line --top'></span>
    <span class='hamburger-button_line --middle'></span>
    <span class='hamburger-button_line --bottom'></span>
    <span class='hamburger-button_notification-indicator'></span>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'HamburgerButton'
});
</script>

<style scoped lang='scss'>
.hamburger-button {
  width: 33px;
  height: 23px;
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
  cursor: pointer;
}

.hamburger-button_line {
  height: 3px;
  background-color: $color-white;
  margin-bottom: 5px;
  display: block;

  &.--top {
    margin-top: 3px;
    width: 21px;
  }

  &.--middle {
    width: 28px;
  }

  &.--bottom {
    width: 14px;
  }
}

.hamburger-button_notification-indicator {
  display: block;
  background-color: $color-red;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
}
</style>
