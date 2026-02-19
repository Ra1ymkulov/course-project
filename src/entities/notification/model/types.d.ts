namespace Notification {
  type Item = {
    id: number;
    userId: string;
    message: string;
    read: boolean;
    createdAt: string;
  };

  type GetNotificationsRes = Item[];

  type GetNotificationsReq = { userId: string };
}

namespace NotificationById {
  type GetOneNotification = {
    id: number;
    userId: string;
    message: string;
    read: boolean;
    createdAt: string;
  };
}
