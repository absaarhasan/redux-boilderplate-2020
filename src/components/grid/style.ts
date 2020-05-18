import { css } from '@emotion/core';
import theme from 'Src/theme';

const style = () => css(
  theme.mq({
    display: 'grid',
    gridTemplateColumns: ['90%', '25% 25%', '25% 25% 25%'],
    gridTemplateRows: '8em',
    gridAutoRows: '3em',
    gap: '1em 1%',
    justifyContent: 'center',
    justifyItems: 'start',
  }),
);

export default style;
