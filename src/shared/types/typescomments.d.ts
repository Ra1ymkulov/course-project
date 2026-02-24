interface Comment {
  id: string;
  text: string;
  timestamp: number;
  userId: string;
  videoId: number;
  createdAt: string;

  user?: User;
  video?: Video;
}
