interface Notifications {
  id: string;
  userId: string;
  orderId: string;
  message: string;
  read: false;
  order: OrderUser;
  createdAt: Date;
}
