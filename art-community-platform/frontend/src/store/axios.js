import axios from "axios";
import { LOGIN_ENDPOINT, LOGOUT_ENDPOINT, SIGNUP_ENDPOINT } from "./urls";

export async function login(info) {
  const header = {
    headers: {
      "X-Platform": "WEB",
      accept: "*/*",
    },
  };
  const body = { username: info.username, password: info.password };
  try {
    const response = await axios.post(
      LOGIN_ENDPOINT,
      { ...body },
      { ...header }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function signup(info) {
  try {
    const header = {
      headers: {
        "X-Platform": "WEB",
        accept: "*/*",
      },
    };
    const body = {
      username: info.username,
      email: info.email,
      password: info.password,
    };
    const response = await axios.post(
      SIGNUP_ENDPOINT,
      { ...body },
      { ...header }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function logout() {
  try {
    const header = {
      headers: {
        "X-Platform": "WEB",
        accept: "*/*",
      },
    };
    const response = await axios.delete(LOGOUT_ENDPOINT, { ...header });
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}
