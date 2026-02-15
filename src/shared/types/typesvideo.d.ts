interface Video {
  id: number;
  title: string;
  preview?: string | null;
  videoUrl: string;
  duration: number;
  lessonsId: number;
  views: number;

  lessons?: Lesson;
  comments?: Comment[];
}
