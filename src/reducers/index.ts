import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import session from './session';
import app from './app';
import notifications from './notifications';
import entities from './entities';
import { RootState } from './types';

export default (history: History): Reducer<RootState> => combineReducers({
  router: connectRouter(history),
  app,
  notifications,
  entities,
  session,
});
