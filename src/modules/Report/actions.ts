import { ActionContext } from 'vuex';
import { IRootState } from '@/interfaces';
import { IReportState } from './state';
import reportJSON from '../../../reports.json';

export const actions = {
  async fetchReport({ commit }: ActionContext<IReportState, IRootState>): Promise<void> {
    await commit('SET_IS_LOADING', true);
    try {
      commit('SET_REPORT', reportJSON);
    } catch (error) {
      commit('SET_ERROR', error);
    }
    await commit('SET_IS_LOADING', false);
  },
};
