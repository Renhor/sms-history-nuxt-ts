import { InjectionKey } from '@nuxtjs/composition-api'
import { Store } from 'vuex'
import { RootState } from '~/store/state'

export const rootKey: InjectionKey<Store<RootState>> = Symbol('')
