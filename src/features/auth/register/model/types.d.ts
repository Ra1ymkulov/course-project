namespace USERREGISTER {
  type GetUserRes = IToken;
  type GetUserReq = INewUser;
}
interface IToken {
  token: string;
}
interface INewUser {
  name: string;
  email: string;
  password: string;
}
