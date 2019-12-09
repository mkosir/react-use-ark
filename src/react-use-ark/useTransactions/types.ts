import { BigNumber } from '../../common/BigNumber';
import { ITimestamp, IResponse, IArrayResponse } from '../../common/interfaces';

export interface ITransactionsResponse extends IArrayResponse<ITransaction> {}
export interface ITransactionResponse extends IResponse<ITransaction> {}

export interface ITransaction {
  id: string;
  blockId: string;
  version?: number;
  type: number;
  typeGroup: number;
  amount: BigNumber;
  fee: string;
  sender: string;
  senderPublicKey: string;
  recipient: string;
  signature: string;
  vendorField: string;
  confirmations: number;
  timestamp: ITimestamp;
  asset?: any;
  signatures?: string[];
  price?: number | null;
  nonce?: string;
  lockStatus?: number;
}
