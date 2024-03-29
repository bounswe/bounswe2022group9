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

export const getAllPosts = async (token) => {
  return axios
    .get(`http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/art-items`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

export const postAnnotation = async (
  token,
  owner,
  art_item,
  comment,
  type,
  format,
  source
) => {
  return axios
    .post(
      `http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/annotation`,
      {
        owner_id: owner,
        art_item_id: art_item,
        annotation_comment: comment,
        annotation_type: type,
        annotation_format: format,
        annotation_source: source,
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


export const getAnnotations = async (token, art_item_id) => {
  return axios
    .get(
      `http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/art-items/${art_item_id}/annotations`,
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

export const uploadArtItem = async (token, owner, base64, desc, tags, date) => {
  return axios
    .post(
      `http://ec2-44-202-130-117.compute-1.amazonaws.com/api/v1/art-item`,
      {
        owner_id: owner,
        img_base64: base64,
        description: desc,
        tags: [...tags],
        date: date,
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
