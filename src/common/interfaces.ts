export interface ITimestamp {
  unix: number;
  epoch: number;
  human: string;
}

export interface IArrayResponse<T> {
  data: T[];
  meta: IMeta;
}

export interface IResponse<T> {
  data: T;
  meta: IMeta;
}

export interface IMeta {
  count: number;
  pageCount: number;
  totalCount: number;
  next: string;
  previous: string;
  self: string;
  first: string;
  last: string;
}

export type Resource = 'transactions' | 'blocks' | 'delegates' | 'wallets';
