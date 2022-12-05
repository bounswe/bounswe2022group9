import axios from "axios";
export const getProfile = async (userId, token) => {
  console.log(userId, token);
  return axios
    .get(
      `http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/users/${userId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
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

export const searchPosts = async (userId, token, query) => {
  return axios
    .get(
      `http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/art-items/search/${query}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
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

export const searchUsers = async (userId, token, query) => {
  return axios
    .get(
      `http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/users/search/${query}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
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

export const searchExhibitions = async (userId, token, query) => {
  return axios
    .get(
      `http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/exhibitions/search/${query}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
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
