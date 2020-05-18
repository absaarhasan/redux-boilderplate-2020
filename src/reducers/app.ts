import { AppActionTypes } from 'Actions/types';
import * as actions from 'Actions/constants';
import { AppState } from './types';

const initialState: AppState = {
  isLoading: false,
  isBusy: false,
};

const app = (state = initialState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case actions.APP_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case actions.APP_IS_BUSY:
      return {
        ...state,
        isBusy: action.isBusy,
      };
    default:
      return state;
  }
};

export default app;
