import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearNotificationAction } from 'Actions/app';
import { verifyPasswordAction, isAuthorisedAction } from 'Actions/auth';
import { isSessionSelector, isBusySelector } from 'Selectors/index';
import { push } from 'connected-react-router';
import { RootState } from 'Reducers/types';
import Grid from 'Components/grid';
import {
  H1, Button, Input,
} from 'Components/format';

const VerifyPassword: React.FC<{}> = () => {
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
  const [code, setCode] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleVerifyPasswordBtn = () => {
    const data = {
      code,
      email,
      password,
    };

    dispatch(verifyPasswordAction(data));
  };

  return (
    <Grid data-testid="verify-container">
      <H1>Change Password</H1>
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
      <Input
        type="text"
        data-testid="code-field"
        id="code"
        placeholder="Verification Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        name="code"
        required
      />
      <Input
        type="password"
        data-testid="password-field"
        id="inputPassword"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        name="password"
        required
      />
      <Button
        data-testid="submit-button"
        onClick={() => {
          handleVerifyPasswordBtn();
        }}
        disabled={isBusy}
      >
        Change Password
      </Button>

    </Grid>
  );
};

export default VerifyPassword;
