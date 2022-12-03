import axios from "axios";
export const getProfile = async (userId, token) => {
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

export const getFollowers = async (userId, token) => {
  return axios
    .get(
      `http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/users/${userId}/followers`,
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

export const getFollowees = async (userId, token) => {
  return axios
    .get(
      `http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/users/${userId}/followings`,
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

export const getLikedUsers = async (token, art_item_id) => {
  return axios
    .get(
      `hhttp://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/art-items/${art_item_id}/favourites`,
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