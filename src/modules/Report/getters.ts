import { IReportState } from './state';

export const getters = {
  getReport(state: IReportState) {
    return state.report;
  },
  getError(state: IReportState) {
    return state.error;
  },
};
