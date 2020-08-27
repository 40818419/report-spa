import { IReport, IReportState } from './state';

export const mutations = {
  SET_ERROR: (state: IReportState, error: Error) => {
    state.error = error;
  },
  SET_REPORT: (state: IReportState, report: IReport[]) => {
    state.report = report;
  },
};
