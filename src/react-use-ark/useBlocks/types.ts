import { BigNumber } from '../../common/BigNumber';
import { ITransaction } from '../useTransactions/types';
import { ITimestamp, IResponse, IArrayResponse } from '../../common/interfaces';

export interface IBlocksResponse extends IArrayResponse<IBlock> {}
export interface IBlockResponse extends IResponse<IBlock> {}

export interface IBlock {
  id: string;
  version: number;
  height: number;
  previous: string;
  forged: {
    reward: BigNumber;
    fee: BigNumber;
    total: BigNumber;
    amount: BigNumber;
  };
  payload: {
    hash: string;
    length: number;
  };
  generator: {
    username: string;
    address: string;
    publicKey: string;
  };
  signature: string;
  confirmations: number;
  timestamp: ITimestamp;
  transactions: [ITransaction];
  price?: number | null;
}
