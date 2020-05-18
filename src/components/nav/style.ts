import { css } from '@emotion/core';
import theme from 'Src/theme';

const style = () => css(
  {
    backgroundColor: theme.bg.nav,
    ul: {
      margin: 0,
      padding: 0,
      listStyleType: 'none',
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      li: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '100%',
        flex: 1,
        a: {
          textAlign: 'center',
          color: theme.tx.nav,
          padding: '0.5em',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
  },
);

export default style;
