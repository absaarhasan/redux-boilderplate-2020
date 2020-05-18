import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  h1, p, button, input,
} from './style';

type TextProps = {
  ['data-testid']? : string;
  className?: string;
}

type ButtonProps = {
  ['data-testid']? : string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  id?: string;
  className?: string;
}

type InputProps = {
  ['data-testid']? : string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  id?: string;
  placeholder?: string;
  value?: string;
  name?: string;
  required?: boolean;
  type: string;
  className?: string;
  pattern?: string;
}

export const H1: React.FC<TextProps> = (props) => {
  const { children } = props;
  return (
    <h1
      css={h1}
      {...props}
    >
      {children}
    </h1>
  );
};

export const P: React.FC<TextProps> = (props) => {
  const { children } = props;
  return (
    <p
      css={p}
      {...props}
    >
      {children}
    </p>
  );
};

export const Button: React.FC<ButtonProps> = (props) => {
  const { children = 'button' } = props;
  return (
    <button
      type="button"
      css={button}
      {...props}
    >
      {children}
    </button>
  );
};

export const Input: React.FC<InputProps> = (props) => (
  <input
    css={input}
    {...props}
  />
);

export default null;
