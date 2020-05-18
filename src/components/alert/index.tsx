import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { notificationSelector } from 'Selectors/index';
import { clearNotificationAction } from 'Actions/app';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { RootState } from 'Reducers/types';
import style from './style';

const Alert: React.FC<{}> = () => {
  const dispatch = useDispatch();

  const { msg, variant, active } = useSelector((state: RootState) => notificationSelector(state));

  const handleClose = () => {
    dispatch(clearNotificationAction());
  };

  if (active) {
    return (
      <div
        data-testid="alert-container"
        css={style}
        className={variant}
      >
        <button
          data-testid="close-btn"
          type="button"
          className="close-btn"
          onClick={() => handleClose()}
        >
          X
        </button>
        <h2 data-testid="msg">{msg}</h2>
      </div>
    );
  }
  return null;
};

export default Alert;
