<template>
  <NuxtLink class='sidebar-menu-link' :to='to'>
    <li class='sidebar-menu-item'>
      <p class='sidebar-menu-item_content'>
        <slot name='prefix' />
        <span class='sidebar-menu-item_text'>
          {{ text }}
        </span>
        <slot name='postfix' />
      </p>
    </li>
  </NuxtLink>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'SidebarMenuItem',
  props: {
    to: {
      type: String,
      required: true
    },
    text: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped lang='scss'>
.sidebar-menu-link {
  text-decoration: none;

  &.nuxt-link-exact-active {
    .sidebar-menu-item::before {
      opacity: 1;
    }
  }
}

.sidebar-menu-item {
  padding: 12px 0;
  min-height: 44px;
  position: relative;
  color: $color-text--white;
  font-size: $font-size--bigger;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 150%;
    height: 100%;
    background-color: $color-green;
    opacity: 0;
  }
}

.sidebar-menu-item_content {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
}

.sidebar-menu-item_text {
  margin-left: 15px;
}
</style>
