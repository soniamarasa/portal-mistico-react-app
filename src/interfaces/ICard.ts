import { ICardType } from './ICardType';

export interface ICard {
  _id?: string;
  // userId?: string;
  name: string;
  tags: string[];
  description: string;
  tarology: string;
  taromancy: string;
  idCard: string;
  type: ICardType;
}
