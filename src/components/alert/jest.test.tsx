import React from 'react';
import {
  cleanup, screen, fireEvent,
} from '@testing-library/react';
import * as ReactRedux from 'react-redux';
import * as actions from 'Actions/app';
import { render } from '../../../jest.setup';
import '@testing-library/jest-dom';

import Alert from '.';


afterEach(cleanup);

describe('<Alert /> spec', () => {
  it('should render', () => {
    const initialState = {
      notifications: {
        active: true,
        variant: 'error',
        msg: 'This is an eror.',
      },
    };
    render(<Alert />, initialState);
    expect(screen.getByTestId('alert-container')).toMatchSnapshot();
  });
  it('should be hidden by default', () => {
    render(<Alert />);
    expect(screen.queryByTestId('alert-container')).toBeNull();
  });
  it('should display when triggered', () => {
    const initialState = {
      notifications: {
        active: true,
        variant: 'error',
        msg: 'This is an eror.',
      },
    };
    render(<Alert />, initialState);
    expect(screen.getByTestId('alert-container')).toBeDefined();
  });
  it('should display the alert message', () => {
    const initialState = {
      notifications: {
        active: true,
        variant: 'error',
        msg: 'This is an eror.',
      },
    };
    render(<Alert />, initialState);
    expect(screen.getByTestId('msg').innerHTML).toBe('This is an eror.');
  });
  it('the close button shoud dispatch the correct action', () => {
    const initialState = {
      notifications: {
        active: true,
        variant: 'error',
        msg: 'This is an eror.',
      },
    };
    const useDispatch = jest.spyOn(ReactRedux, 'useDispatch');
    const actionCreator = jest.spyOn(actions, 'clearNotificationAction');
    render(<Alert />, initialState);
    fireEvent.click(screen.getByTestId('close-btn'));
    expect(useDispatch).toHaveBeenCalled();
    expect(actionCreator).toHaveBeenCalled();
  });
  it('the close button should update the global state', () => {
    const initialState = {
      notifications: {
        active: true,
        variant: 'error',
        msg: 'This is an eror.',
      },
    };
    const expectedState = { active: false, variant: null, msg: '' };
    const { store } = render(<Alert />, initialState);
    fireEvent.click(screen.getByTestId('close-btn'));
    expect(store.getState().notifications).toEqual(expectedState);
  });
});
