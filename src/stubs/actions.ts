import * as actions from 'Actions/constants';

const testActions = {
  isLoading: {
    type: actions.APP_IS_LOADING,
    isLoading: true,
  },
  isBusy: {
    type: actions.APP_IS_BUSY,
    isBusy: true,
  },
  setNotification: {
    type: actions.NOTIFICATION_SET,
    data: {
      active: true,
      variant: 'error',
      msg: 'This is an eror.',
    },
  },
  clearNotification: {
    type: actions.NOTIFICATION_CLEAR,
  },
  login: {
    type: actions.AUTH_LOGIN,
    data: {
      Username: 'John Doe',
      Password: 'password',
    },
  },
  logout: {
    type: actions.AUTH_LOGOUT,
  },
  register: {
    type: actions.AUTH_REGISTER,
    data: {
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
    },
  },
  forgotPassword: {
    type: actions.AUTH_FORGOT_PASSWORD,
    data: {
      email: 'john.doe@email.com',
    },
  },
  verifyPassword: {
    type: actions.AUTH_VERIFY_PASSWORD,
    data: {
      code: '1234',
      email: 'john.doe@email.com',
      password: 'password',
    },
  },
  isAuthorised: {
    type: actions.AUTH_IS_AUTHORISED,
  },
  setUserSession: {
    type: actions.USER_SESSION_SET,
    data: {
      sub: 'e12b13a9-01e5-4a60-8432-3aa095ce144b',
      email_verified: 'true',
      name: 'testUser',
      email: 'testUser@test.com',
    },
  },
};

export default testActions;
