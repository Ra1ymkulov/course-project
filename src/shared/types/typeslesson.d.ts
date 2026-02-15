interface Lesson {
  id: number;
  title: string;
  courseId: string;

  videos?: Video[];
  course?: Course;
}
