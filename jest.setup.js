import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { ConnectedRouter as Router } from 'connected-react-router';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import initStore from './src/store';

const history = createMemoryHistory();

function renderWithRedux(ui, initialState) {
  const store = initStore(history, initialState);
  return {
    ...rtlRender(
      <Provider store={store}>
        <Router history={history}>{ui}</Router>
      </Provider>,
    ),
    store,
  };
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithRedux as render };
