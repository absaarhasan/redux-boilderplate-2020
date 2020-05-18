import React from 'react';
import { cleanup, screen, fireEvent } from '@testing-library/react';
import * as ReactRedux from 'react-redux';
import * as actions from 'Actions/auth';
import { render } from '../../../jest.setup';
import Login from '.';

afterEach(cleanup);

describe('<Login /> spec', () => {
  it('should render', () => {
    render(<Login />);
    expect(screen.getByTestId('login-container')).toMatchSnapshot();
  });
  it('should display a pre-login view', () => {
    render(<Login />);
    expect(screen.getByTestId('pre-login')).toBeDefined();
    expect(screen.queryByTestId('post-login')).toBeNull();
  });
  it('It should display the required login form fields', () => {
    render(<Login />);
    expect(screen.getByTestId('email-field')).toBeDefined();
    expect(screen.getByTestId('password-field')).toBeDefined();
  });
  it('the button should submit the form', () => {
    const useDispatch = jest.spyOn(ReactRedux, 'useDispatch');
    const actionCreator = jest.spyOn(actions, 'loginAction');
    render(<Login />);
    fireEvent.click(screen.getByTestId('login-button'));
    expect(useDispatch).toHaveBeenCalled();
    expect(actionCreator).toHaveBeenCalled();
  });
  it('should display the correct links', () => {
    render(<Login />);
    expect(screen.getByTestId('forgot-link').closest('a').getAttribute('href')).toEqual('/forgot');
    expect(screen.getByTestId('reg-link').closest('a').getAttribute('href')).toEqual('/register');
  });
  it('should display the post-login view', () => {
    const initialState = {
      session: {
        sub: 'e12b13a9-01e5-4a60-8432-3aa095ce144b',
        email_verified: 'true',
        name: 'testUser',
        email: 'testUser@test.com',
      },
    };
    const { store } = render(<Login />, initialState);

    expect(screen.queryByTestId('pre-login')).toBeNull();
    expect(screen.getByTestId('post-login')).toBeDefined();
  });
});
