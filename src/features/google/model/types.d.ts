namespace USERLOGIN {
  type GetUserRes = IToken;
  type GetUserReq = ILoginUser;
}

interface GoogleLoginReq {
  id_token: string;
}
