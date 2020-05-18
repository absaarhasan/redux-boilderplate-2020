export interface Notification {
  active: boolean;
  variant: string;
  msg: string;
}

export const setNoticeData = (variant: string, msg: string): Notification => ({
  active: true,
  variant,
  msg,
});

export default null;
