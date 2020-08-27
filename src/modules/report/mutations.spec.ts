import { mutations } from './mutations';
import { IReportState } from './state';
import reportJSON from '../../../reports.json';

describe('file `modules/report/mutations.ts`', () => {
  const state: IReportState = {
    report: reportJSON
  }

  it('should set report', () => {
    mutations.SET_REPORT(state, reportJSON)
    expect(state.report).toBe(reportJSON)
  })
})
