import { DateString, Sites } from '~/types';

export type HistoryItemType = 'message' | 'not-message';

export type OperationType = HistoryItemType | 'all';

export interface IHistoryItem {
  id: number;
  type: HistoryItemType;
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
