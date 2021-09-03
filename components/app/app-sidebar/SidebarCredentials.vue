<template>
  <div class='sidebar-credentials'>
    <SvgUser />
    <p class='sidebar-credentials_username'>
      {{ croppedName }} <br>
      <small>ID:</small>
      {{ userId }}
    </p>
    <SvgExit />
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api'
import SvgUser from '~/assets/images/svg/user.svg?inline'
import SvgExit from '~/assets/images/svg/exit.svg?inline'
import { cropString } from '~/utils'

export default defineComponent({
  name: 'SidebarCredentials',
  components: { SvgUser, SvgExit },
  props: {
    username: {
      type: String,
      required: true,
    },
    userId: {
      type: [String, Number],
      required: true,
    }
  },
  setup(props) {
    const { username } = toRefs(props)
    const croppedName = computed(() => cropString(username.value, 17))

    return {
      croppedName,
    }
  }
})
</script>

<style scoped lang='scss'>
.sidebar-credentials {
  display: flex;
  align-items: start;

  svg {
    margin-top: -1px;

    &:last-child {
      margin-left: auto;
    }
  }
}

.sidebar-credentials_username {
  margin: 0 13px;
  font-weight: bold;
  font-size: $font-size--bigger;
  line-height: 20px;
  color: $color-text--white;

  small {
    font-weight: 400;
  }
}
</style>
