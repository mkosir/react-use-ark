import { useEffect, useReducer } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { reducer, initialState, State } from './reducer';
import { Network } from '../common/network';
import { Resource } from '../common/interfaces';

export function useFetchARK<T>(
  resource: Resource | string,
  config: AxiosRequestConfig = {},
  fetchOnMount: boolean,
  network: Network,
): [State<T>, () => Promise<void>] {
  const [state, dispatch] = useReducer(reducer<T>(), initialState);
  let didCancel = false;

  const fetch = async () => {
    dispatch({ type: 'FETCHING' });
    const url = `${network}/${resource}`;
    try {
      const { data } = await axios.get(url, config);

      if (!didCancel) {
        dispatch({ type: 'SUCCESS', payload: data });
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
