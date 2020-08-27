import { getters } from './getters'
import { IReportState } from './state'
import reportJSON from '../../../reports.json';

describe('file `modules/report/getters.ts`', () => {
  const state: IReportState = {
    report: reportJSON
  }

  it('should get report', () => {
    expect(getters.getReport(state)).toEqual(reportJSON)
  })
})
