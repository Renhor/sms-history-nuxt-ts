import { GetterTree } from 'vuex';
import { RootState } from '~/store/state';

export const getters: GetterTree<RootState, RootState> = {
  history: (state) => state.history,
  searchString: (state) => state.searchString,
  balance: (state) => state.balance,

  filteredHistory: (state) => {
    if (!state.searchString) return state.history;

    return state.history.filter((item) => {
      return (
        item.message.includes(state.searchString) ||
        item.number.toString().includes(state.searchString.replace(/\D/g, ''))
      );
    });
  },
};

export default getters;
