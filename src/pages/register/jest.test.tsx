import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from 'Actions/auth';
import { cleanup, screen, fireEvent } from '@testing-library/react';
import { render } from '../../../jest.setup';
import '@testing-library/jest-dom';
import Register from '.';

beforeEach(() => {
  // render(<Register />);
});

afterEach(cleanup);

describe('<Register /> spec', () => {
  it('should render', () => {
    render(<Register />);
    expect(screen.getByTestId('reg-container')).toMatchSnapshot();
  });
  it('should display the required fields', () => {
    render(<Register />);
    expect(screen.getByTestId('userName-field')).toBeDefined();
    expect(screen.getByTestId('email-field')).toBeDefined();
    expect(screen.getByTestId('password-field')).toBeDefined();
    expect(screen.getByTestId('confirm-password-field')).toBeDefined();
  });
  it('the button should submit the form', () => {
    const useDispatch = jest.spyOn(ReactRedux, 'useDispatch');
    const actionCreator = jest.spyOn(actions, 'registerAction');
    render(<Register />);
    fireEvent.click(screen.getByTestId('submit-button'));
    expect(useDispatch).toHaveBeenCalled();
    expect(actionCreator).toHaveBeenCalled();
  });
});
