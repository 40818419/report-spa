import { Module } from 'vuex';
import { IRootState } from '@/interfaces';
import { IReportState, getDefaultState } from './state';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

export const report: Module<IReportState, IRootState> = {
  actions,
  getters,
  mutations,
  namespaced: true,
  state: getDefaultState(),
};
