import * as appActions from './app';
import * as authActions from './auth';
import actions from '../stubs/actions';

describe('Action Creators', () => {
  it('should create an isLoadingAction', () => {
    expect(appActions.isLoadingAction(true)).toEqual(actions.isLoading);
  });

  it('should create an isBusyAction', () => {
    expect(appActions.isBusyAction(true)).toEqual(actions.isBusy);
  });

  it('should create a setNotificationAction', () => {
    const data = {
      active: true,
      variant: 'error',
      msg: 'This is an eror.',
    };
    expect(appActions.setNotificationAction(data)).toEqual(actions.setNotification);
  });

  it('should create a clearNotificationAction', () => {
    expect(appActions.clearNotificationAction()).toEqual(actions.clearNotification);
  });

  it('should create a loginAction', () => {
    const data = {
      Username: 'John Doe',
      Password: 'password',
    };
    expect(authActions.loginAction(data)).toEqual(actions.login);
  });

  it('should create a logoutAction', () => {
    expect(authActions.logoutAction()).toEqual(actions.logout);
  });

  it('should create a registerAction', () => {
    const data = {
      userNameObj: {
        Name: 'user',
        Value: 'John Doe',
      },
      emailObj: {
        Name: 'email',
        Value: 'john.doe@email.com',
      },
      email: 'john.doe@email.com',
      password: 'password',
    };

    expect(authActions.registerAction(data)).toEqual(actions.register);
  });

  it('should create a forgotPasswordAction', () => {
    const data = {
      email: 'john.doe@email.com',
    };
    expect(authActions.forgotPasswordAction(data)).toEqual(actions.forgotPassword);
  });

  it('should create a verifyPasswordAction', () => {
    const data = {
      code: '1234',
      email: 'john.doe@email.com',
      password: 'password',
    };
    expect(authActions.verifyPasswordAction(data)).toEqual(actions.verifyPassword);
  });

  it('should create a isAuthorisedAction', () => {
    expect(authActions.isAuthorisedAction()).toEqual(actions.isAuthorised);
  });

  it('should create a setUserSessionAction', () => {
    const data = {
      sub: 'e12b13a9-01e5-4a60-8432-3aa095ce144b',
      email_verified: 'true',
      name: 'testUser',
      email: 'testUser@test.com',
    };
    expect(authActions.setUserSessionAction(data)).toEqual(actions.setUserSession);
  });
});
