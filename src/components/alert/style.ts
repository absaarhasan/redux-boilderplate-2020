import { css } from '@emotion/core';
import theme from 'Src/theme';

const style = () => css(
  {
    width: '100%',
    minHeight: '100px',
    position: 'relative',
    textAlign: 'center',

    h2: {
      margin: '20px 0 0 0',
      color: theme.alert.tx.header,
      display: 'inline-block',
    },

    '& .close-btn': {
      position: 'absolute',
      right: 0,
      height: '20px',
      width: '20px',
    },

    '&.success': {
      backgroundColor: theme.alert.bg.success,
    },

    '&.warn': {
      backgroundColor: theme.alert.bg.warn,
    },

    '&.error': {
      backgroundColor: theme.alert.bg.error,
    },
  },
);

export default style;
