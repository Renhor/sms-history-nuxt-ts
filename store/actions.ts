import { ActionTree } from 'vuex';
import { RootState } from '~/store/state';
import { HistoryService } from '~/service';

const service = new HistoryService();

export const actions: ActionTree<RootState, RootState> = {
  loadHistory({ commit }) {
    const history = service.getList();

    commit('SET_HISTORY', history);
  },
};

export default actions;
