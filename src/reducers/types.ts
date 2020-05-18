import { RouterState } from 'connected-react-router';

export interface AppState {
  isLoading: boolean;
  isBusy: boolean;
}

export interface EntitiesState {
  data: [];
}

export type NotificationsState = {
  active: boolean;
  variant: string;
  msg: string;
}

export interface SessionState {
  sub: string;
  email_verified: string;
  name: string;
  email: string;
}

export type RootState = {
  router: RouterState;
  app: AppState;
  notifications: NotificationsState;
  entities: EntitiesState;
  session: SessionState;
}
