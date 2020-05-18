import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import style from './style';

type GridProps = {
  ['data-testid']? : string;
}

const Grid: React.FC<GridProps> = (props) => {
  const { children } = props;
  return (
    <div
      css={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default Grid;
