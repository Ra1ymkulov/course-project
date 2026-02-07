interface User {
  id: string;
  avatar: string;
  banner: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  country: string;
  notifications: Notifications[];
}
enum UserRole {
  ADMIN = "ADMIN",
  CLIENT = "CLIENT",
}
