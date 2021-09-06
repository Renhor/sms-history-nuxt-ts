import { GetterTree } from 'vuex';
import { RootState } from '~/store/state';

export const getters: GetterTree<RootState, RootState> = {
  history: (state) => state.history,
  searchString: (state) => state.searchString,
  operationType: (state) => state.operationType,
  balance: (state) => state.balance,
  initialPage: (state) => state.initialPage,

  filteredHistory: (state) => {
    const { searchString, operationType, history } = state;
    let filtered = history.slice();

    if (searchString) {
      filtered = filtered.filter((item) => {
        return (
          item.message.includes(searchString) ||
          item.number.toString().includes(searchString.replace(/\D/g, ''))
        );
      });
    }

    if (operationType !== 'all') {
      filtered = filtered.filter((item) => item.type === operationType);
    }

    return filtered;
  },
};

export default getters;
