export interface Message {
  id: string;
  text: string;
  userId: string;
  chatId: string;
  createdAt: string;
  user: User;
}

export interface GroupUser {
  id: string;
  chatId: string;
  userId: string;
  user: User;
}

export interface Chat {
  id: string;
  title: string;
  avatar?: string | null;
  isGroup: boolean;
  createdAt: string;
  users: GroupUser[];
  messages: Message[];
}
