namespace SendReview {
  type SendReviewRes = {
    newReview: {
      userId: string;
      rating: number;
      text: string;
      courseId: string;
    };
  };
  type SendReviewReq = {
    id: string;
    user: User;
    course: Course;
    userId: string;
    rating: number;
    text: string;
    courseId: string;
    createdAt: string;
  };
}
