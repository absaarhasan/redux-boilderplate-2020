import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import { render } from '../../../jest.setup';
import '@testing-library/jest-dom';
import Grid from '.';

beforeEach(() => {
  render(<Grid />);
});

afterEach(cleanup);

describe('<Grid /> spec', () => {
  it('should render', () => {
    render(<Grid>Hello Test</Grid>);
    expect(screen.getByText(/Hello Test/i)).toBeDefined();
  });
});
