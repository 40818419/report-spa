import { IReport, IReportState } from './state';

export const mutations = {
  SET_ERROR: (state: IReportState, error: Error) => {
    state.error = error;
  },
  SET_IS_LOADING: (state: IReportState, isLoading: boolean) => {
    state.isLoading = isLoading;
  },
  SET_REPORT: (state: IReportState, report: IReport[]) => {
    state.report = report;
  },
};
