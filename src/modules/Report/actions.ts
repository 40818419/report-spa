import { ActionContext } from 'vuex';
import { IRootState } from '@/interfaces';
import { IReportState } from './state';
import reportJSON from '../../../reports.json';

export const actions = {
  async fetchReport({ commit }: ActionContext<IReportState, IRootState>): Promise<void> {
    try {
      commit('SET_REPORT', reportJSON);
    } catch (error) {
      commit('SET_ERROR', error);
    }
  },
};
