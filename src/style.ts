import { css } from '@emotion/core';
import theme from 'Src/theme';

const style = () => css(
  {
    '*': {
      padding: 0,
      margin: 0,
      boxSizing: 'border-box',
    },
    body: {
      backgroundColor: theme.bg.body,
      fontFamily: theme.font,
      fontSize: '14px',
    },
  },
);

export default style;
