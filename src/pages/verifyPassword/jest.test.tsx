import React from 'react';
import { cleanup, screen, fireEvent } from '@testing-library/react';
import * as ReactRedux from 'react-redux';
import * as actions from 'Actions/auth';
import { render } from '../../../jest.setup';
import VerifyPassword from '.';

afterEach(cleanup);

describe('<VerifyPassword /> spec', () => {
  it('should render', () => {
    render(<VerifyPassword />);
    expect(screen.getByTestId('verify-container')).toMatchSnapshot();
  });
  it('It should display the required form fields', () => {
    render(<VerifyPassword />);
    expect(screen.getByTestId('email-field')).toBeDefined();
    expect(screen.getByTestId('code-field')).toBeDefined();
    expect(screen.getByTestId('password-field')).toBeDefined();
  });
  it('the button should submit the form', () => {
    const useDispatch = jest.spyOn(ReactRedux, 'useDispatch');
    const actionCreator = jest.spyOn(actions, 'verifyPasswordAction');
    render(<VerifyPassword />);
    fireEvent.click(screen.getByTestId('submit-button'));
    expect(useDispatch).toHaveBeenCalled();
    expect(actionCreator).toHaveBeenCalled();
  });
});
