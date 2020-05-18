import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearNotificationAction } from 'Actions/app';
import { forgotPasswordAction, isAuthorisedAction } from 'Actions/auth';
import { isSessionSelector, isBusySelector } from 'Selectors/index';
import { push } from 'connected-react-router';
import { RootState } from 'Reducers/types';
import Grid from 'Components/grid';
import {
  H1, Button, Input,
} from 'Components/format';

const ForgotPassword: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const reDirect = (route: string) => dispatch(push(route));

  const isSession = useSelector((state: RootState) => isSessionSelector(state));
  const isBusy = useSelector((state: RootState) => isBusySelector(state));

  useEffect(() => {
    dispatch(isAuthorisedAction());
    if (isSession) {
      reDirect('/');
    }
    return () => {
      dispatch(clearNotificationAction());
    };
  }, []);

  const [email, setEmail] = useState<string>();

  const handleForgotPasswordBtn = () => {
    const data = { email };
    dispatch(forgotPasswordAction(data));
  };

  return (
    <Grid data-testid="forgot-container">

      <H1>Forgot Password</H1>
      <Input
        type="text"
        data-testid="email-field"
        id="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        required
      />
      <Button
        data-testid="submit-button"
        onClick={() => { handleForgotPasswordBtn(); }}
        disabled={isBusy}
      >
        Send Verification Code
      </Button>

    </Grid>
  );
};

export default ForgotPassword;
