import { useFetchARK } from '../../utils/useFetchARK';
import { Network } from '../../common/network';
import { IBlockResponse, IBlocksResponse } from './types';

/**
 * Get latest blocks.
 * @param page The number of the page that will be returned.
 * @param limit The number of resources per page.
 * @param fetchOnMount
 * @param network
 */
export const useBlocksLatest = (
  page: number = 1,
  limit: number = 25,
  fetchOnMount: boolean = false,
  network: Network = Network.MAINNET,
) => {
  const requestConfig = {
    params: {
      page,
      limit,
      orderBy: 'timestamp:desc',
    },
  };

  return useFetchARK<IBlocksResponse>('blocks', requestConfig, fetchOnMount, network);
};

/**
 * Get last block.
 * @param fetchOnMount
 * @param network
 */
export const useBlocksLast = (
  fetchOnMount: boolean = false,
  network: Network = Network.MAINNET,
) => {
  const requestConfig = {
    params: {
      limit: 1,
      orderBy: 'timestamp:desc',
    },
  };

  return useFetchARK<IBlocksResponse>('blocks', requestConfig, fetchOnMount, network);
};

/**
 * Find block by ID.
 * @param id The ID of the block to be retrieved.
 * @param fetchOnMount
 * @param network
 */
export const useBlocksFindById = (
  id: string,
  fetchOnMount: boolean = false,
  network: Network = Network.MAINNET,
) => {
  return useFetchARK<IBlockResponse>(`blocks/${id}`, {}, fetchOnMount, network);
};
