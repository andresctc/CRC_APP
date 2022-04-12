/* eslint-disable @typescript-eslint/member-delimiter-style */

export interface Login {
  hasErrors: boolean,
  errorMessage: string,
  errorCode: number,
  ip: string,
  LoginResponse: LoginResponse
}

export interface LoginResponse {
  usuario: string,
  punto: string,
  token: string,
  sessionestado: string,
  sessionid: string
}
