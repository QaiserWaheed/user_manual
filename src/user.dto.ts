export interface ISignup {
  username: string;
  email: string;
  password: string;
}

export interface IVerification {
  email: string;
  otp: number;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IForgotPassword {
  email: string;
  otp: number;
  newpass: string;
}
