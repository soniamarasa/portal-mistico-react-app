import { ICard } from './ICard';

export interface ITarotReading {
  _id?: string;
  userId: string;
  name: string;
  date: Date;
  type: object;
  cards: ICard[];
  title: string;
  description: string;
}
