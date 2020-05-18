import * as actions from 'Actions/constants';
import { EntitiesState } from './types';

const initialState: EntitiesState = {
  data: [],
};

const entities = (state = initialState, action): EntitiesState => {
  switch (action.type) {
    case actions.ENTITIES_LOAD_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default entities;
