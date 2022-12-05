import axios from "axios";

export const getArtItem = async (token, art_item_id) => {
  return axios
    .get(
      `http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/art-items/${art_item_id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
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

export const like = async (token, art_item_id, date) => {
  return axios
    .post(
      `http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/favourite`,
      {
        art_item_id: art_item_id,
        date: "2022-12-06",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
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

export const comment = async (token, art_item_id, comment_text) => {
  return axios
    .post(
      `http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/comment`,
      {
        art_item_id: art_item_id,
        text: comment_text,
        date: "2022-12-06",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
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
