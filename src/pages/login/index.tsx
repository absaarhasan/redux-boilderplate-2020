import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearNotificationAction } from 'Actions/app';
import { loginAction, logoutAction, isAuthorisedAction } from 'Actions/auth';
import { isSessionSelector, isBusySelector } from 'Selectors/index';
import { Link } from 'react-router-dom';
import { RootState } from 'Reducers/types';
import Grid from 'Components/grid';
import {
  H1, P, Button, Input,
} from 'Components/format';

const Login: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const isSession = useSelector((state: RootState) => isSessionSelector(state));
  const isBusy = useSelector((state: RootState) => isBusySelector(state));

  useEffect(() => {
    dispatch(isAuthorisedAction());
    return () => {
      dispatch(clearNotificationAction());
    };
  }, []);

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleLoginBtn = () => {
    const formData = {
      Username: email,
      Password: password,
    };

    dispatch(loginAction(formData));
  };

  const handleLogoutBtn = () => {
    dispatch(logoutAction());
  };

  if (isSession) {
    return (
      <Grid data-testid="login-container">
        <H1 data-testid="post-login">Please sign out</H1>
        <Button
          data-testid="logout-button"
          onClick={() => {
            handleLogoutBtn();
          }}
          disabled={isBusy}
        >
          Sign out
        </Button>
      </Grid>
    );
  }
  return (
    <Grid data-testid="login-container">
      <H1 data-testid="pre-login">Please sign in</H1>
      <Input
        type="text"
        id="email"
        data-testid="email-field"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        required
      />
      <Input
        type="password"
        data-testid="password-field"
        id="inputPassword"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        name="password"
        required
      />
      <Button
        data-testid="login-button"
        onClick={() => handleLoginBtn()}
        disabled={isBusy}
      >
        Sign in
      </Button>
      <P><Link data-testid="reg-link" to="/register">Register</Link></P>
      <P><Link data-testid="forgot-link" to="/forgot">Forgot</Link></P>


    </Grid>
  );
};

export default Login;
