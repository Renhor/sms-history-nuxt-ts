import { InjectionKey, useStore } from '@nuxtjs/composition-api'
import { Store } from 'vuex'
import { RootState } from '~/store/state'

export const rootKey: InjectionKey<Store<RootState>> = Symbol('')

export const useBaseStore = () => {
  return useStore(rootKey)
}
