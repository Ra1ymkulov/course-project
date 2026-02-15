interface Course {
  id: string;
  theme: string;
  description: string;
  title: string;
  section: any;
  bottomText: string;
  image: string;
  price: number;
  userId: string;
  createdAt: string;
  user?: User;
  lessons?: Lesson[];
  category?: string;
  favoriteCourse?: FavoriteCourse[];
}
