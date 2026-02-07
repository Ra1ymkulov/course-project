namespace USERREGISTER {
  type GetUserRes = IToken;
  type GetUserReq = INewUser;
}
interface IToken {
  token: string;
}
interface INewUser {
  avatar: string;
  fullName: string;
  userName: string;
  email: string;
  password: string;
}
