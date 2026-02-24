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
  course: Course[];
  comments: Comments[];
  favoriteCourse: FavoriteCourse[];
}
interface Users {
  id: string;
  avatar: string;
  banner: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  country: string;
  notifications: Notifications[];
  course: Course[];
  comments: Comments[];
  favoriteCourse: FavoriteCourse[];
}
enum UserRole {
  OWNER = "OWNER",
  STUDENT = "STUDENT",
}
