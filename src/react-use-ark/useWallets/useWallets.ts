import { useFetchARK } from '../../utils/useFetchARK';
import { Network } from '../../common/network';
import { IWalletResponse, IWalletsResponse } from './types';

export const useWalletsTop = (
  page: number = 1,
  limit: number = 25,
  fetchOnMount: boolean = false,
  network: Network = Network.MAINNET,
) => {
  const requestConfig = {
    params: {
      page,
      limit,
    },
  };

  return useFetchARK<IWalletsResponse>('wallets/top', requestConfig, fetchOnMount, network);
};

export const useWalletsFindByAddress = (
  address: string,
  fetchOnMount: boolean = false,
  network: Network = Network.MAINNET,
) => {
  return useFetchARK<IWalletResponse>(`wallets/${address}`, {}, fetchOnMount, network);
};
