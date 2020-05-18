import { runSaga } from 'redux-saga';
import * as auth from 'Utils/auth';
import actions from '../stubs/actions';
import {
  sessionLoginActionWorker,
  sessionRegisterActionWorker,
  sessionIsAuthorisedActionWorker,
  sessionLogoutActionWorker,
  sessionForgotPasswordActionWorker,
  sessionVerifyPasswordActionWorker,
} from '.';

describe('Sagas', () => {
  it('should handle AUTH_LOGIN action', async () => {
    const service = jest.spyOn(auth, 'loginService')
      .mockImplementation(() => Promise.resolve());
    const dispatched = [];
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, sessionLoginActionWorker, actions.login);

    expect(service).toHaveBeenCalledTimes(1);
    expect(dispatched[0].type).toMatch('APP_IS_BUSY');
    expect(dispatched[1].type).toMatch('APP_IS_LOADING');
    expect(dispatched[2].type).toMatch('AUTH_IS_AUTHORISED');
    expect(dispatched[3].type).toMatch('@@router/CALL_HISTORY_METHOD');
    expect(dispatched[4].type).toMatch('APP_IS_BUSY');
    expect(dispatched[5].type).toMatch('APP_IS_LOADING');
    expect(dispatched[6].type).toMatch('NOTIFICATION_SET');

    service.mockClear();
  });

  it('should handle AUTH_REGISTER action', async () => {
    const service = jest.spyOn(auth, 'registerService')
      .mockImplementation(() => Promise.resolve());
    const dispatched = [];
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, sessionRegisterActionWorker, actions.register);

    expect(service).toHaveBeenCalledTimes(1);
    expect(dispatched[0].type).toMatch('APP_IS_LOADING');
    expect(dispatched[1].type).toMatch('APP_IS_BUSY');
    expect(dispatched[2].type).toMatch('@@router/CALL_HISTORY_METHOD');
    expect(dispatched[3].type).toMatch('APP_IS_BUSY');
    expect(dispatched[4].type).toMatch('APP_IS_LOADING');
    expect(dispatched[5].type).toMatch('NOTIFICATION_SET');

    service.mockClear();
  });

  it('should handle AUTH_IS_AUTHORISED action', async () => {
    const service = jest.spyOn(auth, 'isAuthorisedService')
      .mockImplementation(() => Promise.resolve());
    const dispatched = [];
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, sessionIsAuthorisedActionWorker, actions.isAuthorised);

    expect(service).toHaveBeenCalledTimes(1);
    expect(dispatched[0].type).toMatch('APP_IS_BUSY');
    expect(dispatched[1].type).toMatch('APP_IS_LOADING');
    expect(dispatched[2].type).toMatch('APP_IS_BUSY');
    expect(dispatched[3].type).toMatch('APP_IS_LOADING');

    service.mockClear();
  });

  it('should handle AUTH_LOGOUT action', async () => {
    const service = jest.spyOn(auth, 'logoutService')
      .mockImplementation(() => Promise.resolve());
    const dispatched = [];
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, sessionLogoutActionWorker, actions.logout);

    expect(service).toHaveBeenCalledTimes(1);
    expect(dispatched[0].type).toMatch('APP_IS_BUSY');
    expect(dispatched[1].type).toMatch('USER_SESSION_CLEAR');
    expect(dispatched[2].type).toMatch('@@router/CALL_HISTORY_METHOD');
    expect(dispatched[3].type).toMatch('APP_IS_BUSY');
    expect(dispatched[4].type).toMatch('NOTIFICATION_SET');

    service.mockClear();
  });

  it('should handle AUTH_FORGOT_PASSWORD action', async () => {
    const service = jest.spyOn(auth, 'forgotPasswordService')
      .mockImplementation(() => Promise.resolve());
    const dispatched = [];
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, sessionForgotPasswordActionWorker, actions.forgotPassword);

    expect(service).toHaveBeenCalledTimes(1);
    expect(dispatched[0].type).toMatch('APP_IS_BUSY');
    expect(dispatched[1].type).toMatch('APP_IS_LOADING');
    expect(dispatched[2].type).toMatch('@@router/CALL_HISTORY_METHOD');
    expect(dispatched[3].type).toMatch('APP_IS_BUSY');
    expect(dispatched[4].type).toMatch('APP_IS_LOADING');
    expect(dispatched[5].type).toMatch('NOTIFICATION_SET');

    service.mockClear();
  });

  it('should handle AUTH_VERIFY_PASSWORD action', async () => {
    const service = jest.spyOn(auth, 'verifyPasswordService')
      .mockImplementation(() => Promise.resolve());
    const dispatched = [];
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, sessionVerifyPasswordActionWorker, actions.verifyPassword);

    expect(service).toHaveBeenCalledTimes(1);
    expect(dispatched[0].type).toMatch('APP_IS_BUSY');
    expect(dispatched[1].type).toMatch('APP_IS_LOADING');
    expect(dispatched[2].type).toMatch('@@router/CALL_HISTORY_METHOD');
    expect(dispatched[3].type).toMatch('APP_IS_BUSY');
    expect(dispatched[4].type).toMatch('APP_IS_LOADING');
    expect(dispatched[5].type).toMatch('NOTIFICATION_SET');

    service.mockClear();
  });
});
