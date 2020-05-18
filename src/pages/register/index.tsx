import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearNotificationAction } from 'Actions/app';
import { registerAction, isAuthorisedAction } from 'Actions/auth';
import { push } from 'connected-react-router';
import { isSessionSelector, isBusySelector } from 'Selectors/index';
import { RootState } from 'Reducers/types';
import Grid from 'Components/grid';
import {
  H1, Button, Input,
} from 'Components/format';

const Register: React.FC<{}> = () => {
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

  const [userName, setUserName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();

  const handleButton = () => {
    const formData = {
      userNameObj: {
        Name: 'name',
        Value: userName,
      },
      emailObj: {
        Name: 'email',
        Value: email,
      },
      email,
      password,
    };

    dispatch(registerAction(formData));
  };

  return (
    <Grid data-testid="reg-container">
      <H1>Register an Account</H1>

      <Input
        type="text"
        data-testid="userName-field"
        id="userName"
        placeholder="Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        pattern=".*"
        required
      />
      <Input
        type="email"
        data-testid="email-field"
        id="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        pattern=".*"
        required
      />
      <Input
        type="password"
        data-testid="password-field"
        id="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        pattern=".*"
        required
      />
      <Input
        type="password"
        data-testid="confirm-password-field"
        id="confirmationpassword"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        pattern=".*"
        required
      />
      <Button
        id="mainbutton"
        data-testid="submit-button"
        onClick={() => handleButton()}
        disabled={isBusy}
      >
        Register
      </Button>
    </Grid>
  );
};

export default Register;
