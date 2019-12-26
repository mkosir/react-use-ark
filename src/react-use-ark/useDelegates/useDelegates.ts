import { useFetchAll } from './useFetchAll';
import { useFetchARK } from '../../utils/useFetchARK';
import { Network } from '../../common/network';
import { IDelegatesResponse, IDelegate } from './interfaces';

export const useDelegatesAll = (
  fetchOnMount: boolean = false,
  network: Network = Network.MAINNET,
) => {
  return useFetchAll<IDelegate[]>('delegates', fetchOnMount, network);
};

export const useDelegatesTop = (
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

  return useFetchARK<IDelegatesResponse>('delegates', requestConfig, fetchOnMount, network);
};
