namespace Review {
  type GetReviewReq = {
    id: string;
    userId: string;
    courseId: string;
    text: string;
    rating: number;
    createdAt: string;
  }[];
}
