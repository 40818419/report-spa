export enum type {
  Extended = 'extended',
  Intermediate = 'intermediate',
  Primary = 'primary'
}

export interface IReport {
  uuid: string;
  body: {
    bankName: string;
    bankBIC: string[];
    reportScore: number;
    type: type | string;
  };
  createdAt: string;
  publishedAt?: string;
}

export interface IReportState {
  report: IReport[];
}

export const getDefaultState = (): IReportState => ({
  report: [],
});
