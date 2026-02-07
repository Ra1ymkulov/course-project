namespace USERLOGIN {
  type GetUserRes = IToken;
  type GetUserReq = ILoginUser;
}
interface ILoginUser {
  email: string;
  password: string;
}
