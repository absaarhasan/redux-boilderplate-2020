import * as actions from 'Actions/constants';
import {
  LoginAction,
  LogoutAction,
  RegisterAction,
  ForgotPasswordAction,
  VerifyPasswordAction,
  IsAuthorisedAction,
  SetUserSessionAction,
  LoginData,
  RegData,
  ForgotData,
  VerifyData,
} from './types';

export const loginAction = (data: LoginData): LoginAction => ({
  type: actions.AUTH_LOGIN,
  data,
});

export const logoutAction = (): LogoutAction => ({
  type: actions.AUTH_LOGOUT,
});

export const registerAction = (data: RegData): RegisterAction => ({
  type: actions.AUTH_REGISTER,
  data,
});

export const forgotPasswordAction = (data: ForgotData): ForgotPasswordAction => ({
  type: actions.AUTH_FORGOT_PASSWORD,
  data,
});

export const verifyPasswordAction = (data: VerifyData): VerifyPasswordAction => ({
  type: actions.AUTH_VERIFY_PASSWORD,
  data,
});

export const isAuthorisedAction = (): IsAuthorisedAction => ({
  type: actions.AUTH_IS_AUTHORISED,
});

export const setUserSessionAction = (data: {}): SetUserSessionAction => ({
  type: actions.USER_SESSION_SET,
  data,
});

export const clearUserSessionAction = (): SetUserSessionAction => ({
  type: actions.USER_SESSION_CLEAR,
});
