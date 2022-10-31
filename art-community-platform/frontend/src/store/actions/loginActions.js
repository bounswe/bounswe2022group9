import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT,
} from "../types";

export function login(info) {
  return {
    type: LOGIN,
    payload: info,
  };
}

export function loginSuccess(info) {
  return {
    type: LOGIN_SUCCESS,
    payload: info,
  };
}

export function loginFailure(info) {
  return {
    type: LOGIN_FAILURE,
    payload: info,
  };
}

export function signup(info) {
  return {
    type: SIGNUP,
    payload: info,
  };
}

export function signupSuccess(info) {
  return {
    type: SIGNUP_SUCCESS,
    payload: info,
  };
}

export function signupFailure() {
  return {
    type: SIGNUP_FAILURE,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
