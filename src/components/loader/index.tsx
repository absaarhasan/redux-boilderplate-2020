
/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { isLoadingSelector } from 'Selectors/index';
import { RootState } from 'Reducers/types';
import style from './style';

const Loader: React.FC<{}> = () => {
  const isLoading = useSelector((state: RootState) => isLoadingSelector(state));

  if (isLoading) {
    return (
      <div
        css={style}
        data-testid="loader-container"
      >
        <p>Loading ...</p>
      </div>
    );
  }
  return null;
};

export default Loader;
