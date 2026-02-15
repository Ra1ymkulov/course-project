interface FavoriteCourse {
  id: number;
  userId: string;
  courseId: string;
  createdAt: string;
  user?: User;
  course?: Course;
}
