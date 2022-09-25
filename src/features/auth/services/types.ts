export type SignInRequestPayload = {
  email: string;
  password: string;
};

export type SignInSuccessPayload = {};
export type SignInFailurePayload = {};

export type SignUpRequestPayload = {
  email: string;
  password: string;
};

export type SignUpSuccessPayload = {};
export type SignUpFailurePayload = {};
