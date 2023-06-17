export type NotificationType = 'warning' | 'error' | 'success';

export type NotificationConfig = {
  type?: NotificationType;
  message: string;
};
