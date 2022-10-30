import {
    LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, 
    SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE, 
    LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE, 
  } from '../types'
  
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
  
  export function logoutSuccess() {
    return {
      type: LOGOUT_SUCCESS,
    };
  }
  
  export function logoutFailure(ifo) {
    return {
      type: LOGOUT_FAILURE,
    };
  }