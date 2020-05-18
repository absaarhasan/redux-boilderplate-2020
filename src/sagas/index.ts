import { SagaIterator } from '@redux-saga/core';
import { takeLatest, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as actions from 'Actions/constants';
import notice from 'Constants/notice';
import { setNoticeData } from 'Utils/index';
import * as auth from 'Utils/auth';
import { isLoadingAction, isBusyAction, setNotificationAction } from 'Actions/app';
import { setUserSessionAction, isAuthorisedAction, clearUserSessionAction } from 'Actions/auth';
import * as actionTypes from 'Actions/types';

export function* sessionVerifyPasswordActionWorker({
  data,
}: actionTypes.VerifyPasswordAction): SagaIterator {
  try {
    yield put(isBusyAction(true));
    yield put(isLoadingAction(true));
    yield call(auth.verifyPasswordService, data);
    yield put(push('/login'));
    yield put(isBusyAction(false));
    yield put(isLoadingAction(false));
    const noticeData = setNoticeData('success', notice.success.verify);
    yield put(setNotificationAction(noticeData));
  } catch (error) {
    const noticeData = setNoticeData('error', notice.error.network);
    yield put(setNotificationAction(noticeData));
    yield put(isLoadingAction(false));
    yield put(isBusyAction(false));
  }
}

export function* sessionForgotPasswordActionWorker({
  data,
}: actionTypes.ForgotPasswordAction): SagaIterator {
  try {
    yield put(isBusyAction(true));
    yield put(isLoadingAction(true));
    yield call(auth.forgotPasswordService, data);
    yield put(push('/verify'));
    yield put(isBusyAction(false));
    yield put(isLoadingAction(false));
    const noticeData = setNoticeData('success', notice.success.forgot);
    yield put(setNotificationAction(noticeData));
  } catch (error) {
    const noticeData = setNoticeData('error', notice.error.network);
    yield put(setNotificationAction(noticeData));
    yield put(isLoadingAction(false));
    yield put(isBusyAction(false));
  }
}

export function* sessionLogoutActionWorker(): SagaIterator {
  try {
    yield put(isBusyAction(true));
    auth.logoutService();
    yield put(clearUserSessionAction());
    yield put(push('/'));
    yield put(isBusyAction(false));
    const noticeData = setNoticeData('success', notice.success.logout);
    yield put(setNotificationAction(noticeData));
  } catch (error) {
    yield put(isBusyAction(false));
    const noticeData = setNoticeData('error', notice.error.browser);
    yield put(setNotificationAction(noticeData));
  }
}

export function* sessionIsAuthorisedActionWorker(): SagaIterator {
  try {
    yield put(isBusyAction(true));
    yield put(isLoadingAction(true));
    const activeSession = yield call(auth.isAuthorisedService);
    if (activeSession) {
      yield put(setUserSessionAction(activeSession));
    }
    yield put(isBusyAction(false));
    yield put(isLoadingAction(false));
  } catch (error) {
    yield put(isBusyAction(false));
    yield put(isLoadingAction(false));
    const noticeData = setNoticeData('error', error);
    yield put(setNotificationAction(noticeData));
  }
}

export function* sessionLoginActionWorker({
  data,
}: actionTypes.LoginAction): SagaIterator {
  try {
    yield put(isBusyAction(true));
    yield put(isLoadingAction(true));
    yield call(auth.loginService, data);
    yield put(isAuthorisedAction());
    yield put(push('/'));
    yield put(isBusyAction(false));
    yield put(isLoadingAction(false));
    const noticeData = setNoticeData('success', notice.success.login);
    yield put(setNotificationAction(noticeData));
  } catch (error) {
    const noticeData = setNoticeData('error', error.message);
    yield put(setNotificationAction(noticeData));
    yield put(isLoadingAction(false));
    yield put(isBusyAction(false));
  }
}

export function* sessionRegisterActionWorker({
  data,
}: actionTypes.RegisterAction): SagaIterator {
  try {
    yield put(isLoadingAction(true));
    yield put(isBusyAction(true));
    const response = yield call(auth.registerService, data);
    yield put(push('/login'));
    yield put(isBusyAction(false));
    yield put(isLoadingAction(false));
    const noticeData = setNoticeData('warn', notice.success.register);
    yield put(setNotificationAction(noticeData));
  } catch (error) {
    const noticeData = setNoticeData('error', notice.error.network);
    yield put(setNotificationAction(noticeData));
    yield put(isLoadingAction(false));
    yield put(isBusyAction(false));
  }
}

export default function* watcherSaga(): SagaIterator {
  yield takeLatest(actions.AUTH_REGISTER, sessionRegisterActionWorker);
  yield takeLatest(actions.AUTH_LOGIN, sessionLoginActionWorker);
  yield takeLatest(actions.AUTH_LOGOUT, sessionLogoutActionWorker);
  yield takeLatest(
    actions.AUTH_FORGOT_PASSWORD,
    sessionForgotPasswordActionWorker,
  );
  yield takeLatest(
    actions.AUTH_VERIFY_PASSWORD,
    sessionVerifyPasswordActionWorker,
  );
  yield takeLatest(actions.AUTH_IS_AUTHORISED, sessionIsAuthorisedActionWorker);
}
