import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const Home = loadable(() => import(/* webpackPrefetch: true */ './home'));
const Register = loadable(() => import(/* webpackPrefetch: true */ './register'));
const Login = loadable(() => import(/* webpackPrefetch: true */ './login'));
const ForgotPassword = loadable(() => import(/* webpackPrefetch: true */ './forgotPassword'));
const VerifyPassword = loadable(() => import(/* webpackPrefetch: true */ './verifyPassword'));

const Pages: React.FC<{}> = () => (

  <Switch>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
    <Route path="/forgot">
      <ForgotPassword />
    </Route>
    <Route path="/verify">
      <VerifyPassword />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>

);

export default Pages;
