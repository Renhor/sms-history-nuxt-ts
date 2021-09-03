import { DateString, Sites } from '~/types'

export interface IHistoryItem {
  site: Sites;
  date: DateString;
  number: number;
  message: string;
}

export type IHistory = IHistoryItem[];
