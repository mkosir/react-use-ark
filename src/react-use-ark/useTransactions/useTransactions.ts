import { useFetchARK } from '../../utils/useFetchARK';
import { Network } from '../../common/network';
import { ITransactionsResponse, ITransactionResponse } from './types';

/**
 * Get latest transactions.
 * @param page The number of the page that will be returned.
 * @param limit The number of resources per page.
 * @param network
 */
export const useTransactionsLatest = (
  page: number = 1,
  limit: number = 25,
  fetchOnMount: boolean = false,
  network: Network = Network.MAINNET,
) => {
  const requestConfig = {
    params: {
      orderBy: 'timestamp:desc',
      page,
      limit,
    },
  };

  return useFetchARK<ITransactionsResponse>('transactions', requestConfig, fetchOnMount, network);
};

/**
 * Find transaction by ID.
 * @param id The identifier of the transaction to be retrieved.
 * @param network
 */
export const useTransactionsFindById = (
  id: string,
  fetchOnMount: boolean = false,
  network: Network = Network.MAINNET,
) => {
  return useFetchARK<ITransactionResponse>(`transactions/${id}`, {}, fetchOnMount, network);
};

/**
 * Find transaction by block ID.
 * @param blockId Block ID.
 * @param page The number of the page that will be returned.
 * @param limit The number of resources per page.
 * @param network
 */
export const useTransactionsFindByBlockId = (
  blockId: string,
  page: number = 1,
  limit: number = 25,
  fetchOnMount: boolean = false,
  network: Network = Network.MAINNET,
) => {
  const requestConfig = {
    params: {
      orderBy: 'timestamp:desc',
      page,
      limit,
    },
  };

  return useFetchARK<ITransactionsResponse>(
    `blocks/${blockId}/transactions`,
    requestConfig,
    fetchOnMount,
    network,
  );
};
