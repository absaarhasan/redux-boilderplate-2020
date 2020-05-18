import * as actions from 'Actions/constants';
import { SessionState } from './types';

const initialState: SessionState = {
  sub: null,
  email_verified: null,
  name: null,
  email: null,
};

const session = (state = initialState, action): SessionState => {
  switch (action.type) {
    case actions.USER_SESSION_SET:
      return {
        ...state,
        sub: action.data.sub,
        email_verified: action.data.email_verified,
        name: action.data.name,
        email: action.data.email,
      };
    case actions.USER_SESSION_CLEAR:
      return {
        ...state,
        sub: null,
        email_verified: null,
        name: null,
        email: null,
      };
    default:
      return state;
  }
};

export default session;
