import { DateString, Sites } from '~/types';

export interface IHistoryItem {
  id: number;
  site: Sites;
  date: DateString;
  number: number;
  message: string;
}

export interface IAppBalance {
  actual: number;
  frozen: number;
}

export type IHistory = IHistoryItem[];
