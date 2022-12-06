import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT,
} from "../types";

const initialState = {
  username: "Guest",
  email: "",
  password: "",
  isAuthenticated: false,
  loading: false,
  token: "",
  user_id: 0
};
const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.data.token,
        user_id: action.payload.data.user_id,
        loading: false,
        isAuthenticated: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
      };
    case SIGNUP:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        username: "Guest",
        email: "",
        password: "",
      };
    case LOGOUT:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        token: "",
        user_id: 0,
      };
    default:
      return state;
  }
};

export default LoginReducer;
