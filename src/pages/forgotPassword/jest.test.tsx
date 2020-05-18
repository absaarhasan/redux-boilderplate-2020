import React from 'react';
import { cleanup, screen, fireEvent } from '@testing-library/react';
import * as ReactRedux from 'react-redux';
import * as actions from 'Actions/auth';
import { render } from '../../../jest.setup';
import ForgotPassword from '.';

beforeEach(() => {
  // render(<ForgotPassword />);
});

afterEach(cleanup);

describe('<ForgotPassword /> spec', () => {
  it('should render', () => {
    render(<ForgotPassword />);
    expect(screen.getByTestId('forgot-container')).toMatchSnapshot();
  });
  it('It should display the required form fields', () => {
    render(<ForgotPassword />);
    expect(screen.getByTestId('email-field')).toBeDefined();
  });
  it('the button should submit the form', () => {
    const useDispatch = jest.spyOn(ReactRedux, 'useDispatch');
    const actionCreator = jest.spyOn(actions, 'forgotPasswordAction');
    render(<ForgotPassword />);
    fireEvent.click(screen.getByTestId('submit-button'));
    expect(useDispatch).toHaveBeenCalled();
    expect(actionCreator).toHaveBeenCalled();
  });
});
