import { css } from '@emotion/core';
import theme from 'Src/theme';

export const h1 = () => css(
  theme.mq({
    gridColumn: ['1', '1 / span 2', '1 / span 3'],
    gridRow: '0 / 2',
    justifySelf: 'center',
    alignSelf: 'center',
    fontSize: '2em',
    color: theme.tx.heading,
  }),
);

export const p = () => css(
  theme.mq({
    justifySelf: 'center',
    fontSize: '1em',
    color: theme.tx.body,
    gridColumn: ['1', '1 / span 2', '1 / span 3'],
  }),
);

export const button = () => css(
  theme.mq({
    justifySelf: ['stretch', 'stretch', 'stretch'],
    alignSelf: 'stretch',
    fontSize: '1em',
    color: theme.tx.body,
    gridColumn: ['1', '1 / span 2', 'auto'],
  }),
);

export const input = () => css(
  theme.mq({
    justifySelf: 'stretch',
    alignSelf: 'stretch',
    fontSize: '1em',
    padding: '0 1%',
    color: theme.tx.body,
  }),
);

export default null;
