import { useEffect, useReducer } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { reducer, initialState, State } from '../../utils/reducer';
import { Network } from '../../common/network';
import { Resource } from '../../common/interfaces';

export function useFetchAll<T>(
  resource: Resource | string,
  fetchOnMount: boolean,
  network: Network,
): [State<T>, () => Promise<void>] {
  const [state, dispatch] = useReducer(reducer<T>(), initialState);
  let didCancel = false;

  const fetch = async () => {
    dispatch({ type: 'FETCHING' });
    const url = `${network}/${resource}`;
    try {
      const config: AxiosRequestConfig = {
        params: {
          page: 1,
        },
      };
      const { data } = await axios.get(url, config);
      const delegatesPartial1 = data.data;
      const requests = [];
      for (let index = 2; index <= data.meta.pageCount; index++) {
        requests.push(
          axios.get(url, {
            params: {
              page: index,
            },
          }),
        );
      }
      const results = await Promise.all(requests);

      const delegatesPartial2 = [].concat(...results.map(result => result.data.data));
      const delegates = delegatesPartial1.concat(delegatesPartial2);

      if (!didCancel) {
        dispatch({ type: 'SUCCESS', payload: delegates });
      }
    } catch (error) {
      if (!didCancel) {
        dispatch({ type: 'FAILURE', payload: error.message });
      }
    }
  };

  useEffect(() => {
    didCancel = false;
    if (fetchOnMount) {
      fetch();
    }
    return () => {
      didCancel = true;
    };
  }, []);

  return [state, fetch];
}
