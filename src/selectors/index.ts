import { RootState } from 'Reducers/types';
import { createSelector } from 'reselect';

export const isLoadingSelector = (state: RootState) => state.app.isLoading;
export const isBusySelector = (state: RootState) => state.app.isBusy;
export const notificationSelector = (state: RootState) => state.notifications;
export const sessionSelector = (state: RootState) => state.session;

export const isSessionSelector = createSelector(
  sessionSelector,
  (session) => !!session.sub,
);

export default null;
