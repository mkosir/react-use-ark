export type State<T> = {
  isLoading: boolean;
  response: null | T;
  error: null | string;
};

type Action<T> =
  | { type: 'FETCHING' }
  | { type: 'SUCCESS'; payload: T }
  | { type: 'FAILURE'; payload: string };

export const reducer = <T>() => (state: State<T>, action: Action<T>): State<T> => {
  switch (action.type) {
    case 'FETCHING':
      return { ...state, isLoading: true, error: null };
    case 'SUCCESS':
      return {
        ...state,
        isLoading: false,
        response: action.payload,
        error: null,
      };
    case 'FAILURE':
      return {
        ...state,
        isLoading: false,
        response: null,
        error: action.payload,
      };
    default:
      throw new Error();
  }
};

export const initialState = { isLoading: false, error: null, response: null };
