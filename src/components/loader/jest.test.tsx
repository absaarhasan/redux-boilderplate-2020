import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import { render } from '../../../jest.setup';
import '@testing-library/jest-dom';
import Loader from '.';

afterEach(cleanup);

describe('<Loader /> spec', () => {
  it('should be hidden by default', () => {
    render(<Loader />);
    expect(screen.queryByTestId('loader-container')).toBeNull();
  });
  it('should display when triggered', () => {
    const initialState = {
      app: {
        isLoading: true,
      },
    };
    render(<Loader />, initialState);
    expect(screen.getByTestId('loader-container')).toMatchSnapshot();
  });
});
