import { ITarotReading } from './ITarotReading';
import { ICard } from './ICard';

export interface IReport {
  _id: number;
  name: string;
  total: number;
  icon: string;
  color: string;
}

export interface IReports {
  current: IReport;
  expenses: IReport;
  income: IReport;
  forecast: IReport;
}

export interface ICardReport {
  store: ICard;
  total: number;
  percent: number;
}

export interface ITarotReadingReport {
  store: ITarotReading;
  total: number;
  percent: number;
}

export interface IMontlyReport {
  total: number;
  percent: number;
}

export interface IMontlysReport {
  income: IMontlyReport;
  expense: IMontlyReport;
  balance: number;
}
