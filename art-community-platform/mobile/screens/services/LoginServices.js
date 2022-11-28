import axios from "axios";

let token = "";
export const login = async (username, password) => {
  return axios
    .post(
      "http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/login",
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
      token = response.data.token;
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const signup = async (name, birthDate, username, email, password) => {
  return axios
    .post(
      "http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/signup",
      {
        name: name,
        birthdate: birthDate,
        username: username,
        password: password,
        email: email,
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
