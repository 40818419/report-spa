import { IReport, IReportState } from './state';

export const mutations = {
  SET_REPORT: (state: IReportState, report: IReport[]) => {
    state.report = report;
  },
};
