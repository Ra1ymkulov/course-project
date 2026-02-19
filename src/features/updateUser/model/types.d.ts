namespace UPDATEPROFILE {
  type GetUserRes = {
    id: string;
    avatar: string;
    banner: string;
    name: string;
    email: string;
    country: string;
  };
  type GetUserReq = {
    id: string;
    update: {
      name: string;
      avatar: string;
      banner: string;
      email: string;
      country: string;
    };
  };
}
