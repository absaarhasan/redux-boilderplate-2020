import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import { render } from '../../../jest.setup';
import '@testing-library/jest-dom';
import Nav from '.';

beforeEach(() => {
  render(<Nav />);
});

afterEach(cleanup);

// it should render
// it should display a home link
// it should display a auth link
// the home link should link to home
// the auth link should link to auth

describe('<Nav /> spec', () => {
  it('should render', () => {
    expect(screen.getByTestId('nav-container')).toMatchSnapshot();
  });
});
