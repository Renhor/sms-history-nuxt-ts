import { GetterTree } from 'vuex'
import { RootState } from '~/store/state'

export const getters: GetterTree<RootState, RootState> = {
  history: (state) => state.history,
  balance: (state) => state.balance
}

export default getters
