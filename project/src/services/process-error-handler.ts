import { store } from '../store';
import { setError } from '../store/action';
import { clearErrorAction } from '../store/api-actions';

export const processErrorHandler = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
