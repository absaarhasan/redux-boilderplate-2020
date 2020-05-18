import * as actions from 'Actions/constants';
import { Notification } from '../utils/index';

export interface IsLoadingAction {
  type: typeof actions.APP_IS_LOADING;
  isLoading: boolean;
}

export interface IsBusyAction {
  type: typeof actions.APP_IS_BUSY;
  isBusy: boolean;
}

export interface SetNotificationAction {
  type: typeof actions.NOTIFICATION_SET;
  data: Notification;
}

export interface ClearNotificationAction {
  type: typeof actions.NOTIFICATION_CLEAR;
}

export type AppActionTypes =
  | IsLoadingAction
  | IsBusyAction
  | SetNotificationAction
  | ClearNotificationAction;

export type LoginData = {
  Username: string;
  Password: string;
};

export interface LoginAction {
  type: string;
  data: LoginData;
}

export interface LogoutAction {
  type: string;
}

export type RegData = {
  userNameObj: {
    Name: string;
    Value: string;
  };
  emailObj: {
    Name: string;
    Value: string;
  };
  email: string;
  password: string;
};

export interface RegisterAction {
  type: string;
  data: RegData;
}

export type ForgotData = {
  email: string;
};

export interface ForgotPasswordAction {
  type: string;
  data: ForgotData;
}

export type VerifyData = {
  code: string;
  email: string;
  password: string;
}

export interface VerifyPasswordAction {
  type: string;
  data: VerifyData;
}

export interface IsAuthorisedAction {
  type: string;
}

export interface SetUserSessionAction {
  type: string;
  data: {};
}

export interface ClearUserSessionAction {
  type: string;
}

export type AuthActionTypes =
  | LoginAction
  | LogoutAction
  | RegisterAction
  | ForgotPasswordAction
  | VerifyPasswordAction
  | IsAuthorisedAction
  | SetUserSessionAction
  | ClearUserSessionAction;

export type RootActionTypes = AppActionTypes | AuthActionTypes;
