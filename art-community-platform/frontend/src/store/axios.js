import axios from "axios";
import { LOGIN_ENDPOINT, SIGNUP_ENDPOINT } from "./urls";

export async function login(info) {
  console.log("response");
  try {
    const response = await axios.post(
      LOGIN_ENDPOINT,
      {
        username: info.username,
        password: info.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
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
    const response = await axios.post(
      SIGNUP_ENDPOINT,
      {
        username: info.username,
        email: info.email,
        password: info.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
}
