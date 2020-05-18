import * as actions from 'Actions/constants';
import { Notification } from '../utils/index';
import {
  IsLoadingAction,
  IsBusyAction,
  SetNotificationAction,
  ClearNotificationAction,
} from './types';

export const isLoadingAction = (value: boolean): IsLoadingAction => ({
  type: actions.APP_IS_LOADING,
  isLoading: value,
});

export const isBusyAction = (value: boolean): IsBusyAction => ({
  type: actions.APP_IS_BUSY,
  isBusy: value,
});

export const setNotificationAction = (data: Notification): SetNotificationAction => ({
  type: actions.NOTIFICATION_SET,
  data,
});

export const clearNotificationAction = (): ClearNotificationAction => ({
  type: actions.NOTIFICATION_CLEAR,
});
