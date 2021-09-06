import { ActionTree } from 'vuex';
import { RootState } from '~/store/state';
import { HistoryService } from '~/service';

const service = new HistoryService();
const localStorageKey = 'state';

export type SavedState = Pick<
  RootState,
  'operationType' | 'searchString' | 'history' | 'initialPage'
>;

export const actions: ActionTree<RootState, RootState> = {
  async loadHistory({ commit, dispatch }) {
    const saved: SavedState | null = await dispatch('loadFromStorage');

    if (!saved) {
      const history = service.getList();

      commit('SET_HISTORY', history);

      return;
    }

    commit('SET_SEARCH_STRING', saved.searchString);
    commit('SET_HISTORY', saved.history);
    commit('SET_FILTER', saved.operationType);
    commit('SET_INITIAL_PAGE', saved.initialPage);
  },

  saveToStorage({ state }) {
    const toSave: Partial<RootState> = {
      operationType: state.operationType,
      searchString: state.searchString,
      history: state.history,
      initialPage: state.initialPage,
    };

    localStorage.setItem(localStorageKey, JSON.stringify(toSave));
  },

  loadFromStorage(): SavedState | null {
    const savedState = localStorage.getItem(localStorageKey);

    return savedState ? JSON.parse(savedState) : null;
  },
};

export default actions;
