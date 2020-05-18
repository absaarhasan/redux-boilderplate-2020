import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import { render } from '../../../jest.setup';
import '@testing-library/jest-dom';
import {
  H1, P, Button, Input,
} from '.';

afterEach(cleanup);

describe('<H1 /> spec', () => {
  it('should render', () => {
    render(<H1>Hello Test</H1>);
    expect(screen.getByText(/Hello Test/i)).toBeDefined();
  });
});

describe('<P /> spec', () => {
  it('should render', () => {
    render(<P>Hello Test</P>);
    expect(screen.getByText(/Hello Test/i)).toBeDefined();
  });
});

describe('<Button /> spec', () => {
  it('should render', () => {
    render(<Button>Hello Test</Button>);
    expect(screen.getByText(/Hello Test/i)).toBeDefined();
  });
});

describe('<Input /> spec', () => {
  it('should render', () => {
    render(<Input type="text" placeholder="Hello Test" />);
    expect(screen.getByPlaceholderText('Hello Test')).toBeDefined();
  });
});
