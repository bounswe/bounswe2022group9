import * as loginAction from "../store/actions/loginActions";
import { login, signup, users } from "../store/axios";
export const Login = async (info, dispatch) => {
  dispatch(loginAction.login(info));
  const response = await login(info);
  if (response.status === 200) {
    dispatch(loginAction.loginSuccess(response));
  } else {
    dispatch(loginAction.loginFailure({ email: "", password: "" }));
  }
  return response
};

export const Logout = async (info, dispatch) => {
  dispatch(loginAction.logout());
};

export const Signup = async (info, dispatch) => {
  dispatch(loginAction.signup(info));
  const response = await signup(info);
  if (response.status === 201) {
    dispatch(loginAction.signupSuccess(info));
  } else {
    dispatch(loginAction.signupFailure());
  }
  return response
};

export const Homepage = (info) => {
  

  const response = users(info);
  return response
};