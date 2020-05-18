import * as React from 'react';
import { loadableReady } from '@loadable/component';
import { ConnectedRouter as Router } from 'connected-react-router';
import { Provider } from 'react-redux';
import { hydrate } from 'react-dom';
import { createBrowserHistory } from 'history';
import Nav from 'Components/nav';
import Alert from 'Components/alert';
import Loader from 'Components/loader';
import { Global } from '@emotion/core';
import Pages from './pages';
import initStore from './store';
import style from './style';

const history = createBrowserHistory();
const preloadedState = window.PRELOADED_STATE;
delete window.PRELOADED_STATE;
document.getElementById('PRELOADED_STATE').remove();
const store = initStore(history, preloadedState);

const App: React.FC<{}> = () => (
  <>
    <Provider store={store}>
      <Global styles={style} />
      <Router history={history}>
        <Nav />
        <Alert />
        <Pages />
        <Loader />
      </Router>
    </Provider>
  </>
);

const root = document.getElementById('root');

loadableReady(() => {
  hydrate(<App />, root);
});
