import { MutationTree } from 'vuex';
import { RootState } from '~/store/state';

export const mutations: MutationTree<RootState> = {
  SET_HISTORY(state, history) {
    state.history = history;
  },
  CLEAR_HISTORY(state) {
    state.history = [];
  }
};

export default mutations;
