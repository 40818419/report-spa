import { ActionContext } from 'vuex';
import { IRootState } from '@/interfaces';
import { IReportState } from './state';
import reportJSON from '../../../reports.json';

export const actions = {
  async fetchReport({ commit }: ActionContext<IReportState, IRootState>): Promise<void> {
    commit('SET_REPORT', reportJSON);
  },
};
