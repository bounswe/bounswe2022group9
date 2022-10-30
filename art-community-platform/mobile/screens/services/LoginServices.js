import axios from "axios";

let token = "";
export const login = async (username, password) => {
  return axios
    .post(
      "http://ec2-44-202-130-117.compute-1.amazonaws.com/user/login",
      {
        username: username,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      token = response.body.token;
      console.log(token)
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const signup = async (username, email, password) => {
  return axios
    .post(
      "http://ec2-44-202-130-117.compute-1.amazonaws.com/user/signup",
      {
        username: username,
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
