import { AppActionTypes } from 'Actions/types';
import * as actions from 'Actions/constants';
import { NotificationsState } from './types';

const initialState: NotificationsState = {
  active: false,
  variant: null,
  msg: null,
};

const notifications = (state = initialState, action: AppActionTypes): NotificationsState => {
  const { data } = action;
  switch (action.type) {
    case actions.NOTIFICATION_SET:
      return {
        ...state,
        active: data.active,
        variant: data.variant,
        msg: data.msg,
      };
    case actions.NOTIFICATION_CLEAR:
      return {
        ...state,
        active: false,
        variant: null,
        msg: '',
      };
    default:
      return state;
  }
};

export default notifications;
