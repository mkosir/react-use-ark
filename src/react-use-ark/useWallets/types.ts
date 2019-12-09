import { BigNumber } from '../../common/BigNumber';
import { IArrayResponse } from '../../common/interfaces';

export interface IWalletsResponse extends IArrayResponse<IWallet> {}

export interface IWalletResponse {
  data: IWallet;
}

export interface IWallet {
  address: string;
  balance: BigNumber;
  isDelegate: boolean;
  publicKey: string;
}
