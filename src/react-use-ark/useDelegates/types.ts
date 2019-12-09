import { BigNumber } from '../../common/BigNumber';
import { IBlock } from '../block/types';
import { ForgingStatus } from '../../common/enums';
import { IArrayResponse } from '../../common/interfaces';

export interface IDelegatesResponse extends IArrayResponse<IDelegate> {}

export interface IDelegate {
  address: string;
  username: string;
  publicKey: string;
  blocks: {
    produced: number;
    last: IBlock;
  };
  votes: string;
  rank: number;
  production: {
    approval: number;
  };
  forged: {
    fees: BigNumber;
    rewards: BigNumber;
    total: BigNumber;
  };
  forgingStatus: ForgingStatus;
}
