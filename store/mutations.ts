import { MutationTree } from 'vuex';
import { RootState } from '~/store/state';
import { OperationType } from '~/store/types';

export const mutations: MutationTree<RootState> = {
  SET_HISTORY(state, history) {
    state.history = history;
  },
  CLEAR_HISTORY(state) {
    state.history = [];
  },

  SET_INITIAL_PAGE(state, page: number) {
    state.initialPage = page;
  },

  SET_SEARCH_STRING(state, string: string) {
    state.searchString = string;
  },

  SET_FILTER(state, type: OperationType) {
    state.operationType = type;
  }
};

export default mutations;
