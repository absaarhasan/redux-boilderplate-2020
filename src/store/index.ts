import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from '../reducers/index';
import { RootState } from '../reducers/types';
import sagas from '../sagas';

const initStore = (history, InitialState?: RootState): Store => {
  const reduxRouterMiddleware = routerMiddleware(history);

  const sagaMiddleware = createSagaMiddleware();

  const middleware = [sagaMiddleware, reduxRouterMiddleware];

  const store = createStore(
    createRootReducer(history),
    InitialState,
    composeWithDevTools(
      applyMiddleware(...middleware),
    ),
  );

  sagaMiddleware.run(sagas);

  return store;
};

export default initStore;
