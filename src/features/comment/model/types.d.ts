namespace SendComment {
  type SendCommentReq = {
    newComment: {
      id: string;
      userId?: string;
      text: string;
      videoId: string;
    };
  };
  type SendCommentRes = {
    id: string;
    user: User;
    userId: string;
    text: string;
    videoId: string;
    createdAt: string;
  };
}
