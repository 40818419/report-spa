import { IReportState } from './state';

export const getters = {
  getReport(state: IReportState) {
    return state.report;
  },
  getIsLoading(state: IReportState) {
    return state.isLoading;
  },
  getError(state: IReportState) {
    return state.error;
  },
};
