import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import { render } from '../../../jest.setup';
import '@testing-library/jest-dom';
import Home from '.';

beforeEach(() => {
  render(<Home />);
});

afterEach(cleanup);

describe('<Home /> spec', () => {
  it('should render', () => {
    expect(screen.getByTestId('home-container')).toMatchSnapshot();
  });
});
