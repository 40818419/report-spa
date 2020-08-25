export enum type {
  Extended = 'extended',
  Intermediate = 'intermediate',
  Primary = 'primary'
}

export interface IReport {
  'uuid': string;
  'body': {
    'bankName': string;
    'bankBIC': string[];
    'reportScore': number;
    'type': type;
  };
  'createdAt': string;
  'publishedAt': string;
}

export interface IReportState {
  error: Error | null;
  isLoading: boolean;
  report: IReport[];
}

export const getDefaultState = (): IReportState => ({
  error: null,
  isLoading: false,
  report: [],
});
