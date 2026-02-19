namespace Read {
  type GetReadReq = {
    id: number;
    userId: string;
    message: string;
    read: boolean;
  };
  type GetReadRes = {
    id: number;
  };
}
