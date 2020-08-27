import { IReportState } from './state';

export const getters = {
  getReport(state: IReportState) {
    return state.report;
  },
};
