import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { clearNotificationAction } from 'Actions/app';
import { isAuthorisedAction } from 'Actions/auth';
import { isSessionSelector } from 'Selectors/index';
import { RootState } from 'Reducers/types';
import Grid from 'Components/grid';
import { H1, P } from 'Components/format';

const Home: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const isSession = useSelector((state: RootState) => isSessionSelector(state));

  useEffect(() => {
    dispatch(isAuthorisedAction());
    return () => {
      dispatch(clearNotificationAction());
    };
  }, []);

  return (
    <Grid data-testid="home-container">
      <H1>
        Hello World
      </H1>
      {isSession ? <P>You are logged in</P> : <P>You are NOT logged in</P>}
    </Grid>
  );
};

export default Home;
