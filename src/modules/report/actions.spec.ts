import { actions } from './actions'
import { ActionContext, Commit, Dispatch } from 'vuex'
import { getDefaultState, IReportState } from './state'
import { IRootState } from '@/interfaces'
import reportJSON from '../../../reports.json';

describe('file `modules/Report/actions.ts`', () => {
  let testContext: ActionContext<IReportState, IRootState>

  const rootState = {
    report: {
      report: []
    },
  } as IRootState

  beforeEach(() => {
    testContext = {
      rootState,
      dispatch: jest.fn() as Dispatch,
      commit: jest.fn() as Commit,
      state: getDefaultState()
    } as ActionContext<IReportState, IRootState>
  })

  describe('method `fetchReport`', () => {
    it('should commit report', async () => {
      await actions.fetchReport(testContext);
      expect(testContext.commit).toHaveBeenCalledWith('SET_REPORT', reportJSON);
    });
  })
})
