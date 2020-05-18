import sessionReducer from './session';
import appReducer from './app';
import notificationsReducer from './notifications';
import actions from '../stubs/actions';

describe('app reducer', () => {
  it('should return the initial state', () => {
    expect(appReducer(undefined, { type: '' })).toEqual(
      {
        isLoading: false,
        isBusy: false,
      },
    );
  });

  it('should handle APP_IS_LOADING', () => {
    expect(
      appReducer(undefined, actions.isLoading),
    ).toEqual(
      {
        isLoading: true,
        isBusy: false,
      },
    );
  });

  it('should handle APP_IS_BUSY', () => {
    expect(
      appReducer(undefined, actions.isBusy),
    ).toEqual(
      {
        isLoading: false,
        isBusy: true,
      },
    );
  });
});

describe('notifications reducer', () => {
  it('should return the initial state', () => {
    expect(notificationsReducer(undefined, { type: '' })).toEqual(
      {
        active: false,
        variant: null,
        msg: null,
      },
    );
  });

  it('should handle NOTIFICATION_SET', () => {
    expect(
      notificationsReducer(undefined, actions.setNotification),
    ).toEqual(
      {
        active: true,
        variant: 'error',
        msg: 'This is an eror.',
      },
    );
  });

  it('should handle NOTIFICATION_CLEAR,', () => {
    expect(
      notificationsReducer(undefined, actions.clearNotification),
    ).toEqual(
      {
        active: false,
        variant: null,
        msg: '',
      },
    );
  });
});

describe('session reducer', () => {
  it('should return the initial state', () => {
    expect(sessionReducer(undefined, { type: '' })).toEqual(
      {
        sub: null,
        email_verified: null,
        name: null,
        email: null,
      },
    );
  });

  it('should handle USER_SESSION_SET', () => {
    expect(
      sessionReducer(undefined, actions.setUserSession),
    ).toEqual(
      {
        sub: 'e12b13a9-01e5-4a60-8432-3aa095ce144b',
        email_verified: 'true',
        name: 'testUser',
        email: 'testUser@test.com',
      },
    );
  });
});
